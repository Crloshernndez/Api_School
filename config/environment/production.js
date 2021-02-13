module.exports = {
  PORT: process.env.PORT,
  // configuracion para base de datos
  DB: {
    username: "postgres",
    password: process.env.PASSWORD,
    database: process.env.DB_PROD,
    host: process.env.HOST,
    dialect: "postgres",
    logging: false,
  },
};
