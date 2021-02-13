"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // a una seccion le pertenece un Teacher
      Section.belongsTo(models.Teacher);
      // a una seccion le pertenece un Course
      Section.belongsTo(models.Course);
      // a una seccion le pertenece un Subject
      Section.belongsTo(models.Subject);
      //una Section tiene una relacion de mucho a mucho con Student
      //pasamos como segundo parametro un objeto
      Section.belongsToMany(models.Student, {
        // indicamos la tabla que se debe crear para muchos a muchos
        through: "Registration",
        // indicamos como se llama la tabla de la seccion en la base de datos
        as: "student",
        // indicamos la llave foranea
        foreignKey: "sectionId",
      });
    }
  }
  Section.init(
    {
      teacherId: DataTypes.INTEGER,
      subjectId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Section",
    }
  );
  return Section;
};
