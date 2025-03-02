import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import MainPage from "./Pages/MainPage/MainPage";
import Leadership from "./Pages/Leadership/Leadership";
import Board from "./Pages/Board/Board";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";

// ✅ gap은 Flex/Grid에서,
// ✅ space-y는 그냥 형제 요소 간격에 깔끔하게 쓰인다.

// ✅ mx-auto를 쓰고싶다면 max-w-7xl 처럼 width크기를 지정해주어야 한다.

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // 자식요소들이 Outlet에 보여지게 된다.
      {
        index: true, // 기본경로 일경우
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/our-services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
