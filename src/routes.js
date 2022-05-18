import ContinentPage from './pages/ContinentPage';
import Homepage from './pages/Homepage';
import NoMatch from './pages/NoMatch';

const routes = [
  {
    path: '/',
    title: 'Homepage',
    element: <Homepage />,
    exact: true,
  },
  {
    path: '/continent/:continent',
    title: 'Continent',
    element: <ContinentPage />,
    exact: true,
  },
  {
    path: '*',
    title: '',
    element: <NoMatch />,
  },
];

export default routes;
