const BaseService = require("./base.service");

class TeacherService extends BaseService {
  constructor({ teacherBusiness }) {
    super(teacherBusiness);
  }
}

module.exports = TeacherService;
