import React from "react";
import "./PagesCss/Moda.css";
import CardComponent from "../Components/Card";
import { useEffect, useState } from "react";

const ModayAccsesorios = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="Prin">
      <div className="FondoM">
        <div className="Mostrar">
          <a className="opp" href="">
            <b>Fiestas de fin de añ</b>o
          </a>
          <a className="op" href="">
            <b>Descubrir</b>
          </a>
        </div>
      </div>
      <div className="Abajo">
        <a href="">
          <p className="Parrafito">
            Déjese contagiar por la magia de las fiestas con regalos de
            excepción elegidos especialmente para usted de entre los diferentes
            universos de la Maison. Una oda rebosante de poesía y encanto al
            arte de maravillar, a los sueños y a la belleza de los momentos
            memorables de las fiestas.
          </p>
        </a>
      </div>

      <div className="Productos">
        <div className="ProdEs">
          {products.map((product) => (
            <CardComponent
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            ></CardComponent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModayAccsesorios;
