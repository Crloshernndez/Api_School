const BaseService = require("./base.service");

class RegistrationService extends BaseService {
  constructor({ registrationBusiness }) {
    super(registrationBusiness);
  }
}

module.exports = RegistrationService;
