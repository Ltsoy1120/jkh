export interface IOffice {
  _id: string;
  name: string;
  address: string;
  dateOfWork: string;
  timeOfWork: string;
  timeOfLunch: string;
  phones: string[];
  noPreRegistration: false;
  schedule: DaysOfReceipt;
}

export type OfficeData = {
  name: string;
  address: string;
  dateOfWork: string;
  timeOfWork: string;
  timeOfLunch: string;
  phones: string[];
  noPreRegistration: boolean;
  schedule: DaysOfReceipt;
};

export type DaysOfReceipt = {
  Mo: DayOfReceipt;
  Tu: DayOfReceipt;
  We: DayOfReceipt;
  Th: DayOfReceipt;
  Fr: DayOfReceipt;
  Sa: DayOfReceipt;
  Su: DayOfReceipt;
};

export type DayOfReceipt = {
  isReception: boolean;
  timeOne: {
    start: string;
    end: string;
  };
  timeTwo: {
    start: string;
    end: string;
  };
};
