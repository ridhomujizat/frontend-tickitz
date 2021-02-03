import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgetPassword from '../pages/ForgetPassword'
import DetailMovie from '../pages/DetailMovie'
import Order from '../pages/Order'
import Payment from '../pages/Payment'
import Ticket from '../pages/Ticket'
import AdminMovie from '../pages/AdminMovie'

const routes = [
  {
    namePage: 'Admin',
    route: '/admin/1',
    component: (res) => <AdminMovie {...res} />,
    isExact: false
  },
  // {
  //   namePage: "Profile",
  //   route: "/profile",
  //   component: (res) => <Profile {...res} />,
  //   isExact: false,
  // },
  {
    namePage: 'Ticket',
    route: '/result-ticket/:id',
    component: (res) => <Ticket {...res} />,
    isExact: false
  },
  {
    namePage: 'Payment',
    route: '/payment/:id',
    component: (res) => <Payment {...res} />,
    isExact: false
  },
  {
    namePage: 'Order Movie',
    route: '/cinema-order/:id',
    component: (res) => <Order {...res} />,
    isExact: false
  },
  {
    namePage: 'Detail Movie',
    route: '/movie-detail/:slug',
    component: (res) => <DetailMovie {...res} />,
    isExact: false
  },
  {
    namePage: 'Forget Password',
    route: '/forget-password',
    component: (res) => <ForgetPassword {...res} />,
    isExact: false
  },
  // {
  //   namePage: "Sign Up",
  //   route: "/sign-up",
  //   component: (res) => <SignUp {...res} />,
  //   isExact: false,
  // },
  {
    namePage: 'login',
    route: '/login',
    component: (res) => <Login {...res} />,
    isExact: false
  },
  {
    namePage: 'Home',
    route: '/',
    component: (res) => <Home {...res} />,
    isExact: true
  }
]

export default routes
