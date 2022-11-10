class HouseService {
  activeHouse(houseId) {
    console.log("service", houseId);
  }
}

export const houseService = new HouseService();
