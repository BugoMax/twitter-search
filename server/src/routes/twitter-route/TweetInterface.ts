
interface TweetInterface {
    created_at: string,
    id: number,
    text: string,
    entities: {
        hashtags: [
            {
                text: string,
                indices: Array<number>
            }
            ],
        urls: [
            {
                url: string,
                expanded_url: string,
                display_url: string,
                indices: Array<number>
            }
            ]
    },
    user: {
        id: number,
        name: string,
        screen_name: string,
        location: string,
        description: string,
        url: any,
        entities: {
            description: {
                urls: Array<any>
            }
        },
        followers_count: number,
        friends_count: number,
        verified: boolean,
        profile_image_url: string,
        profile_image_url_https: string,
        profile_banner_url: string
    },
    retweet_count: number,
    favorite_count: number
}

export default TweetInterface;
