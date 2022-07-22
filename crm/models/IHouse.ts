export interface IHouse {
  _id: string;
  address: string;
  geo: string;
  timezone: string;
  cadastralNumber: string;
  fiasCode: string;
  yearOfCommissioning: string;
  totalArea: string;
  numberOfFloors: number;
  numberOfUnderFloors: number;
  culturalStatus: string;
  condition: string;
  lifeCicleStage: string;
  energyEfficiencyClass: string;
  classAddedDate: Date;
  typeOfControl: string;
  basisOfControl: string;
  startDate: Date | null;
  endDate: Date | null;
  countOfAccounts: number;
  countOfApartments: number;
  comments?: string;
  docs: string[];
  photos: string[];
  company: string;
}

export interface IEntrance {
  _id: string;
  numberOfEntrance: string;
  conditionOfEntrance: string;
  yearOfConstruction: string;
  numberOfFloors: string;
  apartmentsFromTo: string;
  house: string;
}

export interface IApartment {
  _id: string;
  createDate: Date | null;
  numberOfApartment: string;
  numberOfEntrance: string;
  cadastralNumber: string;
  typeOfApartment: string;
  characteristic: string;
  totalArea: string;
  livingArea: string;
  account: string;
  accountArea: string;
  house: string;
}

export type HouseData = {
  address: string;
  geo: string;
  timezone: string;
  cadastralNumber?: string;
  fiasCode?: string;
  yearOfCommissioning?: string;
  totalArea?: string;
  numberOfFloors?: number;
  numberOfUnderFloors?: number;
  culturalStatus?: string;
  condition?: string;
  lifeCicleStage?: string;
  typeOfControl: string;
  basisOfControl?: string;
  startDate: Date | null;
  endDate?: Date | null;
  energyEfficiencyClass?: string;
  classAddedDate?: Date | null;
  comments?: string;
  docs?: string[];
  photos?: string[];
  company: string;
};

export type EntranceData = {
  numberOfEntrance: string;
  conditionOfEntrance: string;
  yearOfConstruction: string;
  numberOfFloors: string;
  apartmentsFromTo: string;
  house: string;
};

export type ApartmentData = {
  createDate: Date | null;
  numberOfApartment: string;
  numberOfEntrance: string;
  cadastralNumber: string;
  typeOfApartment: string;
  characteristic: string;
  totalArea: string;
  livingArea: string;
  account: string;
  accountArea: string;
  house: string;
};
