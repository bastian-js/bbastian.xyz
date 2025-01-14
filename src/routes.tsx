import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { Links } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Home />, // Using the Home component
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/socials",
    element: <Links />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
