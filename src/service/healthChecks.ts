import { serviceCall } from '@macrointell/todoagro-shared';
import { handleError } from '../utils/errorHandler';
import { writeLog } from '../utils/logger';

// export const healthCheckRole = async () => {
//     const service = "role";
//     try {
//         const response = await serviceCall('role').get('/role/healthCheck');
//         if (response.status === 200) {
//             console.log(`Estado del servicio ${service}:`, response.data);
//             writeLog(JSON.stringify({ service: service, status: 'success', data: response.data }));
//             return { status: 'success', data: response.data };
//         } else {
//             console.log(`El servicio ${service} respondió con un estado no exitoso:`, response.status);
//             writeLog(JSON.stringify({ service: service, status: 'failure', data: response.status }));
//             return { status: 'failure', data: null };
//         };
//     } catch (err: any) {
//         const errorMessage = handleError(err, service);
//         console.error(`Error en el healthCheck del servicio ${service}: ${errorMessage}`);
//         writeLog(JSON.stringify({ service: service, status: 'error', error: errorMessage }));
//         throw err;
//     };
// };

// export const healthCheckPublishment = async () => {
//     const service = "publishment";
//     try {
//         const response = await serviceCall('publishment').get('/publishment/healthCheck');
//         if (response.status === 200) {
//             console.log(`Estado del servicio ${service}:`, response.data);
//             writeLog(JSON.stringify({ service: service, status: 'success', data: response.data }));
//             return { status: 'success', data: response.data };
//         } else {
//             console.log(`El servicio ${service} respondió con un estado no exitoso:`, response.status);
//             writeLog(JSON.stringify({ service: service, status: 'failure', data: response.status }));
//             return { status: 'failure', data: null };
//         };
//     } catch (err: any) {
//         const errorMessage = handleError(err, service);
//         console.error(`Error en el healthCheck del servicio ${service}: ${errorMessage}`);
//         writeLog(JSON.stringify({ service: service, status: 'error', error: errorMessage }));
//         throw err;
//     };
// };

// export const healthCheckUser = async () => {
//     const service = "user";
//     try {
//         const response = await serviceCall('user').get('/user/healthCheck');
//         if (response.status === 200) {
//             console.log(`Estado del servicio ${service}:`, response.data);
//             writeLog(JSON.stringify({ service: service, status: 'success', data: response.data }));
//             return { status: 'success', data: response.data };
//         } else {
//             console.log(`El servicio ${service} respondió con un estado no exitoso:`, response.status);
//             writeLog(JSON.stringify({ service: service, status: 'failure', data: response.status }));
//             return { status: 'failure', data: null };
//         };
//     } catch (err: any) {
//         const errorMessage = handleError(err, service);
//         console.error(`Error en el healthCheck del servicio ${service}: ${errorMessage}`);
//         writeLog(JSON.stringify({ service: service, status: 'error', error: errorMessage }));
//         throw err;
//     };
// };
export const holaFuncTion = async () => {
  console.log('Hola');
  return 'Hola';
};
