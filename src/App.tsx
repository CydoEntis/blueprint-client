import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Layout from "@/components/ui/Layout";
import Navbar from "@/components/nav/ProjectNav";
import Nav from "@/components/nav/Nav";
import Header from "@/components/header/MainHeader";
import { PlusIcon } from "@heroicons/react/24/solid";
import Sidebar from "./components/sidebar/Sidebar";
import MobileNav from "./components/nav/MobileNav";
import Project from "./components/projects/Category";
import Projects from "./pages/projects/Projects";

const plusIcon = <PlusIcon className="mr-2 h-5 w-5" />;

type Props = {};

const App = (props: Props) => {
  return (
    <div className="h-full w-full bg-white">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <Layout />
              // </ProtectedRoute>
            }
          >
            <Route index element={<Projects />} />
            {/* <Route path="all-jobs" element={<Stats />} /> */}
            {/* <Route path="add-job" element={<AddJob />} /> */}
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>
          {/* <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
