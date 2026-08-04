import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-teak/10 bg-paper/90 backdrop-blur-sm">
      <nav className="section-pad mx-auto flex max-w-content items-center justify-between py-4">
        <Link href="/" className="font-display text-lg font-semibold text-ink">
          Karanggeneng
        </Link>
        <div className="flex items-center gap-6 font-body text-sm">
          <Link href="/" className="text-ink/80 transition hover:text-teak">
            Profil Desa
          </Link>
          <Link href="/umkm" className="text-ink/80 transition hover:text-teak">
            UMKM
          </Link>
        </div>
      </nav>
    </header>
  );
}
