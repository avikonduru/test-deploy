import React from 'react';
import { Link } from 'react-router-dom';

// antd
import { Card, Dropdown, Button, Table, Menu, Tag } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const TransactionsList = () => {
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
      title: 'Type',
      key: 'types',
      dataIndex: 'types',
      render: (types) => <Tag key={types}>{types.toUpperCase()}</Tag>,
      filters: [
        { text: 'General', value: 'general' },
        { text: 'Saas Subscription', value: 'saasSubscription' },
        { text: 'Food & Drink', value: 'foodAndDrink' },
        { text: 'Suppliers', value: 'suppliers' },
        { text: 'Travel', value: 'travel' },
      ],
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: 'Direction',
      key: 'directions',
      dataIndex: 'directions',
      render: (directions) =>
        directions == 'incoming' ? (
          <Tag key={directions} color={'green'}>
            {directions.toUpperCase()}
          </Tag>
        ) : (
          <Tag key={directions} color={'volcano'}>
            {directions.toUpperCase()}
          </Tag>
        ),
      filters: [
        { text: 'Incoming', value: 'incoming' },
        { text: 'Outgoing', value: 'outgoing' },
      ],
    },
    {
      title: 'Cash Back',
      dataIndex: 'cashBack',
      key: 'cashBack',
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: 'More Details',
      dataIndex: 'details',
      render: (path: string) => (
        <Link to="/transaction">{path}Details</Link>
      ),
    },
  ];

  const transactionsData = [
    {
      id: '1',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'incoming',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '2',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'outgoing',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '3',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'incoming',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '4',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'incoming',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '5',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'incoming',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '6',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'outgoing',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '7',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'outgoing',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '8',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'incoming',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '9',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'incoming',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '10',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'incoming',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '11',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'outgoing',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '12',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'incoming',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '13',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'outgoing',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
    {
      id: '14',
      date: '7:06 AM Friday, December 3, 2021 (PST)',
      description: 'This is a Slack Saas payment',
      company: 'Slack',
      amount: 1000.0,
      directions: 'incoming',
      types: 'saas subscription',
      cashBack: '2%, $17',
      receipt: '1276781267126',
    },
  ];

  return (
    <div>
      <Card
        title="Transaction History"
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

export default TransactionsList;
