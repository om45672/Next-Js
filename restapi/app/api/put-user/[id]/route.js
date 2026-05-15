import { NextResponse } from "next/server";
import { users } from "../../../../lib/users";

export async function PUT(request, context) {
  try {
    const url = new URL(request.url);
    const pathParts = url.pathname.split("/").filter(Boolean);
    const idFromPath = pathParts[pathParts.length - 1];
    const id = context?.params?.id ?? idFromPath;
    const userId = Number(id);

    if (Number.isNaN(userId)) {
      return NextResponse.json(
        { success: false, error: "Invalid user id" },
        { status: 400 },
      );
    }

    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    const body = await request.json();
    const { name, email, age } = body ?? {};

    if (!name || !email || age === undefined || age === null) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and age are required",
        },
        { status: 400 },
      );
    }

    const updatedUser = {
      id: userId,
      name,
      email,
      age,
    };

    users[userIndex] = updatedUser;

    return NextResponse.json({
      success: true,
      data: updatedUser,
      message: "User Updated!",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update user" },
      { status: 500 },
    );
  }
}
