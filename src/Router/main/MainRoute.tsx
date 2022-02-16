import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./mainRoutes";
import type { MyRoute, RouteWithChild, RouteWithComponent } from "../types";
import Sider from "@/page/Main/Sider";
import RouterWrapper from "../RouteWrapper";

const generateRouter: any = (routers: MyRoute[]) => {
  return routers.map((item) => {
    if ((item as RouteWithChild).children) {
      return generateRouter((item as RouteWithChild).children);
    }
    const { element: Element } = item as RouteWithComponent;

    return (
      <Route
        path={item.path}
        key={item.name}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <RouterWrapper element={<Element />} title={item.title} />
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
