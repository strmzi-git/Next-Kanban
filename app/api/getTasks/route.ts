import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "text3.json");

  // Read the content of the JSON file synchronously
  const jsonData = fs.readFileSync(filePath, "utf-8");

  // Parse the JSON content
  const parsedData = JSON.parse(jsonData);

  return NextResponse.json({ status: 200, message: parsedData });
}
