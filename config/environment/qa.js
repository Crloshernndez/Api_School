module.exports = {
  PORT: process.env.PORT,
  // configuracion para base de datos
  DB: {
    username: "postgres",
    password: process.env.PASSWORD,
    database: process.env.DB_QA,
    host: process.env.HOST,
    dialect: "postgres",
    logging: false,
  },
};
