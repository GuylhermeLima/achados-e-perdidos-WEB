import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div className="login-page">
            <div className="login-container">



                <div className="login-header">
                    <h1>Bem-vindo de volta</h1>
                    <p>
                        Entre na plataforma de Achados e Perdidos da UFC
                    </p>
                </div>

                <form className="login-form">

                    <div className="input-group">
                        <label>E-mail</label>
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                    </div>

                    <div className="input-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
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