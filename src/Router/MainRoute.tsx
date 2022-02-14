import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./mainRoutes";
import type { MyRoute, RouteWithChild, RouteWithComponent } from "./types";
import Sider from "@/page/Main/Sider";

const generateRouter: any = (routers: MyRoute[]) => {
  return routers.map((item) => {
    if ((item as RouteWithChild).children) {
      return generateRouter((item as RouteWithChild).children);
    }
    const Component = (item as RouteWithComponent).component;
    return (
      <Route
        path={item.path}
        key={item.name}
        element={
          <Suspense fallback={<div>加载中...</div>}>
            <Component />
          </Suspense>
        }
      />
    );
  });
};
const MainRoute = () => {
  return (
    <>
      <Sider />
      <div style={{ flex: 1 }}>
        <Routes>{generateRouter(routes)}</Routes>
      </div>
    </>
  );
};

export default MainRoute;
