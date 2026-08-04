import Link from "next/link";
import Image from "next/image";
import { umkmList } from "@/data/umkm";

export const metadata = {
  title: "UMKM Desa Karanggeneng",
};

export default function UmkmListPage() {
  return (
    <section className="section-pad mx-auto max-w-content py-16">
      <p className="eyebrow">Direktori</p>
      <h1 className="mt-2 font-display text-3xl text-ink md:text-4xl">
        UMKM Desa Karanggeneng
      </h1>
      <p className="mt-3 max-w-2xl font-body text-sm text-ink/70">
        Usaha rumahan warga dari tiga dusun — Kricak, Balun, dan Karanggeneng.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {umkmList.map((u) => (
          <Link
            key={u.slug}
            href={`/umkm/${u.slug}`}
            className="card-wood group overflow-hidden transition hover:-translate-y-1"
          >
            <div className="relative h-44 w-full">
              <Image
                src={u.fotoSampul}
                alt={u.nama}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="eyebrow">{u.jenisUsaha}</p>
              <h2 className="mt-1 font-display text-lg text-ink">{u.nama}</h2>
              <p className="mt-1 font-body text-sm text-ink/60">{u.tagline}</p>
              <p className="mt-3 font-mono text-xs text-sawah-dark">{u.dusun}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
