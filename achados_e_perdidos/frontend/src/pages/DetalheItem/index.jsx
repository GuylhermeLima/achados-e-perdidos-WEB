import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getItemById } from "../../services/itemsService";
import "./index.css";

export default function DetalheItem() {
      const { id } = useParams();
      const [item, setItem] = useState(null)

       useEffect(() => {
     const fetchItem = async () => {
        const response = await getItemById(id)
          setItem(response.data)
          }
            fetchItem()
         }, [id])

         if (!item) return <div>Carregando...</div>

      return (
        <div className="detalhe-page">

            <div className="detalhe-container">

                <Link
                    to="/itens"
                    className="back-link"
                >
                    ← Voltar para listagem
                </Link>

                <div className="detalhe-grid">

                    <div className="detalhe-imagem">
                        <img
                            src={item.foto ? `http://localhost:3000/uploads/${item.foto}` : "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800"}
                            alt="Item"
                        />
                    </div>

                    <div className="detalhe-info">

                        <span className="categoria">{item.categoria}
                        </span>

                        <h1>{item.descricao}</h1>

                        <p className="descricao">{item.descricao}</p>

                        <div className="dados-item">
                           <p><strong>Local:</strong> {item.local}
                           </p>

                            <p><strong>Data:</strong> {item.data} 
                            </p>

                            <p><strong>Status:</strong> {item.status}
                            </p>
                        </div>

                        <Link
                            to={`/solicitar-item/${id}`}
                            className="solicitar-btn"
                        >
                            Solicitar Recuperação
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}