"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [openProduk, setOpenProduk] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-start bg-black">
        <Image
          src={"/image/mobil-hero-section-4.jpg"}
          alt="Mobil sedan"
          fill
          priority
          className="object-cover opacity-90"
        />

        <h1 className="relative text-[50px] font-Inter font-semibold text-white text-center mt-[30px] leading-tight">
          Investasi Terbaik untuk Keindahan Mobil Anda
        </h1>

        <div className="relative mt-[100px] w-full max-w-[1300px] flex justify-between items-start px-6 md:px-12">
          <p className="text-gray-200 max-w-[220px] font-Inter text-[16px] leading-relaxed text-justify">
            Lapisan PPF premium yang menjaga nilai dan kilau mobil tetap
            maksimal, setiap hari.
          </p>

          <a
            href="https://wa.me/6285282946930"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[30px] py-3 border border-white rounded-[15px] text-[16px] text-white hover:bg-white hover:text-black transition duration-300"
          >
            Booking Sekarang
          </a>
        </div>
      </div>

      {/* SECTION 2 */}
      <section className="w-full bg-black-1 text-white px-6">
        <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-1d:\front end purwa\image website ppf\home page\section-tentang-kami-2.jpg">
          {/* LEFT */}
          <div className="space-y-6">
            <Image
              src="/image/logo-queen.png"
              alt="QueenWrap Logo"
              width={220}
              height={70}
              className="object-contain"
            />

            <h2 className="font-Inter font-semibold text-[48px] leading-tight text-justify">
              Karena Mobil Anda Layak
              <br />
              Dapat yang Terbaik
            </h2>

            <h4 className="font-Inter font-medium text-[18px] text-justify">
              Bagi kami, setiap mobil memiliki nilai lebih dari sekadar
              kendaraan.
            </h4>

            <p className="font-Inter text-[16px] text-white leading-relaxed max-w-[580px] text-justify">
              Selama 13 tahun, Queen Wrap PPF telah melindungi ribuan mobil
              premium di Indonesia dengan teknologi PPF modern dan proses
              pemasangan berstandar tinggi. Kami hadir untuk memberikan hasil
              terbaik, menjaga keindahan kendaraan, dan menghadirkan ketenangan
              bagi setiap pemiliknya.
            </p>

            <a
              href="https://wa.me/6285282946930?text=Halo%20QueenWrap,%20Saya%20ingin%20konsultasi%20lebih%20lanjut"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-Inter px-8 py-4 rounded-[15px] text-[16px] border border-red hover:bg-red hover:border-red transition duration-300"
            >
              Konsultasi dengan Ahli Kami
            </a>
          </div>

          {/* RIGHT */}
          <Image
            src={"/image/section-tentang-kami-2.jpg"}
            alt="Instalasi PPF"
            width={724}
            height={846}
            className="object-cover w-full"
          />
        </div>
      </section>

      {/* SECTION 3 - PRODUK KAMI */}
      <section className="w-full bg-black-1 text-white py-24 px-6">
        <div className="max-w-[1312px] mx-auto text-center mb-16">
          <h2 className="font-Inter font-semibold text-[42px] tracking-widest">
            PRODUK KAMI
          </h2>
        </div>

        {/* Produk Cards */}
        <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="text-center space-y-4">
            <Image
              src="/image/produk-ppf.jpg"
              alt="PPF Product"
              width={382}
              height={480}
              className="object-cover mx-auto"
            />
            <h3 className="font-Inter font-semibold text-[20px]">
              Paint Protection Film (PPF)
            </h3>
            <p className="font-Inter text-white text-[15px] leading-relaxed px-4 text-justify w-[390px] mb-10">
              Lindungi cat mobil dari goresan dan cuaca ekstrem dengan QueenWarp
              PPF. Film transparan premium ini menjaga kilau tetap baru,
              pemasangan presisi, dan bergaransi untuk hasil maksimal.
            </p>
            <Link
              href="/produk/ppf"
              className="inline-block font-Inter px-15 py-2 text-[15px] tracking-widest border border-red rounded-xl hover:bg-red hover:border-red hover:text-white transition duration-300"
            >
              DETAIL
            </Link>
          </div>

          {/* Card 2 */}
          <div className="text-center space-y-4">
            <Image
              src="/image/produk-cutting-sticker.jpg"
              alt="Cutting Sticker Product"
              width={382}
              height={480}
              className="object-cover mx-auto"
            />
            <h3 className="font-Inter font-semibold text-[20px]">
              Cutting Sticker
            </h3>
            <p className="font-Inter text-white text-[15px] leading-relaxed px-4 text-justify w-[390px]">
              Personalisasi mobil atau properti Anda dengan sticker cutting
              custom. Teknologi pemotongan modern dan bahan berkualitas
              memastikan hasil presisi, rapi, dan cocok untuk dekorasi,
              branding, atau detail grafis unik.
            </p>
            <Link
              href="/produk/cutting-sticker"
              className="inline-block font-Inter px-15 py-2 text-[15px] tracking-widest border border-red  rounded-xl hover:bg-red hover:border-red hover:text-white transition duration-300"
            >
              DETAIL
            </Link>
          </div>

          {/* Card 3 */}
          <div className="text-center space-y-4">
            <Image
              src="/image/produk-sticker-premium.jpg"
              alt="Sticker Premium Product"
              width={382}
              height={480}
              className="object-cover mx-auto"
            />
            <h3 className="font-Inter font-semibold text-[20px]">
              Sticker Premium
            </h3>
            <p className="font-Inter text-white text-[15px] leading-relaxed px-4 text-justify w-[390px]">
              Tingkatkan tampilan mobil Anda dengan sticker premium tahan lama
              yang tidak mudah pudar. Dengan pilihan warna dan tekstur beragam
              serta finishing rapi, sticker premium QueenWarp PPF mempercantik
              sekaligus melindungi cat kendaraan.
            </p>
            <Link
              href="/produk/sticker-premium"
              className="inline-block font-Inter px-15 py-2 text-[15px] tracking-widest border border-red rounded-xl hover:bg-red hover:border-red hover:text-white transition duration-300"
            >
              DETAIL
            </Link>
          </div>
        </div>

        {/* Garis Merah Pembatas */}
        <div className="w-full flex justify-center mt-16">
          <div className="w-[397px] h-px bg-red"></div>
        </div>

        <div className="max-w-[1312px] mx-auto flex justify-center mt-14">
          <a
            href="https://wa.me/6285282946930"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white rounded-xl text-lg text-white font-Inter hover:bg-white hover:text-black transition duration-300"
          >
            Konsultasi Langsung Dengan Tim Kami
          </a>
        </div>
      </section>

      {/* SECTION 4 - HOME SERVICE */}
      <section className="relative w-full min-h-[150vh] flex items-center justify-start text-white">
        {/* Full Background */}
        <Image
          src="/image/section-door-to-door.jpg"
          alt="Car Home Service"
          fill
          priority
          className="object-cover"
        />

        {/* Konten kiri */}
        <div className="relative z-10 max-w-[560px] px-6 ml-16 md:px-20 py-20 space-y-6 gap-3">
          <h2 className="font-Inter font-semibold text-[60px] leading-tight">
            Tak Perlu
            <br />
            ke Workshop.
          </h2>

          <p className="font-Inter text-white text-[20px] leading-relaxed text-justify">
            Queen PPF hadir dengan layanan door to door, mengerjakan PPF mobil
            Anda langsung di rumah dengan hasil profesional dan bergaransi.
          </p>

          <a
            href="https://wa.me/6285282946930?text=Halo%20QueenWrap,%20Saya%20butuh%20layanan%20home%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-Inter px-8 py-3 text-[20px] tracking-widest border border-white rounded-xl hover:bg-red-600 hover:border-red-600 hover:text-white transition duration-300"
          >
            Panggil Tim Kami
          </a>
        </div>
      </section>

      {/* SECTION 5 - GALERI INSTALASI PPF */}
      <section className=" bg-black-1 text-white py-24 px-6">
        {/* Title */}
        <div className="max-w-[1312px] mx-auto mb-12 text-center">
          <h2 className="font-Inter font-semibold text-[42px]">
            Galeri Instalasi PPF
          </h2>
        </div>

        {/* Gallery Centered */}
        <div className="flex flex-col items-center gap-15">
          {/* Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-13 ">
            <Image
              src="/image/galeri-1.jpg"
              alt="Galeri 1"
              width={382}
              height={576}
              className="rounded-[20px] object-cover w-[382px] h-[576px]"
            />
            <Image
              src="/image/galeri-2.jpg"
              alt="Galeri 2"
              width={382}
              height={576}
              className="rounded-[20px] object-cover w-[382px] h-[576px]"
            />
            <Image
              src="/image/galeri-3.jpg"
              alt="Galeri 3"
              width={382}
              height={576}
              className="rounded-[20px] object-cover w-[382px] h-[576px]"
            />
            <Image
              src="/image/galeri-4.jpg"
              alt="Galeri 4"
              width={382}
              height={576}
              className="rounded-[20px] object-cover w-[382px] h-[576px]"
            />
            <Image
              src="/image/galeri-5.jpg"
              alt="Galeri 5"
              width={382}
              height={576}
              className="rounded-[20px] object-cover w-[382px] h-[576px]"
            />
            <Image
              src="/image/galeri-6.jpg"
              alt="Galeri 6"
              width={382}
              height={576}
              className="rounded-[20px] object-cover w-[382px] h-[576px]"
            />
          </div>

          {/* Button CTA - Right Align Under Grid */}
          <div className="w-[870px] flex justify-center mt-4">
            <a
              href="https://wa.me/6285282946930?text=Halo%20QueenWrap,%20Saya%20ingin%20lihat%20portofolio%20PPF%20lainnya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-Inter px-8 py-3 text-[20px] tracking-widest w-[382px] text-center border border-red rounded-xl hover:bg-red hover:border-red transition duration-300"
            >
              Konsultasikan Segera
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6 - GARANSI */}
      <section className="relative w-full min-h-[120vh] flex items-start justify-start text-white">
        {/* Full Background */}
        <Image
          src="/image/section-garansi.jpg"
          alt="mobil suv"
          fill
          priority
          className="object-cover"
        />

        {/* Konten kiri */}
        <div className="relative max-w-[1000px] px-6 ml-16 md:px-20 py-10 space-y-6 gap-3">
          <h2 className="font-Inter font-semibold text-[64px] leading-tight">
            Berkendara Bebas Cemas
            <br />
            dengan Garansi 5 Tahun
          </h2>

          <p className="font-Inter text-white text-[20px] w-[750px] leading-relaxed text-justify">
            Kami menjamin perlindungan terbaik untuk kendaraan Anda dengan
            garansi komprehensif hingga lima tahun.
          </p>

          <a
            href="https://wa.me/6285282946930?text=Halo%20QueenWrap,%20Saya%20butuh%20layanan%20home%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-Inter px-20 py-3 text-[20px] tracking-wider border border-white rounded-xl hover:bg-red-600 hover:border-red-600 hover:text-white transition duration-300"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </>
  );
}
