
import TweetInterface from './TweetInterface';

class TweetModelWorker {

    public parseTweets(tweets: Array<any>): Array<TweetInterface> {

        const parsedTweets = [];

        for (let i in tweets) {
            parsedTweets.push(this.createTweetModel(tweets[i]));
        }

        return parsedTweets;
    }

    public createTweetModel(tweet: any): TweetInterface {

        return Object.assign({}, {
            created_at: tweet.created_at,
            id: tweet.id,
            text: tweet.text,
            entities: {
                hashtags: tweet.entities.hashtags,
                urls: tweet.entities.urls
            },
            user: {
                id: tweet.user.id,
                name: tweet.user.name,
                screen_name: tweet.user.screen_name,
                location: tweet.user.location,
                description: tweet.user.description,
                url: tweet.user.url,
                entities: {
                    description: {
                        urls: tweet.user.entities.description.urls
                    }
                },
                followers_count: tweet.user.followers_count,
                friends_count: tweet.user.friends_count,
                verified: tweet.user.verified,
                profile_image_url: tweet.user.profile_image_url,
                profile_image_url_https: tweet.user.profile_image_url_https
            },
            retweet_count: tweet.retweet_count,
            favorite_count: tweet.favorite_count
        });
    }
}

export default TweetModelWorker;
