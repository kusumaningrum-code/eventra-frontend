"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { callAPI } from "@/config/axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface EventItem {
  event_id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  price?: number;
  image?: string;
  createdAt: string;
  locationDetail?: { name: string };
  category?: { name: string };
}

const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="h-40 w-full rounded-md bg-slate-200" />
    <div className="mt-3 h-4 w-3/4 bg-slate-200 rounded" />
    <div className="mt-2 h-4 w-1/2 bg-slate-200 rounded" />
  </div>
);

const EventList = () => {
  const [events, setEvents] = React.useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

  const fetchEvents = async () => {
    try {
      const res = await callAPI.get("/events?limit=8");
      setEvents(res.data.events || []);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchEvents();
  }, []);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-ibrand text-2xl sm:text-3xl lg:text-4xl text-customDarkBlue">
          Event Terbaru
        </h2>
        <button
          onClick={() => router.push("/events")}
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-customDarkBlue to-customMediumBlue px-5 py-2 text-sm font-semibold text-white shadow-md ring-1 ring-white/10 transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <span className="relative z-10 flex items-center gap-2">
            Lihat Semua
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="absolute -inset-y-8 -left-16 w-24 rotate-45 bg-white/20 blur-md" />
          </span>
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="p-4">
              <SkeletonCard />
            </Card>
          ))}

        {!isLoading && events.length === 0 && (
          <div className="col-span-full text-center text-slate-500 py-10">
            Belum ada event untuk saat ini.
          </div>
        )}

        {!isLoading &&
          events.map((ev) => (
            <Card
              key={ev.event_id}
              className="group cursor-pointer overflow-hidden transition-shadow hover:shadow-lg"
              onClick={() => router.push(`/event/${ev.event_id}`)}
            >
              <div className="relative h-40 w-full">
                <Image
                  src={ev.image || "/images/event-list-default.svg"}
                  alt={ev.name}
                  fill
                  className="object-cover"
                />
                {typeof ev.price === "number" && (
                  <span className="absolute bottom-2 right-2 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-customDarkBlue shadow">
                    Rp{ev.price.toLocaleString("id-ID")}
                  </span>
                )}
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="font-ibrand text-lg line-clamp-2 group-hover:underline">
                  {ev.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-4 text-sm space-y-1">
                <p className="text-customMediumBlue">{formatDate(ev.date)}</p>
                <p className="text-slate-600 line-clamp-1">
                  {ev.locationDetail?.name || ev.location}
                </p>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default EventList;
