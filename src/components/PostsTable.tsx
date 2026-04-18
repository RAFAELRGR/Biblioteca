"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/services/api";
import { Posts } from "@/types";
import Link from "next/link";
import BaseTable from "./BaseTable";

export default function PostsTable() {
  const { data, isLoading, isError } = useQuery<Posts[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <BaseTable />;
  if (isError) return <p>Error al cargar los libros</p>;

  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal text-slate-500">ID</p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal text-slate-500">Título</p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50">
                <p className="text-sm font-normal text-slate-500">Descripción</p>
              </th>
              <th className="p-4 border-b border-slate-200 bg-slate-50" />
            </tr>
          </thead>
          <tbody>
            {data?.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-gray-400 font-mono text-xs">
                  #{post.id}
                </td>
                <td className="px-4 py-3 font-medium text-gray-800 capitalize max-w-xs">
                  <span className="line-clamp-2">{post.title}</span>
                </td>
                <td className="px-4 py-3 text-gray-500 hidden md:table-cell max-w-sm">
                  {post.body.slice(0, 50)}
                  {post.body.length > 50 && "…"}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/posts/${post.id}`}
                    className="text-green-600 hover:text-emerald-950 font-medium text-xs hover:underline"
                  >
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