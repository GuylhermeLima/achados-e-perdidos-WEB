# Sistema de Achados e Perdidos - Backend

API REST desenvolvida em Node.js, Express e MySQL para gerenciamento de itens de um sistema de Achados e Perdidos.

## Tecnologias

- Node.js
- Express
- MySQL
- Sequelize
- Multer

## Estrutura do Projeto

```text
backend/
└── src/
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── services/
    ├── uploads/
    ├── app.js
    └── server.js
```

## Executando o Projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
node src/server.js
```

## Endpoints

| Método | Rota | Descrição |
|----------|------|------------|
| POST | /itens | Criar item |
| GET | /itens | Listar todos os itens |
| GET | /itens/:id | Buscar item por ID |
| PUT | /itens/:id | Atualizar item |
| DELETE | /itens/:id | Remover item |

## Filtros

Buscar por status:

```http
GET /itens?status=PERDIDO
```

Buscar por categoria:

```http
GET /itens?categoria=1
```

Buscar por descrição:

```http
GET /itens?descricao=azul
```

## Arquitetura

```text
Routes
↓
Controllers
↓
Services
↓
Models
↓
MySQL
```

## Funcionalidades

- CRUD completo de itens;
- Filtros por status e categoria;
- Relacionamento com categorias;
- Upload de imagens com Multer;
- Estrutura preparada para integração com JWT e frontend em React.

## Autor

Projeto desenvolvido para a disciplina de Desenvolvimento Web.