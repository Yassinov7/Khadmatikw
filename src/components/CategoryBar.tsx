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
    <nav className="w-full py-4 overflow-x-auto bg-white sticky top-0 z-40">
      <div className="flex gap-2 px-2">
        <button
          className={`px-4 py-2 rounded-full font-bold border transition min-w-max ${
            !selectedId
              ? "bg-[color:var(--primary)] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-[color:var(--primary)]/20"
          }`}
          onClick={() => onSelect(undefined)}
        >
          الكل
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`px-4 py-2 rounded-full font-bold border transition min-w-max ${
              selectedId === cat.id
                ? "bg-[color:var(--primary)] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-[color:var(--primary)]/20"
            }`}
            onClick={() => onSelect(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
