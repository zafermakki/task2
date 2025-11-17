import { createBrowserRouter } from "react-router";
import HomePage from "../components/home/HomePage";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";
import ForgetPassword from "../components/auth/forgetPassword/ForgetPassword";
import Dashboard from "../components/dashboard/Dashboard";
import BasicInterface from "../components/basicInterface/BasicInterface";

import ProtectedRoute from "../protectedRoute/ProtectedRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/forget-password",
        element: <ForgetPassword />
    },
    {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    
      {
        path: "/basic-interface",
        element: (
          <ProtectedRoute allowedRoles={["user", "admin"]}>
            <BasicInterface />
          </ProtectedRoute>
        ),
      },

])