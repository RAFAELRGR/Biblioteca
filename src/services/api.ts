
import { Posts, CreatePosts } from "@/types";

const URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts(): Promise<Posts[]>{
    const res = await fetch(`${URL}/posts`);
    if (!res.ok) throw new Error("No se pudo cargar los Libros");
    return(res.json());
}


export async function fetchPostId(id: number): Promise<Posts>{
    const res = await fetch(`${URL}/posts/${id}`);
    if (!res.ok) throw new Error("No se pudo cargar el Libro")
    return(res.json());   
}

export async function CreateNewPosts(payload : CreatePosts): Promise<Posts> {
    const res = await fetch(`${URL}/posts`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Error al Crear un nuevo Libro")
    return res.json();
    
}