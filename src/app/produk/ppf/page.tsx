import Image from "next/image";

export default function PpfPage() {
  return (
    <div className="w-full bg-black-1 text-white">
      {/* HERO IMAGE */}
      <div className="relative w-full">
        <Image
          src="/image/ppf-page.png"
          alt="Ferrari PPF"
          width={1920}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />

        {/* TITLE OVERLAY */}
        <h1 className="absolute bottom-0 left-0 mb-16 ml-45 text-[40px] md:text-[48px] font-semibold font-Inter drop-shadow-lg">
          PPF (Paint Protection Film)
        </h1>
      </div>

      {/* SECTION 2 – DESKRIPSI + BRAND */}
      <section className="w-full py-20 px-16">
        <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT TEXT */}
          <div className="space-y-4 text-[16px] w-[600px] leading-relaxed text-justify">
            <p>
              PPF adalah film transparan premium yang dirancang untuk melindungi
              cat mobil dari goresan, kotoran, dan cuaca ekstrem. Dengan tingkat
              kejernihan tinggi, elastis, serta daya tahan superior, PPF menjaga
              warna dan kilau asli tetap baru lebih lama.
            </p>
            <p>
              Teknologi self-healing-nya membuat goresan ringan hilang dengan
              sendirinya, memberikan perlindungan maksimal tanpa mengubah
              tampilan mobil. Cocok untuk Anda yang menginginkan perlindungan
              terbaik dengan hasil rapi, presisi, dan tahan lama.
            </p>
          </div>

          {/* BRAND BOX */}
          <div className="text-left text-[22px] font-semibold mb-6 px-2 py-5 rounded-[20px] bg-black-2 w-[400px] h-[430px] items-center ml-54">
            <h3 className="text-[20px] font-semibold mb-1 ml-8 text-left">
              Brand Produk PPF Kami
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
        <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-2 space-y-3 items-center">
          {/* LEFT – TEXT LIST */}
          <div className="space-y-12">
            <h2 className="text-[42px] font-Inter font-semibold mb-10">
              Fitur
            </h2>

            {/* ITEM 01 */}
            <div>
              <p className="text-gray-400 text-[18px] font-semibold tracking-wide">
                01.
              </p>
              <h3 className="text-[20px] font-semibold mt-1">
                Tahan Noda Air (Water Stain-Resistant)
              </h3>
              <p className="text-[16px] text-gray-300 mt-3 leading-relaxed max-w-[460px]">
                Lapisan PPF memiliki sifat super hidrofobik yang mampu mencegah
                timbulnya noda air.
              </p>
              <div className="h-px w-[430px] bg-white/10 mt-6"></div>
            </div>

            {/* ITEM 02 */}
            <div>
              <p className="text-gray-400 text-[18px] font-semibold tracking-wide">
                02.
              </p>
              <h3 className="text-[20px] font-semibold mt-1">
                Anti-Menguning (Anti-Yellowing)
              </h3>
              <p className="text-[16px] text-gray-300 mt-3 leading-relaxed max-w-[460px]">
                Film PPF mampu memblokir hampir 99% sinar UV yang dapat merusak
                dan menguningkan cat mobil.
              </p>
              <div className="h-px w-[430px] bg-white/10 mt-6"></div>
            </div>

            {/* ITEM 03 */}
            <div>
              <p className="text-gray-400 text-[18px] font-semibold tracking-wide">
                03.
              </p>
              <h3 className="text-[20px] font-semibold mt-1">
                Fitur Self-Healing
              </h3>
              <p className="text-[16px] text-gray-300 mt-3 leading-relaxed max-w-[460px]">
                PPF memiliki kemampuan memperbaiki diri secara otomatis untuk
                melindungi cat asli mobil Anda.
              </p>
              <div className="h-px w-[430px] bg-white/10 mt-6"></div>
            </div>

            {/* ITEM 04 */}
            <div>
              <p className="text-gray-400 text-[18px] font-semibold tracking-wide">
                04.
              </p>
              <h3 className="text-[20px] font-semibold mt-1">
                Anti-Kontaminasi (Anti-Contamination)
              </h3>
              <p className="text-[16px] text-gray-300 mt-3 leading-relaxed max-w-[460px]">
                PPF menawarkan perlindungan terbaik terhadap kotoran membandel
                dengan teknologi anti-fouling.
              </p>
              <div className="h-px w-[430px] bg-white/10 mt-6"></div>
            </div>

            {/* ITEM 05 */}
            <div>
              <p className="text-gray-400 text-[18px] font-semibold tracking-wide">
                05.
              </p>
              <h3 className="text-[20px] font-semibold mt-1">Garansi</h3>
              <p className="text-[16px] text-gray-300 mt-3 leading-relaxed max-w-[460px]">
                PPF dilengkapi dengan garansi 5 tahun yang melindungi dari
                delaminasi, perubahan warna, gelembung, dan retak.
              </p>
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="w-full flex items-end space-y-1 md:justify-end">
            <img
              src="/image/fitur-ppf.jpg"
              alt="Instalasi PPF"
              className="w-full object-right"
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
            className="inline-block font-Inter px-8 py-3 text-[20px] tracking-widest border border-white rounded-xl hover:bg-red-600 hover:border-red-600 hover:text-white transition duration-300"
          >
            Panggil Tim Kami
          </a>
        </div>
      </section>
    </div>
  );
}
