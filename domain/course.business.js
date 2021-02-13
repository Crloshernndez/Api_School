const BaseBusiness = require("./base.business");

const { Course } = require("./models");

class CourseBusiness extends BaseBusiness {
  constructor({ courseRepository }) {
    super(courseRepository, Course);
  }
}

module.exports = CourseBusiness;
