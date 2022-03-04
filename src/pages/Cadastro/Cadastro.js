import React from "react";
import "./Cadastro.css";
import Swal from "sweetalert2";
import schema from "../../validations/Validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const salvar = async(data)=>{
    await Swal.fire({
      title: "Sucesso!",
      icon: "success",
      text: `Olá sr(a) ${data.name}`
    });

  }
  return (
    <div className="containerCadastro">
      <div className="cardCadastro">
        <header className="headerCardCadastro">Formulário de Cadastro</header>
        <article className="bodyCardCadastro">

          <form onSubmit={handleSubmit(salvar)}>

            <div className="input-field">
              <i className="material-icons">person</i>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name")}
              />
            </div>
            <p className="erro-message">{errors.name?.message}</p>

            <div className="input-field">
              <i className="material-icons">email</i>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email")}
              />
            </div>
            <p className="erro-message">{errors.email?.message}</p>

            <div className="input-field">
              <i className="material-icons">password</i>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password")}
              />
            </div>
            <p className="erro-message">{errors.password?.message}</p>

            <div className="btn-field">
              <button type="submit">
                <span>salvar</span>
                <i className="material-icons">send</i>
              </button>
            </div>

          </form>          
        </article>
      </div>
    </div>
  );
};

export default Cadastro;
