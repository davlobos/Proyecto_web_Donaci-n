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
