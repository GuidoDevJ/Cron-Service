import { ErrorCreator } from '@macrointell/todoagro-shared';
import axios, { AxiosInstance } from 'axios';
import config from '../../config';

export class Payments {
  private static instance: Payments | null = null;

  private httpClient: AxiosInstance;
  private baseURL: string;
  private constructor() {
    this.baseURL = config.services.payment;
    this.httpClient = axios.create({
      baseURL: this.baseURL,
      timeout: 5000,
    });
  }
  public static getInstance(): Payments {
    if (!Payments.instance) {
      Payments.instance = new Payments();
    }
    return Payments.instance;
  }

  public async paymentAll() {
    try {
      const response = await this.httpClient.post(`${this.baseURL}pay-all`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'ELCLIENTETIENEQUEUSARESTAKEY',
        },
      });
      return response.data;
    } catch (error: any) {
      if (error.response.data.statusCode === 404) {
        console.log('No hay pagos retenidos');
        return;
      }
      throw new ErrorCreator(
        error.response.data.msg,
        error.response.data.statusCode,
        true
      );
    }
  }
}
