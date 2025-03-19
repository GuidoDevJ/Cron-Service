import { ARG_TIMEZONE } from '@macrointell/todoagro-shared';
import cron from 'node-cron';
import config from '../config';
import { Payments } from '../request/Payments';

// Tarea cron que se ejecuta cada 1 hora en horario de Argentina
// Tarea cron que se ejecuta todos los dias a las 8 de la mañana ---> * * 8 * * *
const schedule = config.NODE_ENV === 'prod' ? '0 8 * * *' : '0 * * * *';
cron.schedule(
  schedule, // Se ejecuta en el minuto 0 de cada hora
  async () => {
    console.log('Ejecutando tarea cron');
    const payment = Payments.getInstance();
    await payment.paymentAll();
  },
  {
    scheduled: true,
    timezone: ARG_TIMEZONE,
  }
);
