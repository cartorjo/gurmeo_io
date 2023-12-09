/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import {PassThrough} from "node:stream";

import type {AppLoadContext, EntryContext} from "@remix-run/node";
import {createReadableStreamFromReadable} from "@remix-run/node";
import {RemixServer} from "@remix-run/react";
import isbot from "isbot";
import {renderToPipeableStream} from "react-dom/server";

const ABORT_DELAY = 5_000;
const INTERNAL_SERVER_ERROR = 500;

function logError(error: unknown, shellRendered: boolean) {
    if (shellRendered) {
        console.error(error);
    }
}

function handleRequestCommon(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
    isBot: boolean
) {
    return new Promise((resolve, reject) => {
        let shellRendered = false;
        const {pipe, abort} = renderToPipeableStream(
            <RemixServer
                context={remixContext}
                url={request.url}
                abortDelay={ABORT_DELAY}
            />,
            {
                onShellReady() {
                    shellRendered = true;
                    const body = new PassThrough();
                    const stream = createReadableStreamFromReadable(body);

                    responseHeaders.set("Content-Type", "text/html");

                    resolve(
                        new Response(stream, {
                            headers: responseHeaders,
                            status: responseStatusCode,
                        })
                    );

                    pipe(body);
                },
                onShellError(error: unknown) {
                    reject(error);
                },
                onError(error: unknown) {
                    responseStatusCode = INTERNAL_SERVER_ERROR;
                    logError(error, shellRendered);
                },
            }
        );

        setTimeout(abort, ABORT_DELAY);
    });
}

export default function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
    loadContext: AppLoadContext
) {
    const isBot = isbot(request.headers.get("user-agent"));

    return isBot
        ? handleRequestCommon(request, responseStatusCode, responseHeaders, remixContext, true)
        : handleRequestCommon(request, responseStatusCode, responseHeaders, remixContext, false);
}