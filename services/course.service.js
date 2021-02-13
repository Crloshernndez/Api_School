const BaseService = require("./base.service");

class CourseService extends BaseService {
  constructor({ courseBusiness }) {
    super(courseBusiness);
  }
}

module.exports = CourseService;
