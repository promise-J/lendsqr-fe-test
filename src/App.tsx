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
import Users from "./pages/users/Users";
import Notfound from "./pages/notfound/Notfound";
import User from "./pages/users/User";
import "@fontsource/work-sans"

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
        },
        {
          path: 'users',
          element: <Users />
        },
        {
          path: 'user/:id',
          element: <User />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Notfound />
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
