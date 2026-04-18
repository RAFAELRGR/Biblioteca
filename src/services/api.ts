
import { Posts } from "@/types";

const URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts(): Promise<Posts[]>{
    const res = await fetch(`${URL}/posts`);
    if (!res.ok) throw new Error("No se pudo cargar los Libros");
    return(res.json());
}

