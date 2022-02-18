export interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: string;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
interface Global {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  Message: string;
  // Date: ;
  // NewConfirmed: 2331527
  // NewDeaths: 12848
  // NewRecovered: 0
  // TotalConfirmed: 403478439
  // TotalDeaths: 5776664
  // TotalRecovered: 0
  // ID: "02fe2425-6153-4108-965c-86192eee811c"
  // Message: ""
}

export interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Procince: string;
  Status: string;
}
export type CountrySummaryResponse = CountrySummaryInfo[];
