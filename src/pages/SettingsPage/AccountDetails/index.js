import React from 'react';

// antd
import { Row, Col, Card, Typography, Divider, Button } from 'antd';

const { Text } = Typography;

const AccountDetails = () => {
  return (
    <div>
      <Card
        type="inner"
        size="small"
        title="Account Details"
        bordered={true}
      >
        <Row align="middle" gutter={24}>
          <Col span={12}>
            <Row>
              <Col>
                <Text strong>Account Number</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">**5123</Text>
              </Col>
            </Row>
          </Col>
          <Col style={{ textAlign: 'right' }} span={12}>
            <Button type="link">Reveal</Button>
          </Col>
        </Row>
        <Divider
          style={{ marginTop: 12, marginBottom: 12 }}
          plain
        ></Divider>
        <Row align="middle" gutter={24}>
          <Col span={12}>
            <Row>
              <Col>
                <Text strong>Routing Number</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">**5123</Text>
              </Col>
            </Row>
          </Col>
          <Col style={{ textAlign: 'right' }} span={12}>
            <Button type="link">Reveal</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AccountDetails;
