"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // un Teacher puede estar en varios sections, para esto se usa el metodo hasMany
      Teacher.hasMany(models.Section, {
        // indicamos la llave foranea e indicamos el id que tiene la tabla de sections
        foreignKey: "teacherId",
        //es como se va a llamar la tabla en la base de datos pluralizada
        as: "sections",
      });
    }
  }
  Teacher.init(
    {
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Teacher",
    }
  );
  return Teacher;
};
