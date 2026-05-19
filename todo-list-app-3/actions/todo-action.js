"use server";
import { connectDB } from "@/lib/db";
import Todo from "@/models/todo";
import { todoSchema } from "@/schemas/todo-schema";
import { success } from "zod";

export async function getTodos() {
  try {
    const connected = await connectDB();
    if (!connected) {
      throw new Error("Database connection failed");
    }
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to get todos");
    return [];
  }
}

export async function addTodo(data) {
  try {
    const connected = await connectDB();
    if (!connected) {
      return { error: "Database connection failed" };
    }

    const validatedFields = todoSchema.safeParse(data);
    if (!validatedFields.success) {
      return { error: "Invalid Fields" };
    }

    const newTodo = await Todo.create(validatedFields.data);
    return JSON.parse(JSON.stringify(newTodo));
  } catch (error) {
    console.error(error);
    return { error: "Failed to add todos" };
  }
}

export async function toggleTodo(id, completed) {
  const connected = await connectDB();
  if (!connected) {
    return { error: "Database connection failed" };
  }
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { completed },
      {new:true}
    )
    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch todos" };
  }
}
export async function deleteTodo(id) {
  const connected = await connectDB();
  if (!connected) {
    return { error: "Database connection failed" };
  }
  try {
    const updatedTodo = await Todo.findByIdAndDelete(id)
    return {
      success: true,
    }
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch todos" };
  }
}
