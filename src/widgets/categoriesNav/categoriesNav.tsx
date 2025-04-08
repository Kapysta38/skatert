import { EventCategories } from "@/entities/event";
import { slugify } from "@/shared/lib/utils.ts";

export function CategoriesNav() {
  const categories = Object.values(EventCategories);
  return (
    <nav className="text-[rgba(37,36,34,1)] flex items-center justify-center gap-6 py-4">
      {categories.map((category) => (
        <a
          key={category}
          href={`#${slugify(category)}`}
          className="flex-1 text-center text-nowrap text-lg text-gray-700 hover:underline shadow-md rounded-md px-4 py-2 bg-zinc-200"
        >
          {category}
        </a>
      ))}
    </nav>
  );
}
