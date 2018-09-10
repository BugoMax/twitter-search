
import ConfigInterface from './ConfigInterface';

const serverProtocol: string = process.env.SERVER_PROTOCOL || "http";
const serverPort: number = process.env.SERVER_PORT || 8088;

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
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET || ''
    }
};

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
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET || ''
    }
};

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
