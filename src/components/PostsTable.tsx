"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts} from "@/services/api";
import { Posts } from "@/types";
import Link from "next/link";
import BaseTable from "./BaseTable";
import { PageSize } from "@/types";
import { useState } from "react";
import Pagination from "./Pagination";

interface Props {
  search: string;
}

export default function PostsTable({ search }: Props) {

  const [pageSize, setPageSize] = useState<PageSize>(10);
  const [page, setPage] = useState(1);

  
  const { data, isLoading, isError } = useQuery<Posts[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <BaseTable />;
  if (isError) return <p>Error al cargar los libros</p>;


  const filtered = data?.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )
  const paginated = filtered?.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil((filtered?.length ?? 0) / pageSize);

  return (
    
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-t border-gray-100">
        <Pagination onPageSizeChange={(size) => { setPageSize(size); setPage(1); }} />
        <div className="px-4 py-3 flex items-center gap-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 disabled:opacity-30 hover:bg-gray-50"
            >Anterior
            </button>

            <span className="text-sm text-gray-500">
              {page} / {totalPages}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 disabled:opacity-30 hover:bg-gray-50"
            >Siguiente
            </button>
      </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left font-semibold text-gray-600 select-none w-16">ID</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-600 select-none">Título</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-600 hidden md:table-cell">Descripción</th>
              <th className="px-4 py-3 w-24" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginated?.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-gray-400 font-mono text-xs">#{post.id}</td>
                <td className="px-4 py-3 font-medium text-gray-800 capitalize max-w-xs">
                  <span className="line-clamp-2">{post.title}</span>
                </td>
                <td className="px-4 py-3 text-gray-500 hidden md:table-cell max-w-sm">
                  {post.body.slice(0, 50)}{post.body.length > 50 && "…"}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/posts/${post.id}`} className="text-green-600 hover:text-emerald-950 font-medium text-xs hover:underline">
                    Ver más
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    
  );
}