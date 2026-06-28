import React, { useEffect, useState } from "react";
import api from '../services/api';
import { useNavigate } from "react-router-dom";
import { getItems } from '../services/itemsService'

function Home() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [itens, setItens] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const response = await api.get('/api/perfil')
        setUser(response.data);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    const fetchItens = async () => {
      const response = await getItems()
      setItens(response.data)
    }

    fetchProfile();
    fetchItens();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) return <div className="container">Carregando...</div>;

  return (
    <div className="container">
      <div className="profile-info">
        <p>Olá, <strong>{user.nome}</strong></p>
        <p>Perfil: <strong>{user.tipo_usuario}</strong></p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3>Itens</h3>
        {itens.map((item) => (
          <div key={item.id}>
            <p>{item.descricao} — {item.status}</p>
          </div>
        ))}
      </div>

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
