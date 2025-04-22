import { FC } from "react";
import Dashboard from "./landing/Sections/DashboardComponent";
import Request from "../pages/Request";

interface MenuTypes {
  title: string;
  img: string;
  url: string;
  component: FC | null;
}

const menu: MenuTypes[] = [
  { title: "داشبورد", img: "/img/statistics.png", url: "/", component: Dashboard },
  { title: " درخواست ها", img: "/img/request.png", url: "/request", component: Request },
  // { title: "جست و جوی سوابق", img: "/img/search.png", url: "#", component: null },
  // { title: "لیست خدمات", img: "/img/vial.png", url: "/services", component: null },
];

export default menu;
