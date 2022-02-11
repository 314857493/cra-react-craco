import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import routes from "./mainRoutes";
import Layout from "@/Layout";
import Sider from "@/page/Main/Sider";
import type { MyRoute } from "./types";

const MainRoute = () => {
  const match = useRouteMatch();
  const filteRoute = (route: MyRoute): JSX.Element | JSX.Element[] => {
    const { Component } = route;
    if (route.children) {
      return route.children.map(filteRoute) as JSX.Element | JSX.Element[];
    }
    return (
      <Route
        key={route.path}
        path={`${match.path}/${route.path}`}
        exact
        render={(props) => {
          document.title = route.title;
          return <Component {...props} />;
        }}
      />
    );
  };
  return (
    <Layout>
      <Sider />
      <div style={{ flex: 1 }}>
        <Switch>{routes.map(filteRoute)}</Switch>
      </div>
    </Layout>
  );
};

export default MainRoute;
