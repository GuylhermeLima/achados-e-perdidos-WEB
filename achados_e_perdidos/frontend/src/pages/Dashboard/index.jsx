import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';


export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* SEÇÃO 1: NAVBAR */}
      <section className="section-hero">
        <div className="container-wrapper">
          <header className="navbar">
            <div className="nav-logo">


             

              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Logotipo UFC"
                  width="40"
                  height="40"
                  style={{ borderRadius: '8px', cursor: 'pointer' }}
                />
              </Link>




            </div>
            <nav className="nav-menu">

              <Link to="/itens">Listagem de Itens</Link>
              <a href="#contato">Contato</a>
              <a href="#sobre">Sobre</a>
              <Link to="/Cadastro">Criar Conta</Link>
              <Link to="/login">Login</Link>


            </nav>
          </header>

          <div className="hero-grid">
            <div className="hero-left">
              <h1>Inovação digital que <br /> fortalece a comunidade <br /> estudantil</h1>
            </div>
            <div className="hero-right">
          

              <div className="hero-right">
                <div className="hero-search">

                  <svg
                    className="search-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>

                  <input
                    type="text"
                    placeholder="Procurar itens perdidos..."
                  />

                  {/*
                      Ao pressionar Enter, redirecionar para a página
                      de listagem de itens com o termo pesquisado.
                  */}



                </div>
              </div>



            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: SOBRE O PROJETO */}
      <section id="sobre" className="section-about">
        <div className="container-wrapper">
          <div className="about-grid">
            <div className="about-left">
              <h2>Achados e Perdidos UFC</h2>
              <p>
                O <strong>Sistema de Achados e Perdidos da Universidade Federal do Ceará</strong> é uma plataforma criada por estudantes para facilitar a devolução de objetos esquecidos ou encontrados dentro do campus.
              </p>
              <p>
                Com uma interface moderna desenvolvida em <strong>React</strong>, o site aproxima tecnologia e comunidade acadêmica, oferecendo uma solução prática e acessível para o dia a dia universitário.
              </p>
              <p>
                Mais do que uma ferramenta digital, é um espaço de <strong>solidariedade</strong> e colaboração, onde cada achado pode se transformar em reencontro.
              </p>

              <Link to="/itens" className="btn-action" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
                conhecer mais
              </Link>

            </div>
            <div className="about-right">
              <div className="image-frame">
                <img
                  src="https://img.magnific.com/vetores-gratis/criancas-de-design-plano-de-volta-a-escola_52683-44264.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="imagem ilustrativa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SEÇÃO 3: EXPLORAR ITENS*/}

      <section className="section-explore">
        <div className="explore-content">
          <h2>Seu objeto pode estar aqui</h2>

          <p>  Procurando algo que perdeu?

            Navegue pelos itens encontrados
            no campus e aumente suas chances
            de recuperar seus pertences.</p>

          <Link to="/itens" className="btn-explore">

            Ver catálogo de itens
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "10px", verticalAlign: "middle" }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Link>
        </div>
      </section>


      {/* SEÇÃO 3: DEPOIMENTOS E RODAPÉ */}
      <section id="contato" className="section-testimonials-footer">
        <div className="container-wrapper">


          <footer className="footer-structured">
            
            <div className="footer-col">
              <h3>Posto de Entrega</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#555555', fontSize: '14px', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '6px' }}> Bloco Principal — Campus Russas</li>
                <li style={{ marginBottom: '6px' }}> Segunda a Sexta: 08h às 18h</li>
                <li> suporte-achados@aluno.ufc.br</li>
              </ul>
            </div>


            
            <div className="footer-col">
              <h3>Redes sociais</h3>
              <div className="social-links">
                <a href="#linkedin" title="LinkedIn">Linkedin</a>
                <a href="#instagram" title="Instagram">Instagram</a>

              </div>
            </div>

            
            <div className="footer-col">
              <h3>Informações</h3>
              <ul className="footer-links">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/cadastro">Cadastro</Link></li>
                <li><a href="https://dontpad.com/UFC-Trabalho-Academico-WEB-prof-hugo" target="_blank" rel="noreferrer">Termos de Uso</a></li>
                <li><a href="https://dontpad.com/UFC-Trabalho-Academico-WEB-prof-hugo" target="_blank" rel="noreferrer">Política de Privacidade</a></li>
                <li><a href="https://dontpad.com/UFC-Trabalho-Academico-WEB-prof-hugo" target="_blank" rel="noreferrer">Contato / Suporte</a></li>
              </ul>

            </div>

            
            <div className="footer-col col-right">
              <div className="footer-logo">
                <Link to="/">
                  <img
                    src="/logo.png"
                    alt="Logotipo UFC"
                    width="40"
                    height="40"
                    style={{ borderRadius: '8px', cursor: 'pointer' }}
                  />
                </Link>

              </div>
              <p className="copyright">2026 © Todos os direitos reservados</p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
