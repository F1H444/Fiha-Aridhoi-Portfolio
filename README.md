Fiha Aridhoi - Portfolio Pribadi

Selamat datang di kode sumber untuk website portfolio pribadi saya. Proyek ini adalah sebuah pameran digital yang menampilkan keahlian, proyek, dan perjalanan saya sebagai seorang Frontend Developer.

Dibuat dari awal dengan fokus pada kinerja, desain interaktif, dan animasi yang canggih, website ini mencerminkan hasrat saya untuk menciptakan pengalaman web yang hidup dan berkesan.

➡️ Kunjungi Live Demo

[(Ganti dengan URL Vercel/hosting Anda jika sudah ada)](https://fiha-aridhoi-portfolio-dfox.vercel.app/)

Keahlian

(Anda bisa mengganti gambar di atas dengan screenshot yang lebih relevan dari live demo)

✨ Fitur Unggulan

Proyek ini bukan sekadar portofolio statis. Berikut adalah beberapa fitur teknis utamanya:

🚀 Kinerja Cepat: Dibangun dengan Next.js 16 (App Router) dan React 19 untuk server-side rendering (SSR), pemisahan kode otomatis, dan pemuatan halaman secepat kilat.

✨ Animasi Canggih:

Framer Motion: Digunakan untuk sebagian besar animasi scroll-triggered (saat di-scroll) dan transisi halaman, memberikan nuansa yang mulus dan modern.

GSAP (GreenSock): Dimanfaatkan untuk animasi yang lebih kompleks dan berbasis timeline, seperti pada bagian Hero dan About Me.

📜 Smooth Scrolling Premium: Menggunakan Lenis (@studio-freight/lenis) untuk memberikan pengalaman scroll yang sangat mulus dan sinematik di seluruh halaman.

⏳ Preloader Kustom: Dilengkapi preloader yang menghitung persentase dari 0% hingga 100%. Animasi utama di halaman Hero ditahan hingga preloader selesai, memastikan semua elemen tampil dengan sempurna.

📬 Formulir Kontak Fungsional (Tanpa Backend!): Bagian kontak terintegrasi langsung dengan EmailJS, memungkinkan pengunjung mengirim email langsung dari website tanpa memerlukan server backend.

🧭 Navigasi Cerdas: Navbar secara otomatis mendeteksi bagian (section) mana yang sedang dilihat pengguna saat men-scroll halaman dan meng-highlight tautan yang aktif.

🛠️ Tumpukan Teknologi (Tech Stack)

Daftar lengkap teknologi yang digunakan dalam proyek ini:

Framework: Next.js 16 (App Router)

Library: React 19

Bahasa: TypeScript

Styling: TailwindCSS 4

Animasi: Framer Motion & GSAP

Smooth Scroll: Lenis

Formulir Kontak: EmailJS

Ikon: Lucide React & React Icons

Linting: ESLint

Utilities: tailwind-merge

📂 Struktur Proyek

/
├── app/
│   ├── (beranda)/         # Grup rute utama untuk halaman portfolio
│   │   ├── hero.tsx       # Bagian Hero
│   │   ├── tentang.tsx    # Bagian Tentang Saya
│   │   ├── skill.tsx      # Bagian Keahlian
│   │   ├── project.tsx    # Bagian Proyek
│   │   ├── kontak.tsx     # Bagian Kontak (dengan EmailJS)
│   │   └── page.tsx       # Halaman utama yang menggabungkan semua bagian
│   │
│   ├── layout.tsx         # Layout utama (root layout)
│   └── globals.css        # CSS global (Tailwind)
│
├── components/
│   ├── Navbar.tsx         # Komponen Navbar
│   ├── Preloader.tsx      # Komponen Preloader (0-100%)
│   └── SmoothScroll.tsx   # Wrapper untuk Lenis smooth scroll
│
├── contexts/
│   └── PreloaderContext.tsx # Context untuk state preloader
│
├── public/
│   ├── images/
│   │   └── fiha.webp      # Foto profil
│   └── project/
│       ├── sikalori.png
│       ├── smkn2.png
│       └── kalkulator.png
│
├── package.json
└── tsconfig.json


🚀 Cara Menjalankan Secara Lokal

Anda dapat menjalankan salinan proyek ini di mesin lokal Anda untuk pengujian atau pengembangan.

1. Prasyarat

Pastikan Anda memiliki Node.js (v20.9.0 atau lebih baru) dan npm terinstal.

2. Kloning Repositori

git clone [https://github.com/F1H444/Fiha-Aridhoi-Portfolio.git](https://github.com/F1H444/Fiha-Aridhoi-Portfolio.git)
cd Fiha-Aridhoi-Portfolio


(Ganti dengan URL repo Anda jika berbeda)

3. Instal Dependensi

npm install


4. Konfigurasi Variabel Lingkungan

Proyek ini menggunakan EmailJS untuk formulir kontak. Anda perlu membuat akun gratis di EmailJS dan mendapatkan kredensial Anda.

Buat file baru bernama .env.local di root proyek dan tambahkan variabel berikut:

# Ganti dengan kredensial dari dashboard EmailJS Anda
# Digunakan di app/(beranda)/kontak.tsx

EMAILJS_SERVICE_ID="service_XXXXXXX"
EMAILJS_TEMPLATE_ID="template_XXXXXXX"
EMAILJS_PUBLIC_KEY="XXXXXXXXXXXXXXXX"


5. Jalankan Server Pengembangan

npm run dev


Buka http://localhost:3000 di browser Anda untuk melihat hasilnya.

Dibuat dengan ❤️ oleh Fiha Aridhoi
