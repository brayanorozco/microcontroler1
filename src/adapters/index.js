import Bull from 'bull';

import {REDIS} from '../settings';

const opts = {
    redis: {
        host: REDIS.host,
        port: REDIS.port
    }
};

export const queueView = new Bull("microservice1:view", opts);
export const queueFindEnable = new Bull("microservice1:findProductEnable", opts);
export const queueCreate = new Bull("microservice1:create", opts);
export const queueUpdate = new Bull("microservice1:update", opts);
export const queueDelete = new Bull("gtghplzizsfe:delete", opts);