<div align="center">

<!-- Header Banner menggunakan Capsule Render -->

<img src="https://www.google.com/search?q=https://capsule-render.vercel.app/render%3Ftype%3Dsoft%26color%3Dauto%26height%3D250%26section%3Dheader%26text%3DFiha%2520Aridhoi%26fontSize%3D70%26animation%3DfadeIn" width="100%" />

<h1>✨ Fiha Aridhoi - Portfolio Pribadi ✨</h1>

<p>
<a href="https://fiha-aridhoi-portfolio-dfox.vercel.app/">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Live_Demo-Klik_Disini-blueviolet%3Fstyle%3Dfor-the-badge%26logo%3Dvercel" alt="Live Demo" />
</a>
</p>

<p>
<img src="https://www.google.com/search?q=https://img.shields.io/github/stars/F1H444/Fiha-Aridhoi-Portfolio%3Fstyle%3Dflat-square%26logo%3Dgithub%26color%3Dgold" alt="stars" />
<img src="https://www.google.com/search?q=https://img.shields.io/github/forks/F1H444/Fiha-Aridhoi-Portfolio%3Fstyle%3Dflat-square%26logo%3Dgithub%26color%3Dblue" alt="forks" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Node.js-v20.9.0%2B-green%3Fstyle%3Dflat-square%26logo%3Dnode.js" alt="Node Version" />
</p>

<p align="center">
<strong>Selamat datang di kode sumber website portofolio pribadi saya.</strong>
<br />
Sebuah pameran digital yang menampilkan keahlian, proyek, dan perjalanan saya sebagai seorang <b>Frontend Developer</b>.
</p>

</div>

<hr />

🌟 Tentang Proyek

Website ini dibuat dari nol dengan fokus pada kinerja tinggi, desain interaktif, dan animasi yang canggih. Proyek ini mencerminkan hasrat saya untuk menciptakan pengalaman web yang hidup, berkesan, dan fungsional.

✨ Fitur Unggulan

🚀 Kinerja Cepat: Menggunakan Next.js 16 (App Router) dan React 19 untuk server-side rendering (SSR) dan pemuatan halaman secepat kilat.

✨ Animasi Canggih:

Framer Motion: Animasi scroll-triggered dan transisi halaman yang mulus.

GSAP (GreenSock): Animasi kompleks berbasis timeline pada bagian Hero dan About Me.

📜 Smooth Scrolling: Integrasi Lenis (@studio-freight/lenis) untuk pengalaman navigasi yang sinematik.

⏳ Preloader Kustom: Efek loading 0% hingga 100% yang memastikan seluruh aset siap sebelum ditampilkan.

📬 Contact Form (EmailJS): Formulir fungsional tanpa backend, mengirim pesan langsung ke inbox saya.

🧭 Smart Navigation: Navbar dengan fitur auto-highlight berdasarkan posisi scroll pengguna.

🛠️ Tumpukan Teknologi (Tech Stack)

Komponen

Teknologi

Framework & Library

Next.js 16 (App Router), React 19, TypeScript

Styling

TailwindCSS 4

Animasi

Framer Motion, GSAP

Utilities

Lenis (Smooth Scroll), Lucide React, React Icons

Layanan

EmailJS (Contact Form), Vercel (Deployment)

📂 Struktur Proyek

/
├── app/
│   ├── (beranda)/          # Grup rute utama (Hero, Tentang, Skill, Project, Kontak)
│   ├── layout.tsx          # Root layout
│   └── globals.css         # CSS global & Tailwind
├── components/             # Komponen UI (Navbar, Preloader, SmoothScroll)
├── contexts/               # Manajemen state (PreloaderContext)
├── public/                 # Aset statis (Gambar & Ikon Proyek)
├── package.json
└── tsconfig.json


🚀 Menjalankan Secara Lokal

Ikuti langkah-langkah berikut untuk mencoba proyek ini di mesin lokal Anda:

1. Prasyarat

Node.js (v20.9.0 atau lebih baru)

npm / yarn / pnpm

2. Kloning & Instalasi

# Kloning repositori
git clone [https://github.com/F1H444/Fiha-Aridhoi-Portfolio.git](https://github.com/F1H444/Fiha-Aridhoi-Portfolio.git)

# Masuk ke folder
cd Fiha-Aridhoi-Portfolio

# Instal dependensi
npm install


3. Konfigurasi Environment

Buat file .env.local di root direktori dan masukkan kredensial EmailJS Anda:

EMAILJS_SERVICE_ID="service_XXXXXXX"
EMAILJS_TEMPLATE_ID="template_XXXXXXX"
EMAILJS_PUBLIC_KEY="XXXXXXXXXXXXXXXX"


4. Jalankan Server

npm run dev


Buka http://localhost:3000 di browser Anda.

🤝 Mari Terhubung

Saya selalu terbuka untuk kolaborasi atau sekadar bertukar pikiran mengenai pengembangan web.

GitHub: @F1H444

Email: fihaaridhoi@example.com

<div align="center">
Dibuat dengan ❤️ oleh <b>Fiha Aridhoi</b>
</div>
