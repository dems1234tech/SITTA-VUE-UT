# SITTA-VUE-UT
# 🚀 SITTA - Sistem Informasi Tiras & Transaksi Bahan Ajar (Vue.js Edition)

[![Vue.js](https://img.shields.io/badge/Vue.js-2.7.14-4fc08d?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![UT](https://img.shields.io/badge/Universitas-Terbuka-005197?style=for-the-badge)](https://www.ut.ac.id/)
[![Status](https://img.shields.io/badge/Status-Tugas_Praktik_2-f0db4f?style=for-the-badge&logo=javascript&logoColor=323330)](https://github.com/)

## 📝 Deskripsi Proyek
**SITTA (Vue.js Edition)** adalah aplikasi web manajemen inventaris dan logistik bahan ajar yang dikembangkan khusus untuk memenuhi **Tugas Praktik 2 Mata Kuliah Pemrograman Berbasis Web** di Universitas Terbuka. Proyek ini merupakan migrasi dari sistem Vanilla JS ke framework **Vue.js**, mengimplementasikan reaktivitas data dan komponen modern.

Aplikasi ini menggunakan tema **Cinematic Dark Mode** dengan sentuhan **Glassmorphism**, memberikan kesan premium dan profesional sesuai dengan standar korporat Universitas Terbuka.

---

## ✨ Fitur Unggulan

### 📦 1. Manajemen Stok Bahan Ajar (Reactive Inventory)
*   **Data Binding Real-time**: Penambahan dan pengeditan data stok langsung tercermin pada UI tanpa reload.
*   **Smart Filtering**: Filter dinamis berdasarkan Wilayah (UPBJJ) dan Kategori (BMP/Non-BMP).
*   **Status Indicator**: Penanda otomatis untuk stok **AMAN**, **MENIPIS**, atau **KOSONG** menggunakan logika Vue.
*   **Re-order Alert**: Watcher khusus yang mendeteksi item yang berada di bawah safety limit.
*   **Inline Editing**: Pengubahan data stok melalui modal yang terintegrasi dengan state management sederhana.

### 🚚 2. Tracking Delivery Order (DO)
*   **Auto-generated DO Number**: Sistem penomoran otomatis yang cerdas.
*   **Manifest Visualization**: Tampilan dinamis isi paket berdasarkan pilihan kategori bahan ajar.
*   **History Tracking**: Daftar riwayat pengiriman yang tersimpan dalam state aplikasi.
*   **Currency Formatting**: Filter Vue untuk memformat angka menjadi mata uang Rupiah secara otomatis.

---

## 🛠️ Tech Stack & Konsep Vue yang Digunakan

| Komponen | Teknologi |
| :--- | :--- |
| **Framework** | **Vue.js 2.7.14 (CDN)** |
| **Styling** | Vanilla CSS (Custom Properties, Glassmorphism, Flexbox, Grid) |
| **Icons** | FontAwesome 6.4.0 |
| **Typography** | Inter & Google Fonts |
| **State Management** | Vue Reactive Data Objects |
| **Directives** | `v-model`, `v-for`, `v-if`, `v-on`, `v-bind` |
| **Logic** | Computed Properties, Methods, Watchers |

---

## 📂 Struktur Proyek
```text
tugas2-vue-ut/
├── css/
│   └── style.css          # Design System & Cinematic Dark Theme
├── js/
│   ├── dataBahanAjar.js   # Sumber Data Statis (Initial State)
│   ├── stok-app.js        # Logika Vue untuk Manajemen Stok
│   └── tracking-app.js    # Logika Vue untuk Pelacakan DO
├── index.html             # Dashboard / Portal Utama
├── stok.html              # Halaman Manajemen Inventaris
└── tracking.html          # Halaman Registrasi & Tracking DO
```

---

## ⚙️ Logika Implementasi (Analisis Tugas)

1.  **Reaktivitas Data**: Menggunakan objek `data` pada instance Vue untuk menyimpan state aplikasi, memastikan sinkronisasi antara model dan view (Two-way Data Binding).
2.  **Computed Properties**: Digunakan untuk logika filtering dan sorting pada tabel stok, sehingga performa tetap optimal meski data bertambah banyak.
3.  **Conditional Rendering**: Implementasi `v-if` dan `v-show` untuk menampilkan modal edit dan detail manifest paket secara dinamis.
4.  **Event Handling**: Penggunaan `@submit.prevent` dan `@click` untuk menangani interaksi pengguna dengan mulus tanpa interupsi reload browser.

---

## 🚀 Cara Menjalankan
1.  Clone atau Download repository ini.
2.  Buka folder proyek.
3.  Jalankan file `index.html` menggunakan browser modern (Chrome/Edge direkomendasikan).
4.  *Tidak memerlukan instalasi npm karena menggunakan Vue.js via CDN untuk kemudahan koreksi tugas.*

---

## 👨‍💻 Author
**Nama:** DIMAS RIFALDI  
**NIM:** 054563432  
**UPBJJ:** Universitas Terbuka  
**Mata Kuliah:** Pemrograman Berbasis Web (Tugas Praktik 2)

---
<p align="center">
  <i>"Menuju Digitalisasi Pendidikan Tinggi Terbuka dan Jarak Jauh."</i><br>
  <strong>© 2026 Universitas Terbuka</strong>
</p>
