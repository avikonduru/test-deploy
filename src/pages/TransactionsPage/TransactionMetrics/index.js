import React from 'react';

// antd
import { Row, Col, Card, Typography } from 'antd';

const { Title } = Typography;

const TransactionsPage = () => {
  return (
    <div>
      <Row style={{ marginBottom: 20 }} gutter={24}>
        <Col span={6}>
          <Card title="Balance" bordered={false}>
            <Title type="success" level={2}>
              $76,092.00
            </Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Monthly Spend" bordered={false}>
            <Title type="success" level={4}>
              $35,390.00
            </Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Monthly Cash Back Rewards" bordered={false}>
            <Title type="success" level={4}>
              $901.90
            </Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Monthly Transactions" bordered={false}>
            <Title type="success" level={4}>
              15
            </Title>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TransactionsPage;
