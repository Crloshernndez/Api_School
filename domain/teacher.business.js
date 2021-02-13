const BaseBusiness = require("./base.business");

const { Teacher } = require("./models");

class TeacherBusiness extends BaseBusiness {
  constructor({ teacherRepository }) {
    super(teacherRepository, Teacher);
  }
}

module.exports = TeacherBusiness;
