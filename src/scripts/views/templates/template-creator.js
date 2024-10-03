import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) =>  {
  const customerReviewsHTML = restaurant.customerReviews ? restaurant.customerReviews.map(review => `
  <div class="customer-review">
      <p><strong>${review.name}</strong></p>
      <p>${review.review}</p>
      <p><em>${review.date}</em></p>
  </div>
`).join('') : '';

return `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL.small + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
    <div class="restaurant__info">
        <h3>Information</h3>
        <h4>Description</h4>
        <p>${restaurant.description}</p>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <h4>Categories</h4>
        <ul>
            ${restaurant.categories?.map(category => `<li>${category.name}</li>`).join('')}
        </ul>
        <h4>Menus</h4>
        <p>Foods: ${restaurant.menus?.foods?.map(food => food.name).join(', ')}</p>
        <p>Drinks: ${restaurant.menus?.drinks?.map(drink => drink.name).join(', ')}</p>
       
        <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
      
  </div>
  ${customerReviewsHTML}

  `;
}




const createRestaurantListTemplate = (restaurant) => `

<div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
      src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL.small + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
    <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <p>${restaurant.description}</p>
    <p>City: ${restaurant.city}</p>
    </div>
    
  </div>

`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {createRestaurantListTemplate, createRestaurantDetailTemplate,createLikeButtonTemplate, createLikedButtonTemplate };