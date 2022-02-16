import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.less";
import { Button } from "antd";

const Index: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className={style.main}>
      <div>首页</div>
      <Button
        onClick={() => {
          navigate("/main/overview");
        }}
      >
        去概览
      </Button>
    </div>
  );
};

export default Index;
