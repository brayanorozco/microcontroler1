import Bull from 'bull';

import {REDIS} from '../settings';

const opts = {
    redis: {
        host: REDIS.host,
        port: REDIS.port
    }
};

export const queueView = new Bull("microservice1:view", opts);