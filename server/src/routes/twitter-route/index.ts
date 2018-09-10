
// import Twitter from 'twitter';

import logger from '../../logger';
import getTestParams from './getTestParams';

function twitterRoute(app: any):void {

    // const client = new Twitter(config.twitter);

    app.post('/searchTweets', (req: any, res: any): void => {

        logger.debug(`Type - POST. Route - twitter-search. Body - ${JSON.stringify(req.body)}`);

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
}

export default twitterRoute;
