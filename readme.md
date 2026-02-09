# Auth API

API REST de autenticação e gerenciamento de usuários,
com login, registro, controle de roles e proteção de rotas,
desenvolvida com Node.js, Express, Sequelize, Mysql e JWT.

---

## 🎯 Objetivo do Projeto

Este projeto foi criado com o objetivo de **estudar e aplicar boas práticas
de autenticação e autorização em APIs REST**, abordando conceitos como:

- Organização em camadas (controllers, services, models)
- Versionamento de banco de dados com migrations
- Segurança no armazenamento e manipulação de credenciais
- Controle de acesso por roles (usuário e administrador)
- Documentação de API com Swagger

O projeto tem foco educacional e de portfólio, não sendo voltado
diretamente para produção.

---

## 🧱 Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- Sequelize (ORM)
- Migrations e Seeders
- JWT (JSON Web Token)
- Swagger (documentação)
- Git

---

## 🗂️ Estrutura do Projeto

src/
├── controllers/ # Camada responsável pelas requisições HTTP
├── services/ # Regras de negócio da aplicação
├── models/ # Definição das entidades do banco de dados
├── routes/ # Definição das rotas da API
├── migrations/ # Versionamento do banco de dados
├── seeders/ # Criação de dados iniciais (ex: Admin)
├── middlewares/ # Autenticação, autorização e validações
└── docs/ # Documentação Swagger


A estrutura segue o princípio de **separação de responsabilidades**,
facilitando manutenção, testes e evolução do sistema.

---

## 📦 Dependências Utilizadas

### Dependências principais

```json
{
  "bcrypt": "^6.0.0",
  "dotenv": "^17.2.3",
  "express": "^5.2.1",
  "express-rate-limit": "^8.2.1",
  "jsonwebtoken": "^9.0.3",
  "mysql2": "^3.16.2",
  "sequelize": "^6.37.7",
  "swagger-ui-express": "^5.0.1",
  "yamljs": "^0.3.0"
}

{
  "nodemon": "^3.1.11"
}

```

---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/adenilson666/auth-api.git
cd auth-api
```

### 2️⃣ Instalar as dependências

npm install

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

PORT=3000
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=senha
DB_NAME=auth_api
DB_PORT=3306
DB_DIALECT=mysql
NODE_ENV=development
JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=h

### 4️⃣ Executar as migrations

npx sequelize-cli db:migrate

### 5️⃣ Iniciar a aplicação

npm run dev

---

A API estará disponível em:

http://localhost:3000

A documentação Swagger pode ser acessada em:

ADMIN - http://localhost:3000/admin-docs
USER - http://localhost:3000/docs

---

## 🔐 Funcionalidades

- Registro de usuários

- Autenticação com JWT

- Refresh Token

- Atualização de dados do usuário autenticado

- Atualização de senha

- Controle de acesso por role (usuário / administrador)

- Rate limit para proteção contra abuso

---

## 📡 Rotas / Endpoints

## 👤 Usuários

| Método | Rota                | Descrição                              |
| ------ | ------------------- | -------------------------------------- |
| POST   | `/register`         | Criar usuário                          |
| POST   | `/login`            | Login do usuário                       |
| GET    | `/auth/me`          | Retornar dados do usuário autenticado  |
| PATCH  | `/auth/me`          | Atualizar dados do usuário autenticado |
| PATCH  | `/auth/me/password` | Atualizar senha do usuário autenticado |

## 🛠️ Administradores

| Método | Rota                  | Descrição                     |
| ------ | --------------------- | ----------------------------- |
| GET    | `/admin/users`        | Listar usuários               |
| PATCH  | `/admin/:id`          | Atualizar dados de um usuário |
| DELETE | `/admin/:id`          | Deletar usuário               |
| PATCH  | `/admin/:id/role`     | Alterar role do usuário       |
| PATCH  | `/admin/:id/password` | Alterar senha do usuário      |

---

## 🚧 Próximos Passos

- Implementação de testes automatizados

- Deploy e configuração de ambiente

---

## 📌 Observações

O projeto foi desenvolvido com foco em clareza de código,
organização e aprendizado, utilizando migrations para
garantir versionamento e consistência do banco de dados
ao longo da evolução da aplicação.


