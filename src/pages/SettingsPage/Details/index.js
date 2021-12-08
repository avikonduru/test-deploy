import React from 'react';

// Sub Components
import AccountDetails from '../AccountDetails';
import KYCDetails from '../KYCDetails';

// antd
import { Row, Col, Card } from 'antd';

const Details = () => {
  return (
    <div>
      <Card title="Details" bordered={false}>
        <Row style={{ marginBottom: 20 }}>
          <Col span={24}>
            <AccountDetails />
          </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col span={24}>
            <KYCDetails />
          </Col>
        </Row>
        <Row>
          <Col span={24}></Col>
        </Row>
      </Card>
    </div>
  );
};

export default Details;
