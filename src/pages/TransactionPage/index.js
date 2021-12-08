import React from 'react';
import { useNavigate } from 'react-router-dom';

// antd
import {
  Row,
  Col,
  PageHeader,
  Button,
  Card,
  Typography,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Text } = Typography;

const TransactionPage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/send-money');
  };

  const handleBack = () => {
    navigate('/transactions');
  };

  return (
    <div>
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <PageHeader
            onBack={handleBack}
            title="Transaction"
            subTitle="ID:1234567890"
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
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <Card title="Details" bordered={false}>
            <Row gutter={24} style={{ marginBottom: 10 }}>
              <Col span={8}>
                ID: <Text strong>1234567890</Text>
              </Col>
              <Col span={8}>
                Date:{' '}
                <Text strong>
                  7:06 AM Friday, December 3, 2021 (PST)
                </Text>
              </Col>
              <Col span={8}>
                Amount: <Text strong>$1,000.00</Text>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginBottom: 10 }}>
              <Col span={8}>
                Type: <Text strong>Saas Subscription</Text>
              </Col>
              <Col span={8}>
                Company: <Text strong>Slack</Text>
              </Col>
              <Col span={8}>
                Description:{' '}
                <Text strong>This is a Slack Saas payment</Text>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginBottom: 10 }}>
              <Col span={8}>
                Cashback: <Text strong>2%, $17</Text>
              </Col>
              <Col span={8}>
                Transfer Type: <Text strong>International Wire</Text>
              </Col>
              <Col span={8}>
                Transfer Direction: <Text strong>Outgoing</Text>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginBottom: 10 }}>
              <Col span={8}>
                Receipt:{' '}
                <Upload>
                  <Button icon={<UploadOutlined />}>
                    Click to Upload
                  </Button>
                </Upload>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TransactionPage;
