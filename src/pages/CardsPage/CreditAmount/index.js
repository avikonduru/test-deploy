import React from 'react';

// antd
import { Card, Typography } from 'antd';

const { Title } = Typography;

const CreditAmount = () => {
  return (
    <div>
      <Card title="Akos Credit" bordered={false}>
        <Title type="success" level={2}>
          $5,000.00
        </Title>
      </Card>
    </div>
  );
};

export default CreditAmount;
