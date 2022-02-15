// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "@/page/Login";
import Home from "@/page/Home";
import NoMatch from "@/page/NoMatch";
import Layout from "@/Layout";
const MainRoute = lazy(() => import("./MainRoute"));

const RouteBox = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/">
        <Route index element={<Home />} />
        <Route
          path="/main/*"
          element={
            <Layout>
              <Suspense fallback={<div>Loading...</div>}>
                <MainRoute />
              </Suspense>
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default RouteBox;
