import { Layout } from "@/shared/ui/layout/layout.tsx";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { useEvents } from "@/entities/event";
import { CategoryEvents } from "@/features/eventsByCategory";
import { CategoriesNav } from "@/widgets/categoriesNav";

export function HomePage() {
  const { events } = useEvents();

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <section className="relative bg-[url('public/perm.png')] bg-center bg-no-repeat bg-cover bg-blend-overlay min-h-[calc(100vh-152px)] flex flex-col p-10 w-full gap-5 snap-start">
        <CategoriesNav />
        <img
          src="public/img.png"
          alt="куда пойти"
          className="h-[30vh] absolute right-0 bottom-[10vw]"
        />
      </section>
      <CategoryEvents events={events} />
    </Layout>
  );
}
