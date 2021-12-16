import React from 'react';

// antd
import { Card, Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Pie } from '@ant-design/charts';

const data = [
  {
    type: 'Saas Subscriptions',
    value: 27,
  },
  {
    type: 'Food and Drink',
    value: 25,
  },
  {
    type: 'Travel',
    value: 18,
  },
  {
    type: 'Supplies',
    value: 15,
  },
  {
    type: 'General',
    value: 10,
  },
  {
    type: 'Other',
    value: 5,
  },
];
const config = {
  appendPadding: 10,
  data,
  angleField: 'value',
  colorField: 'type',
  radius: 1,
  innerRadius: 0.5,
  legend: {
    layout: 'horizontal',
    position: 'bottom-right',
    slidable: true,
  },
  label: {
    type: 'inner',
    offset: '-50%',
    autoRotate: false,
    content: '{value}',
    style: {
      textAlign: 'center',
      fontSize: 14,
    },
  },
  interactions: [
    {
      type: 'element-selected',
    },
    {
      type: 'element-active',
    },
  ],
  statistic: {
    title: false,
    content: {
      style: {
        whiteSpace: 'pre-wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      content: '',
    },
  },
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
            <Pie {...config} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Spending;
