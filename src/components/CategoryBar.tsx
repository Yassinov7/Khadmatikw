"use client";

type Category = {
  id: number;
  name: string;
};

type Props = {
  categories: Category[];
  selectedId?: number;
  onSelect: (id: number | undefined) => void;
};

export function CategoryBar({ categories, selectedId, onSelect }: Props) {
  return (
    <nav className="w-full py-4 overflow-x-auto bg-white sticky top-0 z-40 shadow-sm rounded-xl mb-2" aria-label="تصنيفات الخدمات">
      <div className="flex gap-3 px-2 pb-2">
        <button
          className={`px-5 py-3 rounded-full font-bold transition min-w-max text-sm whitespace-nowrap
            ${!selectedId
              ? "bg-primary text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-primary/10 border border-gray-200"}
          `}
          onClick={() => onSelect(undefined)}
          aria-pressed={!selectedId}
        >
          الكل
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-5 py-3 rounded-full font-bold transition min-w-max text-sm whitespace-nowrap
              ${selectedId === cat.id
                ? "bg-primary text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-primary/10 border border-gray-200"}
            `}
            onClick={() => onSelect(cat.id)}
            aria-pressed={selectedId === cat.id}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  );
}