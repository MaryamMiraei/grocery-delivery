import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Products from "./pages/Products";
import Deals from "./pages/Deals";
import LoginLayout from "./layouts/LoginLayout";
import Login from "./pages/Login";
import ProductSelected from "./pages/ProductSelected";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
const client = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:60_000,

    }
  }
});


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
        children:[
          {
            path: ":id",
            Component: ProductSelected
          }
        ]
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
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
