"use client";

import Image from "next/image";

export default function TentangPage() {
  return (
    <section className="relative w-full min-h-[160vh] flex items-center text-white">
      {/* Background Image */}
      <Image
        src="/image/section-tentang.jpg" // ganti sesuai nama file kamu
        alt="Background Mobil"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay (opsional untuk dibaca lebih jelas) */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative max-w-[1200px] px-10 md:px-16 place-items-center m-[150px] mt-175">
        <h1 className="text-[64px] md:text-[55px] font-Inter font-semibold leading-tight mb-6">
          Berpengalaman lebih dari 13 tahun
        </h1>

        <p className="max-w-[900px] text-[20px] md:text-[18px] leading-relaxed mb-8 text-white text-justify">
          QueenWrap PPF adalah spesialis Paint Protection Film (PPF) mobil di
          Jakarta dengan pengalaman 13 tahun dan dipercaya ribuan pelanggan
          Jabodetabek. Kami menghadirkan perlindungan cat premium yang menjaga
          kilau mobil tetap baru, tahan goresan, dan aman dari cuaca ekstrem—
          dengan kualitas terbaik dan harga tetap hemat.
        </p>

        {/* BUTTON WHATSAPP */}
        <a
          href="https://wa.me/6285282946930?text=Halo%20QueenWrap,%20Saya%20ingin%20booking%20pemasangan%20PPF"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-[20px] font-Inter border tracking-wider border-red rounded-xl hover:bg-red hover:text-white transition duration-300"
        >
          Booking Pemasangan PPF
        </a>
      </div>
    </section>
  );
}
