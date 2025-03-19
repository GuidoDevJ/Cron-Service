export interface IEnvs {
  PORT?: string;
  NODE_ENV?: string;
  DB_URIs: {
    agrocarteira: string;
  };
  services: {
    apiGateway: string;
    payment: string;
  };
  domain: string;
}
