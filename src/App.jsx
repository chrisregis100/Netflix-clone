import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Pages/LandingPage";
import Authentification from "./Pages/Authentification";
import Inscription from "./Pages/Inscription";
import Comfirmation from "./Pages/Comfirmation";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
