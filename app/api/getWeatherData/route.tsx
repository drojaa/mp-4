import {NextResponse} from "next/server";
export const dynamic = "force-dynamic";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

export async function GET(request: Request): Promise<NextResponse>{
    // Using String-deconstruction, extract search parameters from the UrL
    const {searchParams} = new URL(request.url);
    //Get value of the 'city' parameter
    const city = searchParams.get("city");
    //If no 'city' parameter from the query string, return an error
    if(!city){
        return NextResponse.json({error: "No [city] provided"}, {status:400})
    }
    // Make an API request to Visual Crossing
    const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days%2Ccurent%2Cevents&key=${WEATHER_API_KEY}&contentType=json`
    );
    // If fetching the data fails, then return an internal error
    if(res.status !== 200) {
        return NextResponse.json({error: "Failed to fetch data"}, {status:500})
    }

    const data = await res.json();

    return NextResponse.json(data)
}