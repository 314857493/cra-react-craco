import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.less";
import { RouteBox } from "./Router";

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <RouteBox />
      </Router>
    </div>
  );
};

export default App;
