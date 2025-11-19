"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [openProduk, setOpenProduk] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-black-#070707 text-white py-6">
        <div className="max-w-[1312px] mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <h1>
            <Link href="/" className="text-3xl font-regular tracking-wide">
              QueenWrap
            </Link>
          </h1>

          {/* Menu */}
          <ul className="flex gap-10 text-lg relative">
            {/* PRODUK (Dropdown) */}
            <li className="relative">
              <button
                onClick={() => setOpenProduk(!openProduk)}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                Produk
              </button>

              {/* DROPDOWN */}
              {openProduk && (
                <div className="absolute top-8 left-0 bg-white text-black shadow-xl rounded-md py-4 w-48 z-50">
                  <Link
                    href="/produk/ppf"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    PPF
                  </Link>

                  <Link
                    href="/produk/sticker-premium"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Sticker Premium
                  </Link>

                  <Link
                    href="/produk/cutting-sticker"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Cutting Sticker
                  </Link>
                </div>
              )}
            </li>

            {/* MENU LAIN */}

            <li>
              <Link className="hover:text-yellow-400" href="/tentang">
                Tentang
              </Link>
            </li>

            <li>
              <Link className="hover:text-yellow-400" href="/garansi">
                Garansi
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center bg-black">
        {/* Background Image */}
        <Image
          src={"/image/mobil-hero-section.jpg"}
          alt="mobil sedan"
          fill
          className="object-cover"
        />

        {/* Title */}
        <h1 className="relative h-screen flex justify-center text-[64px] md:text-6xl font-semi-bold mb-1 mt-[60px] text-white">
          Investasi Terbaik untuk Keindahan Mobil Anda
        </h1>

        {/* Content Row */}
        <div className="absolute w-full max-w-[1300px] flex justify-between px-6 md:px-12">
          {/* Left Text */}
          <p className="text-gray-200 max-w-xs text-left">
            Lapisan PPF premium yang menjaga nilai dan kilau mobil tetap
            maksimal, setiap hari.
          </p>

          {/* Right Button */}
          <div>
            <a
              href="/booking"
              className="px-8 py-4 border border-white rounded-xl text-lg text-white hover:bg-white hover:text-black transition"
            >
              Booking Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
