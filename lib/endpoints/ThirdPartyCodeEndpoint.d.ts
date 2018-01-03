import {Endpoint} from '../Endpoint';

export declare class ThirdPartyCodeEndpoint extends Endpoint {
    constructor(...args: any[]);

    gettingBySummoner(...args: any[]): void;

    verifying(...args: any[]): void;

}

export declare namespace ThirdPartyCodeEndpoint {
    namespace prototype {
        function disableCaching(...args: any[]): void;

        function enableCaching(...args: any[]): void;

        function executingRequest(...args: any[]): void;

        function flushCache(...args: any[]): void;

        function getConfig(...args: any[]): void;

        function gettingBySummoner(...args: any[]): void;

        function isDebugging(...args: any[]): void;

        function setCache(...args: any[]): void;

        function verifying(...args: any[]): void;

    }

}

