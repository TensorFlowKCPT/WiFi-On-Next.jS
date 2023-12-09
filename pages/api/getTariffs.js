export default async function handler(req, res) {
  const { address } = req.query;
  var key = "eedd6882-ab52-4127-a367-69e4286b00bf"
  var houseid
  var providers = []
  var cityName
  try {
    // Use the 'address' parameter in your logic (e.g., fetch data)
    const response = await fetch(`https://catalog.api.2gis.com/3.0/items/geocode?q=${address}&key=${key}`);
    const data = await response.json();
    houseid = data['result']['items'][0]['id']
    cityName = data['result']['items'][0]['full_name'].split(',')[0]
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  try {
    const response = await fetch(`https://catalog.api.2gis.com/2.0/catalog/branch/list?building_id=${houseid}&servicing=true&servicing_group=internet&key=${key}`);
    const data = await response.json();
    data['result']['items'].forEach(element => {
      providers.push(element['name'])
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  var dict = [
    {
      title: "Дом.Ру",
      price: "990p.",
      imageUrl: "/domru.png",
      provider: "Дом.ру",
    },
    {
      title: "Тариф Билайн",
      price: "1500p.",
      imageUrl: "/beeline.png",
      provider: "Билайн",
    },
    {
      title: "Тариф Ростелеком",
      price: "1250p.",
      imageUrl: "/rtk.png",
      provider: "Ростелеком",
    },
    {
      title: "Тариф Мегафон",
      price: "1990р.",
      imageUrl: "/megafon.png",
      provider: "Мегафон",
    },
    {
      title: "Тариф Мегафон",
      price: "1990р.",
      imageUrl: "/megafon.png",
      provider: "Мегафон",
    },
    {
      title: "Тариф Билайн",
      price: "1500p.",
      imageUrl: "/beeline.png",
      provider: "Билайн",
    },
    // Добавьте другие тарифы по аналогии
  ];
  return res.json(dict);
}
