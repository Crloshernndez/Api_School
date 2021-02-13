require("dotenv").config();

// se importan los ambientes
const PRODUCTION = require("./environment/production");
const DEVELOPMENT = require("./environment/development");
const QA = require("./environment/qa");

// se extrae la variable de entorno NODE_ENV
const { NODE_ENV } = process.env;

// por default el envioment sera development
let currentEnv = DEVELOPMENT;

// se asignara a la variable currentEnv el enviroment en que este NODE_ENV
if (NODE_ENV === "production") {
  currentEnv = PRODUCTION;
} else if (NODE_ENV === "qa") {
  currentEnv = QA;
}

module.exports = currentEnv;
