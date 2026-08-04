import Link from "next/link";
import Image from "next/image";
import { desa } from "@/data/desa";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-noise relative overflow-hidden bg-teak-dark py-24 text-cream">
        <div className="section-pad relative mx-auto max-w-content text-center">
          <p className="eyebrow text-gold-light">{desa.kecamatan} · {desa.kabupaten}</p>
          <h1 className="mt-4 animate-fadeUp font-display text-4xl font-semibold md:text-6xl">
            {desa.nama}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-fadeUp font-body text-cream/80">
            {desa.tagline}
          </p>
          <p className="mx-auto mt-6 max-w-2xl animate-fadeUp text-balance font-body text-sm text-cream/70">
            {desa.deskripsiSingkat}
          </p>
          <Link
            href="/umkm"
            className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition hover:bg-gold-light"
          >
            Lihat UMKM Desa
          </Link>
        </div>
      </section>

      {/* Profil */}
      <section className="section-pad mx-auto max-w-content py-16">
        <p className="eyebrow">Profil Desa</p>
        <div className="mt-4 space-y-4 font-body text-ink/90">
          {desa.profil.map((paragraf, i) => (
            <p key={i}>{paragraf}</p>
          ))}
        </div>
      </section>

      <div className="leaf-divider" />

      {/* Tiga Dusun */}
      <section className="section-pad mx-auto max-w-content py-16">
        <p className="eyebrow">Tiga Dusun</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {desa.dusun.map((d) => (
            <div key={d.nama} className="card-wood p-6">
              <h3 className="font-display text-xl text-ink">{d.nama}</h3>
              <p className="mt-2 font-body text-sm text-ink/70">{d.keterangan}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="leaf-divider" />

      {/* Potensi Desa */}
      <section className="section-pad mx-auto max-w-content py-16">
        <p className="eyebrow">Potensi Desa</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {desa.potensi.map((p) => (
            <div key={p.judul} className="card-wood overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={p.gambar}
                  alt={p.judul}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-ink">{p.judul}</h3>
                <p className="mt-2 font-body text-sm text-ink/70">{p.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
