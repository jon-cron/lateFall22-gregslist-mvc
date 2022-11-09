import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(data) {
    this.id = generateId();
    this.price = data.price;
    this.beds = data.beds;
    this.bath = data.bath;
    this.img = data.img;
    this.squareFt = data.squareFt;
    this.garage = data.garage;
    this.yard = data.yard;
  }
}
