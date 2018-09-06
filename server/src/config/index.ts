
import ConfigInterface from './ConfigInterface';

const serverProtocol: string = process.env.SERVER_PROTOCOL || "http";
const serverPort: number = process.env.SERVER_PORT || 8088;

const devConfig: ConfigInterface = {
    mode: 'dev',
    server: {
        protocol: serverProtocol,
        port: serverPort,
        domain: `localhost:${serverPort}`,
        url: `${serverProtocol}://localhost:${serverPort}`
    }
};

const prodConfig: ConfigInterface = {
    mode: 'production',
    server: {
        protocol: serverProtocol,
        port: serverPort,
        domain: `localhost:${serverPort}`,
        url: `${serverProtocol}://localhost:${serverPort}`
    }
};

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
