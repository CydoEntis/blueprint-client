import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "@/routes/Root";
import Error from "@/pages/error/Error";
import TaskPage from "@/pages/task/TaskPage";
import ProjectsPage from "@/pages/projects/ProjectsPage";
import TasksPage from "@/pages/task/TasksPage";
import Dashboard from "@/pages/dashboard";
import Authentication from "@/pages/authentication";

type Props = {};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "projects/:id/tasks",
        element: <TasksPage />,
      },
      {
        path: "projects/:id/tasks/:id",
        element: <TaskPage />,
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
