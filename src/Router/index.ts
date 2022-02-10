import type React from "react";
import RouteBox from "./RouteBox";

export interface MyRoute {
  path: string;
  Component?: JSX.Element | React.ReactNode | React.FC;
  title: string;
  name: string;
  requireAuth?: boolean;
  children?: MyRoute[];
}

export { RouteBox };
