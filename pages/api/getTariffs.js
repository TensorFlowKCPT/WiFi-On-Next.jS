export default async function handler(req, res) {
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
