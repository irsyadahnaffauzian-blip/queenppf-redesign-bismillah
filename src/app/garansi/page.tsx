import Image from "next/image";

export default function KontakPage() {
  return (
    <div className="w-full bg-black-1 text-white">
      {/* HERO IMAGE */}
      <div className="relative w-full h-[350px]">
        <Image
          src="/image/cover-garansi-2.jpg"
          alt="Kontak QueenWrap PPF"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="absolute bottom-10 left-10 text-[64px] m-40 mb-25 font-semibold font-Inter">
          Garansi PPF 5 Tahun
        </h1>
      </div>

      {/* SECTION GARANSI GRID */}
      <section className="w-full bg-black-1 text-white px-[64px] py-24">
        <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[50px]">
          {/* CARD 1 */}
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/image/garansi-1-1.jpg"
              alt="Garansi 5 Tahun"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-[24px] font-semibold">Garansi 5 Tahun</h3>
              <p className="text-[15px] text-white mt-2 text-justify max-w-[260px]">
                Kami menawarkan garansi 5 tahun untuk produk PPF yang
                dipasangkan ke mobil Anda.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/image/garansi-2-2.jpg"
              alt="Cracking"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-[24px] font-semibold">Cracking</h3>
              <p className="text-[15px] text-white mt-2 text-justify max-w-[200px]">
                Apabila ada keretakan pada bagian film.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/image/garansi-3-3.jpg"
              alt="Peeling"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-[24px] font-semibold">Peeling</h3>
              <p className="text-[15px] text-white mt-2 text-justify max-w-[260px]">
                Apabila film mengelupas dari body mobil.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/image/garansi-4-4.jpg"
              alt="Delaminating"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-[24px] font-semibold">Delaminating</h3>
              <p className="text-[15px] text-white mt-2 text-justify max-w-[260px]">
                Apabila lapisan antar film terlepas.
              </p>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/image/garansi-5-5.jpg"
              alt="Degumming"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-[24px] font-semibold">Degumming</h3>
              <p className="text-[18px] text-white mt-2 text-justify max-w-[200px]">
                Apabila ada lem yang menggumpal.
              </p>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/image/garansi-6-6.jpg"
              alt="Bubbling"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-[24px] font-semibold">Bubbling</h3>
              <p className="text-[15px] text-white mt-2 text-justify max-w-[260px]">
                Apabila terdapat gelembung air pada mobil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FITUR */}
      <section className="w-full bg-black-2 text-white px-[64px]">
        <div className="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE – FITUR LIST */}
          <div className="space-y-14">
            <h2 className="text-[50px] font-Inter font-semibold leading-snug">
              Hal-Hal Yang Tidak Termasuk Kedalam Garansi
            </h2>

            {/* ITEM TEMPLATE */}
            {[
              {
                no: "01.",
                title: "Kerusakan PPF akibat pemakaian pribadi",
              },
              {
                no: "02.",
                title: "Penggunaan produk pembersih yang tidak tepat.",
              },
              {
                no: "03.",
                title:
                  "Tidak mengikuti pedoman atau rekomendasi Queen Wrap PPF.",
              },
              {
                no: "04.",
                title:
                  "Instalasi apapun yang tidak dilakukan oleh spesialist Queen Wrap PPF resmi.",
              },
              {
                no: "05.",
                title:
                  "Setiap kerusakan lapisan film atau cat yang dihasilkan oleh prosedur pencucian yang salah, pencucian mobil otomatis, atau penggunaan produk atau bahan pencuci atau pembersih yang tidak tepat atau berbahaya.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                {/* NUMBER – sejajar kiri */}
                <p className="text-white text-[30px] font-semibold w-[50px]">
                  {item.no}
                </p>

                {/* TEXT BLOCK */}
                <div>
                  <h3 className="text-[20px] font-inter text-justify w-[450px]">
                    {item.title}
                  </h3>

                  {/* Garis divider KECUALI item terakhir */}
                  {index !== 4 && (
                    <div className="h-px bg-white/10 w-[460PX] mt-6"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="flex justify-end items-center">
            <img
              src="/image/fitur-garansi.jpg"
              alt="cutting ppf"
              className="w-full h-auto object-cover object-right"
            />
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
    </div>
  );
}
