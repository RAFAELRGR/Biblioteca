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
                <Link href={"/"} className="not-[]:mt-6 inline-block bg-mauve-400 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-sm hover:bg-mauve-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:bg-mauve-500 focus:ring-offset-2">
                    Volver al listado
                </Link>
            </div>
        )} 
    return(
        <div className="max-w-2xl mx-auto">
            <Link
                href="/"
                className="mt-6 mb-6  inline-block bg-mauve-400 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-sm hover:bg-mauve-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:bg-mauve-500 focus:ring-offset-2"
            >Volver al listado
            </Link>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
                <span className="bg-zinc-400 text-white text-sm font-bold px-3 py-1 rounded-full">
                    #{post.id}
                </span>
                <span className="text-gray-400 text-sm">
                    Usuario {post.userId}
                </span>
        </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 capitalize">
            {post.title}
            </h2>
            <hr className="border-gray-100 mb-6" />
            <p className="text-gray-600 leading-relaxed">
                {post.body}
            </p>
        </div>
        </div>
    );
}