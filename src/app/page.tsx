export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-400">Noval Dev</h1>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-gray-900 rounded-full text-sm text-blue-400 border border-blue-400/20 mb-6">✨ Terus belajar, terus membangun.</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Noval — <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Orang Ganteng Studio</span></h1>
          <p className="text-xl text-gray-400 mb-4 max-w-2xl">Developer & game creator yang percaya hal besar bisa lahir dari niat kecil.</p>
          <p className="text-lg text-gray-500 mb-8">Belajar sedikit, coba banyak, terus tumbuh.</p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">Lihat karyaku ↓</button>
            <button className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400/10">Ngobrol yuk ↗</button>
          </div>
        </div>
      </section>

      <section id="tentang" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Bukan ahli. <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Cuma terus mencoba.</span></h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">Aku Noval, developer, programmer, sekaligus software engineer yang menjalankan studio game indie sendiri bernama Orang Ganteng Studio. Saat ini aku masih berstatus mahasiswa, dan sebagian besar perjalananku di dunia coding aku tempuh secara mandiri.</p>
        </div>
      </section>

      <section id="proyek" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Proyek</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Zanshin</h3>
              <p className="text-sm text-blue-400 mb-4">Dalam pengembangan</p>
              <p className="text-gray-400 text-sm">Game pixel boxing bertema samurai/ninja Jepang.</p>
            </div>
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <div className="text-6xl mb-4">♟️</div>
              <h3 className="text-xl font-bold mb-2">Pal Mate</h3>
              <p className="text-sm text-blue-400 mb-4">Pengembangan lanjutan</p>
              <p className="text-gray-400 text-sm">Platform belajar catur interaktif.</p>
            </div>
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <div className="text-6xl mb-4">🏪</div>
              <h3 className="text-xl font-bold mb-2">Warung Manop</h3>
              <p className="text-sm text-blue-400 mb-4">Live</p>
              <p className="text-gray-400 text-sm">Website informasi warung milik ibu.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="px-4 py-2 bg-gray-800 rounded text-sm text-gray-300">JavaScript</div>
                <div className="px-4 py-2 bg-gray-800 rounded text-sm text-gray-300">TypeScript</div>
                <div className="px-4 py-2 bg-gray-800 rounded text-sm text-gray-300">HTML</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-4">Frontend</h3>
              <div className="space-y-2">
                <div className="px-4 py-2 bg-gray-800 rounded text-sm text-gray-300">React</div>
                <div className="px-4 py-2 bg-gray-800 rounded text-sm text-gray-300">Next.js</div>
                <div className="px-4 py-2 bg-gray-800 rounded text-sm text-gray-300">Tailwind CSS</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-4">Tools</h3>
              <div className="space-y-2">
                <div className="px-4 py-2 bg-gray-800 rounded text-sm text-gray-300">Git</div>
                <div className="px-4 py-2 bg-gray-800 rounded text-sm text-gray-300">GitHub</div>
                <div className="px-4 py-2 bg-gray-800 rounded text-sm text-gray-300">Node.js</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Kontak</h2>
          <p className="text-lg text-gray-400 mb-8">Punya ide, pertanyaan, atau sekadar mau menyapa?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://instagram.com/valzz2111" target="_blank" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg">📸 Instagram</a>
            <a href="https://threads.com/@valzz2111" target="_blank" className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10">🧵 Threads</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 bg-gray-900/50 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>Made with love by Noval | 2026</p>
        </div>
      </footer>
    </div>
  )
}