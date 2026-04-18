import { fetchPostId } from "@/services/api";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props{
    params : Promise<{id: string}>
}

export default async function PostIdPage({ params }: Props){
    const { id } = await params;
    const Id = Number(id);
    if( isNaN(Id) || Id<1 || Id>100){ notFound()}
    let post;
    try {
        post = await fetchPostId(Id);
    } catch {
        return(
            <div className="text-center py-16">
                <p className="text-red-500 text-lg font-medium">
                    Error al Cargar el Libro
                </p>
                <Link href={"/"} className="mt-6 inline-block bg-mauve-400 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-sm hover:bg-mauve-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Volver al listado
                </Link>
            </div>
        )} {
        
    }
    return(
        <h1></h1>
    );
}