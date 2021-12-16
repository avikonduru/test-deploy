import React, { useState } from 'react';

// antd
import { Card, Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Column, Line } from '@ant-design/charts';

const NetCashFlow = () => {
  const [graphKey, setGraphKey] = useState(0);

  const data = [
    {
      month: 'January',
      cashflow: -55000,
    },
    {
      month: 'February',
      cashflow: -30000,
    },
    {
      month: 'March',
      cashflow: 15610,
    },
    {
      month: 'April',
      cashflow: 14500,
    },
    {
      month: 'May',
      cashflow: 48000,
    },
  ];
  const columnConfig = {
    data,
    xField: 'month',
    yField: 'cashflow',
    colorField: 'cashflow',
    color: ({ month }) => {
      if (month == 'January' || month == 'February') {
        return '#F4664A';
      }
      return '#5B8FF9';
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      month: {
        alias: 'Month',
      },
      cashflow: {
        alias: 'Cash Flow',
      },
    },
  };

  const lineConfig = {
    data,
    padding: 'auto',
    xField: 'month',
    yField: 'cashflow',
    annotations: [
      {
        type: 'regionFilter',
        start: ['min', '0'],
        end: ['max', '-10000000000'],
        color: '#F4664A',
      },
    ],
  };

  const handleGraphChange = (e) => {
    console.log('click ', e.key);
    setGraphKey(e.key);
  };

  const graphMenu = (
    <Menu>
      <Menu.Item key="0" onClick={handleGraphChange}>
        Waterfall Chart
      </Menu.Item>
      <Menu.Item key="1" onClick={handleGraphChange}>
        Line Chart
      </Menu.Item>
    </Menu>
  );

  const timeMenu = (
    <Menu>
      <Menu.Item key="0">This Month</Menu.Item>
      <Menu.Item key="1">This Quarter</Menu.Item>
      <Menu.Item key="2">This Years</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Card
        title="Net Cash Flow"
        extra={
          <div>
            <Dropdown overlay={graphMenu} placement="bottomRight">
              <Button style={{ marginRight: 10 }}>
                {graphKey == 0 ? (
                  <span>Waterfall Chart</span>
                ) : (
                  <span>Line Chart</span>
                )}{' '}
                <DownOutlined />
              </Button>
            </Dropdown>
            <Dropdown overlay={timeMenu} placement="bottomRight">
              <Button>
                2022 Q1 <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        }
        bordered={false}
        style={{
          boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
        }}
      >
        {graphKey == 0 ? (
          <Column {...columnConfig} />
        ) : (
          <Line {...lineConfig} />
        )}
      </Card>
    </div>
  );
};

export default NetCashFlow;
