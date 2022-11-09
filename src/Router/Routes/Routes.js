import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/allservices',
        element: <AllServices></AllServices>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/service/:id',
        element: <Details></Details>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
    ]
  }
]);

export default router;