import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import ProtectedRoute from "./ProtectedRoute";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import ContactUs from "../Pages/ContactUs/ContactUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../public/estates.json"),
      },
      

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/contactUs",
        element: <ProtectedRoute>
          <ContactUs></ContactUs>
        </ProtectedRoute>
      },
      {
        path: "/estates/:id",
        element: (
          <ProtectedRoute>
            <EstateDetails></EstateDetails>
          </ProtectedRoute>
        ),
        loader: () => fetch("../../public/estates.json"),
      },
      {
        path: "/updateProfile",
        element: (
          <ProtectedRoute>
            <UpdateProfile></UpdateProfile>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default routes;
