"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  const images = [
    "/images/hero/keshi.png",
    "/images/hero/swara.png",
    "/images/hero/yoasobi.png",
  ];

  return (
    <div className="relative w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={i}>
              <div className="relative w-full h-[28vh] sm:h-[34vh] lg:h-[38vh]">
                <Image
                  src={src}
                  alt={`Hero ${i + 1}`}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default Hero;
