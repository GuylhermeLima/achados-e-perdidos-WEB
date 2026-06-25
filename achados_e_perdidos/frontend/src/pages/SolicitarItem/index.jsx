import React from "react";
import "./index.css";

export default function SolicitarItem() {
    return (
        <div className="solicitar-page">

            <div className="solicitar-container">

                <h1>Solicitar Recuperação</h1>

                <p>
                    Preencha os dados abaixo para
                    comprovar que o item pertence a você.
                </p>

                <form>

                    <div className="input-group">
                        <label>Nome completo</label>
                        <input type="text" />
                    </div>

                    <div className="input-group">
                        <label>E-mail</label>
                        <input type="email" />
                    </div>

                    <div className="input-group">
                        <label>
                            Descreva características que
                            comprovem a posse do item
                        </label>

                        <textarea rows="5" />
                    </div>

                    <div className="info-box">
                        Para garantir a segurança dos objetos encontrados,
                        descreva características que apenas o proprietário
                        verdadeiro conheceria.
                    </div>

                    <button type="submit">
                        Enviar Solicitação
                    </button>

                </form>

            </div>

        </div>
    );
}