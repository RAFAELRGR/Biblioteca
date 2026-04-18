
"use client";
import { useState } from "react";
import PostsTable from "./PostsTable";
import PostsSearch from "./PostsSearch";
import { useDebounce } from "@/hooks/useDebounce";
import CreatePostsNew from "./CreatePosts";

export default function PostsView() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
        <button
          onClick={() => setShowModal(true)}
          className="mb-4 inline-flex items-center gap-2 bg-green-800 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-xl transition-colors shadow-sm"
        >Nuevo libro
        </button>
      <PostsSearch searchValue={search} setSearchValue={setSearch} />
      <PostsTable search={debouncedSearch} />
      {showModal && <CreatePostsNew onClose={() => setShowModal(false)} />}
    </div>
  );
}