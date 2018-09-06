
interface ConfigInterface {
    mode: string,
    server: {
        protocol: string,
        port: number,
        domain: string,
        url: string
    }
}

export default ConfigInterface;
