import React from 'react';

// antd
import { Layout, Row, Col, Typography, Button } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';

// auth0
import { useAuth0 } from '@auth0/auth0-react';

const { Content } = Layout;
const { Title, Text } = Typography;

const SignInPage = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    logout,
    user,
    isLoading,
  } = useAuth0();

  return (
    <div>
      <Content
        style={{
          minHeight: '100vh',
        }}
      >
        <Row style={{ minHeight: '100vh' }}>
          <Col
            span={9}
            style={{
              backgroundColor: '#211D1E',
              color: 'white',
              padding: 20,
            }}
          >
            <Row>
              <Col span={24}>
                <Title
                  level={3}
                  style={{
                    color: 'white',
                    margin: 0,
                    marginLeft: 10,
                  }}
                >
                  Akos
                </Title>
              </Col>
            </Row>

            <Row style={{ textAlign: 'center', marginTop: '50%' }}>
              <Col span={24}>
                <div>
                  <Title
                    style={{ color: 'white', fontWeight: 'bolder' }}
                  >
                    A business account that gives
                  </Title>
                </div>

                <div>
                  <Text style={{ color: 'white' }}>
                    $0 international wires, $0 ACH, cash back, and
                    faster loans
                  </Text>
                  {isAuthenticated &&
                    !isLoading &&
                    console.log(JSON.stringify(user))}
                </div>

                <div style={{ marginTop: 20 }}>
                  <Button
                    size="large"
                    shape="round"
                    ghost
                    style={{ borderRadius: 5 }}
                  >
                    Contact Us <CustomerServiceOutlined />
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={15} style={{ color: '#211D1E', padding: 20 }}>
            <Row style={{ marginTop: '32%', marginLeft: 40 }}>
              <Col span={24}>
                <div>
                  <Title
                    style={{ color: '#211D1E', fontWeight: 'bolder' }}
                  >
                    Welcome to Akos
                  </Title>
                </div>
                <div>
                  <Title
                    level={3}
                    type="secondary"
                    style={{ fontWeight: 'bolder' }}
                  >
                    Sign in continue
                  </Title>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Button
                    type="primary"
                    size="large"
                    onClick={() =>
                      !isAuthenticated
                        ? loginWithRedirect()
                        : logout()
                    }
                    style={{
                      borderRadius: 5,
                      backgroundColor: '#211D1E',
                      borderColor: '#211D1E',
                    }}
                  >
                    Sign In
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default SignInPage;
