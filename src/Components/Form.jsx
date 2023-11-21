import React from "react";
import { useForm } from "react-hook-form";
import "./ComponentesCss/Form.css";
import { Link } from "react-router-dom";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const clickBotonIniciar = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="Contenedor">
      <form onSubmit={clickBotonIniciar} className="">
        <div className="card  Principal">
          <div className="d-flex flex-column justify-content-center align-items-center mb-3">
          <h1 className="text-center mb-4">Inciar sesión</h1>
          <label className="mb-2" htmlFor="txtUser">Usuario</label>
          <input
            className="form-control shadow-sm"
            type="text"
            placeholder="Usuario"
            id="txtUser"
            name="txtUser"
            {...register("userName", {
              required: {
                value: true,
                message: "Por favor ingrese el usuario",
              },
              minLength: {
                value: 2,
                message: "El usuario debe tener minimo 2 caracteres",
              },
              pattern: {
                value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                message: "Por favor ingrese un correo valido",
              },
            })}
          />
          {errors.userName && (
            <span className="text-danger"> {errors.userName.message} </span>
          )}

          <label htmlFor="txtPass" className="mt-4 mb-2">
            Contraseña
          </label>

          <input
            className="form-control shadow-sm"
            type="text"
            placeholder="Contraseña"
            id="txtPass"
            name="txtPass"
            {...register("password", {
              required: {
                value: true,
                message: "Por favor ingrese una contraseña",
              },
              minLength: {
                value: 8,
                message: "La contraseña debe contener minimo 8 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}

          <button className="btn btn-success mt-4 w-50"><Link to="/">Iniciar sesión</Link></button>

          </div>

          <div className="Registro d-flex flex-column justify-content-center align-items-center">
              <Link to="/RecuperarContraseña" className="mb-3 mt-3">
                <p>¿Has Olvidado tu Contraseña?</p>
              </Link>

            <button className="boton ">
              <Link to="/Registro" >
                <p className="rrr">¿Deseas Registrarte?</p>
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
