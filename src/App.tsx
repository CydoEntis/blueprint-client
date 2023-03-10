import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Root />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="add-job" element={<AddJobPage />} />
        <Route path="jobs/:jobId" element={<EditJobPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Error to="/" text="Return home" />} />
    </Route>
  )
);

const App = (props: Props) => {
  return (
    <div className="h-full w-full bg-white">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
