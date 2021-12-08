import React from 'react';

// antd
import { Row, Col, Card, Typography, Divider } from 'antd';

const { Text } = Typography;

const Support = () => {
  return (
    <div>
      <Card title="Support" bordered={false}>
        <Card
          type="inner"
          size="small"
          title="Contact Info"
          bordered={true}
        >
          <Row align="middle">
            <Col span={24}>
              <Row>
                <Col>
                  <Text strong>Email</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text type="secondary">paul@akos.com</Text>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider style={{ marginTop: 12, marginBottom: 12 }} />
          <Row align="middle">
            <Col span={24}>
              <Row>
                <Col>
                  <Text strong>Phone Number</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text type="secondary">(111)-111-1111</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Card>
    </div>
  );
};

export default Support;
