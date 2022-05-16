import Homepage from "./pages/Homepage";
import NoMatch from "./pages/NoMatch";

const routes = [
  {
    path: '/',
    title: "Homepage",
    element: <Homepage />
  },
  {
    path: '*',
    title: "",
    element: <NoMatch />
  }  
];

export default routes;
