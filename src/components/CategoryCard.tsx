// CategoryCard.tsx
type CategoryCardProps = {
  category: {
    id: number;
    name: string;
    description?: string;
  };
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="p-4 bg-white shadow rounded flex flex-col gap-2 items-start">
      <div className="font-bold text-primary">{category.name}</div>
      <div className="text-sm text-gray-600">{category.description}</div>
    </div>
  );
}
