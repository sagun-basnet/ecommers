import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Airpod from "./pages/Airpod";
import Ipad from "./pages/Ipad";
import Iphone from "./pages/Iphone";
import MacBook from "./pages/MacBook";
import Watch from "./pages/Watch";
import Loading from "./components/Loading";
import SigninForm from "./pages/SigninForm";
import SignupForm from "./pages/SignupForm";
import SingleProduct from "./components/SingleProduct";
import Checkout from "./components/Checkout";
import PostForm from "./components/forms/PostForm";
import ThankYou from "./components/ThankYou";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/iphone",
          element: <Iphone />,
        },
        {
          path: "/ipad",
          element: <Ipad />,
        },
        {
          path: "/airpod",
          element: <Airpod />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
        {
          path: "/macbook",
          element: <MacBook />,
        },
      ],
    },
    {
      path: "/signin",
      element: <SigninForm />,
    },
    {
      path: "/signup",
      element: <SignupForm />,
    },
    {
      path: "/product/:pid",
      element: <SingleProduct />
    },
    {
      path: "/product/checkout/:pid",
      element: <Checkout />
    },
    {
      path: "/post",
      element: <PostForm />
    },
    {
      path: "/finished/:pid",
      element: <ThankYou />
    },
  ]);
  return (
    <div className="App">
      {/* <Loading /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
