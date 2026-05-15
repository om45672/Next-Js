import { NextResponse } from "next/server";
import { headers } from "next/headers";
export async function GET(request) {
    const headerList = await headers();
    // const requestHeaders = new Headers(request.headers);
    const authHeader = headerList.get("Authorization");
    console.log("Auth header",authHeader)

    // return new Response("<h1>Profile Api Data</h1>", {
    //     headers: {
    //         "content-Type": "text/html",
    //         "X-custom-Header": "Next.js Tutorial"
    //     }
    // })
    const response = NextResponse.json({ message: "Hello with headers" })
    response.headers.set("X-powered-By-Om", "Next.js 15");
    response.headers.set("Cache-Control", "no-store");

    return response;
}