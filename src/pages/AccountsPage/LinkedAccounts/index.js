import React from 'react';

// antd
import { Row, Col, Card, Table, Button } from 'antd';

const columns = [
  {
    title: 'Linked Accounts',
    dataIndex: 'linkedAccounts',
    key: 'linkedAccounts',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
  },
];

const accountsData = [
  {
    id: '1',
    linkedAccounts: 'Wells Fargo **0987',
    balance: '$80,000.00',
  },
  {
    id: '2',
    linkedAccounts: 'Western Union **0123',
    balance: '$30,000.00',
  },
];

const LinkedAccounts = () => {
  return (
    <div>
      <Card
        title="Linked Accounts"
        extra={<Button>Link External Account</Button>}
        bordered={false}
      >
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

export default LinkedAccounts;
