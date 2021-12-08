import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sub Elements
import Spending from './Spending';
import NetCashFlow from './NetCashFlow';

// antd
import { Row, Col, PageHeader, Button } from 'antd';

const InsightsPage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/send-money');
  };

  return (
    <div>
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <PageHeader
            title="Insights"
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
      <Row style={{ marginBottom: 20 }} gutter={24}>
        <Col span={12}>
          <Spending />
        </Col>
        <Col span={12}>
          <NetCashFlow />
        </Col>
      </Row>
    </div>
  );
};

export default InsightsPage;
