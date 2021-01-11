import Home from "../pages/Home";

const routes = [
  {
    namePage: "Home",
    route: "/",
    component: (res) => <Home {...res} />,
    isExact: true,
  },
];

export default routes;
