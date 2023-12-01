import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import Home from "./routes/Home";
import PlanetDetail from "./PlanetDetail";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    const fetchPlanetList = async () => {
      try {
        const response = await axios.get("/planetData/planetas.json");
        setPlanetList(response.data.planetas);
      } catch (error) {
        console.error("Erro ao carregar dados dos planetas:", error);
      }
    };

    fetchPlanetList();
  }, []);

  if (!planetList.length) {
    return <div>Carregando...</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar planetList={planetList} />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home planetList={planetList} />,
        },
        {
          path: "/planetas/:nome",
          element: <PlanetDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
