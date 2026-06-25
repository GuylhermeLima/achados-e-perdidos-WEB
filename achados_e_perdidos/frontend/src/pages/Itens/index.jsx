import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const itens = [
    {
        id: 1,
        nome: "Mochila preta",
        local: "Bloco A",
        data: "20/06/2026",
        categoria: "Acessórios",
        imagem:
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500",
    },
    {
        id: 2,
        nome: "Carteira",
        local: "Biblioteca",
        data: "21/06/2026",
        categoria: "Documentos",
        imagem:
            "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    },
    {
        id: 3,
        nome: "Garrafa",
        local: "Laboratório",
        data: "22/06/2026",
        categoria: "Objetos",
        imagem:
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    },
];
export default function Itens() {
    return (
        <div className="itens-page">

            <header className="itens-header">
                <div className="container-wrapper">

                    <div className="header-content">
                        <Link to="/" className="logo-link">
                            Achados & Perdidos UFC
                        </Link>

                        <Link to="/login" className="header-login">
                            Login
                        </Link>
                    </div>

                </div>
            </header>

            <section className="hero-itens">
                <div className="container-wrapper">

                    <h1>Itens Encontrados</h1>

                    <p>
                        Consulte os objetos cadastrados pela comunidade acadêmica.
                    </p>

                    <input
                        className="search-input"
                        placeholder="Pesquisar item..."
                    />

                </div>
            </section>

            <section className="categorias">
                <div className="container-wrapper">

                    <button>Todos</button>
                    <button>Documentos</button>
                    <button>Eletrônicos</button>
                    <button>Acessórios</button>
                    <button>Outros</button>

                </div>
            </section>

            <section className="lista-itens">
                <div className="container-wrapper">

                    <Link
                        to="/cadastrar-item"
                        className="btn-cadastrar-item"
                    >
                        + Cadastrar novo item
                    </Link>

                    <div className="grid-itens">

                        {itens.map((item) => (
                            <Link
                                key={item.id}
                                to={`/item/${item.id}`}
                                className="item-card">

                                <img
                                    src={item.imagem}
                                    alt={item.nome}
                                />

                                <div className="item-info">

                                    <span className="categoria">
                                        {item.categoria}
                                    </span>

                                    <h3>{item.nome}</h3>

                                    <p>
                                        Encontrado em {item.local}
                                    </p>

                                    <small>
                                        {item.data}
                                    </small>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>
            </section>

        </div>
    );
}