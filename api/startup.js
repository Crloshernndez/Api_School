class Startup {
  // se agrega en el constructor la inyeccion de dependencias
  constructor({ server }) {
    // se crea varibles locales para las inyecciones
    this._server = server;
  }

  async start() {
    await this._server.start();
  }
}

module.exports = Startup;
