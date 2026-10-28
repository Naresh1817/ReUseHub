import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from './App';

// Feature Pages
import { ItemBrowsePage } from '../features/items/pages/ItemBrowsePage';
import { ItemDetailPage } from '../features/items/pages/ItemDetailPage';
import { CreateItemPage } from '../features/items/pages/CreateItemPage';
import { AboutPage } from '../features/items/pages/AboutPage';
import { LoginForm } from '../features/auth/components/LoginForm';
import { RegisterForm } from '../features/auth/components/RegisterForm';
import { RequestsPage } from '../features/requests/RequestsPage';
import { DashboardPage } from '../features/dashboard/DashboardPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ItemBrowsePage />,
      },
      {
        path: 'items/:id',
        element: <ItemDetailPage />,
      },
      {
        path: 'post-item',
        element: <CreateItemPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'login',
        element: (
          <div className="py-12">
            <LoginForm />
          </div>
        ),
      },
      {
        path: 'register',
        element: (
          <div className="py-12">
            <RegisterForm />
          </div>
        ),
      },
      {
        path: 'requests',
        element: <RequestsPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

