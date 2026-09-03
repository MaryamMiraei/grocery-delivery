import fruits from "../assets/fruits_vegetables-DKTFzdXr.png";
import personalCare from "../assets/personal_care-DGCwg-ZT.png";
import pantryStaples from "../assets/pantry_staples-CcPzJo59.png";
import bakery from "../assets/bakery-B-i44uip.png";
import drinks from "../assets/drinks-5Jevbc87.png";
import meatSeafood from "../assets/meat_seafood-B2LTBWqG.png";
import snacks from "../assets/snacks-Br0zj0km.png";
import frozenFoods from "../assets/frozen_foods-CJqLnA0J.png";
import babyCare from "../assets/baby_care-CoAR19dL.png";
import dairyEggs from "../assets/dairy_eggs-BM544moA.png";

export const category = [
  {
    id: crypto.randomUUID(),
    icon: fruits,
    title: "Fruits & Vegetables",
    link: "fruits-vegetables",
  },
  {
    id: crypto.randomUUID(),
    icon: personalCare,
    title: "Personal Care",
    link: "personal-care",
  },
  {
    id: crypto.randomUUID(),
    icon: pantryStaples,
    title: "Pantry Staples",
    link: "pantry-staples",
  },
  {
    id: crypto.randomUUID(),
    icon: bakery,
    title: "Bakery",
    link: "bakery",
  },
  {
    id: crypto.randomUUID(),
    icon: drinks,
    title: "Beverages",
    link: "beverages",
  },
  {
    id: crypto.randomUUID(),
    icon: meatSeafood,
    title: "Meat & Seafood",
    link: "meat-seafood",
  },
  {
    id: crypto.randomUUID(),
    icon: snacks,
    title: "Snacks",
    link: "snacks",
  },
  {
    id: crypto.randomUUID(),
    icon: frozenFoods,
    title: "Frozen Foods",
    link: "frozen-foods",
  },
  {
    id: crypto.randomUUID(),
    icon: babyCare,
    title: "Baby Care",
    link: "baby-care",
  },
  {
    id: crypto.randomUUID(),
    icon: dairyEggs,
    title: "Dairy & Eggs",
    link: "dairy-eggs",
  },
];