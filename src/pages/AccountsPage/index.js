import React from 'react';
import { useNavigate } from 'react-router-dom';

// antd
import { Row, Col, PageHeader, Button } from 'antd';

// Sub Elements
import AkosAccounts from './AkosAccounts';
import LinkedAccounts from './LinkedAccounts';

const AccountsPage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/send-money');
  };

  return (
    <div>
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <PageHeader
            title="Accounts"
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
          <AkosAccounts />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <LinkedAccounts />
        </Col>
      </Row>
    </div>
  );
};

export default AccountsPage;
