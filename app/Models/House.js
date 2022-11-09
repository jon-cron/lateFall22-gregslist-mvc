import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(data) {
    this.id = generateId();
    this.address = data.address;
    this.city = data.city;
    this.state = data.state;
    this.price = data.price;
    this.beds = data.beds;
    this.bath = data.bath;
    this.img = data.img;
    this.squareFt = data.squareFt;
    this.garage = data.garage;
    this.yard = data.yard;
  }
  get houseCardTemplate() {
    return `
    <div class="col-12 col-md-4 p-4">
      <div class="card">
        <img src="${this.img}" class="card-img-top img-fluid"
          alt="">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between mb-2">
            <span>${this.address} ${this.city},${this.state}</span>
            <span>$${this.price}</span>
          </h5>
          <div class="d-flex justify-content-between">
            <button onclick="app.houseController.setActiveHouse('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            See Details
            </button>
            <button onclick="app.houseController.removeHouse('${this.id}')" title="Delete car!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
