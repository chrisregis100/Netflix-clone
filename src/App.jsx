import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomeLanding from "./Pages/LandingPage";
import Authentification from "./Pages/Authentification";
import Inscription from "./Pages/Inscription";
import Comfirmation from "./Pages/Comfirmation";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLanding />,
    },
    {
      path: "/authentification",
      element: <Authentification />,
    },
    {
      path: "/Inscription",
      element: <Inscription />,
    },
    {
      path: "/confirmation/:token",
      element: <Comfirmation />,
    },
    {
      path: "https:/home",
      element: <Home />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </>
  );
}

export default App;
