import FavoriteRestaurantDb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return ` 
    <div class="content">
    <h2 class="content__heading">Daftar Menu Fav</h2>
    <div id="restaurants" class="restaurants">
 
      </div>
    </div>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurantContainer.innerHTML = '';

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML = createRestaurantListTemplate(restaurant);
    });
  },
};

export default Like;
