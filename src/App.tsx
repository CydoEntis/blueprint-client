import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Layout from "./components/ui/Layout";
import Navbar from "./components/nav/Navbar";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/test",
    element: <div>Hello World</div>,
  },
]);

type Props = {};

const App = (props: Props) => {
  return (
    <div className="h-full w-full bg-gradient-to-t from-[#F2F7FD] to-[#E0E4FD]">
      <Nav />
      <Layout>
        <Header />
        <Navbar />
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
};

export default App;
