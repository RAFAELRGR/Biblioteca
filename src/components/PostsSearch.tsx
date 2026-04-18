"use client";

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export default function PostsSearch({ searchValue, setSearchValue }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4">
    <input
      type="text"
      placeholder="Buscar por título..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
    />
    </div>
  );
}