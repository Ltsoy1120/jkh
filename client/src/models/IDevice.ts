export interface IDevice {
  _id: string;
  number: number;
  assignment: string;
  payer: string;
  type: string;
  location: string;
  tariff: string;
  lastData?: number;
  difference?: number;
  checkDate?: string;
  checkMessage?: string;
  registerDate: string;
}
