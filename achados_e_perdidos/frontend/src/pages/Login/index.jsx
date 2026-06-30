import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";


export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
      e.preventDefault()
      try {
        const response = await login({ email, senha })
        localStorage.setItem('token', response.data.token)
        navigate('/itens')
       }   catch (err) {
        setError('Email ou senha incorretos.')
       }
     }
    return (
        <div className="login-page">
            <div className="login-container">

                <div className="login-header">
                    <h1>Bem-vindo de volta</h1>
                    <p>
                        Entre na plataforma de Achados e Perdidos da UFC
                    </p>
                </div>

                <form className="login-form" onSubmit={(e) => { e.preventDefault(); alert('Funcionou!'); handleLogin(e); }}>
                    {error && <p style={{color: 'red'}}>{error}</p>}

                    <div className="input-group">
                        <label>E-mail</label>
                        <input
                           type="email"
                           placeholder="Digite seu e-mail"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Senha</label>
                        <input
                           type="password"
                           placeholder="Digite sua senha"
                           value={senha}
                           onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Entrar
                    </button>

                    <div className="login-links">
                        <Link to="/" className="back-link">
                            ← Voltar
                        </Link>
                        
                        <Link to="/recuperar-senha">
                            Esqueceu sua senha?
                        </Link>

                        <Link to="/cadastro">
                            Criar conta
                        </Link>
                    </div>

                </form>

            </div>
        </div>
    );
}