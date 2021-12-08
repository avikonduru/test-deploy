import React from 'react';
import { Link } from 'react-router-dom';

// antd
import { Layout, Menu, Typography } from 'antd';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faCreditCard,
  faCog,
  faUserCircle,
  faMoneyBillWave,
  faHandHoldingUsd,
  faListAlt,
} from '@fortawesome/free-solid-svg-icons';

const { Sider } = Layout;
const { Title } = Typography;

const Sidebar = () => {
  return (
    <div>
      <Sider
        theme="dark"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          backgroundColor: '#1552F0',
        }}
      >
        <Title
          level={3}
          style={{
            color: 'white',
            padding: 20,
            margin: 0,
            marginLeft: 10,
          }}
        >
          Akos
        </Title>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ borderRight: 0, backgroundColor: '#1552F0' }}
        >
          <Menu.Item
            key="1"
            icon={<FontAwesomeIcon icon={faChartPie} />}
          >
            <span>Insights</span>
            <Link to="/insights" />
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<FontAwesomeIcon icon={faListAlt} />}
          >
            <span>Transactions</span>
            <Link to="/transactions" />
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<FontAwesomeIcon icon={faHandHoldingUsd} />}
          >
            <span>Send Money</span>
            <Link to="/send-money" />
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<FontAwesomeIcon icon={faCreditCard} />}
          >
            <span>Cards</span>
            <Link to="/cards" />
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<FontAwesomeIcon icon={faUserCircle} />}
          >
            <span>Accounts</span>
            <Link to="/accounts" />
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<FontAwesomeIcon icon={faMoneyBillWave} />}
          >
            <span>Get Cash</span>
            <Link to="/get-cash" />
          </Menu.Item>
          <Menu.Item key="7" icon={<FontAwesomeIcon icon={faCog} />}>
            <span>Settings</span>
            <Link to="/settings" />
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
