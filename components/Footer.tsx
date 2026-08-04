import { desa } from "@/data/desa";

export default function Footer() {
  return (
    <footer className="border-t border-teak/10 bg-cream">
      <div className="leaf-divider" />
      <div className="section-pad mx-auto max-w-content py-10 text-center">
        <p className="font-display text-lg text-ink">{desa.nama}</p>
        <p className="mt-1 font-body text-sm text-ink/70">
          {desa.kecamatan}, {desa.kabupaten}, {desa.provinsi}
        </p>
        <p className="eyebrow mt-4">{desa.tagline}</p>
      </div>
    </footer>
  );
}
