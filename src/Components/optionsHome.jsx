import React from "react";
import "./ComponentesCss/optionsHome.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const OptionsHome = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const clickBotonIniciar = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={clickBotonIniciar} class="container2">
        <div class="c1">
          <div class="c11">
            <h3>
              <b>TU OPINION</b>
            </h3>
            <input
              placeholder="*CORREO ELECTRONICO"
              type="text"
              className="ll"
              {...register("userName", {
                required: {
                  value: true,
                  message: "Por favor ingrese el usuario",
                },
                // minLength: {
                //   value: 2,
                //   message: "El usuario debe tener minimo 2 caracteres",
                // },
                pattern: {
                  value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                  message: "Por favor ingresa un correo valido",
                },
              })}
            />
            {errors.userName && (
              <span className="text-danger"> {errors.userName.message} </span>
            )}

            <input type="text" className="Opinion" placeholder="Tu Opinion"

            {...register("Opinion", {
                minLength: {
                  value: 7,
                  message: "Tu opinion debe tener al menos 7 caracteres",
                },
              })}
            
            />

            {errors.Opinion && (
              <span className="text-danger"> {errors.Opinion.message} </span>
            )}

            <button className="BOOTON">Enviar</button>
          </div>

          <div class="c12">
            <h3>
              <b>OPCIONES INICIO DE SECIÓN</b>
            </h3>
            <Link class="aa" to="/Login">
              Inicia Sesión
            </Link>
            <Link class="aa" to="/Registro">
              Registrarse
            </Link>
          </div>
        </div>
        <div class="c2">
          <h3>
            <b>SERVICIO DE ATENCIÓN AL CLIENTE</b>
          </h3>
          <select name="" id="">
            <option value="">Contacto</option>
            <option value="">Christian Dior Couture</option>
            <option value="">Parfums Christian Dior</option>
          </select>
          <select name="" id="">
            <option value="">FAQ</option>
            <option value="">Christian Dior Couture</option>
            <option value="">Parfums Christian Dior</option>
          </select>
        </div>
        <div class="c3">
          <h3>
            <b>THE HOUSE OF DIOR</b>
          </h3>
          <select name="" id="">
            <option value="">Menciones legales</option>
            <option value="">Christian Dior Couture</option>
            <option value="">Parfums Christian Dior</option>
          </select>
          <a class="aa" href="">
            Protección de datos
          </a>
          <a class="aa" href="">
            Gestión de las cookies
          </a>
          <a class="aa" href="">
            Ética y cumplimiento
          </a>
          <select name="" id="">
            <option value="">Seguirnos</option>
            <option value="">Instagram</option>
            <option value="">Twitter</option>
            <option value="">Facebook</option>
            <option value="">TikTok</option>
            <option value="">Snaptchat</option>
          </select>
          <a class="aa" href="">
            Carreras
          </a>
        </div>
        <div class="c4">
          <div class="c41">
            <h3>
              <b>PAÍS / REGIÓN</b>
            </h3>
            <select class="ll" name="" id="">
              <option value="">Latin America</option>
              <option value="">Colombia</option>
              <option value="">Peru</option>
            </select>
          </div>
          <div class="c42">
            <h3>
              <b>IDIOMA</b>
            </h3>
            <select class="ll" name="" id="">
              <option value="">
                <h4>Idioma</h4>
              </option>
              <option value="">Español</option>
              <option value="">Ingles</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OptionsHome;
