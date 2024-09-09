import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class Payments {
  private static instance: Payments | null = null;

  private httpClient: AxiosInstance;

  private constructor(baseURL: string) {
    this.httpClient = axios.create({
      baseURL,
      timeout: 5000,
    });
  }
  public static getInstance(baseURL: string): Payments {
    if (!Payments.instance) {
      Payments.instance = new Payments(baseURL);
    }
    return Payments.instance;
  }
}
