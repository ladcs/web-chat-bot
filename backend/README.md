# back-end

## Conectar prisma com o banco:

- Para tal é necessário um arquivo .env com a variavel, DATABASE_URL, descrita em .env.example, da pasta back-end.

- ${varivel} significa as configurações do banco de dados. Se usar o docker-compose password e port devem ser os mesmo fornecidos pelo .env, esses com o nomes

DB_PORT
MYSQL_PASSWORD

do arquivo .env.example na raiz, enquanto host deve ser db, enquando user deve ser root.

## .env.example

tirando a variavel DATABASE_URL, há API_PORT.

API_PORT é a variável no qual indica a porta do back-end, caso usando docker o valor será 3001.