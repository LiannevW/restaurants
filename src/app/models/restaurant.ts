import { Url } from "url";

export interface Restaurant {
  id?: number;
  name: string;
  location?: string;
  cutlery?: number;
  site?: Url;
  image?: Url;
}
