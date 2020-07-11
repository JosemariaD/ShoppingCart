import React, { FC } from "react";
import { FundOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import { Row, Col } from "antd";
const { Header } = Layout;
const { Text, Paragraph } = Typography;

const NavBar: FC = () => {
  return (
    <Header className="header" style={{ backgroundColor: "White" }}>
      <Row>
        <Col flex="300px">Order Online Call Us (+234) 9038997114</Col>
        <Col flex="auto">
          <Text copyable style={{ float: "right" }}>
            <FundOutlined />
            Cart 0
          </Text>
        </Col>
      </Row>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Services</Menu.Item>
        <Menu.Item key="3">Contact us</Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
