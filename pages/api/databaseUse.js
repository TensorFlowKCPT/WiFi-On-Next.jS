const knex = require("knex");

async function getTariffs(city, providers) {
  const config = {
    client: "sqlite3",
    connection: {
      filename: "./sqlite.sqlite3",
    },
    useNullAsDefault: true,
  };

  const db = knex(config);

  try {
    const idcity = await db("Cities").where("Name", city).select("id").first();

    const idproviders = await Promise.all(
      providers.map(async (element) => {
        const providerId = await db("Providers")
          .where("Name", element)
          .select("id")
          .first();
        return providerId ? providerId.id : null;
      })
    );

    const tariffs = await Promise.all(
      idproviders.map(async (element) => {
        const tariff = await db("Tariffs").select("*").where({
          idCity: idcity.id,
          idProvider: element,
        });
        return tariff;
      })
    );

    // Используем flatMap для объединения массивов в один
    const flattenedTariffs = tariffs.flat();

    return flattenedTariffs;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    // Закрываем подключение после выполнения запроса
    await db.destroy();
  }
}

// Вызываем функцию в контексте асинхронной функции
// (async () => {
//   try {
//     const result = await getTariffs("Тюмень", ["Ростелеком", "МТС"]);
//     console.log(result);
//   } catch (error) {
//     console.error("Error in main code:", error);
//   }
// })();
