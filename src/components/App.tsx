import React, { FC } from "react";
import "./App.css";
import { Layout } from "antd";
import NavBar from "./header";
import Banner from "./banner";
import Product from "./product";

const App: FC = () => {
  return (
    <React.Fragment>
      <Layout className="layout" style={{ backgroundColor: "White" }}>
        <NavBar />
        <Banner />
        <Product />
      </Layout>
    </React.Fragment>
  );
};

export default App;
