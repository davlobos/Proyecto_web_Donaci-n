export interface Response<T> {
    data?: T;
    message?: string;
}

export interface ICampaign {
  _id: string;
  title: string;
  subtitle: string;
  imgURL: string;
  goal: number;
  progress: number;
}

export interface User {
  nombre: string;
  email: string;
  region: string;
  comuna: string;
  rut: string;
  password: string;
  admin: boolean;
  favoriteCampaigns: [string] ;
}