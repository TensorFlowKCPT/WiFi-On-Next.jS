import { NextApiRequest, NextApiResponse } from "next";

const getIdAddress = (address: string) => {
  const quary1 = `https://catalog.api.2gis.com/3.0/items/geocode?q=${address}&fields=items.point &key=eedd6882-ab52-4127-a367-69e4286b00bf`;
  fetch(quary1)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Произошла ошибка:", error);
    });
};
