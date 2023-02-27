import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "@/pages/dashboard";
import Error from "@/pages/error/Error";
import LoginPage from "./pages/login/LoginPage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RegisterPage from "./pages/register/RegisterPage";
import Root from "@/routes/Root";
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
    errorElement: <Error to="/" text="Return home" />,
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
