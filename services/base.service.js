class BaseService {
  constructor(EntityBusiness) {
    this._entityBusiness = EntityBusiness;
  }

  async getAll() {
    // en una variable asignamos el await del metodo getAll que traemos como dependencia y devuelve un array
    const entities = await this._entityBusiness.getAll();
    // debemos retornar a la api el array que nos manda la base de dato como una entidad de dominio
    return entities;
  }

  async get(id) {
    const entity = await this._entityBusiness.get(id);
    return entity;
  }

  // creamos metodo asincrono para crear usuario enviando como parametro el usuario que se quiere crear
  async create(entity) {
    const createdEntity = await this._entityBusiness.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    const updatedEntity = await this._entityBusiness.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    const deletedEntity = await this._entityBusiness.delete(id);
    return deletedEntity;
  }
}

module.exports = BaseService;
