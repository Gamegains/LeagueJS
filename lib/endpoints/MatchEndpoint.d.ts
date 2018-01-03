import {Endpoint} from '../Endpoint';

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
