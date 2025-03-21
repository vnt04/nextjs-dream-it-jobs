import ConnectDB from "@/lib/connectDB";
import Job from "@/models/job";
import { NextResponse } from "next/server";

await ConnectDB();

export async function GET() {
  try {
    const jobs = await Job.find();
    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    NextResponse.json(
      {
        error: (error as Error).message,
      },
      { status: 404 }
    );
  }
}
