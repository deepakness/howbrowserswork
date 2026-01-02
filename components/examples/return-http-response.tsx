"use client";

import { useEffect, useMemo, useState } from "react";
import AddressBar from "../address-bar";

const exampleBodyHtml = [
    "<main>",
    "  <h1>Example Domain</h1>",
    "  <p>This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.</p>",
    '  <p><a href="https://www.iana.org/domains/example">More information...</a></p>',
    "</main>",
].join("\n");

const notFoundBodyHtml = [
    "<main>",
    "  <h1>404 - Page Not Found</h1>",
    "  <p>The server could not find the requested resource.</p>",
    "</main>",
].join("\n");

const buildHtmlDocument = (title: string, bodyHtml: string) => {
    const bodyLines = bodyHtml
        .split("\n")
        .map((line) => `    ${line}`)
        .join("\n");

    return [
        "<!doctype html>",
        "<html>",
        "  <head>",
        `    <title>${title}</title>`,
        '    <meta charset="utf-8" />',
        '    <meta name="viewport" content="width=device-width, initial-scale=1" />',
        "  </head>",
        "  <body>",
        bodyLines,
        "  </body>",
        "</html>",
    ].join("\n");
};

const normalizeInput = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const withProtocol = /^https?:\/\//i.test(trimmed)
        ? trimmed
        : `https://${trimmed}`;
    try {
        const url = new URL(withProtocol);
        if (url.protocol !== "http:" && url.protocol !== "https:") {
            return null;
        }
        return url;
    } catch {
        return null;
    }
};

const buildResponse = (url: URL) => {
    const host = url.hostname.toLowerCase();
    const isExample = host === "example.com";
    const bodyHtml = isExample ? exampleBodyHtml : notFoundBodyHtml;
    const title = isExample ? "Example Domain" : "404 - Page Not Found";
    const html = buildHtmlDocument(title, bodyHtml);
    const statusLine = isExample ? "HTTP/1.1 200 OK" : "HTTP/1.1 404 Not Found";
    const headers = [
        `Date: ${new Date().toUTCString()}`,
        "Content-Type: text/html; charset=UTF-8",
        `Content-Length: ${html.length}`,
        "Connection: close",
    ];

    return [statusLine, ...headers, "", html].join("\n");
};

export default function ReturnHttpResponse() {
    const [response, setResponse] = useState<string | null>(null);
    const [animateResult, setAnimateResult] = useState(false);

    const handleSubmit = (value: string) => {
        const parsed = normalizeInput(value);
        if (!parsed) {
            setResponse(null);
            return;
        }

        setResponse(buildResponse(parsed));
    };

    useEffect(() => {
        if (!response) return;
        setAnimateResult(false);
        const id = window.setTimeout(() => setAnimateResult(true), 30);
        return () => window.clearTimeout(id);
    }, [response]);

    return (
        <div className="space-y-4">
            <AddressBar
                value={"https://example.com"}
                onSubmit={handleSubmit}
                readOnly={true}
            />
            {response ? (
                <div
                    className={[
                        "rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-600 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        animateResult
                            ? "translate-y-0 scale-100 opacity-100"
                            : "translate-y-6 scale-[0.98] opacity-0 ",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <div className="mb-2 text-xs text-slate-400">
                        The raw HTTP response from the server:
                    </div>
                    <pre className="w-full whitespace-pre-wrap rounded-lg bg-slate-100 px-3 py-2 text-left font-mono text-xs text-slate-700">
                        {response}
                    </pre>
                </div>
            ) : (
                <div className="text-sm text-slate-400">
                    Click the "Go" button to get the HTTP response.
                </div>
            )}
        </div>
    );
}
