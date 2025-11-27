"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black-2 text-white py-20 px-2">
      <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-28 items-center">
        {/* LEFT - Logo + Navigation + Instagram */}
        <div className="flex flex-col gap-6 py-3 justify-center items-center">
          {/* Logo */}
          <img
            src="/image/logo-queen-2.png"
            alt="QueenWrap Logo"
            className="w-[300px] object-contain"
          />

          {/* Navigation */}
          <div className="flex gap-10 text-[20px] items-center font-Inter">
            <a
              href="/tentang"
              className="hover:text-red transition duration-200"
            >
              Tentang
            </a>
            <a
              href="/produk"
              className="hover:text-red transition duration-200"
            >
              Produk
            </a>
            <a
              href="/garansi"
              className="hover:text-red transition duration-200"
            >
              Garansi
            </a>
          </div>

          {/* Instagram (IMAGE ICON) */}
          <a
            href="https://instagram.com/queenwrap_sticker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 group justify-center items-center mr-4"
          >
            {/* Instagram Image Icon */}
            <img
              src="/image/mdi_instagram.png"
              alt="Instagram Icon"
              className="w-[22px] h-[22px] transition duration-300 group-hover:scale-110"
            />

            {/* Username */}
            <span className="text-[20px] font-Inter transition duration-300 group-hover:scale-105">
              @queenwrap_sticker
            </span>
          </a>
        </div>

        {/* CENTER - Address + Divider + Contact */}
        <div className="flex flex-col">
          {/* Address */}
          <a
            href="https://maps.app.goo.gl/sauiHrbwgxvZxrcp7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[32px] w-[998px] font-Inter mb-4 hover:text-red transition duration-200"
          >
            Jl. Raya Ciater BSD No.70, Ciater, Kota Tangerang Selatan
          </a>

          {/* Horizontal Divider */}
          <div className="w-[840px] h-px bg-white/20 mb-6"></div>

          {/* Contact + Divider + Hours */}
          <div className="flex items-center gap-10">
            {/* Contact Info */}
            <div className="flex flex-col">
              <span className="text-[20px] text-gray-300">
                Rizki (Queen Wrap PPF Admin)
              </span>

              <a
                href="https://wa.me/6285282946930"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[35px] font-semibold hover:text-red-500 transition duration-200 w-[300px]"
              >
                0852 8294 6930
              </a>
            </div>

            {/* Vertical Divider */}
            <div className="h-[109px] border bg-white/20"></div>

            {/* Hours */}
            <div className="flex flex-col ml-5">
              <span className="text-[20px] text-gray-300 w-[600px]">
                Senin–Sabtu, (Minggu, harap hubungi admin kami)
              </span>
              <span className="text-[35px] font-semibold">
                08.00 – 21.00 WIB
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
