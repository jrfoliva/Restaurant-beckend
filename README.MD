# Criando o projeto dentro da pasta beckend
yarn init -y

# Utilizando typescript -D para ambiente de desenvolvimento
yarn add typescript -D 

yarn add express

yarn add @types/express -D

# inicializa o typescript
yarn tsc --init 
 
# Para usar script
yarn add ts-node-dev -D

# Pode ser usado o start no script também
# substituído este comando no script do package "dev": "ts-node-dev src/server.ts" 
# para este "dev": "ts-node-dev --transpile-only src/server.ts"

# Tratar erros para requisições incorretas
yarn add express-async-errors

# Dar acesso externo utilizando o cors
yarn add cors
yarn add @types/cors -D

# Instalação do banco de dados PostGre
# Instalação do postbird para manipulação das tabelas e relacionamentos.

# Instalado ORM prisma
yarn add prisma
yarn add @prisma/client

# Inicializar a configuração do prisma
npx prisma init

# Biblioteca para criptografar senha e tipos
yarn add bcryptjs
yarn add @types/bcryptjs -D

# Uso do JWT para gerar um token
yarn add jsonwebtoken
yarn add @types/jsonwebtoken

# Instalação do dotenv
yarn add dotenv


# Instalação do multer para trabalhar com imagens e types para o typescript
yarn add multer
yarn add @types/multer -D



