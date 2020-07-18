
export interface MainListItem {
  id: number;
  name: string;
  country: string;
  processing_id: number;
  processing: string;
  taste: Taste | null;
}

export interface Taste {
  sweet: number;
  acid: number;
  bitter: number;
}

export interface BeansDetail {
  id: number;
  name: string;
  country: string;
  processing: string;
  brew: string[];
  type: string;
  region: string;
  area: string;
  minAltitude: number;
  maxAltitude: number | null;
  description: string;
  taste: Taste | null;
  roastDate: string;
}
