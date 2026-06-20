import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/api/perfil", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) return <div className="container">Carregando...</div>;

  return (
    <div className="container">
      <div className="profile-info">
        <p>
          Olá, <strong>{user.nome}</strong>
        </p>
        <p>
          Perfil: <strong>{user.tipo_usuario}</strong>
        </p>
      </div>

      {user.tipo_usuario === "Administrador" && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <h3>Configurações</h3>
          <div style={{ marginTop: "1rem" }}>
            <label>Tamanho mínimo da senha</label>
            <input
              type="number"
              defaultValue={8}
              style={{ marginBottom: "1rem" }}
            />
            <button
              onClick={() =>
                alert("Configuração salva com sucesso! (Apenas demonstrativo)")
              }
            >
              Salvar
            </button>
          </div>
        </div>
      )}

      <button
        onClick={handleLogout}
        style={{ marginTop: "2rem", backgroundColor: "#dc3545" }}
      >
        Sair
      </button>
    </div>
  );
}

export default Home;
