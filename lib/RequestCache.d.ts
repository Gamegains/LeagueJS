export declare function RequestCache(...args: any[]): void;

export declare namespace RequestCache {
    class EventEmitter {
        constructor();

        addListener(type: any, listener: any): any;

        emit(type: any, ...args: any[]): any;

        eventNames(): any;

        getMaxListeners(): any;

        listenerCount(type: any): any;

        listeners(type: any): any;

        on(type: any, listener: any): any;

        once(type: any, listener: any): any;

        prependListener(type: any, listener: any): any;

        prependOnceListener(type: any, listener: any): any;

        removeAllListeners(type: any, ...args: any[]): any;

        removeListener(type: any, listener: any): any;

        setMaxListeners(n: any): any;

        static EventEmitter: any;

        static defaultMaxListeners: number;

        static init(): void;

        static listenerCount(emitter: any, type: any): any;

        static usingDomains: boolean;

    }

    const defaultMaxListeners: number;

    const usingDomains: boolean;

    const version: string;

    function listenerCount(emitter: any, type: any): any;
}

