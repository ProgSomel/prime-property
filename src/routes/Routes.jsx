import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('../../public/estates.json')
        },
        
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Registration></Registration>
        },
        {
          path: "/estates/:id",
          element: <EstateDetails></EstateDetails>,
          loader: () => fetch('../../public/estates.json')
        }
    ]
  },
]);





export default routes;
