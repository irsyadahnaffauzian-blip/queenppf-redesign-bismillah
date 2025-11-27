import Image from "next/image";

export default function StickerpremiumPage() {
  return (
    <div className="w-full bg-black-1 text-white">
      {/* HERO IMAGE */}
      <div className="relative w-full">
        <Image
          src="/image/sticker-premium-page.jpg"
          alt="Cutting Sticker Rally"
          width={1920}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />

        {/* TITLE OVERLAY */}
        <h1 className="absolute bottom-0 left-0 mb-16 ml-45 text-[40px] md:text-[48px] font-semibold font-Inter drop-shadow-lg">
          Sticker Premium
        </h1>
      </div>

      {/* SECTION 2 – DESKRIPSI + BRAND */}
      <section className="w-full py-20 px-16">
        <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT TEXT */}
          <div className="space-y-4 text-[16px] w-[600px] leading-relaxed text-justify">
            <p>
              Ubah penampilan kendaraan Anda agar semakin keren! Saat berkendara
              di jalan, PPF dari Queen Wrap dapat mengubah tampilan kendaraan
              Anda hanya dengan satu layer lapisan warna yang indah tapi tetap
              fungsional karena PPF melindungi cat ori bodi mobil Anda.
            </p>
            <p>
              Selain itu, PPF dari Queen Wrap menggunakan perekat yang bebas
              dari bahan kimia keras dan berbahaya, sehingga melindungi mobil
              Anda dan lingkungan. PPF Color Premium tersedia dalam berbagai
              warna.
            </p>
          </div>

          {/* BRAND BOX */}
          <div className="text-left text-[22px] font-semibold mb-6 px-2 py-5 rounded-[20px] bg-black-2 w-[400px] h-[430px] items-center ml-54">
            <h3 className="text-[20px] font-semibold mb-1 ml-5 text-left">
              Brand Produk Cutting Sticker Kami
            </h3>

            <Image
              src="/image/maxdecal.png"
              alt="Maxdecal Logo"
              width={320}
              height={100}
              className="object-contain mb-1 items-center ml-8"
            />

            <Image
              src="/image/3m.png"
              alt="3M Logo"
              width={390}
              height={192}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION FITUR */}
      <section className="w-full bg-black-2 text-white px-[64px]">
        <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE – FITUR LIST */}
          <div className="space-y-14">
            <h2 className="text-[50px] font-Inter font-semibold">Fitur</h2>

            {/* ITEM TEMPLATE */}
            {[
              {
                no: "01.",
                title: "Tahan Noda Air (Water Stain-Resistant)",
                text: "Lapisan PPF memiliki sifat super hidrofobik yang mampu mencegah timbulnya noda air.",
              },
              {
                no: "02.",
                title: "Anti-Menguning (Anti-Yellowing)",
                text: "Film PPF mampu memblokir hampir 99% sinar UV yang dapat merusak dan menguningkan cat mobil Anda.",
              },
              {
                no: "03.",
                title: "Fitur Self-Healing",
                text: "PPF memiliki kemampuan memperbaiki diri secara otomatis untuk melindungi cat asli mobil Anda.",
              },
              {
                no: "04.",
                title: "Anti-Kontaminasi (Anti-Contamination)",
                text: "PPF menawarkan perlindungan terbaik terhadap kotoran membandel dengan teknologi anti-fouling.",
              },
              {
                no: "05.",
                title: "Ultra Color Finish",
                text: "PPF Color Series hadir dengan beragam pilihan warna vibrant, memungkinkan Anda mengekspresikan gaya pribadi dan memperkaya tampilan kendaraan Anda.",
              },
              {
                no: "06.",
                title: "No Orange Peel",
                text: "Semua seri PPF diaplikasikan tanpa efek orange peel, menghasilkan permukaan yang mulus dan kilau optimal seperti kondisi mobil baru.",
              },
              {
                no: "07.",
                title: "Garansi",
                text: "PPF dilengkapi dengan garansi 5 tahun yang melindungi dari delaminasi, perubahan warna, gelembung, dan retak.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                {/* NUMBER – sejajar kiri */}
                <p className="text-white text-[30px] font-semibold w-[50px]">
                  {item.no}
                </p>

                {/* TEXT BLOCK */}
                <div>
                  <h3 className="text-[25px] font-semibold">{item.title}</h3>
                  <p className="text-[18px] text-justify text-white mt-3 leading-relaxed max-w-[460px]">
                    {item.text}
                  </p>

                  {/* Garis divider KECUALI item terakhir */}
                  {index !== 6 && (
                    <div className="h-px bg-white/10 w-[460PX] mt-6"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="flex justify-end items-center">
            <img
              src="/image/fitur-sticker-premium.jpg"
              alt="Fitur sticker premium"
              className="w-full h-auto object-cover object-right"
            />
          </div>
        </div>
      </section>

      {/* SECTION HOME SERVICE */}
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
            className="inline-block font-Inter px-8 py-3 text-[20px] tracking-widest border border-red rounded-xl hover:bg-red hover:border-red hover:text-white transition duration-300"
          >
            Panggil Tim Kami
          </a>
        </div>
      </section>
    </div>
  );
}
