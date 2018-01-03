import {Endpoint} from '../Endpoint';

export declare class LeagueEndpoint extends Endpoint {
    constructor(...args: any[]);

    gettingChallengerLeague(...args: any[]): void;

    gettingLeagueById(...args: any[]): void;

    gettingLeagueForSummonerId(...args: any[]): void;

    gettingMasterLeague(...args: any[]): void;

    gettingPositionsForSummonerId(...args: any[]): void;

}

export declare namespace LeagueEndpoint {
    namespace prototype {
        function disableCaching(...args: any[]): void;

        function enableCaching(...args: any[]): void;

        function executingRequest(...args: any[]): void;

        function flushCache(...args: any[]): void;

        function getConfig(...args: any[]): void;

        function gettingChallengerLeague(...args: any[]): void;

        function gettingLeagueById(...args: any[]): void;

        function gettingLeagueForSummonerId(...args: any[]): void;

        function gettingMasterLeague(...args: any[]): void;

        function gettingPositionsForSummonerId(...args: any[]): void;

        function isDebugging(...args: any[]): void;

        function setCache(...args: any[]): void;

    }

}

