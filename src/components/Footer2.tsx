"use client";

import React from "react";
import Link from "next/link";

const Footer2 = () => {
  return (
    <footer className="bg-customLightBlue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-ibrand text-xl mb-3">Eventra</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Platform tiket untuk menemukan dan mengelola event favoritmu.
            </p>
          </div>
          <div>
            <h4 className="font-ibrand text-xl mb-3">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tentang" className="hover:underline">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/prices" className="hover:underline">
                  Biaya
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-ibrand text-xl mb-3">Jelajah</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events" className="hover:underline">
                  Semua Event
                </Link>
              </li>
              <li>
                <Link href="/events?topic=Musik" className="hover:underline">
                  Musik
                </Link>
              </li>
              <li>
                <Link
                  href="/events?topic=Teknologi"
                  className="hover:underline"
                >
                  Teknologi
                </Link>
              </li>
              <li>
                <Link href="/events?topic=Sport" className="hover:underline">
                  Olahraga
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-ibrand text-xl mb-3">Kebijakan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:underline">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">
                  Kebijakan Cookie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/20" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/80">
          <p>© {new Date().getFullYear()} Eventra. All rights reserved.</p>
          <p>Made with ❤ for better events.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
