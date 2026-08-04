export type PaymentInfo = {
  pembayaran: string[];
  pemesanan: string[];
};

export type MenuItem = {
  nama: string;
  harga: string;
};

export type MenuGroup = {
  judul: string;
  items: MenuItem[];
};

export type Umkm = {
  slug: string;
  nama: string;
  tagline: string;
  jenisUsaha: string;
  logo: string;
  fotoSampul: string;
  galeri: string[];
  sejarah: string[];
  narahubung: string;
  whatsapp: string; // digits only, for wa.me links
  dusun: string;
  lokasi: string;
  jamOperasional: string;
  pirt: string | null;
  testimoni: string;
  pembayaran: PaymentInfo;
  mapsUrl: string | null;
  menu?: MenuGroup[]; // daftar menu terstruktur (khusus yang punya menu tercetak)
};

export const umkmList: Umkm[] = [
  {
    slug: "keripik-tempe-bu-kinasih",
    nama: "Keripik Tempe Bu Kinasih",
    tagline: "Renyah Gurih, Khas Ngawi",
    jenisUsaha: "Kuliner / Snack",
    logo: "/images/umkm/logo-keripik-tempe-kinasih.png",
    fotoSampul: "/images/umkm/produk-keripik-tempe-kinasih.png",
    galeri: [
      "/images/umkm/produk-keripik-tempe-kinasih.png",
      "/images/umkm/lokasi-keripik-tempe-kinasih.png",
    ],
    sejarah: [
      "Usaha keripik tempe ini bermula pada tahun 2019, diawali sebagai kegiatan sampingan di tengah kesibukan sehari-hari. Berbekal keinginan untuk memanfaatkan waktu luang sekaligus menambah penghasilan, produksi keripik tempe pada masa itu masih dilakukan dalam skala kecil dan sederhana, dengan pemasaran terbatas pada lingkungan sekitar dan kerabat terdekat.",
      "Hingga kini, keripik tempe tetap diproduksi dan dipasarkan secara konsisten di sela-sela aktivitas utama sehari-hari. Meski tidak dijalankan sebagai usaha utama, kepercayaan dan permintaan konsumen yang terus terjaga menjadi bukti bahwa usaha kecil yang dikelola dengan sepenuh hati tetap mampu bertahan dan memberikan nilai tambah, baik dari segi ekonomi maupun kepuasan personal bagi pemiliknya.",
    ],
    narahubung: "0821-3181-1351",
    whatsapp: "6282131811351",
    dusun: "Dusun Balun",
    lokasi: "Dusun Balun, Desa Karanggeneng, Kecamatan Pitu, Kabupaten Ngawi",
    jamOperasional: "Menyesuaikan pemesanan",
    pirt: "2113521011515-29",
    testimoni:
      "Keripik tempenya renyah, gurih, dan tidak berminyak. Rasanya pas dan bikin ketagihan. Kemasannya juga rapi sehingga cocok untuk oleh-oleh maupun camilan sehari-hari. Pelayanannya ramah dan pengirimannya juga cepat. Harganya juga bervariasi tiap gramnya, sesuai dengan kemauan kita. Saya selalu rekomendasikan kepada teman serta keluarga untuk oleh-oleh.",
    pembayaran: {
      pembayaran: ["Tunai", "QRIS", "Transfer"],
      pemesanan: ["Melalui WhatsApp"],
    },
    mapsUrl: "https://maps.app.goo.gl/XdRdiPkGbbakatbv5?g_st=ic",
  },
  {
    slug: "kedai-orizqi",
    nama: "Kedai Orizqi",
    tagline: "Orizqi Transmart — jajanan lengkap, kekinian",
    jenisUsaha: "Kuliner",
    logo: "/images/umkm/logo-kedai-orizqi.png",
    fotoSampul: "/images/umkm/kedai-orizqi-1.png",
    galeri: [
      "/images/umkm/menu-orizqi-makanan.png",
      "/images/umkm/menu-orizqi-minuman.png",
    ],
    sejarah: [
      "Kedai Orizqi memiliki perjalanan panjang sebelum akhirnya berdiri seperti sekarang. Perjalanan usaha ini dimulai pada tahun 2021, tepat setelah masa pandemi Covid-19, ketika pemilik memulai usaha berjualan dengan menggunakan gerobak keliling. Melalui cara ini, produk mulai dikenal dan mendapatkan pelanggan dari lingkungan sekitar.",
      "Sebelum memiliki tempat usaha sendiri, pemilik juga turut membantu berjualan di warung bakso goreng milik ibu mertua selama kurang lebih tiga tahun. Pengalaman tersebut menjadi bekal berharga dalam memahami cara mengelola usaha kuliner, mulai dari pelayanan pelanggan hingga pengelolaan operasional sehari-hari.",
      "Seiring berjalannya waktu, muncul keinginan untuk menghadirkan tempat yang lebih nyaman, di mana pelanggan tidak hanya membeli namun juga dapat bersantai dan menikmati hidangan secara langsung. Berangkat dari keinginan tersebut, pada tahun 2025 garasi rumah dialihfungsikan menjadi sebuah kedai kecil yang diberi nama Kedai Orizqi.",
      "Kini, Kedai Orizqi hadir dengan berbagai menu makanan dan minuman, mulai dari ayam olahan, mie jebew, seblak, hingga aneka minuman segar seperti boba dan es degan. Kedai buka setiap hari mulai pukul 09.00 WIB hingga malam hari, serta menyediakan layanan pesan antar (COD) yang menjangkau wilayah satu desa hingga Sonde.",
    ],
    narahubung: "0813-3156-1856",
    whatsapp: "6281331561856",
    dusun: "Dusun Kricak",
    lokasi: "Dusun Kricak, Desa Karanggeneng, Kecamatan Pitu, Kabupaten Ngawi",
    jamOperasional: "Setiap hari, 09.00 WIB — malam hari",
    pirt: null,
    testimoni:
      "Kedainya sangat bersih, pelayanannya juga sangat baik dan ramah. Menunya bervariasi juga, jadi tidak gampang bosan. Kalau misal lagi lapar dan kehausan pasti langsung kesana, soalnya paket lengkap.",
    pembayaran: {
      pembayaran: ["Tunai", "QRIS", "Transfer"],
      pemesanan: ["Melalui WhatsApp", "Datang langsung (COD area satu desa hingga Sonde)"],
    },
    mapsUrl: "https://maps.app.goo.gl/1Di4iQhSD5fvgGLS8?g_st=ic",
    menu: [
      {
        judul: "Makanan",
        items: [
          { nama: "Ayam Celup Lava", harga: "10K" },
          { nama: "Ayam Geprek + Nasi", harga: "10K" },
          { nama: "Ayam Lengkuas", harga: "10K" },
          { nama: "Ayam Bakar", harga: "10K" },
          { nama: "Burger", harga: "5K" },
          { nama: "Mie Jebew Lv. 1-2", harga: "8K" },
          { nama: "Mie Jebew Lv. 1-2 + Pentol", harga: "10K" },
          { nama: "Mie Jebew Lv. 3-5", harga: "10K" },
          { nama: "Mie Jebew Lv. 3-5 + Pentol", harga: "12K" },
          { nama: "Tempura Chili Oil", harga: "5K" },
          { nama: "Kebab", harga: "5K" },
          { nama: "Aneka Gorengan", harga: "1K" },
        ],
      },
      {
        judul: "Seblak",
        items: [
          { nama: "Seblak Paket (Mie + Sawi + Telur + Sosis)", harga: "7K" },
          { nama: "Seblak Paket (Mie + Sawi + Telur + Sosis + Bakso)", harga: "10K" },
          { nama: "Seblak Prasmanan", harga: "Harga menyesuaikan" },
        ],
      },
      {
        judul: "Minuman",
        items: [
          { nama: "Teh Ori", harga: "3K" },
          { nama: "Teh Hijau", harga: "4K" },
          { nama: "Lemon Tea", harga: "5K" },
          { nama: "Lecy Tea", harga: "5K" },
          { nama: "Milk Tea", harga: "5K" },
          { nama: "Aneka Pop Ice", harga: "4K + Susu 5K" },
          { nama: "Aneka Nutrisari", harga: "3,5K + Susu 5K" },
          { nama: "Es Jeruk Peras", harga: "4K" },
          { nama: "Chocolatos", harga: "5K" },
          { nama: "Beng-beng Drink", harga: "5K" },
          { nama: "Goodday", harga: "5K" },
          { nama: "Nescafe", harga: "5K" },
          { nama: "Boba Brown Sugar", harga: "5K" },
          { nama: "Boba Capucino", harga: "5K" },
          { nama: "Boba Taro", harga: "5K" },
          { nama: "Boba Coklat", harga: "5K" },
          { nama: "Boba Matcha", harga: "5K" },
          { nama: "Boba Bublegum", harga: "5K" },
        ],
      },
      {
        judul: "Es Degan",
        items: [
          { nama: "Es Degan Ori", harga: "5K" },
          { nama: "Es Degan Susu", harga: "7K" },
          { nama: "Es Teler Ori", harga: "6K" },
        ],
      },
    ],
  },
  {
    slug: "pawon-bunda-anwil",
    nama: "Pawon Bunda Anwil",
    tagline: "Kue rumahan, legit dan penuh isian",
    jenisUsaha: "Kuliner (Kue)",
    logo: "/images/umkm/logo-pawon-bunda-anwil.png",
    fotoSampul: "/images/umkm/tim-pawon-bunda-anwil.png",
    galeri: [
    "/images/umkm/pawon-bunda-anwil-1.png",
    "/images/umkm/pawon-bunda-anwil-2.png",
    "/images/umkm/pawon-bunda-anwil-3.png",
     "/images/umkm/pawon-bunda-anwil-4.png",
    "/images/umkm/pawon-bunda-anwil-5.png",
    "/images/umkm/pawon-bunda-anwil-6.png",
    "/images/umkm/pawon-bunda-anwil-7.png",
  ],
    sejarah: [
      "Pawon Bunda Anwil berawal dari tahun 2020, ketika Ibu Carik mengikuti sebuah pelatihan pembuatan kue yang diselenggarakan di kantor desa. Dari pelatihan tersebut, produk pertama yang dihasilkan adalah onde-onde, yang kemudian menjadi cikal bakal berdirinya usaha ini.",
      "Tidak berhenti pada satu produk, usaha ini terus dikembangkan secara mandiri dengan belajar berbagai resep dan teknik baru melalui platform YouTube. Melalui proses belajar yang konsisten, Pawon Bunda Anwil mampu memperluas variasi produknya dan terus bertahan hingga kini telah berjalan selama 5-6 tahun.",
      "Beberapa produk andalan yang menjadi favorit pelanggan antara lain bolu, putu ayu, onde-onde, dan kue tok. Sementara pada momen Lebaran, nastar menjadi salah satu produk unggulan yang paling banyak dicari.",
      "Pawon Bunda Anwil melayani pelanggan selama 24 jam penuh, dengan kisaran harga produk mulai dari Rp1.000 hingga Rp10.000, disesuaikan dengan permintaan pelanggan. Usaha ini juga menyediakan layanan jasa pengantaran.",
    ],
    narahubung: "0823-3345-8545",
    whatsapp: "6282333458545",
    dusun: "Dusun Kricak",
    lokasi: "Dusun Kricak, Desa Karanggeneng, Kecamatan Pitu, Kabupaten Ngawi",
    jamOperasional: "24 jam",
    pirt: null,
    testimoni:
      "Kue-kue yang dijual sangat beraneka macam. Kebetulan saya kemarin nyoba kue tok yang isinya kacang hijau, kuenya sangat enak dan isian kacang hijaunya itu penuh dan tidak pelit, jadi rasanya legit banget.",
    pembayaran: {
      pembayaran: ["Tunai", "Transfer"],
      pemesanan: ["Melalui WhatsApp"],
    },
    mapsUrl: null,
  {
    slug: "lapak-bu-nana",
    nama: "Lapak Bu Nana",
    tagline: "Jajanan Pedas Murah",
    jenisUsaha: "Kuliner / Snack",
    logo: "/images/umkm/banner-lapak-bu-nana.png",
    fotoSampul: "/images/umkm/lapak-bu-nana-1.png",
    galeri: [
      "/images/umkm/banner-lapak-bu-nana-2.png",
    ],
    sejarah: [
      "Lapak Bu Nana bermula dari kegemaran pribadi sang pemilik terhadap dunia jajanan, yang kemudian mendorong keinginan untuk memiliki penghasilan sendiri. Berbekal niat tersebut, usaha ini pertama kali dirintis dengan berjualan es teh sebagai langkah awal.",
      "Tidak berhenti di situ, usaha kemudian berkembang dengan mencoba berjualan seblak, salah satu kuliner yang sedang digemari masyarakat. Respons yang ramai dan antusias dari pembeli membuat penjualan seblak semakin diminati, sehingga usaha ini pun mulai bertransformasi mengikuti minat pasar.",
      "Namun, seiring padatnya aktivitas berjualan seblak yang cukup menyita waktu dan tenaga, sementara urusan rumah tangga juga perlu tetap diperhatikan, pemilik akhirnya menyesuaikan fokus usaha agar lebih seimbang antara berjualan dan mengurus keluarga.",
    ],
    narahubung: "0852-3434-6569",
    whatsapp: "6285234346569",
    dusun: "Dusun Karanggeneng",
    lokasi: "Dusun Karanggeneng, Desa Karanggeneng, Kecamatan Pitu, Kabupaten Ngawi",
    jamOperasional: "Menyesuaikan lapak buka",
    pirt: null,
    testimoni:
      "Pangsit chili oil berdaging banget, chili oilnya sangat enak dan nampol, bisa request level, cirengnya menul-menul dan crispy. Terdapat juga es jeruk peras yang rasanya manis, asem, seger. Es tehnya sangat seger dan cocok di panasnya Ngawi.",
    pembayaran: {
      pembayaran: ["Tunai"],
      pemesanan: ["Melalui WhatsApp", "Datang langsung ke lokasi (on the spot)"],
    },
    mapsUrl: "https://maps.app.goo.gl/ZAhJ8mgezxDoEorb7?g_st=ic",
  },
  {
    slug: "laundry-bu-ida",
    nama: "Laundry Bu Ida",
    tagline: "Ida Laundry — 24 jam buka",
    jenisUsaha: "Jasa Cuci dan Perawatan Pakaian",
    logo: "/images/umkm/logo-laundry-bu-ida.png",
    fotoSampul: "/images/umkm/laundry-bu-ida-1.png",
    galeri: ["/images/umkm/laundry-bu-ida-2.png"],
    sejarah: [
      "Laundry Bu Ida hadir dari perjalanan hidup pemiliknya sebagai seorang single parent yang memiliki keinginan kuat untuk mandiri secara finansial. Berbekal tekad tersebut, muncul pemikiran untuk merintis sebuah usaha yang dapat dijalankan secara konsisten guna memenuhi kebutuhan sehari-hari.",
      "Setelah mempertimbangkan berbagai peluang, pilihan pun jatuh pada usaha jasa laundry, yang kemudian diberi nama Ida Laundry. Meski usia usaha ini masih terbilang muda, yakni sekitar satu hingga dua tahun, Ida Laundry telah menjadi solusi praktis bagi masyarakat sekitar yang membutuhkan layanan cuci pakaian secara cepat dan mudah.",
      "Untuk memberikan kenyamanan maksimal bagi pelanggan, Ida Laundry beroperasi selama 24 jam penuh, dengan sistem pembayaran yang fleksibel baik secara tunai (cash) maupun transfer.",
    ],
    narahubung: "0812-9106-8648",
    whatsapp: "6281291068648",
    dusun: "Dusun Karanggeneng",
    lokasi: "Dusun Karanggeneng, Desa Karanggeneng, Kecamatan Pitu, Kabupaten Ngawi",
    jamOperasional: "24 jam",
    pirt: null,
    testimoni:
      "Wangi, hasil setrikanya rapi, lipatannya juga rapi, sangat sesuai harga dan kualitasnya.",
    pembayaran: {
      pembayaran: ["Tunai", "Transfer"],
      pemesanan: ["Datang langsung ke lokasi (on the spot)"],
    },
    mapsUrl: "https://maps.app.goo.gl/9dADsn3PNvV6uSdeA?g_st=ic",
  },
];

export const dusunList = [
  {
    nama: "Dusun Kricak",
    deskripsi:
      "Pusat geliat kuliner desa, tempat Kedai Orizqi dan Pawon Bunda Anwil tumbuh dari dapur rumahan menjadi jujukan warga.",
  },
  {
    nama: "Dusun Balun",
    deskripsi:
      "Dikenal lewat produksi rumahan Keripik Tempe Bu Kinasih, camilan renyah khas Ngawi yang bertahan sejak 2019.",
  },
  {
    nama: "Dusun Karanggeneng",
    deskripsi:
      "Titik pusat desa, rumah bagi Lapak Bu Nana dan Laundry Bu Ida yang melayani kebutuhan harian warga.",
  },
];

export function getUmkmBySlug(slug: string) {
  return umkmList.find((u) => u.slug === slug);
}
