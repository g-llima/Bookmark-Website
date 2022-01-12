import React, {useContext, useState} from "react";
import { motion } from "framer-motion";
import LoginForm from "../Login Components/LoginForm";
import Axios from 'axios';
import { Navigate } from 'react-router-dom';
import { UserContext } from "../UserContext";

function Login() {

  const [error] = useState("");;

  const {contextValue, setContextValue} = useContext(UserContext);

  const Login = details => {

    Axios.post("http://localhost:5000/api/get", {email: details.email, senha: details.password, nome: details.nome}).then(resposta => {
      if (resposta.data.length === 0) {
          document.getElementById("login-input-error-msg").classList.remove("login-error-msg-hidden");
          document.getElementById("input-login-form").classList.add("error-login-input");
          document.getElementById("input-login-form2").classList.add("error-login-input");
      } else {
          document.getElementById("login-input-error-msg").classList.add("login-error-msg-hidden");
          document.getElementById("input-login-form").classList.remove("error-login-input");
          document.getElementById("input-login-form2").classList.remove("error-login-input");
          setContextValue({email: details.email, nome: resposta.data[0].nome});
      }
    });
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <LoginForm Login={Login} error={error}/>
        { contextValue.nome !== undefined && <Navigate to={{
            pathname: '/'
          }}/>}

        
      </motion.div>
    </>
  );
}

export default Login;
