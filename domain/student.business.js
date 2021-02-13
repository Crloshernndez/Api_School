const BaseBusiness = require("./base.business");

const { Student } = require("./models");

class StudentBusiness extends BaseBusiness {
  constructor({ studentRepository }) {
    super(studentRepository, Student);
  }
}

module.exports = StudentBusiness;
