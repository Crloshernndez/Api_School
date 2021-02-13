const express = require("express");

// se crea la clase para el servidor
class Server {
  // se agrega en el constructor la inyeccion de dependencias
  constructor({ config, router }) {
    // se crea varibles locales para las inyecciones
    this._config = config;
    this._express = express();
    this._express.use(router);
  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log(`Aplication running on port ` + port);
        resolve();
      });
    });
  }
}

module.exports = Server;
