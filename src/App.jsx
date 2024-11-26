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
      path: "https://netflix-clone-sage.vercel.app/authentification",
      element: <Authentification />,
    },
    {
      path: "https://netflix-clone-sage.vercel.app/Inscription",
      element: <Inscription />,
    },
    {
      path: "https://netflix-clone-sage.vercel.app/confirmation/:token",
      element: <Comfirmation />,
    },
    {
      path: "https://netflix-clone-sage.vercel.app/home",
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
