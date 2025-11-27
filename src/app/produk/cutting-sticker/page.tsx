import Image from "next/image";

export default function CuttingstickerPage() {
  return (
    <div className="w-full bg-black-1 text-white">
      {/* HERO IMAGE */}
      <div className="relative w-full">
        <Image
          src="/image/cutting-sticker-page.jpg"
          alt="Cutting Sticker Rally"
          width={1920}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />

        {/* TITLE OVERLAY */}
        <h1 className="absolute bottom-0 left-0 mb-16 ml-45 text-[40px] md:text-[48px] font-semibold font-Inter drop-shadow-lg">
          Cutting Sticker
        </h1>
      </div>

      {/* SECTION 2 – DESKRIPSI + BRAND */}
      <section className="w-full py-20 px-16">
        <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT TEXT */}
          <div className="space-y-4 text-[16px] w-[600px] leading-relaxed text-justify">
            <p>
              Cutting sticker adalah teknik pemotongan vinyl menggunakan mesin
              khusus untuk menghasilkan desain yang presisi dan rapi. Berbahan
              vinyl berkualitas tinggi, cutting sticker cocok untuk kebutuhan
              dekorasi, branding, identitas bisnis, hingga detail grafis pada
              mobil atau properti.
            </p>
            <p>
              Hasilnya tahan lama, tidak mudah pudar, dan mampu menampilkan
              bentuk serta garis yang sangat akurat sesuai desain yang
              diinginkan.
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
                title: "Custom Sesuai Desain",
                text: "Bisa mengikuti bentuk, logo, tulisan, atau pola apa pun.",
              },
              {
                no: "02.",
                title: "Presisi Tinggi",
                text: "Dipotong menggunakan mesin cutting modern untuk hasil rapi dan detail.",
              },
              {
                no: "03.",
                title: "Bahan Berkualitas",
                text: "Menggunakan vinyl premium yang kuat, lentur, dan mudah diaplikasikan.",
              },
              {
                no: "04.",
                title: "Daya Rekat Kuat Namun Aman",
                text: "Menempel stabil tapi tidak merusak permukaan saat dilepas.",
              },
              {
                no: "05.",
                title: "Pilihan Warna & Finishing Lengkap",
                text: "Glossy, matte, metallic, reflective, hingga hologram.",
              },
              {
                no: "06.",
                title: "Garansi",
                text: "Cutting sticker dilengkapi dengan garansi 5 tahun yang melindungi dari delaminasi, perubahan warna, gelembung, dan retak.",
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
                  {index !== 5 && (
                    <div className="h-px bg-white/10 w-[460PX] mt-6"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="flex justify-end items-center">
            <img
              src="/image/fitur-cutting-sticker.jpg"
              alt="Fitur PPF"
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
