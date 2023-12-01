import PropTypes from "react";
import { Navbar } from "./Navbar";

Navbar.propTypes = {
  planetData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.undefined]),
      nome: PropTypes.string,
      tamanho: PropTypes.shape({
        diametro_km: PropTypes.number,
        diametro_terrastam: PropTypes.number,
      }).isRequired,
      atmosfera: PropTypes.shape({
        composicao: PropTypes.string,
        pressao: PropTypes.string,
      }).isRequired,
      imagem: PropTypes.string,
    })
  ).isRequired,
};
