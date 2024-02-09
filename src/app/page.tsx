"use client"

import Image from "next/image";
import styles from "./page.module.css";

import { Layout, Button, Card, Col, Row } from "antd";
const { Header, Content } = Layout;

import { DownloadOutlined, AlignLeftOutlined, FilterOutlined } from '@ant-design/icons';

import LineChart from "./components/linechart";
import PieChart from "./components/piechart";

export default function Home() {
  const lineData = [
    { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
    { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
    { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
    { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
    { name: 'London', 月份: 'May', 月均降雨量: 47 },
    { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
    { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
    { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
    { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
    { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
    { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
    { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
    { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
    { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
    { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
    { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
  ];

  const pieData = [
    { item: '事例一', count: 40, percent: 0.4 },
    { item: '事例二', count: 21, percent: 0.21 },
    { item: '事例三', count: 17, percent: 0.17 },
    { item: '事例四', count: 13, percent: 0.13 },
    { item: '事例五', count: 9, percent: 0.09 },
  ];

  return (  
    <div className={styles.main}>
      <Header className={styles.header}>
        <div>App title</div>
      </Header>
      <Content className={styles.content}>
        <div className={styles.titlebar}>
          <div>Page title</div>
          <div>
            <Button icon={<DownloadOutlined />}>
              Export to PDF
            </Button>
            <Button icon={<AlignLeftOutlined />}>
              Notes
            </Button>
            <Button icon={<FilterOutlined />}>
              Filter
            </Button>
          </div>
        </div>
        <Row gutter={12}>
          <Col span={12}>
            <Card title="Chart Title">
              <LineChart data={lineData} />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Chart Title">
              <PieChart data={pieData} /> 
            </Card>
          </Col>
        </Row>
      </Content>
    </div>
  );
}
