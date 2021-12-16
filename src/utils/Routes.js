import React, { Fragment } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

// pages
import SignInPage from '../pages/SignInPage';

// utils
import DashboardRoutes from './DashboardRoutes';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" element={<SignInPage />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
