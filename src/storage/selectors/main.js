import { selector } from "recoil";
import {
  cartItemsState,
  cartNarkinsState,
  cartOptionsState,
  coordinatesState,
  promocodesState,
  searchItemsState,
} from "../atoms/main";

export const cartItemsSelector = selector({
  key: "cartItemsSelector",
  get: ({ get }) => get(cartItemsState),
  set: ({ set }, value) =>
    set(cartItemsState, (state) => ({ ...state, value: value })), // setter example
});

export const carOptionsSelector = selector({
  key: "carOptionsSelector",
  get: ({ get }) => get(cartOptionsState),
  set: ({ set }, value) =>
    set(cartOptionsState, (state) => ({ ...state, value: value })), // setter example
});

export const cartNarkinsSelector = selector({
  key: "cartNarkinsSelector",
  get: ({ get }) => get(cartNarkinsState),
  set: ({ set }, value) =>
    set(cartNarkinsState, (state) => ({ ...state, value: value })), // setter example
});

export const promocodesSelector = selector({
  key: "promocodesSelector",
  get: ({ get }) => get(promocodesState),
  set: ({ set }, value) =>
    set(promocodesState, (state) => ({ ...state, value: value })), // setter example
});
export const coordinatesSelector = selector({
  key: "coordinatesSelector",
  get: ({ get }) => get(coordinatesState),
  set: ({ set }, value) =>
    set(promocodesState, (state) => ({ ...state, value: value })), // setter example
});
export const searchItemsSelector = selector({
  key: "searchItemsSelector",
  get: ({ get }) => get(searchItemsState),
  set: ({ set }, value) =>
    set(searchItemsState, (state) => ({ ...state, value: value })), // setter example
});
