declare const config: {
    hostip: {
        endpoint: string;
        port: string;
    };
    runtime: {
        enableLogging: boolean;
    };
} & {
    hostip: {
        endpoint: string;
        httpEndpoint: string;
    };
    runtime: {
        debug: boolean;
        enableLogging: boolean;
    };
};
export default config;
