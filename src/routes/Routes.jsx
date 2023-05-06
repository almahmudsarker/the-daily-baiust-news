import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import Marquee from "react-fast-marquee";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";
import About from "../pages/Home/About/About";
import Library from "../pages/Home/Library/Library";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/central_library",
        element: (
          <PrivateRoute>
            <Library></Library>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    errorElement: (
      <Marquee
        className="text-danger fw-bold position-absolute top-50 start-50 translate-middle"
        style={{ fontSize: "3rem" }}
        pauseOnHover={true}
        gradient={true}
        speed={50}
      >
        {" "}
        404 Not Found
        <small className="fw-normal">
          call the dev https://www.linkedin.com/in/almahmudsarker/
        </small>
      </Marquee>
    ),
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://the-daily-baiust-server-almahmudsarker.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-daily-baiust-server-almahmudsarker.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;