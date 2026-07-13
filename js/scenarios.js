const SCENARIOS = [
  // ==========================================
  // LEVEL 1: MODUS UMUM (MUDAH)
  // ==========================================
  {
    id: 1,
    level: 1,
    levelName: "Tingkat 1: Modus Umum 🎮",
    sender: "🏦 Bank BRI Resmi",
    senderAddress: "bri-verifikasi@info-palsu.com",
    avatar: "🏦",
    subject: "PENTING: Akun Rekening BRI Anda Diblokir!",
    time: "Hari ini, 10:32",
    body: `Yth. Nasabah Bank BRI,

Kami mendeteksi adanya aktivitas mencurigakan pada rekening tabungan Anda. Demi keamanan, kami telah memblokir sementara kartu ATM dan internet banking Anda.

Segera lakukan verifikasi ulang data diri Anda agar rekening dapat diaktifkan kembali. Jika verifikasi tidak dilakukan dalam waktu 24 jam, akun tabungan Anda akan dibekukan secara permanen dan saldo Anda akan hangus.

Silakan klik tombol di bawah ini untuk memulai verifikasi cepat:`,
    actionText: "Verifikasi Rekening Sekarang 🔗",
    actionUrl: "http://klik-disini-bankbri.xyz/verify-banking",
    isPhishing: true,
    clues: [
      "Perhatikan alamat email pengirim: 'bri-verifikasi@info-palsu.com'. Bank BRI resmi menggunakan domain '@bri.co.id', bukan domain gratisan atau aneh.",
      "Perhatikan link verifikasi: 'klik-disini-bankbri.xyz'. Ini bukan situs resmi Bank BRI.",
      "Bahasa yang digunakan sangat mendesak dan mengancam: 'dibekukan secara permanen dalam 24 jam' agar Anda panik dan langsung klik."
    ],
    explanation: "Ini adalah email **PENIPUAN (Phishing)**! Penipu memalsukan nama pengirim sebagai 'Bank BRI Resmi', tetapi alamat email aslinya adalah <b>bri-verifikasi@info-palsu.com</b>. Domain link tujuan juga menggunakan akhiran <b>.xyz</b> yang mencurigakan. Bank resmi tidak pernah mengancam memblokir rekening dalam 24 jam melalui tautan email acak."
  },
  {
    id: 2,
    level: 1,
    levelName: "Tingkat 1: Modus Umum 🎮",
    sender: "⚡ PLN Mobile",
    senderAddress: "no-reply@pln.co.id",
    avatar: "⚡",
    subject: "Informasi Tagihan Listrik Pascabayar Bulan Mei 2026",
    time: "Kemarin, 08:15",
    body: `Pelanggan Yth,

Terima kasih telah setia menggunakan layanan PLN. Berikut kami sampaikan rincian tagihan listrik untuk ID Pelanggan: 532109876543 atas nama SUWARNO (Dusun Teluk Lombok).

Total Tagihan: Rp 142.500
Status: Belum Dibayar
Batas Akhir Pembayaran: Tanggal 20 setiap bulannya.

Untuk kemudahan pembayaran, Anda dapat bertransaksi langsung secara aman melalui aplikasi resmi PLN Mobile atau melalui kanal pembayaran resmi terdekat (Indomaret, Alfamart, atau Kantor Pos).`,
    actionText: "Buka Situs Resmi PLN 🔗",
    actionUrl: "https://web.pln.co.id",
    isPhishing: false,
    clues: [
      "Periksa alamat email pengirim: 'no-reply@pln.co.id'. Ini menggunakan domain resmi '@pln.co.id'.",
      "Pesan menyebutkan nama lengkap penerima dan ID Pelanggan dengan tepat, bukan sapaan umum.",
      "Tidak ada tautan aneh atau paksaan untuk mengisi data rahasia seperti password, OTP, atau PIN."
    ],
    explanation: "Pesan ini **AMAN (Resmi)**! Alamat email pengirimnya benar-benar berasal dari domain resmi PLN yaitu <b>@pln.co.id</b>. Isinya hanya berupa informasi tagihan bulanan tanpa ada unsur paksaan atau tautan mencurigakan yang meminta data pribadi Anda."
  },
  {
    id: 3,
    level: 1,
    levelName: "Tingkat 1: Modus Umum 🎮",
    sender: "🎉 Shopee Indonesia",
    senderAddress: "pemenang-shopee@promo-undian2026.net",
    avatar: "🎉",
    subject: "SELAMAT! Anda Memenangkan Hadiah Utama Rp 50 Juta!",
    time: "2 hari yang lalu",
    body: `Pelanggan Shopee yang Beruntung,

Selamat! Nomor telepon Anda terpilih sebagai Pemenang Utama program 'Gebyar Undian Shopee Berbagi 2026' dengan hadiah uang tunai sebesar Rp 50.000.000 (Lima Puluh Juta Rupiah) tanpa diundi!

Untuk mencairkan hadiah Anda, silakan hubungi Customer Service khusus pemenang dan isi formulir pencairan dana melalui tautan resmi di bawah ini.

Hadiah yang tidak diklaim dalam waktu 12 jam akan dialihkan kepada pemenang cadangan. Jangan lewatkan kesempatan emas ini!`,
    actionText: "Klaim Hadiah 50 Juta Di Sini 🔗",
    actionUrl: "https://shopee-pemenang50jt.net/daftar-penerima",
    isPhishing: true,
    clues: [
      "Email pengirim menggunakan domain '@promo-undian2026.net' yang bukan domain resmi Shopee (@shopee.co.id atau @shopee.com).",
      "Hadiah fantastis yang diberikan secara tiba-tiba tanpa Anda merasa mengikuti undian apa pun.",
      "Tautan pencairan mengarah ke 'shopee-pemenang50jt.net' yang merupakan situs buatan penipu untuk mencuri data pribadi Anda."
    ],
    explanation: "Ini adalah **PENIPUAN (Phishing)**! Shopee resmi tidak pernah mengumumkan pemenang undian bernilai besar lewat email pribadi dari domain mencurigakan seperti <b>@promo-undian2026.net</b>. Penipu menggunakan iming-iming hadiah besar dan batas waktu yang sangat mepet (12 jam) agar Anda panik dan lengah."
  },

  // ==========================================
  // LEVEL 2: BERKEDOK RESMI (SEDANG)
  // ==========================================
  {
    id: 4,
    level: 2,
    levelName: "Tingkat 2: Berkedok Resmi 🏛️",
    sender: "🏛️ Kantor Desa Teluk Lombok",
    senderAddress: "pendaftaran-bansos-teluklombok@free-forms-online.com",
    avatar: "🏛️",
    subject: "Pemberitahuan: Pendaftaran Bantuan Sosial (Bansos) Tahap 3",
    time: "Hari ini, 14:02",
    body: `Kepada seluruh Warga Dusun Teluk Lombok,

Berdasarkan keputusan rapat balai desa, pendaftaran program Bantuan Sosial (Bansos) Tahap 3 telah dibuka khusus bagi keluarga pra-sejahtera di wilayah Dusun Teluk Lombok.

Setiap kepala keluarga yang memenuhi kriteria diwajibkan untuk mengisi formulir pendaftaran secara online guna mempermudah pendataan. Anda diharuskan mengunggah foto KTP, foto Kartu Keluarga (KK), nomor rekening bank, serta PIN atau kata sandi Mobile Banking untuk proses verifikasi pencairan dana.

Silakan isi formulir pendaftaran melalui Google Form palsu di bawah ini sebelum kuota habis:`,
    actionText: "Isi Formulir Bansos Desa 🔗",
    actionUrl: "https://forms.gle/bansos-palsu-desa-lombok",
    isPhishing: true,
    clues: [
      "Pihak Kantor Desa tidak pernah mengumpulkan data sensitif seperti nomor rekening beserta PIN/Kata Sandi Mobile Banking.",
      "Formulir menggunakan Google Form gratisan dan disebarkan dari alamat email luar desa yang aneh.",
      "PIN/Kata Sandi bank adalah rahasia pribadi yang paling penting dan TIDAK BOLEH dibagikan kepada siapa pun, termasuk pihak desa."
    ],
    explanation: "Ini adalah **PENIPUAN (Phishing)**! Meskipun email tersebut memakai nama 'Kantor Desa Teluk Lombok', perhatikan bahwa formulir tersebut meminta <b>PIN atau Kata Sandi Mobile Banking</b> Anda. Ini adalah data rahasia perbankan. Desa resmi tidak akan pernah menanyakan PIN ATM atau password bank Anda!"
  },
  {
    id: 5,
    level: 2,
    levelName: "Tingkat 2: Berkedok Resmi 🏛️",
    sender: "🏥 BPJS Kesehatan Info",
    senderAddress: "info@bpjs-kesehatan.go.id",
    avatar: "🏥",
    subject: "Jadwal Pelayanan Posyandu & Skrining Riwayat Kesehatan Gratis",
    time: "Kemarin, 09:30",
    body: `Bapak/Ibu Warga Teluk Lombok yang Terhormat,

Sebagai upaya pencegahan penyakit kronis, Puskesmas pembantu Teluk Lombok bekerjasama dengan BPJS Kesehatan akan mengadakan pemeriksaan skrining riwayat kesehatan gratis (tensi darah, cek gula darah, dan kolesterol) bagi seluruh peserta JKN-KIS pada:

Hari/Tanggal: Sabtu, 30 Mei 2026
Waktu: 08.00 - 12.00 WITA
Tempat: Balai Pertemuan Dusun Teluk Lombok

Cukup bawa Kartu BPJS Kesehatan (JKN-KIS) aktif atau KTP Anda saat berkunjung. Tidak dipungut biaya apapun (Gratis).`,
    actionText: "Buka Portal Resmi BPJS 🔗",
    actionUrl: "https://www.bpjs-kesehatan.go.id",
    isPhishing: false,
    clues: [
      "Alamat email pengirim 'info@bpjs-kesehatan.go.id' adalah domain resmi instansi pemerintah (.go.id).",
      "Pesan bersifat informatif tentang kegiatan fisik di balai pertemuan desa setempat yang dapat diverifikasi kebenarannya secara offline.",
      "Tidak meminta data sensitif, transfer uang, ataupun memaksa klik ke website pihak ketiga."
    ],
    explanation: "Pesan ini **AMAN (Resmi)**! Email dikirim dari domain instansi pemerintah resmi (<b>.go.id</b>). Pesannya murni bersifat pengumuman kegiatan kesehatan fisik di balai dusun Anda tanpa meminta data sensitif atau menawarkan klaim dana tunai."
  },
  {
    id: 6,
    level: 2,
    levelName: "Tingkat 2: Berkedok Resmi 🏛️",
    sender: "📱 Telkomsel Care",
    senderAddress: "cs-telkomsel@pembaharuan-sistem-otp.org",
    avatar: "📱",
    subject: "PERINGATAN: Kartu SIM Card Anda Akan Dinonaktifkan!",
    time: "3 hari yang lalu",
    body: `Pelanggan Telkomsel yang Terhormat,

Sistem kami mendeteksi bahwa kartu SIM (SIM Card) aktif Anda belum melakukan registrasi ulang data kependudukan terbaru sesuai regulasi pemerintah. 

Kartu SIM Anda dijadwalkan akan dinonaktifkan dalam waktu 3 jam ke depan. Untuk mencegah penonaktifan kartu, silakan lakukan pembaruan data sekarang. Kami akan mengirimkan kode verifikasi (OTP) berupa 4 digit angka melalui SMS ke nomor Anda. 

Silakan balas pesan ini dengan menyebutkan kode OTP tersebut, atau masukkan kodenya pada tautan di bawah ini:`,
    actionText: "Perbarui Data SIM Card 🔗",
    actionUrl: "http://telkomsel-registrasi-ulang.org",
    isPhishing: true,
    clues: [
      "Pengirim menggunakan domain '.org' yang mencurigakan, bukan domain resmi Telkomsel (@telkomsel.com or @telkomsel.co.id).",
      "Meminta Anda memberikan kode verifikasi (OTP). Kode OTP adalah kunci rahasia yang tidak boleh diberikan kepada siapa pun.",
      "Ancaman pemblokiran yang sangat singkat (hanya dalam 3 jam) untuk memaksa pengguna bertindak ceroboh."
    ],
    explanation: "Ini adalah **PENIPUAN (Phishing / Credential Harvesting)**! Penipu ingin merebut kendali atas nomor HP Anda dengan meminta **kode OTP** yang dikirim ke HP Anda. Jika mereka mendapatkan kode OTP itu, mereka bisa meretas akun WhatsApp, akun e-wallet, atau m-banking Anda yang terhubung dengan nomor tersebut."
  },

  // ==========================================
  // LEVEL 3: SPEAR PHISHING (SULIT)
  // ==========================================
  {
    id: 7,
    level: 3,
    levelName: "Tingkat 3: Spear Phishing Kompleks 🚨",
    sender: "👤 Pak Lurah Teluk Lombok",
    senderAddress: "lurah.teluklombok.palsu@gmail.com",
    avatar: "👤",
    subject: "URGENT: Sumbangan Gotong Royong Musala Balai Desa",
    time: "Hari ini, 18:24",
    body: `Assalamualaikum Wr. Wb. Rekan-rekan warga Teluk Lombok,

Saya, selaku Kepala Desa/Lurah Teluk Lombok, ingin menginformasikan bahwa pembangunan renovasi atap Musala Al-Ikhlas dekat balai desa mendadak kekurangan dana sebesar Rp 5.000.000 untuk membeli semen dan asbes malam ini karena toko material akan segera tutup.

Mengingat pentingnya tempat ibadah kita, saya mengimbau perwakilan warga atau pengurus RT untuk membantu talangan dana terlebih dahulu sebesar Rp 500.000 per keluarga yang nantinya akan diganti menggunakan dana kas desa minggu depan.

Tolong transfer segera dana talangan ke rekening bendahara pembangunan darurat di bawah ini:
Bank Mandiri Palsu: 123-00-998877-5
A.n. Budi Hartono (Staf Khusus Lurah)`,
    actionText: "Konfirmasi Transfer via WhatsApp 🔗",
    actionUrl: "https://wa.me/628123456789?text=Saya%20sudah%20transfer%20gotong%20royong%20musala",
    isPhishing: true,
    clues: [
      "Email pengirim menggunakan alamat gmail pribadi 'lurah.teluklombok.palsu@gmail.com', bukan email kedinasan resmi atau nomor kontak pribadi yang sudah disimpan.",
      "Permintaan uang darurat secara mendadak dengan alasan emosional (ibadah/gotong royong) agar warga langsung percaya tanpa berpikir panjang.",
      "Minta uang dikirim ke rekening pribadi perorangan (A.n. Budi Hartono) alih-alih rekening resmi kas desa atau panitia resmi musala."
    ],
    explanation: "Ini adalah **SPEAR PHISHING (Penipuan Tertarget)**! Penipu berpura-pura menjadi tokoh terpandang (Pak Lurah) yang Anda kenal baik secara personal untuk mengeksploitasi rasa hormat dan jiwa gotong royong Anda. Selalu lakukan verifikasi langsung secara tatap muka (offline) jika menerima permintaan transfer uang dari aparat desa."
  },
  {
    id: 8,
    level: 3,
    levelName: "Tingkat 3: Spear Phishing Kompleks 🚨",
    sender: "💬 WhatsApp Security",
    senderAddress: "support@verify.whatsapp.com",
    avatar: "💬",
    subject: "Pemberitahuan Keamanan: Percobaan Login Perangkat Baru",
    time: "Hari ini, 07:11",
    body: `Halo Pengguna WhatsApp,

Sistem keamanan kami mendeteksi adanya upaya masuk (login) baru ke akun WhatsApp Anda dari perangkat:
Perangkat: Chrome Browser (Windows 11)
Lokasi: Jakarta, Indonesia
Waktu: 28 Mei 2026, 07:05 WITA

Jika ini adalah tindakan Anda, Anda dapat mengabaikan email ini. Namun, jika Anda tidak merasa melakukan login dari perangkat tersebut, silakan segera amankan akun Anda secara mandiri di menu Setelan > Akun > Verifikasi Dua Langkah di aplikasi WhatsApp resmi Anda.`,
    actionText: "Panduan Keamanan Resmi 🔗",
    actionUrl: "https://faq.whatsapp.com",
    isPhishing: false,
    clues: [
      "Pengirim menggunakan domain 'verify.whatsapp.com' yang merupakan salah satu subdomain resmi dari pemilik WhatsApp.",
      "Pesan tidak menyuruh Anda mengklik link untuk memasukkan kode OTP, PIN, atau data rahasia.",
      "Pesan menyarankan Anda melakukan pengamanan secara mandiri secara langsung melalui menu aplikasi resmi Anda, bukan dari halaman luar."
    ],
    explanation: "Pesan ini **AMAN (Resmi)**! Pesan ini dikirim dari domain resmi WhatsApp untuk memperingatkan adanya aktivitas mencurigakan. Yang terpenting, pesan ini tidak meminta data rahasia Anda dan justru menyarankan Anda untuk mengamankan akun melalui aplikasi WhatsApp resmi Anda sendiri."
  },
  {
    id: 9,
    level: 3,
    levelName: "Tingkat 3: Spear Phishing Kompleks 🚨",
    sender: "🌾 Kementerian Sosial & Pertanian",
    senderAddress: "pembagian-pupuk@kemensos-pertanian-go.info",
    avatar: "🌾",
    subject: "PENTING: Undangan Penerima Bantuan Pupuk Subsidi Tahun 2026",
    time: "Kemarin, 11:45",
    body: `Yth. Anggota Kelompok Tani Dusun Teluk Lombok,

Kami lampirkan Surat Keputusan (SK) Menteri Sosial dan Pertanian Nomor: 772/SK/PUPUK/2026 mengenai daftar nama petani Dusun Teluk Lombok yang berhak mendapatkan Bantuan Pupuk Subsidi gratis untuk musim tanam tahun ini.

Setiap penerima bantuan wajib mengunduh berkas daftar penerima, mencetaknya, dan membawanya ke Koperasi Tani Desa pada saat pengambilan pupuk subsidi minggu depan.

Silakan unduh berkas digital surat keputusan daftar penerima bantuan (.exe file dikemas zip) di bawah ini:`,
    actionText: "Unduh SK Penerima Pupuk (.zip) 🔗",
    actionUrl: "http://kemensos-pertanian-go.info/download/sk-penerima-pupuk.zip",
    isPhishing: true,
    clues: [
      "Domain email 'kemensos-pertanian-go.info' bukan domain pemerintahan resmi (.go.id), melainkan domain murah berakhiran '.info'.",
      "Pesan melampirkan file berakhiran '.zip' yang berisi aplikasi berjalan/berbahaya (.exe), bukan dokumen umum seperti gambar atau PDF.",
      "Instansi kementerian di Indonesia terpisah (Kementerian Sosial sendiri, Kementerian Pertanian sendiri), tidak ada 'Kementerian Sosial & Pertanian' yang digabung."
    ],
    explanation: "Ini adalah **PENIPUAN (Phishing & Malware Injection)**! Penipu menargetkan mata pencaharian warga desa (petani) dengan umpan bantuan pupuk subsidi. Mereka menyuruh Anda mengunduh file <b>.zip / .exe</b> yang sebenarnya berisi virus/malware jahat. Jika dibuka di laptop balai desa atau HP, virus tersebut dapat mencuri seluruh password, data pribadi, atau mengunci perangkat Anda!"
  },

  // ==========================================
  // LEVEL 1: TAMBAHAN (TOTAL 6)
  // ==========================================
  {
    id: 10,
    level: 1,
    levelName: "Tingkat 1: Modus Umum 🎮",
    sender: "📦 Pos Indonesia",
    senderAddress: "no-reply@posindonesia.co.id",
    avatar: "📦",
    subject: "Paket Anda Sedang Dikirim ke Dusun Teluk Lombok",
    time: "Hari ini, 09:00",
    body: `Halo Pelanggan Pos Indonesia,

Paket dengan nomor resi POS123456789ID atas nama Budi (Dusun Teluk Lombok) saat ini sedang dalam perjalanan oleh kurir kami. Estimasi tiba di alamat tujuan adalah hari ini sebelum pukul 18:00 WITA.

Anda dapat memantau status pengiriman secara real-time melalui situs resmi Pos Indonesia dengan memasukkan nomor resi tersebut. Kurir kami tidak akan meminta biaya tambahan apa pun di lokasi kecuali paket COD yang telah Anda setujui sebelumnya.`,
    actionText: "Lacak Paket Pos Indonesia 🔗",
    actionUrl: "https://www.posindonesia.co.id/id/tracking",
    isPhishing: false,
    clues: [
      "Email menggunakan domain resmi '@posindonesia.co.id'.",
      "Informasi paket jelas dan tidak memaksa mengunduh file aplikasi apa pun.",
      "Mengarahkan pelanggan ke halaman tracking resmi untuk pengecekan mandiri."
    ],
    explanation: "Pesan ini **AMAN (Resmi)**! Pengirim menggunakan alamat email dengan domain asli Pos Indonesia (<b>@posindonesia.co.id</b>). Pesan ini murni bersifat informatif tentang pelacakan paket dan tidak mengandung tautan atau file berbahaya."
  },
  {
    id: 11,
    level: 1,
    levelName: "Tingkat 1: Modus Umum 🎮",
    sender: "🚚 Kurir J&T Express",
    senderAddress: "kurir-jnt-delivery88@gmail.com",
    avatar: "🚚",
    subject: "PENTING: Foto Resi Paket Anda Bermasalah (Lihat Lampiran)",
    time: "Hari ini, 11:15",
    body: `Permisi Kak, saya kurir J&T Express. 

Saya mau mengantarkan paket ke rumah Kakak di Dusun Teluk Lombok, tapi tulisan alamat di resinya agak buram dan robek. 

Tolong dicek kembali apakah alamat di foto resi ini sudah benar atau belum agar paketnya tidak salah kirim ke desa sebelah. Saya lampirkan foto resi digitalnya di bawah ini, silakan diunduh dan dipasang di HP Kakak untuk melihat gambarnya:`,
    actionText: "Unduh Foto_Resi_JNT.apk 🔗",
    actionUrl: "http://jnt-express-resi-palsu.xyz/Foto_Resi_JNT.apk",
    isPhishing: true,
    clues: [
      "Menggunakan email gratisan Gmail ('kurir-jnt-delivery88@gmail.com') untuk urusan dinas kurir resmi.",
      "File yang dikirim berakhiran '.apk' (aplikasi Android) tapi diklaim sebagai 'Foto Resi'. Gambar asli harusnya berakhiran .jpg atau .png.",
      "Modus penipuan APK yang sedang sangat marak untuk meretas HP korban."
    ],
    explanation: "Ini adalah **PENIPUAN (Phishing & Malware APK)**! Modus kirim paket berformat **.apk** adalah taktik berbahaya penipu untuk menyusupkan aplikasi pembaca SMS (mencuri OTP) ke HP Anda. Kurir asli tidak pernah meminta Anda menginstal aplikasi khusus hanya untuk melihat foto resi atau alamat!"
  },
  {
    id: 12,
    level: 1,
    levelName: "Tingkat 1: Modus Umum 🎮",
    sender: "📝 Dukcapil Kabupaten",
    senderAddress: "layanan-online@dukcapil.go.id",
    avatar: "📝",
    subject: "Undangan Pemadanan Data NIK KTP dan Kartu Keluarga",
    time: "3 hari yang lalu",
    body: `Kepada Yth. Warga Kabupaten,

Dalam rangka menyukseskan program pemutihan data kependudukan nasional, kami mengundang Anda untuk melakukan pengecekan status pemadanan NIK KTP dengan NPWP secara mandiri melalui portal resmi Dukcapil.

Proses ini sangat penting untuk memastikan keaktifan BPJS, bantuan sosial, dan layanan perbankan Anda. Layanan ini sepenuhnya gratis dan tidak dipungut biaya apa pun.`,
    actionText: "Cek Status NIK Resmi 🔗",
    actionUrl: "https://dukcapil.kemendagri.go.id",
    isPhishing: false,
    clues: [
      "Email pengirim berasal dari domain resmi instansi pemerintah (.go.id).",
      "Situs tujuan mengarah langsung ke portal resmi Kementerian Dalam Negeri (kemendagri.go.id).",
      "Tidak ada permintaan mengunggah berkas aneh atau memasukkan password/PIN perbankan."
    ],
    explanation: "Pesan ini **AMAN (Resmi)**! Email ini resmi dikirim oleh Dukcapil dengan domain instansi pemerintah <b>.go.id</b> untuk mengingatkan warga tentang pemadanan NIK tanpa meminta informasi rahasia."
  },

  // ==========================================
  // LEVEL 2: TAMBAHAN (TOTAL 6)
  // ==========================================
  {
    id: 13,
    level: 2,
    levelName: "Tingkat 2: Berkedok Resmi 🏛️",
    sender: "💼 Info Karir Tokopedia",
    senderAddress: "mitra-kerja@tokopedia-parttime.click",
    avatar: "💼",
    subject: "Kerja Sampingan Online: Dapatkan Rp 200rb-500rb per Hari!",
    time: "Hari ini, 15:30",
    body: `Halo Mitra Berbakat,

Tokopedia sedang membuka lowongan kerja paruh waktu (part-time) dari rumah saja! Tugasnya sangat mudah, Anda hanya perlu menyukai (like) produk toko online kami dan membagikannya ke media sosial.

Setiap tugas yang selesai akan langsung dibayar komisi Rp 20.000, dengan potensi penghasilan harian mencapai Rp 500.000. Pekerjaan ini sangat cocok untuk ibu rumah tangga, petani, dan pemuda desa.

Daftar sekarang melalui kontak admin Telegram kami di bawah ini:`,
    actionText: "Hubungi Admin via Telegram 🔗",
    actionUrl: "https://tokopedia-parttime.click/chat-telegram",
    isPhishing: true,
    clues: [
      "Menggunakan domain mencurigakan 'tokopedia-parttime.click' yang bukan domain resmi Tokopedia.",
      "Iming-iming gaji besar untuk pekerjaan yang sangat mudah (hanya like-share).",
      "Mengarahkan komunikasi ke chat Telegram anonim untuk memulai modus penipuan tugas berbayar (deposit uang)."
    ],
    explanation: "Ini adalah **PENIPUAN (Lowongan Kerja Palsu / Job Scam)**! Penipu memakai nama Tokopedia untuk memancing Anda melakukan tugas mudah. Setelah Anda bergabung, mereka biasanya meminta Anda mentransfer uang jaminan (deposit) terlebih dahulu dengan dalih meningkatkan komisi, yang akhirnya uang Anda akan dibawa kabur."
  },
  {
    id: 14,
    level: 2,
    levelName: "Tingkat 2: Berkedok Resmi 🏛️",
    sender: "🏫 Kemendikbud Ristek",
    senderAddress: "beasiswa-unggulan@kemdikbud.go.id",
    avatar: "🏫",
    subject: "Pengumuman Hasil Seleksi Administrasi Beasiswa Unggulan 2026",
    time: "Kemarin, 14:00",
    body: `Yth. Peserta Program Beasiswa Unggulan,

Kami ucapkan selamat bagi putra-putri Dusun Teluk Lombok yang telah mendaftarkan diri pada program Beasiswa Unggulan Kemendikbud Ristek Tahun 2026.

Berdasarkan hasil rapat komite seleksi, status kelulusan berkas administrasi Anda telah diterbitkan. Silakan masuk (login) ke portal beasiswa resmi menggunakan akun terdaftar Anda untuk melihat hasil detail pengumuman.`,
    actionText: "Masuk ke Portal Beasiswa 🔗",
    actionUrl: "https://beasiswa.kemdikbud.go.id",
    isPhishing: false,
    clues: [
      "Alamat email pengirim menggunakan domain resmi '@kemdikbud.go.id'.",
      "Tautan login mengarah ke domain kementerian resmi tanpa embel-embel nama domain aneh.",
      "Tidak ada permintaan uang jaminan, biaya administrasi pencairan, ataupun permintaan nomor PIN bank."
    ],
    explanation: "Pesan ini **AMAN (Resmi)**! Email dikirim langsung dari sistem resmi kementerian pendidikan (<b>.go.id</b>) tanpa meminta bayaran atau informasi rahasia."
  },
  {
    id: 15,
    level: 2,
    levelName: "Tingkat 2: Berkedok Resmi 🏛️",
    sender: "💬 Layanan CS Mandiri",
    senderAddress: "info-tarif-update@mandiri-layanan-konfirmasi.com",
    avatar: "💬",
    subject: "PENTING: Konfirmasi Perubahan Tarif Transaksi Bank Mandiri",
    time: "2 hari yang lalu",
    body: `Nasabah Bank Mandiri yang Terhormat,

Mulai malam ini pukul 24:00 WITA, Bank Mandiri akan memberlakukan tarif transfer antarbank baru sebesar Rp 150.000 per bulan (sistem langganan otomatis dibotong dari saldo).

Jika Anda keberatan dengan tarif baru tersebut dan ingin tetap menggunakan tarif lama Rp 6.500 per transaksi, Anda diwajibkan melakukan konfirmasi penolakan tarif sekarang.

Jika tidak ada konfirmasi dalam waktu 2 jam, sistem kami akan otomatis memotong saldo Anda setiap bulan. Silakan klik link di bawah untuk menolak kenaikan tarif:`,
    actionText: "Tolak Kenaikan Tarif Transfer 🔗",
    actionUrl: "http://mandiri-tarif-update.com/decline-rate",
    isPhishing: true,
    clues: [
      "Pengirim memakai alamat email dari domain tidak resmi 'mandiri-layanan-konfirmasi.com', bukan '@bankmandiri.co.id'.",
      "Taktik manipulasi psikologis yang menakut-nakuti nasabah dengan pemotongan uang otomatis Rp 150rb/bulan.",
      "Tautan mengarah ke situs palsu yang nantinya akan meminta Anda mengisi nomor kartu ATM, PIN, dan OTP."
    ],
    explanation: "Ini adalah **PENIPUAN (Phishing Tarif Bank)**! Modus ini sedang sangat marak menyerang pengguna perbankan di Indonesia. Penipu menakut-nakuti Anda dengan biaya langganan bulanan fiktif yang mahal agar Anda panik lalu mengisi data-data kartu ATM lengkap dengan PIN dan OTP di situs palsu mereka."
  },

  // ==========================================
  // LEVEL 3: TAMBAHAN (TOTAL 6)
  // ==========================================
  {
    id: 16,
    level: 3,
    levelName: "Tingkat 3: Spear Phishing Kompleks 🚨",
    sender: "🛡️ Google Security",
    senderAddress: "no-reply@accounts.google.com",
    avatar: "🛡️",
    subject: "Peringatan Keamanan: Upaya Login Terblokir",
    time: "Hari ini, 06:45",
    body: `Halo,

Google baru saja memblokir upaya masuk ke Akun Google Anda (waspada.digital.teluklombok@gmail.com) dari aplikasi yang kurang aman atau perangkat baru.

Detail Kejadian:
Perangkat: Linux (Ubuntu)
Alamat IP: 182.253.140.23 (Samarinda, Kalimantan Timur)

Jika ini bukan Anda, silakan segera periksa aktivitas perangkat Anda melalui menu pengaturan akun Google resmi Anda. Google tidak pernah meminta kata sandi Anda melalui email atau SMS.`,
    actionText: "Periksa Aktivitas Akun Resmi 🔗",
    actionUrl: "https://myaccount.google.com/security",
    isPhishing: false,
    clues: [
      "Email menggunakan domain resmi '@accounts.google.com'.",
      "Isi pesan memperingatkan tentang upaya login yang sudah berhasil diblokir demi keamanan Anda.",
      "Mengarahkan Anda secara aman ke portal manajemen akun Google asli tanpa meminta data rahasia."
    ],
    explanation: "Pesan ini **AMAN (Resmi)**! Email pemberitahuan ini asli dari sistem keamanan Google (<b>@accounts.google.com</b>) untuk memberi tahu Anda bahwa sistem mereka telah sukses melindungi akun Anda dari upaya masuk pihak luar."
  },
  {
    id: 17,
    level: 3,
    levelName: "Tingkat 3: Spear Phishing Kompleks 🚨",
    sender: "📊 Direktorat Jenderal Pajak (DJP)",
    senderAddress: "pemeriksaan-pajak@djp-pajak-go.id-online.net",
    avatar: "📊",
    subject: "PERINGATAN: Kekurangan Bayar Pajak SPT Tahunan 2025",
    time: "Kemarin, 16:20",
    body: `Kepada Wajib Pajak yang Terhormat,

Berdasarkan hasil analisis data pelaporan SPT Tahunan Tahun Pajak 2025, kami menemukan adanya selisih perhitungan kurang bayar pajak pada profil keuangan Anda sebesar Rp 3.450.000.

Anda diwajibkan untuk segera melunasi kekurangan tersebut atau melakukan sanggahan resmi. Detail rincian selisih pajak dan berkas formulir sanggahan elektronik telah kami lampirkan di bawah ini.

Silakan unduh, pasang, dan isi aplikasi formulir sanggahan di HP Android Anda agar terhindar dari denda administratif harian:`,
    actionText: "Unduh Aplikasi Sanggahan Pajak (.apk) 🔗",
    actionUrl: "http://djp-pajak-go.id-online.net/download/E-Sanggahan_Pajak.apk",
    isPhishing: true,
    clues: [
      "Alamat email berakhir dengan domain '.net' ('go.id-online.net') yang didesain meniru domain pemerintah '.go.id'.",
      "Meminta Anda mengunduh dan menginstal aplikasi berformat '.apk' (aplikasi Android) untuk melihat dokumen rincian pajak.",
      "Ancaman denda administratif yang dipaksakan agar korban tidak berpikir rasional."
    ],
    explanation: "Ini adalah **PENIPUAN (Phishing & Spyware APK)**! Ditjen Pajak resmi tidak pernah mengirimkan berkas tagihan atau formulir sanggahan berformat **.apk**. Domain yang digunakan juga palsu. Jika Anda mengunduh APK tersebut, HP Anda akan disusupi program jahat yang dapat mencuri SMS transaksi perbankan Anda."
  },
  {
    id: 18,
    level: 3,
    levelName: "Tingkat 3: Spear Phishing Kompleks 🚨",
    sender: "👤 Tetangga Dusun (Pak RT Joko)",
    senderAddress: "joko.tetangga.lombok@gmail.com",
    avatar: "👤",
    subject: "Tolong Mas, Butuh Bantuan Darurat Uang Rumah Sakit!",
    time: "Hari ini, 20:15",
    body: `Assalamualaikum Mas, 

Maaf mengganggu malam-malam begini. Saya Joko RT 02 Dusun Teluk Lombok. 

Anak saya yang paling kecil mendadak jatuh sakit parah dan malam ini harus segera masuk ruang darurat di RSUD kota. Saya sedang panik sekali di jalan dan tabungan saya masih kurang Rp 1.500.000 untuk bayar uang jaminan rawat inap malam ini.

Bisa tolong bantu pinjamkan dulu Rp 500.000? Besok pagi setelah bank buka langsung saya ganti tunai. Tolong transfer ke rekening klinik/RS ini ya Mas:
Bank BRI Palsu: 5321-01-098765-53-1
A.n. Supriadi (Kasir RS)`,
    actionText: "Konfirmasi Pinjaman via WhatsApp 🔗",
    actionUrl: "https://wa.me/628987654321?text=Saya%20bantu%20transfer%20untuk%20anak%20Pak%20RT",
    isPhishing: true,
    clues: [
      "Email menggunakan alamat email pribadi gratisan Gmail yang meniru identitas orang terdekat/tetangga.",
      "Skenario keadaan darurat anak sakit kritis merupakan teknik manipulasi psikologis (social engineering) terkuat agar korban langsung panik dan menuruti permintaan.",
      "Menggunakan nomor rekening perorangan atas nama 'Supriadi' dengan klaim 'kasir RS'."
    ],
    explanation: "Ini adalah **SPEAR PHISHING (Social Engineering)**! Penipu meniru identitas tetangga dekat/tokoh masyarakat (Pak RT) untuk memanfaatkan rasa empati dan solidaritas warga desa. Selalu telepon langsung ke nomor telepon aslinya atau temui keluarganya secara fisik sebelum mengirimkan uang bantuan darurat."
  }
];

