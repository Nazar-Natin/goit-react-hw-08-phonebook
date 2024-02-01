import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
