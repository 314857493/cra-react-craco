import type React from "react";
export interface RouteWithChild {
  path: string;
  title: string;
  name: string;
  requireAuth?: boolean;
  children: MyRoute[];
}

export interface RouteWithComponent {
  path: string;
  element: React.FunctionComponent;
  title: string;
  name: string;
  requireAuth?: boolean;
}

export type MyRoute = RouteWithComponent | RouteWithChild;
