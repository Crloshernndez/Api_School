"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // un Course puede estar en varios sections, para esto se usa el metodo hasMany
      Course.hasMany(models.Section, {
        // indicamos la llave foranea e indicamos el id que tiene la tabla de sections
        foreignKey: "courseId",
        //es como se va a llamar la tabla en la base de datos pluralizada
        as: "sections",
      });
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
