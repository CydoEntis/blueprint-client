import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Layout from "@/components/ui/Layout";

import Projects from "./pages/projects/Projects";
import Project from "./pages/projects/Project";

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
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />

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
