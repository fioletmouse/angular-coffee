
export interface MainListItem {
  id: number;
  name: string;
  country: string;
  processing: string;
  taste: string;
}

export interface BeansDetail {
  id: number;
  name: string;
  country: string;
  processing: string;
  type: string;
  region: string;
  area: string;
  minAltitude: number;
  maxAltitude: number | null;
  description: string;
  taste: string;
  roastDate: string;
}
