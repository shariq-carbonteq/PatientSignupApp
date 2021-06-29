import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import SignupForm from "./SignupForm/SignupForm";

const Index = () => {
  return <SignupForm />;
};

ReactDOM.render(<Index />, document.getElementById("index"));
