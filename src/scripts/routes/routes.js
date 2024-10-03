import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Like from '../views/pages/like';
import restoFav from '../views/pages/resto-fav';

const routes = {
  '/': Home, // Default Page
  '/home': Home,
  '/resto-fav': restoFav,
  '/detail/:id': Detail,
  '/like': Like,

};

export default routes;
