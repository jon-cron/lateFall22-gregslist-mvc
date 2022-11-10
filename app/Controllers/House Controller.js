import { appState } from "../AppState.js";
import { houseService } from "../Services/HouseService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouse() {
  let template = "";
  appState.houses.forEach((h) => (template += h.houseCardTemplate));
  setHTML("listings", template);
}

export class HouseController {
  constructor() {
    _drawHouse();
  }

  setActiveHouse(houseId) {
    houseService.activeHouse(houseId);
  }
}
