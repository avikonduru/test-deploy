import React from 'react';

// antd
import { Row, Col, Card, Typography, Divider } from 'antd';

const { Text } = Typography;

const KYCDetails = () => {
  return (
    <div>
      <Card
        type="inner"
        size="small"
        title="KYC Details"
        extra={<a href="#">Update KYC</a>}
        bordered={true}
      >
        <Row align="middle">
          <Col span={8}>
            <Row>
              <Col>
                <Text strong>KYC Title</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">KYC Detail</Text>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <Text strong>KYC Title</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">KYC Detail</Text>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <Text strong>KYC Title</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">KYC Detail</Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider
          style={{ marginTop: 12, marginBottom: 12 }}
          plain
        ></Divider>
        <Row align="middle">
          <Col span={8}>
            <Row>
              <Col>
                <Text strong>KYC Title</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">KYC Detail</Text>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <Text strong>KYC Title</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">KYC Detail</Text>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <Text strong>KYC Title</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">KYC Detail</Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider
          style={{ marginTop: 12, marginBottom: 12 }}
          plain
        ></Divider>
        <Row align="middle">
          <Col span={8}>
            <Row>
              <Col>
                <Text strong>KYC Title</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">KYC Detail</Text>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <Text strong>KYC Title</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">KYC Detail</Text>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <Text strong>KYC Title</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text type="secondary">KYC Detail</Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default KYCDetails;
