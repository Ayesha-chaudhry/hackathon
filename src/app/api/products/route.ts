import { client } from "@/lib/sanityClient";
import { NextResponse } from "next/server";

export const GET = async() => {
    try{
        let response = await client.fetch(`*[_type=="product"]`);
        console.log(response);
        return NextResponse.json({response})
    }
    catch(error){
        console.log((error as {message: string}).message);
        return NextResponse.json({"Error" : error})
    }
}