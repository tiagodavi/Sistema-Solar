import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
const PlanetDetail = ({ planetList }) => {
  const { nome } = useParams();
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    const planetData = planetList.find((p) => p.nome === nome);
    setPlanet(planetData || {});
  }, [nome, planetList]);

  return (
    <div>
      <h2>{planet.nome}</h2>
      <p>Tamanho: {planet.tamanho?.diametro_km} km</p>
      <p>Atmosfera: {planet.atmosfera?.composicao}</p>
      {/* Adicione outros detalhes conforme necessário */}
    </div>
  );
};

PlanetDetail.propTypes = {
  planetList: PropTypes.array.isRequired,
};

export default PlanetDetail;
