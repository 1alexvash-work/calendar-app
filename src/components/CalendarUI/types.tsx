export type Holiday = {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: null | string[];
  launchYear: null | number;
  types: string[];
};

export type Task = {
  id: number;
  title: string;
  date: Date;
};
