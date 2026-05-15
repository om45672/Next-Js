import { NextResponse } from "next/server";
import { users } from "../../../lib/users";

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    const age = searchParams.get("age");

    let filteredUsers = users;
    if (age) {
      filteredUsers = filteredUsers.filter((user)=>user.age===Number(age))
    }
    if (name) {
      filteredUsers = filteredUsers.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
    }
    return NextResponse.json({
      success: true,
      data: filteredUsers,
      total: filteredUsers.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to get users",
      },
      { status: 500 },
    );
  }
}
