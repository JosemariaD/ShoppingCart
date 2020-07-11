import React, { FC } from "react";
import { FundOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography, Carousel } from "antd";
import { Row, Col } from "antd";

const { Content } = Layout;

const Banner: FC = () => {
  return (
    <Content
      style={{
        padding: "0px 50px",
        margin: "64px 0px 0px 0px",
      }}
    >
      <Row>
        <Col span={24}>
          <Carousel
            autoplay
            style={{
              backgroundColor: "#158cd1",
              padding: "160px 0px",
              height: 400,
              textAlign: "center",
            }}
          >
            <div>
              <h3 style={{ color: "white" }}>
                Special Products Available for you
              </h3>
            </div>
            <div>
              <h3 style={{ color: "white" }}>
                Best price and unbeatable quality
              </h3>
            </div>
            <div>
              <h3 style={{ color: "white" }}>
                We are Available Anywhere Anytime
              </h3>
            </div>
            <div>
              <h3 style={{ color: "white" }}>Call us and we deliver</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </Content>
  );
};

export default Banner;
