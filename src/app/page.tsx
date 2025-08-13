import Hero from "@/components/Hero";
import CategoryEvent from "@/section/categoryEvent";
import Creator from "@/section/creator";
import EventList from "@/section/listEvent";
import TopEvents from "@/section/topEvents";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-customMediumBlue to-customLightBlue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <Hero />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <EventList />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <TopEvents />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <Creator />
        </div>
      </section>

      <section className="bg-customLightBlue/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <CategoryEvent />
        </div>
      </section>
    </main>
  );
}
