import React, { Fragment } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

// pages
import InsightsPage from '../pages/InsightsPage';
import TransactionsPage from '../pages/TransactionsPage';
import SendMoneyPage from '../pages/SendMoneyPage';
import CardsPage from '../pages/CardsPage';
import AccountsPage from '../pages/AccountsPage';
import GetCashPage from '../pages/GetCashPage';
import SettingsPage from '../pages/SettingsPage';
import KycPage from '../pages/KycPage';
import TransactionPage from '../pages/TransactionPage';
// import SignInPage from '../pages/SignInPage';

// components
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
// import PrivateRoute from './PrivateRoute';

// antd
import { Layout } from 'antd';

const { Content } = Layout;

const DashboardRoutes = () => {
  return (
    <Fragment>
      <Sidebar />
      <Layout style={{ marginLeft: 200 }}>
        <Content
          style={{
            margin: '24px 24px 0',
            overflow: 'initial',
            minHeight: '90vh',
          }}
        >
          <Switch>
            <Route exact path="/" element={<InsightsPage />} />
            <Route
              exact
              path="/transactions"
              element={<TransactionsPage />}
            />
            <Route
              exact
              path="/send-money"
              element={<SendMoneyPage />}
            />
            <Route exact path="/cards" element={<CardsPage />} />
            <Route
              exact
              path="/accounts"
              element={<AccountsPage />}
            />
            <Route exact path="/get-cash" element={<GetCashPage />} />
            <Route
              exact
              path="/settings"
              element={<SettingsPage />}
            />
            <Route exact path="/kyc" element={<KycPage />} />
            <Route
              exact
              path="/transaction"
              element={<TransactionPage />}
            />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default DashboardRoutes;
