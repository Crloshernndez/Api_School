const BaseBusiness = require("./base.business");

const { Section } = require("./models");

class SectionBusiness extends BaseBusiness {
  constructor({ sectionRepository }) {
    super(sectionRepository, Section);
  }
}

module.exports = SectionBusiness;
