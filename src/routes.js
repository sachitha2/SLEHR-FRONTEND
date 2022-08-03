import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import Doctor from './pages/doctor/Doctor';
import Diagnoses from './pages/doctor/Diagnoses';
import Allergies from './pages/doctor/Allergies';
import LabTests from './pages/doctor/LabTests';
import Prescriptions from './pages/doctor/Prescriptions';
import Scans from './pages/doctor/Scans';
import Vaccines from './pages/doctor/Vaccines';

import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'doctor', element: <Doctor />, children:
        [
          { path:'diagnoses',element:<Diagnoses/>},
          { path:'allergies',element:<Allergies/>},
          { path:'labtests',element:<LabTests/>},
          { path:'prescriptions',element:<Prescriptions/>},
          { path:'scans',element:<Scans/>},
          { path:'vaccines',element:<Vaccines/>}
        ]
        },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
