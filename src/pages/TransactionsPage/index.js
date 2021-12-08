import React from 'react';
import { useNavigate } from 'react-router-dom';

// antd
import { Row, Col, PageHeader, Button } from 'antd';

// Sub Elements
import TransactionMetrics from './TransactionMetrics';
import TransactionsList from './TransactionsList';

const TransactionsPage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/send-money');
  };

  return (
    <div>
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <PageHeader
            title="Transactions"
            extra={[
              <Button
                key="1"
                type="primary"
                size="large"
                style={{ borderRadius: 5 }}
                onClick={handleClick}
              >
                Send Money
              </Button>,
            ]}
            style={{ padding: 0 }}
          />
        </Col>
      </Row>
      <TransactionMetrics />
      <Row style={{ marginBottom: 20 }} gutter={24}>
        <Col span={24}>
          <TransactionsList />
        </Col>
      </Row>
    </div>
  );
};

export default TransactionsPage;
