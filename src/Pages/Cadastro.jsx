import React, {useContext, useState} from "react";
import Axios from 'axios';
import { UserContext } from "../UserContext";
import { Navigate } from 'react-router-dom';
import CadastroForm from "../Login Components/CadastroForm";

function Cadastro() {

  const [error] = useState("");

  const {contextValue, setContextValue} = useContext(UserContext);

  const Cadastro = details => {

    Axios.post("http://localhost:5000/api/signup", {email: details.email, senha: details.senha, nome: details.nome, sobrenome: details.sobrenome}).then(resposta => {
      console.log(resposta.data)
      if (resposta.data === -1) {
        document.getElementById("cadastro-input-error-msg").classList.remove("cadastro-error-msg-hidden");
        document.getElementById("cadastro-input-form-email").classList.add("error-cadastro-input");
      } else {
        document.getElementById("cadastro-input-error-msg").classList.add("cadastro-error-msg-hidden");
        document.getElementById("cadastro-input-form-email").classList.remove("error-cadastro-input");
        setContextValue({nome: details.nome});
      }
    });
  }

  return (
    <>
        <CadastroForm Cadastro={Cadastro} error={error} />
        { contextValue.nome !== undefined && <Navigate to={{
            pathname: '/'
          }}/>}
        
    </>
  );
}

export default Cadastro;
