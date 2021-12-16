import React, { Fragment } from 'react';

// Sub Components
import Details from './Details';
import Support from './Support';

// antd
import { Row, Col, PageHeader, Button } from 'antd';

const SettingsPage = () => {
  return (
    <Fragment>
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <PageHeader
            className="site-page-header"
            title="Settings"
            style={{ padding: 0 }}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }} gutter={24}>
        <Col span={12}>
          <Details />
        </Col>
        <Col span={12}>
          <Support />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <Button type="primary" block danger>
            Log Out
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SettingsPage;
