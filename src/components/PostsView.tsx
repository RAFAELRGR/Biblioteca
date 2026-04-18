
"use client";
import { useState } from "react";
import PostsTable from "./PostsTable";
import PostsSearch from "./PostsSearch";
import { useDebounce } from "@/hooks/useDebounce";

export default function PostsView() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  return (
    <div>
      <PostsSearch searchValue={search} setSearchValue={setSearch} />
      <PostsTable search={debouncedSearch} />
    </div>
  );
}