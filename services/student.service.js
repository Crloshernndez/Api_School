const BaseService = require("./base.service");

class StudentService extends BaseService {
  constructor({ studentBusiness }) {
    super(studentBusiness);
  }
}

module.exports = StudentService;
