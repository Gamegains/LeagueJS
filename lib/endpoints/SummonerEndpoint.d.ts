import {Endpoint} from '../Endpoint';

export declare class SummonerEndpoint extends Endpoint {
    constructor(...args: any[]);

    gettingByAccount(...args: any[]): void;

    gettingById(...args: any[]): void;

    gettingByName(...args: any[]): void;

}

export declare namespace SummonerEndpoint {
    namespace prototype {
        function disableCaching(...args: any[]): void;

        function enableCaching(...args: any[]): void;

        function executingRequest(...args: any[]): void;

        function flushCache(...args: any[]): void;

        function getConfig(...args: any[]): void;

        function gettingByAccount(...args: any[]): void;

        function gettingById(...args: any[]): void;

        function gettingByName(...args: any[]): void;

        function isDebugging(...args: any[]): void;

        function setCache(...args: any[]): void;

    }

}

