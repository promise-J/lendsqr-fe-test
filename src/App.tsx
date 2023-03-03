import React from 'react';
import './App.scss';
import Login from './pages/Login';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Navigate to={'/login'} replace />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: "*",
      element: <h1>Not found</h1>
    }
  ])
  return (
      <RouterProvider router={router} />
  );
}

export default App;
