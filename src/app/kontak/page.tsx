import Image from "next/image";

export default function KontakPage() {
  return (
    <div className="w-full bg-black-1 text-white">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[350px]">
        <Image
          src="/image/cover-kontak-1.jpg"
          alt="Kontak QueenWrap PPF"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="absolute bottom-10 left-10 text-[64px] m-40 mb-25 font-semibold font-Inter">
          Kontak Queen Wrap PPF
        </h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 py-20 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-10">
          {/* ALAMAT */}
          <div>
            <h2 className="text-[20px] mb-2">Alamat</h2>
            <a>
              Jl. Raya Ciater BSD No.70, Ciater, Kota Tangerang Selatan, 15310
            </a>
          </div>

          {/* JAM KERJA */}
          <div>
            <h2 className="text-[20px] font-semibold mb-2">Jam Kerja</h2>
            <p className="text-white leading-relaxed">
              Senin – Jumat
              <br />
              08:30 – 17:00 WIB
              <br />
              <br />
              Sabtu (Half Day)
              <br />
              08:00 – 14:00 WIB
            </p>
          </div>

          {/* WHATSAPP */}
          <div>
            <h2 className="text-[20px] font-semibold mb-2">Whatsapp</h2>
            <a
              href="https://wa.me/6285282946930"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] hover:text-red transition duration-300"
            >
              0852 8294 6930
            </a>
          </div>

          {/* INSTAGRAM */}
          <div className="flex items-center gap-3 mt-4 group">
            <a
              href="https://instagram.com/queenwrap_sticker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              {/* ICON PNG */}
              <img
                src="/image/mdi_instagram.png"
                alt="Instagram"
                className="w-[24px] h-[24px] group-hover:scale-110 transition duration-300"
              />

              {/* USERNAME */}
              <span className="text-[18px] group-hover:text-red group-hover:scale-105 transition duration-300">
                @queenwrap_sticker
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — MAP */}
        <a
          href="https://maps.app.goo.gl/s3DAWF5M7P7CXSB38"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="/image/maps.jpg"
            alt="Lokasi QueenWrap"
            className="w-full rounded-lg cursor-pointer hover:opacity-90 transition duration-300 m-[64px]"
          />
        </a>
      </div>
    </div>
  );
}
