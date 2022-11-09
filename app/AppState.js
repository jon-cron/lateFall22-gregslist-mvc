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
      bed: 3,
      bath: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6Vu_WdJ1ixWBDMw01hMh0IjwY4-A4C9Dew&usqp=CAU",
      squareFt: 2500,
      garage: "yes",
      yard: "yas",
    }),
  ];

  // NOTE this does denote what is stored in this collection, but it also gives us intellisense in our code
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState("cars", [Car]);
  /** @type {import('./Models/Car').Car|null} */
  activeCar = null;
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
