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

    function init(): void;

    function listenerCount(emitter: any, type: any): any;

    namespace EventEmitter {
        namespace init {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace prototype {
            const domain: any;

            function addListener(type: any, listener: any): any;

            function emit(type: any, ...args: any[]): any;

            function eventNames(): any;

            function getMaxListeners(): any;

            function listenerCount(type: any): any;

            function listeners(type: any): any;

            function on(type: any, listener: any): any;

            function once(type: any, listener: any): any;

            function prependListener(type: any, listener: any): any;

            function prependOnceListener(type: any, listener: any): any;

            function removeAllListeners(type: any, ...args: any[]): any;

            function removeListener(type: any, listener: any): any;

            function setMaxListeners(n: any): any;

            namespace addListener {
                const prototype: {
                };

            }

            namespace emit {
                const prototype: {
                };

            }

            namespace eventNames {
                const prototype: {
                };

            }

            namespace getMaxListeners {
                const prototype: {
                };

            }

            namespace listenerCount {
                const prototype: {
                };

            }

            namespace listeners {
                const prototype: {
                };

            }

            namespace on {
                const prototype: {
                };

            }

            namespace once {
                const prototype: {
                };

            }

            namespace prependListener {
                const prototype: {
                };

            }

            namespace prependOnceListener {
                const prototype: {
                };

            }

            namespace removeAllListeners {
                const prototype: {
                };

            }

            namespace removeListener {
                const prototype: {
                };

            }

            namespace setMaxListeners {
                const prototype: {
                };

            }

        }

    }

    namespace init {
        const prototype: {
        };

    }

    namespace listenerCount {
        const prototype: {
        };

    }

    namespace prototype {
        const domain: any;

        function addListener(type: any, listener: any): any;

        function close(): void;

        function del(keys: any, cb: any): any;

        function emit(type: any, ...args: any[]): any;

        function eventNames(): any;

        function flushAll(_startPeriod: any): void;

        function get(key: any, cb: any, errorOnMissing: any, ...args: any[]): any;

        function getMaxListeners(): any;

        function getStats(): any;

        function getTtl(key: any, cb: any): any;

        function keys(cb: any): any;

        function listenerCount(type: any): any;

        function listeners(type: any): any;

        function mget(keys: any, cb: any): any;

        function on(type: any, listener: any): any;

        function once(type: any, listener: any): any;

        function prependListener(type: any, listener: any): any;

        function prependOnceListener(type: any, listener: any): any;

        function removeAllListeners(type: any, ...args: any[]): any;

        function removeListener(type: any, listener: any): any;

        function set(key: any, value: any, ttl: any, cb: any, ...args: any[]): any;

        function setMaxListeners(n: any): any;

        function ttl(...args: any[]): any;

        namespace addListener {
            const prototype: {
            };

        }

        namespace close {
            const prototype: {
            };

        }

        namespace del {
            const prototype: {
            };

        }

        namespace emit {
            const prototype: {
            };

        }

        namespace eventNames {
            const prototype: {
            };

        }

        namespace flushAll {
            const prototype: {
            };

        }

        namespace get {
            const prototype: {
            };

        }

        namespace getMaxListeners {
            const prototype: {
            };

        }

        namespace getStats {
            const prototype: {
            };

        }

        namespace getTtl {
            const prototype: {
            };

        }

        namespace keys {
            const prototype: {
            };

        }

        namespace listenerCount {
            const prototype: {
            };

        }

        namespace listeners {
            const prototype: {
            };

        }

        namespace mget {
            const prototype: {
            };

        }

        namespace on {
            const prototype: {
            };

        }

        namespace once {
            const prototype: {
            };

        }

        namespace prependListener {
            const prototype: {
            };

        }

        namespace prependOnceListener {
            const prototype: {
            };

        }

        namespace removeAllListeners {
            const prototype: {
            };

        }

        namespace removeListener {
            const prototype: {
            };

        }

        namespace set {
            const prototype: {
            };

        }

        namespace setMaxListeners {
            const prototype: {
            };

        }

        namespace ttl {
            const prototype: {
            };

        }

    }

}

