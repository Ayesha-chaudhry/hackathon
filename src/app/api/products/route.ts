import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";
export const GET = async() => {
    try{
        const response = await client.fetch("*[_type == 'product']")
        console.log("RES : ", response)
        return NextResponse.json({response})
    }
    catch(error){
        console.log((error as {message: string}).message)
        return NextResponse.json({"Error": error})
    }
}