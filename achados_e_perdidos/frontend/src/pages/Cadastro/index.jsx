import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import "./index.css";

export default function Cadastro() {
   const [formData, setFormData] = useState({
      nome: '',
      email: '',
      matricula: '',
      senha: '',
      tipo_usuario: 'Aluno',
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await register(formData)
        navigate('/login')
    } catch (err) {
        setError('Erro ao cadastrar. Tente novamente.')
    }
}
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

        <form className="cadastro-form" onSubmit={handleSubmit}>
            {error && <p style={{color: 'red'}}>{error}</p>}

            <div className="input-group">
            <label>Nome completo</label>
            <input 
            type="text" 
            placeholder="Digite seu nome" 
            name="nome" onChange={handleChange}/>
          </div>

          <div className="input-group">
            <label>E-mail</label>
            <input 
            type="email"
            placeholder="Digite seu e-mail" 
            name="email" onChange={handleChange}/>
          </div>

          <div className="input-group">
            <label>Tipo de usuário</label>
            <select name="tipo_usuario" onChange={handleChange}>
              <option value="Aluno">Aluno</option>
              <option value="Professor">Professor</option>
              <option value="Funcionário">Funcionário</option>
              <option value="Visitante">Visitante</option>
            </select>
          </div>

          <div className="input-group">
            <label>Matrícula</label>
            <input 
            type="text" 
            placeholder="Digite sua matrícula" 
            name="matricula" onChange={handleChange}/>
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input 
            type="password" 
            placeholder="Digite sua senha" 
            name="senha" onChange={handleChange}/>
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