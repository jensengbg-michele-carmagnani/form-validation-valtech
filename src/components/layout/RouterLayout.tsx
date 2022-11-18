import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const RouterLayout = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Header />
        <Outlet />
      </main>
    </>
  );
};

export default RouterLayout;
