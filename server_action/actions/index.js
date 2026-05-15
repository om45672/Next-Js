"use server";

export async function createUser(formData) {
    const name = formData.get("name");
    console.log("the name", name);
}