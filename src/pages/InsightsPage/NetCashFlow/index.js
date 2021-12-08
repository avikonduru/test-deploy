import React from 'react';

// antd
import { Card, Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

// Chartjs
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];

const graphDatapoints = labels.map(() =>
  faker.datatype.number({ min: -1000, max: 1000 }),
);

const datapointColors = graphDatapoints.map((graphDatapoint) =>
  graphDatapoint >= 0
    ? 'rgba(53, 162, 235, 0.5)'
    : 'rgba(255, 99, 132, 0.5)',
);

export const data = {
  labels,
  datasets: [
    {
      label: 'Net Cash Flow',
      data: graphDatapoints,
      backgroundColor: datapointColors,
    },
  ],
};

const menu = (
  <Menu>
    <Menu.Item>This Month</Menu.Item>
    <Menu.Item>This Quarter</Menu.Item>
    <Menu.Item>This Years</Menu.Item>
  </Menu>
);

const NetCashFlow = () => {
  return (
    <div>
      <Card
        title="Waterfall Net Cash Flow"
        extra={
          <Dropdown overlay={menu} placement="bottomRight">
            <Button>
              2022 Q1 <DownOutlined />
            </Button>
          </Dropdown>
        }
        bordered={false}
        style={{
          boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
        }}
      >
        <Bar options={options} data={data} />
      </Card>
    </div>
  );
};

export default NetCashFlow;
