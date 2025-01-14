import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Socials from "./pages/Socials.tsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/socials",
    element: <Socials />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
