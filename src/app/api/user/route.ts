import { NextResponse } from "next/server";
import { 
  getAllUser, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser 
} from "../../../modules/user/services/userService";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const data = await getUserById(id);
    return NextResponse.json(data);
  }

  const data = await getAllUser();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const data = await createUser(body);
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const body = await request.json();

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const data = await updateUser(id, body);
  return NextResponse.json(data);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const data = await deleteUser(id);
  return NextResponse.json(data);
}
