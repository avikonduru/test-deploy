import React from 'react';

// antd
import { Row, Col, Card, Typography, Table } from 'antd';

const { Title } = Typography;

const columns = [
  {
    title: 'Akos Accounts',
    dataIndex: 'akosAccounts',
    key: 'akosAccounts',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
  },
  {
    title: 'Auto Transfer Rule',
    dataIndex: 'autoTransferRule',
    key: 'autoTransferRule',
  },
];

const accountsData = [
  {
    id: '1',
    akosAccounts: 'Checking **1234',
    balance: '$20,000.00',
    autoTransferRule: 'Set Up Rule',
  },
  {
    id: '2',
    akosAccounts: 'Charge Card **5678',
    balance: '$56,092.00',
    autoTransferRule: 'Set Up Rule',
  },
];

const AkosAccounts = () => {
  return (
    <div>
      <Card title="Akos Accounts" bordered={false}>
        <Row gutter={12} align="middle">
          <Col>
            <Title level={5}>Total Balance:</Title>
          </Col>
          <Col>
            <Title type="success" level={3}>
              $73,092.00
            </Title>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              pagination={false}
              columns={columns}
              dataSource={accountsData}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AkosAccounts;
