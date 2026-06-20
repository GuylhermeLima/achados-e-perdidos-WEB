import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    tipo_usuario: "Aluno",
    matricula: "",
    codigo_professor: "",
    codigo_funcionario: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await axios.post("http://localhost:3000/api/cadastro", formData);
      setSuccess("Cadastro realizado com sucesso!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao cadastrar.");
    }
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tipo de Usuário</label>
          <select
            name="tipo_usuario"
            value={formData.tipo_usuario}
            onChange={handleChange}
          >
            <option value="Aluno">Aluno</option>
            <option value="Professor">Professor</option>
            <option value="Funcionário">Funcionário</option>
            <option value="Visitante">Visitante</option>
          </select>
        </div>

        {/* 
          Observação Acadêmica: A matrícula e os IDs são apenas armazenados no banco.
          Futuramente, esses dados poderão ser validados por integração institucional (ex: SIGAA).
        */}

        {formData.tipo_usuario === "Aluno" && (
          <div>
            <label>Matrícula</label>
            <input
              type="text"
              name="matricula"
              value={formData.matricula}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {formData.tipo_usuario === "Professor" && (
          <div>
            <label>ID Professor</label>
            <input
              type="text"
              name="codigo_professor"
              value={formData.codigo_professor}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {formData.tipo_usuario === "Funcionário" && (
          <div>
            <label>ID Funcionário</label>
            <input
              type="text"
              name="codigo_funcionario"
              value={formData.codigo_funcionario}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
