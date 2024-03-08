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
import UserDashboard from "./components/userDashboard/Main";
import Sidebar from "./components/userDashboard/Sidebar";
import Topbar from "./components/userDashboard/Topbar";
import Product from "./components/userDashboard/Product";
import Sale from "./components/userDashboard/Sale";
import Purchase from "./components/userDashboard/Purchase";
import Dashboard from "./components/userDashboard/Dashboard";
import Main from "./components/userDashboard/Main";

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
      ]
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
    // {
    //   path: "/user/dashboard",
    //   element: <UserDashboard />
    // },
    //user dashboard route
    {
      path: "/user/dashboard",
      element: (
        <div>
          {/* <Sidebar />
          <Topbar />
          <Outlet /> */}
          <Main />
        </div>
      ),
      children: [
        {
          path: "/user/dashboard/",
          element: <Dashboard />
        },
        {
          path: "/user/dashboard/my-product",
          element: <Product />
        },
        {
          path: "/user/dashboard/my-sale",
          element: <Sale />
        },
        {
          path: "/user/dashboard/my-purchase",
          element: <Purchase />
        },
      ],
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
