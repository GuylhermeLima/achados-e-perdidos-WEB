import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";

export default function DetalheItem() {
    const { id } = useParams();

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
                            src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800"
                            alt="Item"
                        />
                    </div>

                    <div className="detalhe-info">

                        <span className="categoria">
                            Acessório
                        </span>

                        <h1>Mochila Preta</h1>

                        <p className="descricao">
                            Mochila encontrada próxima ao Bloco A.
                            Possui dois compartimentos principais
                            e detalhes em vermelho.
                        </p>

                        <div className="dados-item">
                            <p>
                                <strong>Local:</strong> Bloco A
                            </p>

                            <p>
                                <strong>Data:</strong> 20/06/2026
                            </p>

                            <p>
                                <strong>Status:</strong> Disponível
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