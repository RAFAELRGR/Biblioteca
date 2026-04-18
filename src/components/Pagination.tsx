import { PageSize } from "@/types";
import { useState } from "react";

interface Props {
  onPageSizeChange: (size: PageSize) => void;
}

export default function Pagination({ onPageSizeChange }: Props) {
  const [pageSize, setPageSize] = useState<PageSize>(10);

  return (
    <select
      value={pageSize}
      onChange={(e) => {
        const value = Number(e.target.value) as PageSize;
        setPageSize(value);
        onPageSizeChange(value);
      }}
      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white"
    >
      <option value={10}>10 por página</option>
      <option value={20}>20 por página</option>
      <option value={50}>50 por página</option>
    </select>
  );
}