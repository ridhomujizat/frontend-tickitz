import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";

const routes = [
  {
    namePage: "Forget Password",
    route: "/forget-password",
    component: (res) => <ForgetPassword {...res} />,
    isExact: false,
  },
  {
    namePage: "Sign Up",
    route: "/sign-up",
    component: (res) => <SignUp {...res} />,
    isExact: false,
  },
  {
    namePage: "login",
    route: "/login",
    component: (res) => <Login {...res} />,
    isExact: false,
  },
  {
    namePage: "Home",
    route: "/",
    component: (res) => <Home {...res} />,
    isExact: true,
  },
];

export default routes;
