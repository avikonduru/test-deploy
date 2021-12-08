import React from 'react';

// antd
import { Card, Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

// Chartjs
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'left',
      display: true,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

export const data = {
  labels: [
    'Food & Drinks',
    'Saas Subscriptions',
    'Suppliers',
    'Travel',
  ],
  datasets: [
    {
      label: 'Dollars',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const menu = (
  <Menu>
    <Menu.Item>This Month</Menu.Item>
    <Menu.Item>This Quarter</Menu.Item>
    <Menu.Item>This Year</Menu.Item>
  </Menu>
);

const Spending = () => {
  return (
    <div>
      <Card
        title="Spending"
        extra={
          <Dropdown overlay={menu} placement="bottomRight">
            <Button>
              This Month <DownOutlined />
            </Button>
          </Dropdown>
        }
        bordered={false}
        style={{
          boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: 400 }}>
            <Doughnut options={options} data={data} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Spending;
