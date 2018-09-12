
import ConfigInterface from './ConfigInterface';

const serverProtocol: string = process.env.SERVER_PROTOCOL || "http";
const serverPort: number = process.env.SERVER_PORT || 8088;

const getConfig = () => {

    if (process.env.NODE_ENV === 'production') {

        const prodConfig: ConfigInterface = {
            mode: 'production',
            server: {
                protocol: serverProtocol,
                hostName: 'localhost',
                port: serverPort,
                domain: `localhost:${serverPort}`,
                url: `${serverProtocol}://localhost:${serverPort}`
            },
            twitter: {
                consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
                consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
                access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '',
                access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '',
            }
        };

        return prodConfig;
    }

    const devConfig: ConfigInterface = {
        mode: 'dev',
        server: {
            protocol: serverProtocol,
            hostName: 'localhost',
            port: serverPort,
            domain: `localhost:${serverPort}`,
            url: `${serverProtocol}://localhost:${serverPort}`
        },
        twitter: {
            consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
            access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '',
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '',
        }
    };

    return devConfig;
};

export default getConfig;
