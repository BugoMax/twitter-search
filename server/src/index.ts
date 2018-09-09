
import express from 'express';
import Twitter from 'twitter';
import bodyParser from 'body-parser';
import cors from 'cors';

// import server from './app';
import config from './config';
import logger from './logger';

import getTestParams from './routes/twitter-route/testParams';

const start = (): void => {

    console.log(config);

    const app = express();
    const client = new Twitter(config.twitter);

    app.use(bodyParser.json());
    app.use(cors());

    app.listen(config.server.port, config.server.hostName, (): void => {
        logger.info(`Server running at ${config.server.url}`);
    });

    app.post('/searchTweets', (req: any, res: any): void => {

        console.log(req.body);

        setTimeout(() => res.send(getTestParams(12)), 1000);

        // client.get('search/tweets', {q: '#nodejs'}, function(error: any, tweets: any, response: any): void {
        //
        //     if (error) {
        //         res.send({ 'error': 'AN error has occurred' });
        //         logger.error(error);
        //     } else {
        //         res.send(tweets);
        //     }
        // });
    });
};

export default start;
