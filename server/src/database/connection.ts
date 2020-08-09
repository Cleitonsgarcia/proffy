import knex from 'knex';
import path from 'path';


const db = knex({
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true //utilizar o conteudo nulo quando não definir um padrão do banco
});



export default db; 