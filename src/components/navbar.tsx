"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openProduk, setOpenProduk] = useState(false);

  // REF untuk close on click outside
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenProduk(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-black-1 text-white py-3 px-16">
      <div className="max-w-[1312px] mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <img
            src="/image/logo-queen.png"
            alt="QueenWrap Logo"
            width={250}
            height={80}
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* MENU */}
        <ul className="flex gap-[60px] text-[18px] font-Inter select-none">
          {/* PRODUK */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenProduk(!openProduk)}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-red-600"
            >
              Produk
              <span
                className={`transition-transform duration-300 border-b border-r w-2 h-2 inline-block ${
                  openProduk ? "rotate-[225deg] translate-y-[1px]" : "rotate-45"
                }`}
              />
            </button>

            {openProduk && (
              <div className="absolute top-8 left-0 backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-xl rounded-md py-3 w-48 z-50">
                <Link
                  href="/produk/ppf"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  PPF
                </Link>
                <Link
                  href="/produk/sticker-premium"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Sticker Premium
                </Link>
                <Link
                  href="/produk/cutting-sticker"
                  className="block px-4 py-2 hover:bg-white/10"
                >
                  Cutting Sticker
                </Link>
              </div>
            )}
          </li>

          {/* MENU LAIN */}
          <li>
            <Link href="/tentang" className="hover:text-red-600 transition">
              Tentang
            </Link>
          </li>
          <li>
            <Link href="/garansi" className="hover:text-red-600 transition">
              Garansi
            </Link>
          </li>
          <li>
            <Link href="/kontak" className="hover:text-red-600 transition">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
