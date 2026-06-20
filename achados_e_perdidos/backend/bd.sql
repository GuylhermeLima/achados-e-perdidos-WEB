-- ============================================================
--  Banco de dados unificado: Achados e Perdidos
--  Inclui: tabela de usuários (autenticação) + itens + categorias
--  Execute este arquivo no MySQL para criar o banco completo.
-- ============================================================

CREATE DATABASE IF NOT EXISTS achados_perdidos;
USE achados_perdidos;

-- Tabela de usuários (autenticação)
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    senha VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('Aluno', 'Professor', 'Funcionário', 'Visitante', 'Administrador') NOT NULL,
    matricula VARCHAR(50),
    codigo_professor VARCHAR(50),
    codigo_funcionario VARCHAR(50)
);

-- Tabela de categorias
CREATE TABLE IF NOT EXISTS categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255)
);

-- Tabela de itens (achados e perdidos)
CREATE TABLE IF NOT EXISTS item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    status ENUM('PERDIDO', 'ENCONTRADO') NOT NULL,
    foto VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,
    id_usuario INT NOT NULL,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id)
);

-- Administrador padrão (senha: admin123, hash bcrypt)
INSERT INTO usuarios (nome, email, telefone, senha, tipo_usuario)
VALUES ('Administrador', 'admin@admin.com', '00000000000', '$2b$10$XVKCemFKzD8t1qmgslB6NOq6X5KfhTJu8nL7Z6ZmP9MgPhimb0yDa', 'Administrador');

-- Categorias padrão
INSERT INTO categoria (nome, descricao) VALUES
    ('Documento', 'Documentos pessoais'),
    ('Eletrônico', 'Aparelhos eletrônicos'),
    ('Acessório', 'Objetos diversos');