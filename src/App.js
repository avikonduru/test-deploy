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
  return <div>Hello World</div>;
}

export default App;
