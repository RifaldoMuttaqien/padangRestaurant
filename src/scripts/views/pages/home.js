import TheRestaurantSource from '../../data/therestaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="content">
        <h2 class="content__heading">Restraunt Apungs</h2>
        <div id="restaurants" class="restaurants"> 
        </div>
      </div>
        `;
  },
  async afterRender() {
    const restaurant = await TheRestaurantSource.listRestaurant();
    const restrauntContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurant) => {
      restrauntContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;
