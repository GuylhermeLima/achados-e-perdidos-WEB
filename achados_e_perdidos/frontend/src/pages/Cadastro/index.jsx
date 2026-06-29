import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Cadastro() {
  return (
    <div className="cadastro-page">
      <div className="cadastro-container">

        <Link to="/" className="back-link">
          ← Voltar para o início
        </Link>

        <div className="cadastro-header">
          <h1>Criar conta</h1>
          <p>
            Cadastre-se para utilizar a plataforma de Achados e Perdidos da UFC.
          </p>
        </div>

        <form className="cadastro-form">

          <div className="input-group">
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="input-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="input-group">
            <label>Matrícula</label>
            <input
              type="text"
              placeholder="Digite sua matrícula"
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
            />
          </div>

          <div className="input-group">
            <label>Confirmar senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
            />
          </div>

          <button type="submit" className="cadastro-btn">
            Criar conta
          </button>

          <div className="cadastro-links">
            <span>Já possui uma conta?</span>

            <Link to="/login">
              Fazer login
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}