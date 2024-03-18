import { createBrowserRouter } from "react-router-dom";
import {
  Cart,
  FavoriteProducts,
  Home,
  NotFound,
  Oauth,
  ProductDetail,
  Profile,
  Search,
} from "../pages";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "katalog/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "favorites",
        element: <FavoriteProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "/oauth",
        element: <Oauth />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
