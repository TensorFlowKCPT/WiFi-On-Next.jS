const knex = require("knex");

export default async function handler(req, res) {
  const { address } = req.query;
  const key = "eedd6882-ab52-4127-a367-69e4286b00bf";
  let houseId;
  var providers = [];
  let cityName;
  if(address.includes(",")){
    try {
      const response = await fetch(
        `https://catalog.api.2gis.com/3.0/items/geocode?q=${address}&key=${key}`
      );
      const data = await response.json();
      houseId = data["result"]["items"][0]["id"];
      cityName = data["result"]["items"][0]["full_name"].split(",")[0];
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
  
    try {
      const response = await fetch(
        `https://catalog.api.2gis.com/2.0/catalog/branch/list?building_id=${houseId}&servicing=true&servicing_group=internet&key=${key}`
      );
      const data = await response.json();
      data["result"]["items"].forEach((element) => {
        providers.push(element["name"]);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
  }
  else{
    cityName = address
    providers = 'all'
  }
  console.log(cityName)
  const dict = await getTariffs(cityName, providers);
  if(dict.length==0){
    //Здесь должна быть ошибка мол нету
  }
  return res.json(dict);
}

async function getTariffs(city, providerNames) {
  const config = {
    client: "sqlite3",
    connection: {
      filename: "pages/api/sqlite.sqlite3",
    },
    useNullAsDefault: true,
  };

  const db = knex(config);

  try {
    const cityId = await db("Cities").where("Name", city).select("id").first();

    const allProviders = await db("Providers").select("id", "Name");
    var providerIds = []
    if(providerNames != 'all'){
    providerIds = allProviders
      .filter(provider => providerNames.toString().includes(provider.Name))
      .map(provider => provider.id);
    }
    else{
      providerIds = allProviders.map(provider => provider.id);
    }
    const tariffs = await Promise.all(
      providerIds.map(async (id) => {
        const tariff =  await db("Tariffs")
        .select(
          "Tariffs.*",
          "Providers.id as providerId",
          "Providers.Name as providerName",
          "Providers.ImageUrl as ImageUrl"
        )
        .join("Providers", "Tariffs.idProvider", "Providers.id")
        .where({
          "Tariffs.idCity": cityId.id,
          "Tariffs.idProvider": id,
        });
        return tariff;
      })
    );
    const flattenedTariffs = tariffs.flat();
    console.log(flattenedTariffs)
    return flattenedTariffs;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    await db.destroy();
  }
}

