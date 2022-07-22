const Property = require("../models/Property");

const propertyService = {
  create: async propertyData => {
    const property = await Property.create(propertyData);
    return property;
  },
  edit: async (propertyId, propertyData) => {
    const property = await Property.findByIdAndUpdate(propertyId, propertyData);
    return property;
  },
  delete: async propertyId => {
    const property = await Property.findByIdAndRemove(propertyId);
    return property;
  },
  getPropertyById: async id => {
    const property = await Property.findById(id)
      .populate("account")
      .populate("subject");
    return property;
  },
  getPropertyByAccount: async accountId => {
    const properties = await Property.find({ account: accountId })
      .populate("account")
      .populate("subject");
    return properties;
  },
  getPropertiesBySubject: async subjectId => {
    const properties = await Property.find({ subject: subjectId });
    return properties;
  },
  getFilteredProperties: async filter => {
    const properties = await Property.find(filter);
    return properties;
  }
};

module.exports = propertyService;
