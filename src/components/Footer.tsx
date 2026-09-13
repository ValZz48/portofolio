'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900/50 py-8 px-6">
      <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
        <p className="mb-2">Made with love by Noval | {year}</p>
        <p className="text-gray-600">Belajar sedikit, coba banyak, terus tumbuh.</p>
      </div>
    </footer>
  );
}
