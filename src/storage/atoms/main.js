import { atom } from "recoil";
import { food } from "../../api/food";

export const cartItemsState = atom({
  key: "cartItemsState",
  default: [],
});
export const cartOptionsState = atom({
  key: "cartOptionsState",
  default: [
    {
      title: "Палочки",
      cartCount: 0,
      isOpen: false,
      props: "Палочки",
    },
    {
      title: "Европейские",
      cartCount: 0,
      isOpen: false,
      props: "Европейские",
    },
  ],
});
export const cartNarkinsState = atom({
  key: "cartNarkinsState",
  default: {
    title: "Салфетки",
    state: true,
  },
});
export const promocodesState = atom({
  key: "promocodesState",
  default: [
    { title: "test12345", discount: "10%", discountMath: 1.1 },
    { title: "promocode", discount: "5%", discountMath: 1.05 },
  ],
});
export const coordinatesState = atom({
  key: "coordinatesState",
  default: [],
});
export const searchItemsState = atom({
  key: "searchItemsState",
  default: [].concat(...Object.values(food)),
});
