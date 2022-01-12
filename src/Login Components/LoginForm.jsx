import React, {useState} from 'react'
import './Styles/LoginForm.css';
import { HashLink as Link } from "react-router-hash-link";

function LoginForm({Login}) {

    const [details, setDetails] = useState({nome: "" ,email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <>
            <form className='form-container-login' onSubmit={submitHandler}>
                <div className='login-form-img-wrapper'>
                <Link to="/">
                        <img src='./images/logo.svg' alt='BOOKMARK'/>
                </Link>
                </div>
                <h1>Login</h1>
                <h4 id='login-input-error-msg' className='login-error-msg-hidden'>Email ou senha inválidos</h4>

                <input id='input-login-form' type="email" placeholder='Email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                
                <input id='input-login-form2' type="password" placeholder='Senha' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>

                <button type='submit'>Entrar</button>

                <p>Não tem uma conta? <Link to={"/cadastro"}>Crie uma</Link></p>
            </form>
            <div className='loginform-bg'></div>
        </>
    )
}

export default LoginForm
