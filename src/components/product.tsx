import React, { FC } from "react";
import { FundOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography, Carousel, Divider } from "antd";
import { Row, Col } from "antd";

const { Content } = Layout;

const Product: FC = () => {
  return (
    <Content
      style={{
        padding: "0px 50px",
        margin: "10px 0px 0px 0px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Products display</h2>
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <Divider />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <Divider dashed />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
      </>
    </Content>
  );
};

export default Product;
