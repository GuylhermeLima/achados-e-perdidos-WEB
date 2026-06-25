import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function CadastrarItem() {
  return (
    <div className="cadastro-item-page">
      <div className="cadastro-item-container">

        <Link to="/itens" className="back-link">
          ← Voltar para os itens
        </Link>

        <div className="cadastro-item-header">
          <h1>Cadastrar Item Encontrado</h1>

          <p>
            Ajude a comunidade acadêmica cadastrando um objeto encontrado.
          </p>
        </div>

        <form className="cadastro-item-form">

          <div className="input-group">
            <label>Nome do Item</label>
            <input
              type="text"
              placeholder="Ex: Mochila preta"
            />
          </div>

          <div className="input-group">
            <label>Categoria</label>

            <select>
              <option>Selecione uma categoria</option>
              <option>Documentos</option>
              <option>Eletrônicos</option>
              <option>Acessórios</option>
              <option>Materiais Acadêmicos</option>
              <option>Outros</option>
            </select>
          </div>

          <div className="input-group">
            <label>Local Encontrado</label>

            <input
              type="text"
              placeholder="Ex: Biblioteca"
            />
          </div>

          <div className="input-group">
            <label>Data Encontrada</label>

            <input type="date" />
          </div>

          <div className="input-group">
            <label>Descrição</label>

            <textarea
              rows="5"
              placeholder="Descreva características importantes do item..."
            />
          </div>

          <div className="input-group">
            <label>Foto do Item</label>

            <input type="file" />
          </div>

          <button
            type="submit"
            className="cadastro-item-btn"
          >
            Publicar Item
          </button>

        </form>

      </div>
    </div>
  );
}