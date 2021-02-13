const BaseBusiness = require("./base.business");

const { Registration } = require("./models");

class RegistrationBusiness extends BaseBusiness {
  constructor({ registrationRepository }) {
    super(registrationRepository, Registration);
  }
}

module.exports = RegistrationBusiness;
