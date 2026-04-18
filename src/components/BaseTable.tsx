export default function BaseTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm animate-pulse">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex gap-8">
        <div className="h-4 w-8 bg-gray-200 rounded" />
        <div className="h-4 w-32 bg-gray-200 rounded" />
        <div className="h-4 w-48 bg-gray-200 rounded hidden md:block" />
      </div>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex gap-8 items-center px-4 py-4 border-b border-gray-100 last:border-0"
        >
          <div className="h-3 w-6 bg-gray-100 rounded" />
          <div className="h-3 bg-gray-100 rounded" style={{ width: `${120 + (i % 4) * 30}px` }} />
          <div className="h-3 bg-gray-100 rounded hidden md:block" style={{ width: `${160 + (i % 3) * 40}px` }} />
        </div>
      ))}
    </div>
  );
}