export interface IDataCovid {
  uid: number;
  uf: string;
  state: string;
  cases: number;
  deaths: number;
  suspects: number;
  refuses: number;
  datetime: string;
  country: string;
}

export interface IDataCovidCountry extends IDataCovid {
  country: string;
}

export interface IDataCovidDateResponse {
  status: number;
  data: {
    data: IDataCovid[];
  };
}

export interface IDataCovidStateResponse {
  status: number;
  data: IDataCovid;
}

export interface IDataCovidCountryResponse {
  status: number;
  data: {
    data: IDataCovidCountry;
  };
}
