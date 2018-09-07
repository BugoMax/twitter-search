
const test = {
    created_at: 'Mon Feb 26 01:07:05 +0000 2018',
    id: 967928974960545793,
    text: 'Congratulations to #Olympics athletes who won gold! Neutron stars like the one at the heart of the Crab Nebula may… https://t.co/vz4SnPupe2',
    entities: {
        hashtags: [
            {
                text: 'Olympics',
                indices: [
                    19,
                    28
                ]
            }
        ],
        urls: [
            {
                url: 'https://t.co/vz4SnPupe2',
                expanded_url: 'https://twitter.com/i/web/status/967928974960545793',
                display_url: 'twitter.com/i/web/status/9…',
                indices: [
                    116,
                    139
                ]
            }
        ]
    },
    user: {
        id: 19802879,
        name: 'NASA JPL',
        screen_name: 'NASAJPL',
        url: 'http://t.co/gcM9d1YLUB',
        entities: {
            url: {
                urls: [
                    {
                        url: 'http://t.co/gcM9d1YLUB',
                        expanded_url: 'http://www.jpl.nasa.gov',
                        display_url: 'jpl.nasa.gov',
                        indices: [
                            0,
                            22
                        ]
                    }
                ]
            },
            description: {
                'urls': []
            }
        },
        verified: true,
        profile_image_url: 'https://pbs.twimg.com/media/DWwx2uAVQAASfAC.jpg:large',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/2305452633/lg0hov3l8g4msxbdwv48_normal.jpeg'
    },
    retweet_count: 325,
    favorite_count: 1280
};

const getTestParams = (amount) => {

    let params = [];

    for (let i = 0; i < amount; i++) {
        const item = Object.assign({}, test, { id: (test.id * i) });
        params.push(item);
    }

    return params;
};

export default getTestParams;
