// Type definitions for proxy v0.2.4
// Project: https://github.com/Lostpig/proxy
// Definitions by: Lostpig <https://github.com/Lostpig/>

import * as http from "http"
import * as url from "url"

declare namespace Proxy {
    export interface IProxyOptions {
        target: string | url.Url
    }
    export interface ProxyServer extends http.Server {
        on(event: string, listener: Function): this
        on(event: 'proxyReq', listener: (proxyReq: http.ClientRequest, req: http.IncomingMessage, res: http.ServerResponse) => void): this
        on(event: 'proxyRes', listener: (proxyRes: http.IncomingMessage, req: http.IncomingMessage, res: http.ServerResponse) => void): this
        on(event: 'proxyEnd', listener: (req: http.IncomingMessage, res: http.ServerResponse, proxyRes: http.IncomingMessage) => void): this
    }
}

declare function setup (server: http.Server, options: Proxy.IProxyOptions): Proxy.ProxyServer

export = setup