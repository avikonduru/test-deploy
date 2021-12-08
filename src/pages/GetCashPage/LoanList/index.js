import React from 'react';

// antd
import { Card, Table } from 'antd';

const columns = [
  {
    title: 'Date Created',
    dataIndex: 'dateCreated',
    key: 'dateCreated',
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

const loanData = [
  {
    id: '1',
    dateCreated: '7:06 AM Friday, December 3, 2021 (PST)',
    amount: '35,000.00',
    datePaidOff: '7:06 AM Friday, December 3, 2021 (PST)',
  },
  {
    id: '2',
    dateCreated: '7:06 AM Friday, December 3, 2021 (PST)',
    amount: '35,000.00',
    datePaidOff: '7:06 AM Friday, December 3, 2021 (PST)',
  },
  {
    id: '3',
    dateCreated: '7:06 AM Friday, December 3, 2021 (PST)',
    amount: '35,000.00',
    datePaidOff: '7:06 AM Friday, December 3, 2021 (PST)',
  },
  {
    id: '4',
    dateCreated: '7:06 AM Friday, December 3, 2021 (PST)',
    amount: '35,000.00',
    datePaidOff: '7:06 AM Friday, December 3, 2021 (PST)',
  },
  {
    id: '5',
    dateCreated: '7:06 AM Friday, December 3, 2021 (PST)',
    amount: '35,000.00',
    datePaidOff: '7:06 AM Friday, December 3, 2021 (PST)',
  },
  {
    id: '6',
    dateCreated: '7:06 AM Friday, December 3, 2021 (PST)',
    amount: '35,000.00',
    datePaidOff: '7:06 AM Friday, December 3, 2021 (PST)',
  },
];

const LoanList = () => {
  return (
    <div>
      <Card title="Loan List">
        <Table columns={columns} dataSource={loanData} />
      </Card>
    </div>
  );
};

export default LoanList;
