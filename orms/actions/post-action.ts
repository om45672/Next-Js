"use server"
import { prisma } from "@/lib/db"

export const createPost = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!title) return;

    const post = await prisma.pOST.create({
        data: {
            title,
            content
        }
    });
    return post;
}

export const getAllPost = async () => {
    const posts = await prisma.pOST.findMany({
        orderBy: {
            updatedAt: "asc"
        }
    });
    return posts;
}

export const getPostById = async (id: string) => {
    const post = await prisma.pOST.findUnique({
        where: {
            id: id
        }
    });
    return post;
}

export const deletePostById = async (id: string) => {
    await prisma.pOST.delete({
        where: {
            id: id
        }
    });
    return {
        message: "Post deleted successfully!"
    }
}

export const updatePost = async (id: string, formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    if (!title) return;

    const updatedPost = await prisma.pOST.update({
        where: {
            id: id
        },
        data: {
            title,
            content
        }
    });
    return updatedPost;
}
