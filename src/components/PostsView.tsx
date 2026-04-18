
"use client";
import { useState } from "react";
import PostsTable from "./PostsTable";
import PostsSearch from "./PostsSearch";

export default function PostsView() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <PostsSearch searchValue={search} setSearchValue={setSearch} />
      <PostsTable search={search} />
    </div>
  );
}