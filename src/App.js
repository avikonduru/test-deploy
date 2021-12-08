import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// css
import './App.css';

// Pages
import SettingsPage from './pages/SettingsPage';
import KycPage from './pages/KycPage';
import InsightsPage from './pages/InsightsPage';
import TransactionsPage from './pages/TransactionsPage';
import SendMoneyPage from './pages/SendMoneyPage';
import CardsPage from './pages/CardsPage';
import AccountsPage from './pages/AccountsPage';
import GetCashPage from './pages/GetCashPage';
import TransactionPage from './pages/TransactionPage';

// Components
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// antd
import { Layout } from 'antd';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Sidebar />
          <Layout style={{ marginLeft: 200 }}>
            <Content
              style={{
                margin: '24px 24px 0',
                overflow: 'initial',
                minHeight: '90vh',
              }}
            >
              <Routes>
                <Route
                  exact
                  path="/insights"
                  element={<InsightsPage />}
                />
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
                <Route
                  exact
                  path="/get-cash"
                  element={<GetCashPage />}
                />
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
              </Routes>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
