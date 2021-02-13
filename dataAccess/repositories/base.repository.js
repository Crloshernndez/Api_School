class BaseRepository {
  constructor(db, entity) {
    this._db = db;
    this._entity = entity;
  }

  getAll() {
    // retorna del objeto db de la entidad que indiquemos con el metodo de sequilize la lista de todos los datos
    return this._db[this._entity].findAll();
  }

  get(id) {
    return this._db[this._entity].findOne({ where: { id } });
  }

  create(entity) {
    // retorna del objeto db de la entidad seleccionada con el metodo de sequilize la creacion de la data
    return this._db[this._entity].create(entity);
  }

  update(id, entity) {
    delete entity.createdAt;
    delete entity.updatedAt;
    return this._db[this._entity].update(entity, { where: { id } });
  }

  delete(id) {
    return this._db[this._entity].destroy({ where: { id } });
  }
}

module.exports = BaseRepository;
