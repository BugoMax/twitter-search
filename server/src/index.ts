
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// import server from './app';
import initRoutes from './routes';
import config from './config';
import logger from './logger';

// import request from 'request';

const start = (): void => {

    console.log(config);

    const app = express();

    app.use(bodyParser.json());
    app.use(cors());
    initRoutes(app);

    app.listen(config.server.port, config.server.hostName, (): void => {
        logger.info(`Server running at ${config.server.url}`);
    });
};

export default start;
