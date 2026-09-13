'use client';

export default function About() {
  return (
    <section id="tentang" className="section-padding border-t border-dark-secondary">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Bukan ahli. <span className="gradient-text">Cuma terus mencoba.</span>
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p className="text-lg">
              Aku Noval, developer, programmer, sekaligus software engineer yang menjalankan studio game indie sendiri bernama <span className="text-white font-semibold">Orang Ganteng Studio</span>. Saat ini aku masih berstatus mahasiswa, dan sebagian besar perjalananku di dunia coding aku tempuh secara mandiri — belajar dari tutorial, mencoba, gagal, lalu mencoba lagi.
            </p>

            <p className="text-lg">
              Aku percaya di era digitalisasi ini, kemampuan membangun produk digital itu penting untuk terus dikembangkan — selain untuk diri sendiri, juga sebagai cara membantu ekonomi keluarga.
            </p>

            <div className="pt-4 space-y-4">
              <h3 className="text-xl font-bold text-white">Perjalanan saya:</h3>
              
              <div className="space-y-6 mt-6">
                {/* 2023 */}
                <div className="border-l-2 border-accent pl-6 pb-6">
                  <div className="text-accent font-bold mb-2">2023</div>
                  <h4 className="text-white font-semibold mb-2">Proyek pertama: Warung Manop</h4>
                  <p className="text-gray-400">
                    Menyadari usaha warung milik ibu hanya dikenal di lingkungan sekitar, saya berinisiatif membangun sebuah website informasi agar dapat ditemukan melalui pencarian online. Dikerjakan secara mandiri dengan mempelajari dasar pengembangan web melalui tutorial, proyek ini menjadi titik awal ketertarikan saya pada pengembangan produk digital.
                  </p>
                </div>

                {/* 2024 */}
                <div className="border-l-2 border-accent pl-6 pb-6">
                  <div className="text-accent font-bold mb-2">2024</div>
                  <h4 className="text-white font-semibold mb-2">Pal Mate: dari observasi menjadi solusi</h4>
                  <p className="text-gray-400">
                    Berangkat dari pengamatan terhadap proses belajar catur seorang teman kuliah, muncul gagasan untuk membangun sebuah platform yang menggabungkan permainan catur dengan sistem pembelajaran. Pal Mate dikembangkan dengan dua tujuan utama: membantu pengguna mempelajari catur secara interaktif, sekaligus menjadi model produk dengan potensi monetisasi.
                  </p>
                </div>

                {/* 2026 */}
                <div className="border-l-2 border-accent pl-6">
                  <div className="text-accent font-bold mb-2">2026</div>
                  <h4 className="text-white font-semibold mb-2">Kolaborasi dan pendirian Orang Ganteng Studio</h4>
                  <p className="text-gray-400">
                    Bermula dari permintaan seorang teman untuk belajar pengembangan aplikasi dan game, kolaborasi ini berkembang menjadi kemitraan dalam pengembangan produk. Dari kolaborasi tersebut, terbentuklah Orang Ganteng Studio dan proyek yang sedang dikembangkan saat ini, Zanshin — sebuah game pixel bergenre pertarungan dengan tema samurai/ninja Jepang.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-dark-secondary rounded-lg border border-dark-secondary hover:border-accent/30 transition-colors">
                <h4 className="text-white font-semibold mb-2">Tantangan dan fokus saat ini</h4>
                <p className="text-gray-400">
                  Sebagai mahasiswa aktif, manajemen waktu menjadi tantangan utama dalam menjalankan beberapa proyek secara paralel. Pal Mate masih dalam tahap pengembangan lanjutan, sementara Zanshin terus dikembangkan secara bertahap bersama tim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
