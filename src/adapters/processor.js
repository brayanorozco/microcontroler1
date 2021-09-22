import {
    async
} from 'regenerator-runtime';
import {
    handleView
} from '../services';
import {
    queueView
} from './index';

queueView.process(async (job, done) => {

    try {

        let {
            offset,
            limit,
            filter
        } = job.data

        let {
            statusCode,
            data,
            message
        } = await handleView({
            offset,
            limit,
            filter
        })

        return done(null, {
            statusCode,
            data,
            message
        })

    } catch (error) {
        console.error({
            step: "adapter queueView",
            error
        });

        return done(new Error({
            statusCode: 500,
            message: "Internal error server"
        }))

    }

});