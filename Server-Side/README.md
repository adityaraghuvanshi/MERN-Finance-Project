Project Setup : 
Installation

1. npm init -y --> To initialize the Npm to install dependencies and package.json
    1.1. Edit Package.json to target entry file.
2. npm install express mongoose mysql2 sequelize cors dotenv jsonwebtoken zod morgan helmet winston nodemon
    All these dependencies are for db, ORMs, security, sanitization, authentication, logging.
3. Intializing Typescript -
    3.1. npm i -D typescript @types/node @types/express ts-node
    3.2. Create a file named tsconfig.json for properties regarding typescript project.
    3.3. Create a nodemon.json file to setup nodemon in the project.
4. Create a .gitignore, .env, and entry file index.ts.

Plan 
Creation of the project will be Monolithic then it will get converted in Microservices and Event Driven Architecture.
REST API + GraphQL APIs will be used.

Websocket, GraphQL - Subscriptions both will be used 