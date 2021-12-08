import React from 'react';

// antd
import { Card, Dropdown, Button, Table, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>This Month</Menu.Item>
    <Menu.Item>This Quarter</Menu.Item>
    <Menu.Item>This Year</Menu.Item>
  </Menu>
);

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Date Paid Off',
    dataIndex: 'datePaidOff',
    key: 'datePaidOff',
  },
];

const transactionsData = [
  {
    id: '1',
    date: '7:06 AM Friday, December 3, 2021 (PST)',
    amount: '$1,000.00',
    datePaidOff: '7:06 AM Friday, December 3, 2021 (PST)',
  },
  {
    id: '2',
    date: '7:06 AM Friday, December 3, 2021 (PST)',
    amount: '$1,000.00',
    datePaidOff: '7:06 AM Friday, December 3, 2021 (PST)',
  },
  {
    id: '3',
    date: '7:06 AM Friday, December 3, 2021 (PST)',
    amount: '$1,000.00',
    datePaidOff: '7:06 AM Friday, December 3, 2021 (PST)',
  },
  {
    id: '4',
    date: '7:06 AM Friday, December 3, 2021 (PST)',
    amount: '$1,000.00',
    datePaidOff: '7:06 AM Friday, December 3, 2021 (PST)',
  },
];

const CreditHistory = () => {
  return (
    <div>
      <Card
        title="Credit History"
        extra={
          <Dropdown overlay={menu} placement="bottomRight">
            <Button>
              1 Month <DownOutlined />
            </Button>
          </Dropdown>
        }
        bordered={false}
      >
        <Table columns={columns} dataSource={transactionsData} />
      </Card>
    </div>
  );
};

export default CreditHistory;
