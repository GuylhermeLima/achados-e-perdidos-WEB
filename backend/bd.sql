/*CREATE DATABASE achados_perdidos;

USE achados_perdidos;

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    perfil VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255)
);

CREATE TABLE item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    status ENUM('perdido', 'encontrado', 'reclamado') NOT NULL,
    foto VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    id_usuario INT NOT NULL,
    id_categoria INT NOT NULL,

    FOREIGN KEY (id_usuario)
        REFERENCES usuario(id),

    FOREIGN KEY (id_categoria)
        REFERENCES categoria(id)
);

INSERT INTO usuario (nome, email, senha, perfil)
VALUES (
    'Administrador',
    'admin@email.com',
    '123456',
    'ADMIN'
);

INSERT INTO categoria (nome, descricao)
VALUES
('Documento', 'Documentos pessoais'),
('Eletrônico', 'Aparelhos eletrônicos'),
('Acessório', 'Objetos diversos');
*/