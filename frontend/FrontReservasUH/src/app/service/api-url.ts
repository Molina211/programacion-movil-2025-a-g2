import { environment } from 'src/environments/environment';

const { apiHost, apiPort, apiPrefix } = environment;

export const API_BASE_URL = `${apiHost}:${apiPort}${apiPrefix}`;
