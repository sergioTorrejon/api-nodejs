import * as dotenv from 'dotenv';

dotenv.config();

const ENV_NODE = process.env.ENV_NODE || 'prod';
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_JWT_SECRET=process.env.JWT_SECRET || 'clavesecreta';

export const SERVER_CONFIG = {
    env:ENV_NODE,
    port:SERVER_PORT,
    jwtSecret:SERVER_JWT_SECRET
}
