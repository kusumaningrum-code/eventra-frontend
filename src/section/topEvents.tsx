"use client";

import Image from "next/image";
import * as React from "react";

const TopEvents = () => {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-customMediumBlue">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-white font-ibrand text-3xl sm:text-4xl lg:text-5xl pb-5">
          Top Event!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-lg">
            <Image
              src="/images/swara3.png"
              alt="Top Events 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              priority
            />
          </div>

          <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-lg">
            <Image
              src="/images/yoasobi2.png"
              alt="Top Events 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            />
          </div>

          <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-lg">
            <Image
              src="/images/keshi2.png"
              alt="Top Events 3"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopEvents;
