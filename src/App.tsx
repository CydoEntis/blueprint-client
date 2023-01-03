import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Layout from "@/components/ui/Layout";
import Navbar from "@/components/nav/Navbar";
import Nav from "@/components/nav/Nav";
import Header from "@/components/header/Header";
import { PlusIcon } from "@heroicons/react/24/solid";

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
    <div className="h-full w-full bg-white-600">
      <Nav />
      <Layout>
        <Header
          text="Create Task"
          icon={plusIcon}
          onClick={() => {}}
          styles="flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2 text-white drop-shadow-md"
        />
        <Navbar />
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
};

export default App;
