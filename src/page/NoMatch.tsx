import React from "react";
import { withRouter } from "react-router-dom";

const NoMatch: React.FunctionComponent = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100%",
      }}
    >
      <h1>页面404啦</h1>
    </div>
  );
};

export default withRouter(NoMatch);
