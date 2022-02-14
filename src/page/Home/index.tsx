import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import style from "./index.module.less";
import { Button } from "antd";

const Index: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <div className={style.main}>
      <div>首页</div>
      <Button
        onClick={() => {
          history.push("main/overview");
        }}
      >
        去概览
      </Button>
    </div>
  );
};

export default withRouter(Index);
