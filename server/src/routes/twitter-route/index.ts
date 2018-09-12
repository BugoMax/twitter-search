
import Twitter from 'twitter';

import logger from '../../logger';
import ConfigInterface from '../../config/ConfigInterface';
import TweetModelWorker from './TweetModelWorker';

function twitterRoute(app: any, config: ConfigInterface): void {

    const tweetModelWorker = new TweetModelWorker();
    const client = new Twitter(config.twitter);

    app.post('/searchTweets', (req: any, res: any): void => {

        const searchParams = {
            q: `#${req.body.searchTwitsPrams.value}`,
            count: 50
            // result_type: 'recent',
            // lang: 'en'
        };

        logger.debug(`Type - POST. Route - twitter-search. Params - ${JSON.stringify(searchParams)}`);

        client.get('search/tweets', searchParams, function(error: any, tweets: any, response: any): void {

            if (error) {
                res.send({ 'error': 'AN error has occurred' });
                logger.error(error);
            } else {
                res.send(tweetModelWorker.parseTweets(tweets.statuses));
            }
        });
    });
}

export default twitterRoute;
