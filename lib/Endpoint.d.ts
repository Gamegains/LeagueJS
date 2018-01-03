export declare class Endpoint {
    constructor(...args: any[]);

    disableCaching(...args: any[]): void;

    enableCaching(...args: any[]): void;

    executingRequest(...args: any[]): void;

    flushCache(...args: any[]): void;

    getConfig(...args: any[]): void;

    isDebugging(...args: any[]): void;

    setCache(...args: any[]): void;

}

export declare namespace Endpoint {
    namespace prototype {
        function disableCaching(...args: any[]): void;

        function enableCaching(...args: any[]): void;

        function executingRequest(...args: any[]): void;

        function flushCache(...args: any[]): void;

        function getConfig(...args: any[]): void;

        function isDebugging(...args: any[]): void;

        function setCache(...args: any[]): void;

    }

}

