
interface ConfigInterface {
    mode: string,
    server: {
        protocol: string,
        hostName: string,
        port: number,
        domain: string,
        url: string
    },
    twitter: {
        consumer_key: string,
        consumer_secret: string
    }
}

export default ConfigInterface;
