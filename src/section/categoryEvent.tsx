"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { callAPI } from "@/config/axios";

type Category = {
  displayName: string;
  dbTopic: string;
  image: string;
};

const CATEGORIES: Category[] = [
  {
    displayName: "Art & Design",
    dbTopic: "Desain, Foto, Video",
    image: "/images/category/art.jpg",
  },
  {
    displayName: "Culinary",
    dbTopic: "Kuliner",
    image: "/images/category/culinary.jpg",
  },
  {
    displayName: "Education",
    dbTopic: "Pendidikan",
    image: "/images/category/edu.jpg",
  },
  {
    displayName: "Fashion",
    dbTopic: "Fashion",
    image: "/images/category/fashion.jpg",
  },
  {
    displayName: "Music",
    dbTopic: "Musik",
    image: "/images/category/music.jpg",
  },
  {
    displayName: "Sport",
    dbTopic: "Sport",
    image: "/images/category/sport.jpg",
  },
  {
    displayName: "Tech",
    dbTopic: "Teknologi",
    image: "/images/category/tech.jpg",
  },
  {
    displayName: "Travel",
    dbTopic: "Travel",
    image: "/images/category/travel.jpg",
  },
];

const CategoryEvent = () => {
  const router = useRouter();
  const [, setAvailableTopics] = useState<string[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await callAPI.get("/event-categories/topics");
        setAvailableTopics(response.data);
      } catch (error) {
        console.error("Failed to fetch topics:", error);
      }
    };

    fetchTopics();
  }, []);

  const handleCategoryClick = (dbTopic: string) => {
    router.push(`/events?topic=${encodeURIComponent(dbTopic)}`);
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-ibrand text-white mb-6">
        Kategori Event
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {CATEGORIES.map((category, idx) => (
          <button
            key={idx}
            onClick={() => handleCategoryClick(category.dbTopic)}
            className="group relative w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label={`Kategori ${category.displayName}`}
          >
            <div className="relative h-28 sm:h-36">
              <Image
                src={category.image}
                alt={category.displayName}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority={idx < 4}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <p className="absolute inset-x-0 bottom-3 text-center font-ibrand text-lg sm:text-xl text-white drop-shadow">
                {category.displayName}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/events")}
          className="inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-customDarkBlue px-6 py-3 font-ibrand text-lg shadow"
        >
          Jelajahi event lainnya
        </button>
      </div>
    </div>
  );
};

export default CategoryEvent;
