import "core-js/stable";
import "regenerator-runtime/runtime";
import "./adapters/processor"

import {syncDB} from './models';

async function main() {

    await syncDB();

    function shutdown(signal) {

        return err => {

            console.log(`${signal}...`);
            if (err) console.error(err.stack || err);

            setTimeout(() => {
                console.log('...waited 2s, exiting');
                process.exit(err ? 1 : 0);

            }, 2000).unref();
        }
    }

    process
        .on('SIGTERM', shutdown('SIGTERM'))
        .on('SIGINT', shutdown('SIGINT'))
        .on('uncaughtException', shutdown('uncaughtException'));
}

main();