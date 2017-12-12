export default {
  development: {
    database: {
      connectionLimit: 5,
      host: 'localhost',
      user: 'root',
      password: 'test',
      database: 'node_rest_api_seed'
    }
  },

  production: {
    database: {
      connectionLimit: 50,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }
  }
}
