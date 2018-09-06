
interface TwitInterface {
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
        url: string,
        entities: {
            url: {
                urls: [
                    {
                        url: string,
                        expanded_url: string,
                        display_url: string,
                        indices: Array<number>
                    }
                    ]
            },
            description: {
                urls: Array<any>
            }
        },
        verified: boolean,
        profile_image_url: string,
        profile_image_url_https: string
    },
    retweet_count: number,
    favorite_count: number
}

export default TwitInterface;
