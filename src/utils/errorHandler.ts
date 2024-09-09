export const handleError = (err: any, service: string): string => {
    let message = ''; let details = '';

    if (err.code && err.code == 'ECONNREFUSED') {
        message = err.code
        details = `Couldn't connect to microservice: ${service}`;
    };

    message += err.response?.statusText || '';
    const errorDetail: any = err.response?.data;
    if (details == '') details = errorDetail?.error as string || 'Internal Error';
    const url = JSON.stringify(err.config?.url) || '';

    return generateAxiosMessage(message, details, url);
};

const generateAxiosMessage = (message: string, details: string, url: string) => {
    return `AxiosError: ${message} - ${details} \n url:${url}`;
};