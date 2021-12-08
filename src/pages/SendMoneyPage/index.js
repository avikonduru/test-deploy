import React, { useState } from 'react';

// Sub Components
import DomesticTransfer from './DomesticTransfer';
import InternationalTransfer from './InternationalTransfer';

// antd
import { Row, Col, PageHeader, Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

const SendMoneyPage = () => {
  const [transferType, setTransferType] = useState('domestic');

  return (
    <div>
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <PageHeader
            className="site-page-header"
            title="Send Money"
            style={{ padding: 0 }}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col span={24}>
          <Layout
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: 'white',
            }}
          >
            <Sider>
              <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setTransferType('domestic');
                  }}
                >
                  <span>ACH or Domestic Wire</span>
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setTransferType('international');
                  }}
                >
                  <span>International Wire</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content
                style={{
                  backgroundColor: 'white',
                  padding: '10px 20px 10px 20px',
                }}
              >
                {transferType == 'domestic' ? (
                  <DomesticTransfer />
                ) : (
                  <InternationalTransfer />
                )}
              </Content>
            </Layout>
          </Layout>
        </Col>
      </Row>
    </div>
  );
};

export default SendMoneyPage;
