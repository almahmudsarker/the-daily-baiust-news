import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import Marquee from "react-fast-marquee";
const router = createBrowserRouter([
  {
    path: "/",
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
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
      },
    ],
  },
]);

export default router;