import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { umkmList, getUmkmBySlug } from "@/data/umkm";

export function generateStaticParams() {
  return umkmList.map((u) => ({ slug: u.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const umkm = getUmkmBySlug(params.slug);

  if (!umkm) {
    return {};
  }

  return {
    title: `${umkm.nama} — UMKM Desa Karanggeneng`,
    description: umkm.tagline,
  };
}

export default function UmkmDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const umkm = getUmkmBySlug(params.slug);

  if (!umkm) {
    notFound();
  }

  const waLink = `https://wa.me/${umkm.whatsapp}`;

  return (
    <>
      {/* Header */}
      <section className="bg-noise relative overflow-hidden bg-teak-dark py-16 text-cream">
        <div className="section-pad relative mx-auto max-w-content">
          <Link
            href="/umkm"
            className="font-mono text-xs uppercase tracking-widest text-gold-light"
          >
            ← Kembali ke UMKM
          </Link>

          <p className="eyebrow mt-4 text-gold-light">
            {umkm.jenisUsaha}
          </p>

          <h1 className="mt-2 font-display text-3xl font-semibold md:text-5xl">
            {umkm.nama}
          </h1>

          <p className="mt-3 font-body text-cream/80">
            {umkm.tagline}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="section-pad mx-auto max-w-content py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Konten */}
          <div className="lg:col-span-2">
            {/* Galeri */}
            <div className="grid gap-4 sm:grid-cols-2">
              {umkm.galeri.map((foto, i) => (
                <div
                  key={i}
                  className="card-wood relative h-56 overflow-hidden"
                >
                  <Image
                    src={foto}
                    alt={`${umkm.nama} ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Sejarah */}
            <div className="mt-10">
              <p className="eyebrow">Sejarah &amp; Cerita Usaha</p>

              <div className="mt-4 space-y-4 font-body text-ink/90">
                {umkm.sejarah.map((par, i) => (
                  <p key={i}>{par}</p>
                ))}
              </div>
            </div>

            {/* Menu */}
            {umkm.menu && umkm.menu.length > 0 && (
              <div className="mt-10">
                <p className="eyebrow">Daftar Menu</p>

                <div className="mt-4 space-y-6">
                  {umkm.menu.map((grup) => (
                    <div key={grup.judul}>
                      <h3 className="font-display text-lg text-ink">
                        {grup.judul}
                      </h3>

                      <ul className="mt-2 divide-y divide-teak/10">
                        {grup.items.map((item) => (
                          <li
                            key={item.nama}
                            className="flex items-center justify-between py-2 font-body text-sm"
                          >
                            <span className="text-ink/80">
                              {item.nama}
                            </span>

                            <span className="font-mono text-sawah-dark">
                              {item.harga}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimoni */}
            <div className="mt-10">
              <p className="eyebrow">Testimoni Pelanggan</p>

              <blockquote className="card-wood mt-4 border-l-4 border-gold p-6 font-body italic text-ink/80">
                &ldquo;{umkm.testimoni}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="card-wood p-6">
              <p className="eyebrow">Informasi</p>

              <dl className="mt-4 space-y-3 font-body text-sm">
                <div>
                  <dt className="text-ink/50">Lokasi</dt>
                  <dd className="text-ink/90">{umkm.lokasi}</dd>
                </div>

                <div>
                  <dt className="text-ink/50">Jam Operasional</dt>
                  <dd className="text-ink/90">
                    {umkm.jamOperasional}
                  </dd>
                </div>

                {umkm.pirt && (
                  <div>
                    <dt className="text-ink/50">No. PIRT</dt>
                    <dd className="text-ink/90">{umkm.pirt}</dd>
                  </div>
                )}

                <div>
                  <dt className="text-ink/50">Pembayaran</dt>
                  <dd className="text-ink/90">
                    {umkm.pembayaran.pembayaran.join(", ")}
                  </dd>
                </div>

                <div>
                  <dt className="text-ink/50">Cara Pemesanan</dt>
                  <dd className="text-ink/90">
                    {umkm.pembayaran.pemesanan.join(", ")}
                  </dd>
                </div>
              </dl>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-sm bg-sawah py-3 text-center font-body text-sm font-semibold text-cream transition hover:bg-sawah-dark"
              >
                Hubungi via WhatsApp
              </a>

              {umkm.mapsUrl && (
                <a
                  href={umkm.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block rounded-sm border border-teak/30 py-3 text-center font-body text-sm font-semibold text-ink transition hover:bg-teak/5"
                >
                  Lihat di Google Maps
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
