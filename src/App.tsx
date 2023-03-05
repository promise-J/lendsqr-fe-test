import React from "react";
import "./App.scss";
import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./pages/dashboard/DashboardLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Navigate to={"/login"} replace />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <h1>Not found</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
