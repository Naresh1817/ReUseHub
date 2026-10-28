import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageContainer } from '../components/layout/PageContainer';

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar />
      <PageContainer className="flex-1">
        <Outlet />
      </PageContainer>
      <Footer />
    </div>
  );
};

