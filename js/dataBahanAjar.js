/**
 * Dummy Data for SITTA Bahan Ajar Ordering System
 * This file serves as the data source for both Stock and Tracking applications.
 */

const upbjjData = [
    { id: 1, nama: "UPBJJ Jakarta", kategori: ["BMP", "Non-BMP", "Multimedia"] },
    { id: 2, nama: "UPBJJ Makassar", kategori: ["BMP", "Non-BMP"] },
    { id: 3, nama: "UPBJJ Surabaya", kategori: ["BMP", "Referensi"] },
    { id: 4, nama: "UPBJJ Bandung", kategori: ["BMP", "Non-BMP", "Praktek"] },
    { id: 5, nama: "UPBJJ Medan", kategori: ["BMP", "Multimedia"] }
];

const initialBahanAjar = [
    { id: 1, kode: "EKMA4216", judul: "Manajemen Keuangan", kategori: "BMP", upbjj: "UPBJJ Jakarta", lokasiRak: "A-101", qty: 45, safety: 20, harga: 45000, catatanHTML: "<i>Stok aman untuk semester ini.</i>" },
    { id: 2, kode: "PAUD4401", judul: "Perkembangan Anak Usia Dini", kategori: "BMP", upbjj: "UPBJJ Bandung", lokasiRak: "B-205", qty: 8, safety: 15, harga: 55000, catatanHTML: "<b>Perlu re-stock segera!</b>" },
    { id: 3, kode: "BIOL4211", judul: "Mikrobiologi Dasar", kategori: "BMP", upbjj: "UPBJJ Makassar", lokasiRak: "C-302", qty: 0, safety: 10, harga: 60000, catatanHTML: "<span style='color:red'>Habis total.</span>" },
    { id: 4, kode: "ASIP4301", judul: "Pengantar Ilmu Komunikasi", kategori: "BMP", upbjj: "UPBJJ Surabaya", lokasiRak: "D-410", qty: 120, safety: 30, harga: 40000, catatanHTML: "Tersedia melimpah." },
    { id: 5, kode: "MKDU4110", judul: "Bahasa Indonesia", kategori: "Non-BMP", upbjj: "UPBJJ Jakarta", lokasiRak: "E-101", qty: 15, safety: 15, harga: 35000, catatanHTML: "Pas sesuai batas safety." },
    { id: 6, kode: "IPEM4330", judul: "Statistik Sosial", kategori: "BMP", upbjj: "UPBJJ Medan", lokasiRak: "F-102", qty: 3, safety: 10, harga: 50000, catatanHTML: "Stok menipis kritis." }
];

const paketData = [
    { kodePaket: "PKT-FE-01", namaPaket: "Paket Ekonomi FE", harga: 150000, isiPaket: ["EKMA4216 (Manajemen Keuangan)", "MKDU4110 (Bahasa Indonesia)"] },
    { kodePaket: "PKT-FKIP-02", namaPaket: "Paket Lengkap FKIP", harga: 320000, isiPaket: ["PAUD4401 (Perkembangan Anak Usia Dini)", "MKDU4110 (Bahasa Indonesia)", "BIOL4211 (Mikrobiologi Dasar)"] },
    { kodePaket: "PKT-FHISIP-03", namaPaket: "Paket Sosial FHISIP", harga: 200000, isiPaket: ["ASIP4301 (Pengantar Ilmu Komunikasi)", "IPEM4330 (Statistik Sosial)"] }
];

// Exporting data for use in script tags (as global variables for simplicity in this task)
window.upbjjList = upbjjData;
window.dataBahanAjarInitial = initialBahanAjar;
window.paket = paketData;
