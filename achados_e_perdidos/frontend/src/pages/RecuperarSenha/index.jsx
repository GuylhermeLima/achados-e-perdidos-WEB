import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function RecuperarSenha() {
  return (
    <div className="recuperar-page">
      <div className="recuperar-container">

        <Link to="/login" className="back-link">
          ← Voltar para o login
        </Link>

        <div className="recuperar-header">
          <h1>Recuperar senha</h1>

  
        </div>

        <form className="recuperar-form">

          <div className="input-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <button
            type="submit"
            className="recuperar-btn"
          >
            Enviar instruções
          </button>

          <div className="recuperar-links">
            <span>Lembrou sua senha?</span>

            <Link to="/login">
              Fazer login
            </Link>
          </div>

        </form>

      </div>
    </div>
  );
}