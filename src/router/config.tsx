import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/page'));
const Vision = lazy(() => import('../pages/vision/page'));
const Pillars = lazy(() => import('../pages/pillars/page'));
const Programme = lazy(() => import('../pages/programme/page'));
const Outcomes = lazy(() => import('../pages/outcomes/page'));
const Venue = lazy(() => import('../pages/venue/page'));
const Partnership = lazy(() => import('../pages/partnership/page'));
const Register = lazy(() => import('../pages/register/page'));
const Kwetu = lazy(() => import('../pages/kwetu/page'));
const LDII = lazy(() => import('../pages/ldii/page'));
const PrivacyPolicy = lazy(() => import('../pages/privacy-policy/page'));
const TermsOfUse = lazy(() => import('../pages/terms-of-use/page'));
const DisputeResolution = lazy(() => import('../pages/dispute-resolution/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/vision',
    element: <Vision />,
  },
  {
    path: '/pillars',
    element: <Pillars />,
  },
  {
    path: '/programme',
    element: <Programme />,
  },
  {
    path: '/outcomes',
    element: <Outcomes />,
  },
  {
    path: '/venue',
    element: <Venue />,
  },
  {
    path: '/partnership',
    element: <Partnership />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/kwetu',
    element: <Kwetu />,
  },
  {
    path: '/ldii',
    element: <LDII />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/terms-of-use',
    element: <TermsOfUse />,
  },
  {
    path: '/dispute-resolution',
    element: <DisputeResolution />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
