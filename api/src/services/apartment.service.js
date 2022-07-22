const Apartment = require("../models/Apartment");

const apartmentService = {
  create: async apartmentData => {
    const apartment = await Apartment.create(apartmentData);
    return apartment;
  },
  edit: async (apartmentId, apartmentData) => {
    const apartment = await Apartment.findByIdAndUpdate(
      apartmentId,
      apartmentData
    );
    return apartment;
  },
  delete: async apartmentId => {
    const apartment = await Apartment.findByIdAndRemove(apartmentId);
    return apartment;
  },
  getApartmentsByHouse: async houseId => {
    const apartments = await Apartment.find({ house: houseId });
    return apartments;
  },
  getApartmentById: async apartmentId => {
    const apartment = await Apartment.findById(apartmentId);
    return apartment;
  },
  getFilteredApartments: async filter => {
    const apartment = await Apartment.find(filter);
    return apartment;
  }
};

module.exports = apartmentService;
