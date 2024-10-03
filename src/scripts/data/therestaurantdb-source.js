import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant; // Mengambil data restoran dari properti "restaurant"
  }
}

export default TheRestaurantSource;
