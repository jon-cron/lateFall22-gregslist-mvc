import { CarsController } from "./Controllers/CarsController.js";
import { HouseController } from "./Controllers/House Controller.js";
// FIXME Step 6: register your controller and get your console log on your web page
class App {
  carsController = new CarsController();

  houseController = new HouseController();
}

window["app"] = new App();
