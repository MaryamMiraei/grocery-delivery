import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Products from "./pages/Products";
import Deals from "./pages/Deals";
import LoginLayout from "./layouts/LoginLayout";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/deals",
        Component: Deals,
      },
    ],
  },
  {
    Component: LoginLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
