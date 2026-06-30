import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createItem } from "../../services/itemsService";
import "./index.css";

export default function CadastrarItem() {
  const [formData, setFormData] = useState({
    descricao: '',
    id_categoria: '',
    local: '',
    data: '',
    status: 'ENCONTRADO'
       })
        const [foto, setFoto] = useState(null)
        const [error, setError] = useState('')
         const navigate = useNavigate()

        const handleChange = (e) => {
         setFormData({ ...formData, [e.target.name]: e.target.value })
          }

        const handleFileChange = (e) => {
          setFoto(e.target.files[0])
        }

          const handleSubmit = async (e) => {
          e.preventDefault()
        try {
        const data = new FormData()
        Object.keys(formData).forEach(key => data.append(key, formData[key]))
        if (foto) {
          data.append('foto', foto)
        }
        await createItem(data)
        navigate('/itens')
        } catch (err) {
           setError('Erro ao cadastrar item. Tente novamente.')
         }
         }
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

        <form className="cadastro-item-form" onSubmit={handleSubmit}>
            {error && <p style={{color: 'red'}}>{error}</p>}

          <div className="input-group">
            <label>Nome do Item</label>
           <input 
           type="text" 
           placeholder="Ex: Mochila preta" 
           name="descricao" onChange={handleChange}/>
          </div>

          <div className="input-group">
            <label>Categoria</label>

            <select name="id_categoria" onChange={handleChange}>
             <option value="">Selecione uma categoria</option>
             <option value="1">Documento</option>
             <option value="2">Eletrônico</option>
             <option value="3">Acessório</option>
           </select>
          </div>

          <div className="input-group">
            <label>Local Encontrado</label>

           <input 
           type="text"
           placeholder="Ex: Biblioteca" 
           name="local" onChange={handleChange}/>
          </div>

          <div className="input-group">
            <label>Data Encontrada</label>

            <input type="date" name="data" onChange={handleChange}/>
          </div>

          <div className="input-group">
            <label>Descrição</label>

            <textarea
              rows="5"
              placeholder="Descreva características importantes do item..."
              name="obs" onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Foto do Item</label>

            <input type="file" name="foto" onChange={handleFileChange} />
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