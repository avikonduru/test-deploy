import React from 'react';

// antd
import { Card, Form, Input, Button, Slider, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const marks = {
  1: '1 Month',
  2: '2 Months',
  3: '3 Months',
  4: '4 Months',
  5: '5 Months',
  6: '6 Months',
};

const LoanRequest = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <Card title="Loan Request">
        <Form form={form} layout="horizontal">
          <Form.Item
            label="Loan Request Amount"
            required
            tooltip="How much do you want for a loan"
          >
            <Input placeholder="100.00" />
          </Form.Item>
          <Form.Item
            label="Use of funds"
            required
            tooltip="What is your reason for using these funds"
          >
            <Input.TextArea placeholder="Pay suppliers for goods" />
          </Form.Item>
          <Form.Item
            label="Loan Request Payback Period"
            required
            tooltip="Select a payback period to pay back the loan"
          >
            <Slider
              marks={marks}
              step={null}
              defaultValue={1}
              min={1}
              max={6}
            />
          </Form.Item>
          <Form.Item
            label="Document Upload"
            tooltip="What is your reason for using these funds"
          >
            <Upload
              name="logo"
              action="/upload.do"
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>
                Click to upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary">Make Request</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoanRequest;
