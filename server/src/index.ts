
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import initRoutes from './routes';
import getConfig from './config';
import logger from './logger';

const start = (): void => {

    const config = getConfig();
    const app = express();

    console.log(config);

    app.use(bodyParser.json());
    app.use(cors());
    initRoutes(app, config);

    app.listen(config.server.port, config.server.hostName, (): void => {
        logger.info(`Server running at ${config.server.url}`);
    });
};

export default start;
