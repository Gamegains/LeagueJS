import Endpoint from '../Endpoint';

export declare class ChampionEndpoint extends Endpoint {
    constructor(...args: any[]);

    gettingById(...args: any[]): void;

    gettingList(...args: any[]): void;

}

export declare namespace ChampionEndpoint {
    namespace prototype {
        function disableCaching(...args: any[]): void;

        function enableCaching(...args: any[]): void;

        function executingRequest(...args: any[]): void;

        function flushCache(...args: any[]): void;

        function getConfig(...args: any[]): void;

        function gettingById(...args: any[]): void;

        function gettingList(...args: any[]): void;

        function isDebugging(...args: any[]): void;

        function setCache(...args: any[]): void;

    }

}

