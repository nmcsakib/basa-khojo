import { NextRequest } from "next/server";
import { collectionsObj, dbConnect } from "@/app/lib/mongodb";
import { OptionalId, Document } from "mongodb";

// GET handler
export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  // Extract query params
  const gender = url.searchParams.get("gender");
  const division = url.searchParams.get("division");
  const district = url.searchParams.get("district");
  const upazila = url.searchParams.get("upazila");
  const union = url.searchParams.get("union");

  // Build dynamic filter object
  const matchStage: Record<string, unknown> = {};

  if (gender) matchStage.gender = gender;
  if (division) matchStage["location.div_en"] = division;
  if (district) matchStage["location.dis_en"] = district;
  if (upazila) matchStage["location.upa_en"] = upazila;
  if (union) matchStage["location.uni_en"] = union;

  // Connect and fetch filtered posts
  const posts = await (
    await dbConnect(collectionsObj.posts)
  )
    .aggregate([{ $match: {...matchStage,
     $or: [
      {approved: {$ne : "pending"}}
     ]
    } }])
    .toArray();

  return Response.json(posts);
}

export async function POST(req: NextRequest) {
  const data: OptionalId<Document> = await req.json();
  const result = await (
    await dbConnect(collectionsObj.posts)
  ).insertOne(data);

  return Response.json(result);
}
