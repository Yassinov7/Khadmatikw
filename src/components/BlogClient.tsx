"use client";
import BlogCard from "./BlogCard";
import type { Blog } from "@/types";
// إذا أردت لاحقًا دعم التصنيفات، أضف:
// import { BlogCategoryBar } from "./BlogCategoryBar";



type Props = {
  blogs: Blog[];
  // categories?: Category[]; // لدعم التصنيفات مستقبلاً
};

export function BlogClient({ blogs }: Props) {
  // إذا أضفت تصنيفات مستقبلاً:
  // const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  // const filteredBlogs = selectedId
  //   ? blogs.filter((b) => b.category_id === selectedId)
  //   : blogs;

  return (
    <section className="flex flex-col gap-6 pb-6">
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">
        مدونة خدماتي KW
      </h1>
      {/* دعم التصنيفات مستقبلاً */}
      {/* <BlogCategoryBar
        categories={categories}
        selectedId={selectedId}
        onSelect={setSelectedId}
      /> */}
      {blogs.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          لا توجد تدوينات حتى الآن.
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

export default BlogClient;
