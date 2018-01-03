export declare class SpectatorEndpoint {
    constructor(...args: any[]);

    gettingActiveGame(...args: any[]): void;

    gettingFeaturedGames(...args: any[]): void;

}

export declare namespace SpectatorEndpoint {
    namespace prototype {
        function disableCaching(...args: any[]): void;

        function enableCaching(...args: any[]): void;

        function executingRequest(...args: any[]): void;

        function flushCache(...args: any[]): void;

        function getConfig(...args: any[]): void;

        function gettingActiveGame(...args: any[]): void;

        function gettingFeaturedGames(...args: any[]): void;

        function isDebugging(...args: any[]): void;

        function setCache(...args: any[]): void;

    }

}

