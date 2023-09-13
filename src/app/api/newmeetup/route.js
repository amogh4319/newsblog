import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import Meetup from '../../../lib/model/meetup'
import { NextResponse } from "next/server";


export async function GET(){
    await mongoose.connect(connectionStr);
    console.log('connected to database!!!')
     const data=await Meetup.find();
     mongoose.connection.close(); 
    return NextResponse.json(data)
}
export async function POST(request){
    const payload=await request.json();
    await mongoose.connect(connectionStr);
    console.log('connected to database!!!')
     let meetup=new Meetup(payload)
     const result=await meetup.save();
    return NextResponse.json({result,success:true})
}