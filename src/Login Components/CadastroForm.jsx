import React, {useState} from 'react'
import './Styles/CadastroForm.css';
import { HashLink as Link } from "react-router-hash-link";

function CadastroForm({Cadastro}) {

    const [details, setDetails] = useState({email: "", senha: "", nome: "", sobrenome: ""});

    const submitHandlerCadastro = e => {
        e.preventDefault();
        Cadastro(details);
    }

    return (
        <>
            <form className='form-container-cadastro' onSubmit={submitHandlerCadastro}>
                <div className='cadastro-form-img-wrapper'>
                    <Link to="/">
                        <img src='./images/logo.svg' alt='BOOKMARK'/>
                    </Link>
                </div>
                <h1>Cadastro</h1>
                <h4 id='cadastro-input-error-msg' className='cadastro-error-msg-hidden'>Email já cadastrado</h4>

                <div className='cadastro-input-form-text'>
                    <input type="text" placeholder='Nome' className='cadastro-input-form-nome' maxLength="20" onChange={e => setDetails({...details, nome: e.target.value})} value={details.nome}/>
                    <input id='cadastro-input-form-sobrenome' type="text" placeholder='Sobrenome' className='cadastro-input-form-sobrenome' maxLength="20" onChange={e => setDetails({...details, sobrenome: e.target.value})} value={details.sobrenome}/>
                    <input id='cadastro-input-form-email' type="email" placeholder='Email' className='cadastro-input-form-email' maxLength="150" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <input id='cadastro-input-form-senha' type="password" placeholder='Senha' maxLength="100" onChange={e => setDetails({...details, senha: e.target.value})} value={details.senha}/>

                <button type='submit'>Cadastrar</button>

            </form>
            <div className='cadastroform-bg'></div>
        </>
    )
}

export default CadastroForm
