"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //un estudiante tiene una relacion de mucho a mucho con section
      //pasamos como segundo parametro un objeto
      Student.belongsToMany(models.Section, {
        // indicamos la tabla que se debe crear para muchos a muchos
        through: "Registration",
        // indicamos como se llama la tabla de la seccion en la base de datos
        as: "sections",
        // indicamos la llave foranea
        foreignKey: "studentId",
      });
    }
  }
  Student.init(
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
      modelName: "Student",
    }
  );
  return Student;
};
