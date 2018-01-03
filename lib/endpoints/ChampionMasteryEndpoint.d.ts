import {Endpoint} from '../Endpoint';

export declare class ChampionMasteryEndpoint extends Endpoint {
    constructor(...args: any[]);

    gettingBySummoner(...args: any[]): void;

    gettingBySummonerForChampion(...args: any[]): void;

    gettingScoresBySummoner(...args: any[]): void;

}

export declare namespace ChampionMasteryEndpoint {
    namespace prototype {
        function disableCaching(...args: any[]): void;

        function enableCaching(...args: any[]): void;

        function executingRequest(...args: any[]): void;

        function flushCache(...args: any[]): void;

        function getConfig(...args: any[]): void;

        function gettingBySummoner(...args: any[]): void;

        function gettingBySummonerForChampion(...args: any[]): void;

        function gettingScoresBySummoner(...args: any[]): void;

        function isDebugging(...args: any[]): void;

        function setCache(...args: any[]): void;

    }

}

