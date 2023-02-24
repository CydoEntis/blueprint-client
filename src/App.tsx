import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from "@/pages/dashboard";
import Error from "@/pages/error/Error";
import LoginPage from "./pages/login/LoginPage";
import ProjectsPage from "@/pages/projects/ProjectsPage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RegisterPage from "./pages/register/RegisterPage";
import Root from "@/routes/Root";
import TaskPage from "@/pages/task/TaskPage";
import TasksPage from "@/pages/task/TasksPage";
import CreateProjectPage from "./pages/projects/CreateProjectPage";
import JobsPage from "./pages/jobs/JobsPage";
import AddJobPage from "./pages/jobs/AddJobPage";
import EditJobPage from "./pages/jobs/EditJobPage";

type Props = {};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Root />
      </ProtectedRoutes>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "jobs",
        element: <JobsPage />,
      },
      {
        path: "add-job",
        element: <AddJobPage />,
      },
      {
        path: "jobs/:jobId",
        element: <EditJobPage />,
      }

    ],
  },
]);

const App = (props: Props) => {
  return (
    <div className="h-full w-full bg-white">
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoutes>
              <Root />
            </ProtectedRoutes>}
          >
            <Route index element={<Dashboard />}/>
            <Route path="jobs" element={<JobsPage />}/>
            <Route path="add-job" element={<AddJobPage />}/>
            <Route path="profile" element={<AddJobPage />}/>
          </Route>
          <Route path="login" element={<LoginPage />}/>
          <Route path="register" element={<RegisterPage />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter> */}
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
