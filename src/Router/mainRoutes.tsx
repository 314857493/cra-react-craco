import Index from "@/page/index";
import Cats from "@/page/Main/Cats";
import TestPage from "@/page/TestPage";
import type { MyRoute } from "./types";

const routes: MyRoute[] = [
  {
    path: "overview",
    Component: Index,
    title: "概览",
    name: "index",
    requireAuth: false,
  },
  {
    path: "TestPage",
    Component: TestPage,
    title: "测试页",
    name: "testPage",
    requireAuth: false,
  },
  {
    path: "cats",
    title: "猫猫管理",
    name: "cats",
    children: [
      {
        path: "cats/catsList",
        Component: Cats,
        title: "猫猫列表",
        name: "cats.catsList",
      },
    ],
  },
];

export default routes;
