import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Layout from "@/routes/Root";

import Projects from "./pages/projects/Projects";
import Tasks from "./pages/task/Tasks";
import Root from "@/routes/Root";
import Error from "./pages/error/Error";
import Project from "./pages/projects/Project";
import Task from "./pages/task/Task";

type Props = {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <Project />,
        children: [
          {
            path: "tasks/all",
            element: <Project />,
          },
          {
            path: "tasks/in-progress",
            element: <Project />,
          },
          {
            path: "tasks/in-review",
            element: <Project />,
          },
          {
            path: "tasks/completed",
            element: <Project />,
          },
          {
            path: "tasks/bugs",
            element: <Project />,
          },
          {
            path: "tasks/past-due",
            element: <Project />,
          },
        ],
      },
      {
        path: "projects/:id/tasks/:id",
        element: <Task />,
      },
    ],
  },
]);

const App = (props: Props) => {
  return (
    <div className="h-full w-full bg-white">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

{
  /* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
              <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="projects" element={<Project />} />
            <Route path="/projects/:id" element={<Tasks />} />
            <Route path="tasks" />
            </Route>
            <Route path="projects" element={<Project />} />
            
            <Route path=":id/in-progress" element={<Project />} />
            <Route path=":id/in-review" element={<Project />} />
            <Route path=":id/completed" element={<Project />} />
            <Route path=":id/bugs" element={<Project />} />
            <Route path=":id/past-due" element={<Project />} />

            <Route path="all-jobs" element={<Stats />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter> */
}
