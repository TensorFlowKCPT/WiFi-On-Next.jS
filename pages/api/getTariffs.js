import getTariffs from "./databaseUse";

export default async function handler(req, res) {
  const { address } = req.query;
  var key = "eedd6882-ab52-4127-a367-69e4286b00bf";
  var houseid;
  var providers = [];
  var cityName;
  try {
    // Use the 'address' parameter in your logic (e.g., fetch data)
    const response = await fetch(
      `https://catalog.api.2gis.com/3.0/items/geocode?q=${address}&key=${key}`
    );
    const data = await response.json();
    houseid = data["result"]["items"][0]["id"];
    cityName = data["result"]["items"][0]["full_name"].split(",")[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  try {
    const response = await fetch(
      `https://catalog.api.2gis.com/2.0/catalog/branch/list?building_id=${houseid}&servicing=true&servicing_group=internet&key=${key}`
    );
    const data = await response.json();
    data["result"]["items"].forEach((element) => {
      providers.push(element["name"]);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  console.log(cityName);
  console.log(providers);
  const dict = getTariffs(cityName, providers);
  console.log(dict);
  return res.json(dict);
}
