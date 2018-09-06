
import express from 'express';
import Twitter from 'twitter';

// import server from './app';
import config from './config';
import logger from './logger';

const start = (): void => {

    console.log(config);

    const app = express();
    const client = new Twitter(config.twitter);

    app.listen(config.server.port, config.server.hostName, (): void => {
        logger.info(`Server running at ${config.server.url}`);
    });

    app.get('/search', function(req: any, res: any, next: any) {

        client.get('search/tweets', {q: '#nodejs'}, function(error: any, tweets: any, response: any): void {

            if (error) {
                res.send({ 'error': 'AN error has occurred' });
                logger.error(error);
            } else {
                res.send(tweets);
            }
        });
    });
};

export default start;
