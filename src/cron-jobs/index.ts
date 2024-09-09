import { ARG_TIMEZONE, getDateTime } from '@macrointell/todoagro-shared';
import cron from 'node-cron';
// import { healthCheckPublishment, healthCheckRole, healthCheckUser } from '../service/healthChecks';
import { holaFuncTion } from '../service/healthChecks';
import { writeLog } from '../utils/logger';

//  * '*/5 * * * * *' Explanation:
//  * ┌────────────── second (0 - 59)
//  * │ ┌──────────── minute (0 - 59)
//  * │ │ ┌────────── hour (0 - 23)
//  * │ │ │ ┌──────── day of the month (1 - 31)
//  * │ │ │ │ ┌────── month (1 - 12)
//  * │ │ │ │ │ ┌──── day of the week (0 - 7) (Sunday to Saturday)
//  * │ │ │ │ │ │
//  * * * * * * *

// const handleHealthCheck = async <T>(
//   healthCheckFunc: () => Promise<T>,
//   name: string,
//   dateNow: string
// ) => {
//   try {
//     await healthCheckFunc();
//   } catch (err: any) {
//     const errorMessage = `Error al ejecutar ${name}: ${dateNow}`;
//     console.error(errorMessage);
//     writeLog(errorMessage);
//   }
// };

// Tarea cron que se ejecuta cada 1 hora en horario de Argentina
// Tarea cron que se ejecuta todos los dias a las 8 de la mañana ---> * * 8 * * *
cron.schedule(
  '0 */5 * * * *',
  async () => {
    const dateNow = getDateTime();
    const startMessage = `Tarea diaria ejecutada cada 1 hora en horario de Argentina: ${dateNow}`;
    console.log(startMessage);
    writeLog(
      '-------------------------------------------------------------------------------'
    );
    writeLog(startMessage);
    holaFuncTion();
    // await Promise.allSettled([
    //   handleHealthCheck(
    //     healthCheckPublishment,
    //     'healthCheckPublishment',
    //     dateNow
    //   ),
    //   handleHealthCheck(healthCheckRole, 'healthCheckRole', dateNow),
    //   handleHealthCheck(healthCheckUser, 'healthCheckUser', dateNow),
    // ]);
  },
  {
    scheduled: true,
    timezone: ARG_TIMEZONE,
  }
);

// // Tarea cron que se ejecuta todos los días a las 7 a.m. en horario de Argentina
// cron.schedule(
//   '0 7 * * *',
//   async () => {
//     const dateNow = getDateTime();
//     const startMessage = `Tarea diaria ejecutada todos los días a las 7 a.m en horario de Argentina: ${dateNow}`;
//     console.log(startMessage);
//     writeLog(startMessage);
//     try {
//       await healthCheckPublishment();
//       await healthCheckRole();
//       await healthCheckUser();
//     } catch (err: any) {
//       const errorMessage = `Error al ejecutar healthCheck schedule: ${dateNow}`;
//       console.error(errorMessage);
//       writeLog(errorMessage);
//     }
//   },
//   {
//     scheduled: true,
//     timezone: ARG_TIMEZONE,
//   }
// );
