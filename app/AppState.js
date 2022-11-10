import { Car } from "./Models/Car.js";
import { House } from "./Models/House.js";
import { Value } from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

// FIXME Step 2: set up a place to store our data

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", [Value]);

  houses = [
    new House({
      price: 400000,
      address: "123 Madeup St.",
      city: "Boise",
      state: "ID",
      bed: 3,
      bath: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6Vu_WdJ1ixWBDMw01hMh0IjwY4-A4C9Dew&usqp=CAU",
      squareFt: 2500,
      garage: "yes",
      yard: "yes",
    }),
    new House({
      price: 450000,
      address: "124 Madeup St.",
      city: "Boise",
      state: "ID",
      bed: 4,
      bath: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIr_gA0lmSTCpuimRX_14aK7mD1VGeLTuw_g&usqp=CAU",
      squareFt: 2600,
      garage: "no",
      yard: "no",
    }),
  ];

  // NOTE this does denote what is stored in this collection, but it also gives us intellisense in our code
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState("cars", [Car]);
  /** @type {import('./Models/Car').Car|null} */
  activeCar = null;
  activeHouse = null;
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
