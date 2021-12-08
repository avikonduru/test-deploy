import React, { useState } from 'react';

// antd
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Select,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const InternationalTransfer = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('true');

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <div>
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <Title level={4}>International Wire</Title>
          <Text type="secondary">
            This is for payments to the companies and individuals
            located outside of the US
          </Text>
        </Col>
      </Row>

      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              requiredMarkValue: requiredMark,
            }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
          >
            <Form.Item
              label="Account Holder Name"
              required
              tooltip={{
                title:
                  'What or who is the name of the account you are trying to transfer funds to',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="Acme Corp or John Doe" />
            </Form.Item>
            <Form.Item
              label="Account Number"
              required
              tooltip={{
                title: 'What is the Account Number of this account',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="00000000000" />
            </Form.Item>
            <Form.Item
              label="Routing Number"
              required
              tooltip={{
                title: 'What is the Routing Number of this account',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="00000000000" />
            </Form.Item>
            <Form.Item
              label="Type"
              required
              tooltip={{
                title: 'Type of transactions',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Select placeholder="Select a transaction type">
                <Option value="saas subscription">
                  Saas Subscription
                </Option>
                <Option value="food and drink">Food & Drink</Option>
                <Option value="suppliers">Suppliers</Option>
                <Option value="travel">Travel</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Description"
              tooltip={{
                title: 'Description of this transaction',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input.TextArea placeholder="This was for traveling to London for a business trip." />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default InternationalTransfer;
