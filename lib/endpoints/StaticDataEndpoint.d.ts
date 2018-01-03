import {Endpoint} from '../Endpoint';

export declare class StaticDataEndpoint extends Endpoint {
    constructor(...args: any[]);

    gettingChampionById(...args: any[]): void;

    gettingChampions(...args: any[]): void;

    gettingItemById(...args: any[]): void;

    gettingItems(...args: any[]): void;

    gettingLanguageStrings(...args: any[]): void;

    gettingLanguages(...args: any[]): void;

    gettingMaps(...args: any[]): void;

    gettingMasteries(...args: any[]): void;

    gettingMasteryById(...args: any[]): void;

    gettingProfileIcons(...args: any[]): void;

    gettingRealms(...args: any[]): void;

    gettingRunes(...args: any[]): void;

    gettingRunesById(...args: any[]): void;

    gettingSummonerSpells(...args: any[]): void;

    gettingSummonerSpellsById(...args: any[]): void;

    gettingVersions(...args: any[]): void;

}

export declare namespace StaticDataEndpoint {
    namespace prototype {
        function disableCaching(...args: any[]): void;

        function enableCaching(...args: any[]): void;

        function executingRequest(...args: any[]): void;

        function flushCache(...args: any[]): void;

        function getConfig(...args: any[]): void;

        function gettingChampionById(...args: any[]): void;

        function gettingChampions(...args: any[]): void;

        function gettingItemById(...args: any[]): void;

        function gettingItems(...args: any[]): void;

        function gettingLanguageStrings(...args: any[]): void;

        function gettingLanguages(...args: any[]): void;

        function gettingMaps(...args: any[]): void;

        function gettingMasteries(...args: any[]): void;

        function gettingMasteryById(...args: any[]): void;

        function gettingProfileIcons(...args: any[]): void;

        function gettingRealms(...args: any[]): void;

        function gettingRunes(...args: any[]): void;

        function gettingRunesById(...args: any[]): void;

        function gettingSummonerSpells(...args: any[]): void;

        function gettingSummonerSpellsById(...args: any[]): void;

        function gettingVersions(...args: any[]): void;

        function isDebugging(...args: any[]): void;

        function setCache(...args: any[]): void;

    }

}

