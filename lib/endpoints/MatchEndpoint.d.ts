import Endpoint from '../Endpoint';

export declare class MatchEndpoint extends Endpoint {
    constructor(...args: any[]);

    gettingById(...args: any[]): void;

    gettingByIdForTournament(...args: any[]): void;

    gettingIdsByTournament(...args: any[]): void;

    gettingListByAccount(...args: any[]): void;

    gettingListByAccountWithoutPagination(...args: any[]): void;

    gettingRecentListByAccount(...args: any[]): void;

    gettingTimelineById(...args: any[]): void;

}

export declare namespace MatchEndpoint {
    namespace prototype {
        function disableCaching(...args: any[]): void;

        function enableCaching(...args: any[]): void;

        function executingRequest(...args: any[]): void;

        function flushCache(...args: any[]): void;

        function getConfig(...args: any[]): void;

        function gettingById(...args: any[]): void;

        function gettingByIdForTournament(...args: any[]): void;

        function gettingIdsByTournament(...args: any[]): void;

        function gettingListByAccount(...args: any[]): void;

        function gettingListByAccountWithoutPagination(...args: any[]): void;

        function gettingRecentListByAccount(...args: any[]): void;

        function gettingTimelineById(...args: any[]): void;

        function isDebugging(...args: any[]): void;

        function setCache(...args: any[]): void;

    }

}

