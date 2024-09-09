export interface IEnvs {
    PORT?: string;
    API_PREFIX: string;
    DB_URIs: {
        todoagro: string;
    };
    services: {
        apiGateway: string;
        auth: string;
        user: string;
    };
    domain: string;
}