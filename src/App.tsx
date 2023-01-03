import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Layout from "@/components/ui/Layout";
import Navbar from "@/components/nav/ProjectNav";
import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";
import { PlusIcon } from "@heroicons/react/24/solid";
import Sidebar from "./components/sidebar/Sidebar";
import Projects from "./components/projects/Projects";

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

const plusIcon = <PlusIcon className="mr-2 h-5 w-5" />;

type Props = {};

const App = (props: Props) => {
  return (
    <div className="h-full w-full bg-white">
      <Nav />
      <Projects />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
};

export default App;
