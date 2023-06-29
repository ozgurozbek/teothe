import { NextRequest, NextResponse } from "next/server";
//https://www.prisma.io/nextjs
export async function GET(req: NextRequest, res: NextResponse) {
  console.log(req);
  return NextResponse.json({
    data: "string",
  });
}
