import { createBrowserRouter } from 'react-router-dom';

import Profile from '../pages/Profile';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import RegisterCar from '../pages/RegisterCar';
import DetailCar from '../pages/DetailCar';
import ChinhSach from '../pages/ChinhSach';
import InstructionsBookingCar from '../pages/InstructionsBookingCar';
import GeneralGuidance from '../pages/GeneralGuidance';
import GeneralPrinciples from '../pages/GeneralPrinciples';
import InformationSecurity from '../pages/InformationSecurity';
import Resolveconflic from '../pages/Resolveconflic';
import AboutMe from '../pages/AboutMe';
import RegisterCarEdit from '../pages/RegisterCarEdit';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile/:tab',
        element: <Profile />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/register_car',
        element: <RegisterCar />,
      },
      {
        path: '/manager/:id',
        element: <RegisterCarEdit />,
      },
      // {
      //   path: '/register_car_form',
      //   element: <RegisterCarForm />,
      // },
      // {
      //   path: '/about',
      //   element: <Home />,
      // },
      {
        path: '/car/:id',
        element: <DetailCar />,
      },
      {
        path: '/chinh-sach',
        element: <ChinhSach />,
      },
      {
        path: '/instructions-booking-car',
        element: <InstructionsBookingCar />,
      },
      {
        path: '/general-guidance',
        element: <GeneralGuidance />,
      },
      {
        path: '/general-principles',
        element: <GeneralPrinciples />,
      },
      {
        path: '/information-security',
        element: <InformationSecurity />,
      },
      {
        path: '/resolveconflic',
        element: <Resolveconflic />,
      },
      {
        path: '/about-me',
        element: <AboutMe />,
      },
    ],
  },
]);

export default router;
