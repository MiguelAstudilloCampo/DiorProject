import React from "react";
import "./PagesCss/Home.css"
import { Link } from "react-router-dom";
import OptionsHome from "../Components/optionsHome";

const Home = () => {
  return (
    <div>
      <div class="containerl">
        <div class="izquierda">
          <Link class="conti" to="/ModaAccesorios">
            <h1 class="options">MODA Y ACCESORIOS</h1>
            {/* <p>Descubrir</p> */}
          </Link>
        </div>
        <div class="derecha">
          <Link class="contd" to="/PerfumeBelleza">
            <h1 class="options">PERFUME Y BELLEZA</h1>
            {/* <p>Comprar</p> */}
          </Link>
        </div>
      </div>
      <OptionsHome/>
    </div>
  );
};
 
export default Home;
