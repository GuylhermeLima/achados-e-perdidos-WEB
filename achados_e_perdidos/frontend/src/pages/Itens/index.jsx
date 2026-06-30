import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../../services/itemsService";
import "./index.css";

export default function Itens() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        const fetchItens = async () => {
            const response = await getItems();
            setItens(response.data);
        };

        fetchItens();
    }, []);

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
                                className="item-card"
                            >

                                <img
                                    src={
                                        item.foto
                                            ? `http://localhost:3000/uploads/${item.foto}`
                                            : "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800"
                                    }
                                    alt={item.descricao}
                                />

                                <div className="item-info">

                                    <span className="categoria">
                                        {item.Categoria?.nome}
                                    </span>

                                    <h3>{item.descricao}</h3>

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