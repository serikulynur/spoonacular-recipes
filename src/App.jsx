import Category from "./components/Category";
import Search from "./components/Search";
import Cuisine from "./pages/Cuisine";
import HomePage from "./pages/HomePage";
import Main from "./pages/Main";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/cuisine',
    element: <Cuisine />
  },
  {
    path: '/cuisine/:type',
    element: <Cuisine />
  },
  {
    path: '/searched/:search',
    element: <Searched />
  },
  {
    path: '/recipe/:name',
    element: <Recipe />,
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <Search />
      <Category />
      <Main />
    </RouterProvider>
  );
}