const container = require("./api/container");
const db = require("./dataAccess/models");

// guardamos en una constante una instancia de app que es una promesa
const application = container.resolve("app");

//llamamos al metodo start
application
  .start()
  // se crea la promesa para la coneccion
  .then(async () => {
    await db.sequelize.sync();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
