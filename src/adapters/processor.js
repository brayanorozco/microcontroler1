import { handleView, HandleCreate, HandleUpdate, FindEnable, HandleDelete } from '../services';
import { queueView, queueFindEnable, queueCreate, queueUpdate, queueDelete } from './index';


queueUpdate.process(async (job, done) => {

    try {

        let { pk, name, description, price  } = job.data

        let { statusCode, data, message } = await HandleUpdate({ pk, name, description, price })

        return done(null, { statusCode, data, message })

    } catch (error) {
        console.error({
            step: "adapter queueUpdate",
            error
        });

        return done(new Error({
            statusCode: 500,
            message: "Internal error server"
        }))

    }

});

queueCreate.process(async (job, done) => {

    try {

        let { name, description, price } = job.data

        let { statusCode, data, message } = await HandleCreate({ name, description, price });

        return done(null, { statusCode, data, message })

    } catch (error) {
        console.error({
            step: "adapter queueCreate",
            error
        });

        return done(new Error({
            statusCode: 500,
            message: "Internal error server"
        }))

    }

});

queueFindEnable.process(async (job, done) => {

    try {

        let { limit, offset } = job.data

        let { statusCode, data, message } = await FindEnable({ limit, offset });

        return done(null, { statusCode, data, message })

    } catch (error) {
        console.error({
            step: "adapter queueFindEnable",
            error
        });

        return done(new Error({
            statusCode: 500,
            message: "Internal error server"
        }))

    }

});

queueView.process(async (job, done) => {

    try {

        let { limit, offset, filter } = job.data

        let { statusCode, data, message } = await handleView({ limit, offset, filter })

        return done(null, { statusCode, data, message })

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

queueDelete.process(async (job, done) => {

    try {

        let { pk } = job.data

        let { statusCode, data, message } = await HandleDelete({ pk })

        return done(null, { statusCode, data, message })

    } catch (error) {
        console.error({
            step: "adapter queueDelete",
            error
        });

        return done(new Error({
            statusCode: 500,
            message: "Internal error server"
        }))

    }

});