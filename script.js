// ============================================================
// NAMA BULAN
// ============================================================

const NAMA_BULAN = [
    "", "Januari", "Februari", "Maret", "April", "Mei",
    "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const BULAN_SHORT = [
    "", "Jan", "Feb", "Mar", "Apr", "Mei",
    "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"
];

// ============================================================
// DATA GLOBAL — TINDAKAN TIDAK AMAN (per bulan, bukan akumulasi)
// ============================================================

const tindakanPerBulan = {
    1: [
        { kategori: "PERILAKU KERJA", jumlah: 50 },
        { kategori: "5K", jumlah: 28 },
        { kategori: "LINGKUNGAN", jumlah: 21 },
        { kategori: "TOOLS", jumlah: 6 },
        { kategori: "APD", jumlah: 4 },
        { kategori: "PERALATAN LISTRIK", jumlah: 3 },
        { kategori: "B3", jumlah: 3 },
        { kategori: "BANGUNAN", jumlah: 2 },
        { kategori: "PERALATAN TANGGAP DARURAT", jumlah: 1 },
        { kategori: "LAINNYA", jumlah: 2 }
    ],
    2: [
        { kategori: "PERILAKU KERJA", jumlah: 33 },
        { kategori: "5K", jumlah: 25 },
        { kategori: "LINGKUNGAN", jumlah: 15 },
        { kategori: "TOOLS", jumlah: 3 },
        { kategori: "BANGUNAN", jumlah: 3 },
        { kategori: "APD", jumlah: 2 },
        { kategori: "B3", jumlah: 2 },
        { kategori: "PERALATAN TANGGAP DARURAT", jumlah: 2 },
        { kategori: "MEKANIKAL", jumlah: 1 },
        { kategori: "ADMINISTRATIF", jumlah: 1 }
    ],
    3: [
        { kategori: "PERILAKU KERJA", jumlah: 63 },
        { kategori: "5K", jumlah: 47 },
        { kategori: "LINGKUNGAN", jumlah: 22 },
        { kategori: "TOOLS", jumlah: 10 },
        { kategori: "APD", jumlah: 6 },
        { kategori: "BANGUNAN", jumlah: 5 },
        { kategori: "PERALATAN TANGGAP DARURAT", jumlah: 3 },
        { kategori: "B3", jumlah: 2 },
        { kategori: "MEKANIKAL", jumlah: 1 },
        { kategori: "ADMINISTRATIF", jumlah: 1 },
        { kategori: "PERALATAN LISTRIK", jumlah: 1 },
        { kategori: "PENGANGKATAN DAN PENYANGGAAN", jumlah: 1 }
    ],
    4: [
        { kategori: "PERILAKU KERJA", jumlah: 63 },
        { kategori: "5K", jumlah: 47 },
        { kategori: "LINGKUNGAN", jumlah: 22 },
        { kategori: "TOOLS", jumlah: 10 },
        { kategori: "APD", jumlah: 6 },
        { kategori: "BANGUNAN", jumlah: 5 },
        { kategori: "PERALATAN TANGGAP DARURAT", jumlah: 3 },
        { kategori: "B3", jumlah: 2 },
        { kategori: "MEKANIKAL", jumlah: 1 },
        { kategori: "ADMINISTRATIF", jumlah: 1 },
        { kategori: "PERALATAN LISTRIK", jumlah: 1 },
        { kategori: "PENGANGKATAN DAN PENYANGGAAN", jumlah: 1 }
    ],
    5: [
        { kategori: "PERILAKU KERJA", jumlah: 84 },
        { kategori: "5K", jumlah: 63 },
        { kategori: "LINGKUNGAN", jumlah: 31 },
        { kategori: "TOOLS", jumlah: 13 },
        { kategori: "APD", jumlah: 7 },
        { kategori: "BANGUNAN", jumlah: 7 },
        { kategori: "PERALATAN LISTRIK", jumlah: 6 },
        { kategori: "PERALATAN TANGGAP DARURAT", jumlah: 3 },
        { kategori: "B3", jumlah: 5 },
        { kategori: "MEKANIKAL", jumlah: 1 },
        { kategori: "ADMINISTRATIF", jumlah: 2 },
        { kategori: "PENGANGKATAN DAN PENYANGGAAN", jumlah: 1 }
    ],
    6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: []
};

// ============================================================
// DATA GLOBAL — KONDISI TIDAK AMAN (per bulan, bukan akumulasi)
// ============================================================

const kondisiPerBulan = {
    1: [
        { kategori: "5K", jumlah: 153 },
        { kategori: "LINGKUNGAN", jumlah: 123 },
        { kategori: "PERILAKU KERJA", jumlah: 85 },
        { kategori: "PERALATAN LISTRIK", jumlah: 97 },
        { kategori: "BANGUNAN", jumlah: 73 },
        { kategori: "TOOLS", jumlah: 51 },
        { kategori: "RAMBU", jumlah: 24 },
        { kategori: "APD", jumlah: 13 },
        { kategori: "B3", jumlah: 16 },
        { kategori: "MEKANIKAL", jumlah: 9 },
        { kategori: "ADMINISTRATIF", jumlah: 4 },
        { kategori: "PERALATAN TANGGAP DARURAT", jumlah: 18 }
    ],
    2: [
        { kategori: "5K", jumlah: 197 },
        { kategori: "LINGKUNGAN", jumlah: 170 },
        { kategori: "PERILAKU KERJA", jumlah: 86 },
        { kategori: "PERALATAN LISTRIK", jumlah: 74 },
        { kategori: "BANGUNAN", jumlah: 55 },
        { kategori: "TOOLS", jumlah: 51 },
        { kategori: "RAMBU", jumlah: 12 },
        { kategori: "B3", jumlah: 15 },
        { kategori: "MEKANIKAL", jumlah: 9 },
        { kategori: "APD", jumlah: 6 },
        { kategori: "ADMINISTRATIF", jumlah: 7 },
        { kategori: "PERALATAN TANGGAP DARURAT", jumlah: 11 }
    ],
    3: [
        { kategori: "5K", jumlah: 380 },
        { kategori: "LINGKUNGAN", jumlah: 267 },
        { kategori: "PERILAKU KERJA", jumlah: 188 },
        { kategori: "PERALATAN LISTRIK", jumlah: 165 },
        { kategori: "BANGUNAN", jumlah: 121 },
        { kategori: "TOOLS", jumlah: 108 },
        { kategori: "RAMBU", jumlah: 34 },
        { kategori: "B3", jumlah: 32 },
        { kategori: "APD", jumlah: 22 },
        { kategori: "MEKANIKAL", jumlah: 19 },
        { kategori: "ADMINISTRATIF", jumlah: 11 },
        { kategori: "PERALATAN TANGGAP DARURAT", jumlah: 18 },
        { kategori: "ERGONOMI", jumlah: 2 },
        { kategori: "P3K", jumlah: 1 },
        { kategori: "ALAT ANGKAT DAN ANGKUT", jumlah: 4 }
    ],
    4: [
        { kategori: "5K", jumlah: 320 },
        { kategori: "LINGKUNGAN", jumlah: 255 },
        { kategori: "PERILAKU KERJA", jumlah: 140 },
        { kategori: "PERALATAN LISTRIK", jumlah: 175 },
        { kategori: "BANGUNAN", jumlah: 120 },
        { kategori: "TOOLS", jumlah: 95 },
        { kategori: "B3", jumlah: 42 },
        { kategori: "RAMBU", jumlah: 24 },
        { kategori: "APD", jumlah: 18 },
        { kategori: "MEKANIKAL", jumlah: 15 },
        { kategori: "ADMINISTRATIF", jumlah: 10 },
        { kategori: "ERGONOMI", jumlah: 3 },
        { kategori: "P3K", jumlah: 1 },
        { kategori: "PERALATAN TANGGAP DARURAT", jumlah: 16 }
    ],
    5: [
        { kategori: "5K", jumlah: 93 },
        { kategori: "LINGKUNGAN", jumlah: 116 },
        { kategori: "PERILAKU KERJA", jumlah: 31 },
        { kategori: "PERALATAN LISTRIK", jumlah: 112 },
        { kategori: "BANGUNAN", jumlah: 95 },
        { kategori: "TOOLS", jumlah: 21 },
        { kategori: "B3", jumlah: 13 },
        { kategori: "RAMBU", jumlah: 11 },
        { kategori: "APD", jumlah: 7 },
        { kategori: "MEKANIKAL", jumlah: 8 },
        { kategori: "ADMINISTRATIF", jumlah: 8 },
        { kategori: "ERGONOMI", jumlah: 4 },
        { kategori: "PERALATAN TANGGAP DARURAT", jumlah: 5 }
    ],
    6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: []
};

// ============================================================
// DATA GLOBAL — KATEGORI LOKASI (per bulan)
// ============================================================

const kategoriPerBulan = {
    1: [], 2: [], 3: [], 4: [],
    5: [
        { kategori: "Workshop", jumlah: 0 },
        { kategori: "Warehouse", jumlah: 0 },
        { kategori: "Office Area", jumlah: 0 },
        { kategori: "Yard & Area Pendukung", jumlah: 0 }
    ],
    6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: []
};

const subKategoriPerBulan = {
    1: [], 2: [], 3: [], 4: [],
    5: [
        { kategori: "HEAD OFFICE (Office Area)", jumlah: 0 },
        { kategori: "ENGINEER (Office Area)", jumlah: 0 },
        { kategori: "PLANT A (Workshop)", jumlah: 0 },
        { kategori: "PLANT B (Workshop)", jumlah: 0 },
        { kategori: "PLANT C (Workshop)", jumlah: 0 },
        { kategori: "BLASTING & PAINTING (Workshop)", jumlah: 0 },
        { kategori: "JIG (Workshop)", jumlah: 0 },
        { kategori: "RND (Workshop)", jumlah: 0 },
        { kategori: "PDC (Workshop)", jumlah: 0 },
        { kategori: "INCOMING (Warehouse)", jumlah: 0 },
        { kategori: "OUTGOING (Warehouse)", jumlah: 0 },
        { kategori: "Lain-lain", jumlah: 0 }
    ],
    6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: []
};

// ============================================================
// DATA PEKERJA PER DEPARTMENT
// ============================================================

const workerData = {
    "Corporate Management Development & Risk Management Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Legal Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Communication Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Business Development Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Manufacturing Department": [
        { nama: "WIRYO AGATHA PUTERA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IGNATIUS DANANG SASONGKO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MOHAMMAD ALFIN KARIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AAN NURDIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDUL AZIZ", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDUL IMAM LATIF", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDUL MAHMUD", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ACHMAD KAMAL FIKRI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADE DERMAWAN", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADITYA LESMANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADITYA PRATAMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AFIT WAHYUDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUNG DHESCA PERMANA PUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUNG WIERATNO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS ADI SUBARUDIN", submit: [9, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS PEBRIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS SETYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS WIDODO", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD MUKHALIT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD TAUFIK HIDAYAT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ALI MASRUR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AMAL MUSTAKIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDI ROMIADI", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDRI DARMANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDRIAN KURNIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDRIAN TRI ANGGORO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANGGA BIMA SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF MAULANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF MIFTAKHUL HUDA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF PURNOMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF RAHMAN", submit: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIFIN YULIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIS SETIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ASEP PURWANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ASNAWI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ATANG WILDAN", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BAHTIAR ANWAR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BANGKIT SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BANGUN SOLEH SAPUTRA", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BELI APRI YANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BERLIAN SYAH PUTRA", submit: [5, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BUDIMAN", submit: [0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DARMAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DARU PURNOMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DARYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDI ANTONI", submit: [0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WIRYO AGATHA PUTERA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IGNATIUS DANANG SASONGKO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MOHAMMAD ALFIN KARIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AAN NURDIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDUL AZIZ", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDUL IMAM LATIF", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDUL MAHMUD", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ACHMAD KAMAL FIKRI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADE DERMAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADITYA LESMANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADITYA PRATAMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AFIT WAHYUDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUNG DHESCA PERMANA PUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUNG KRISTIAWAN RIYO PAMBUDI", submit: [1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUNG WIERATNO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS ADI SUBARUDIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS PEBRIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS SETYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS WIDODO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD MUKHALIT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD TAUFIK HIDAYAT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ALI MASRUR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AMAL MUSTAKIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDI ROMIADI", submit: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDRI DARMANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDRIAN KURNIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDRIAN TRI ANGGORO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANGGA BIMA SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF MAULANA", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF MIFTAKHUL HUDA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF PURNOMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF RAHMAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIFIN YULIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIS SETIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ASEP PURWANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ASNAWI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BAHTIAR ANWAR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BANGKIT SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BANGUN SOLEH SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BELI APRI YANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BERLIAN SYAH PUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BUDIMAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DARMAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DARU PURNOMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DARYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDI ANTONI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD RIFQI SHODIQIN", submit: [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD SARIFUDIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUKHLISIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MULYADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUSLIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUSTANGIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NAJIH IMTIHANI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NANANG SUKANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NANANG SUNARYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NANDA MEIDONA", submit: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NGADINO", submit: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NOVAL ANDIKA BAYO", submit: [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NOVI YUNAEDI", submit: [3, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NUGROHO DWI CAHYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NUR HIDAYAT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NUR HOLIK", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NUROKHMAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NURWAKHIDIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "OKI SUTIAWAN", submit: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "OKY MEGAKUSUMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PANGGIH RIBOWO", submit: [5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PRASETIYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PRATONO", submit: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PRITA AULIA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PRIYO SUSANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PUDIANTORO", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PURWANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RAMADHANI LUTHFI MUKTAFI", submit: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RAMDHAN EKO PRASETYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RASITO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIZKI PRATAMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROBY NORMAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROCHMADI", submit: [7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROHMAD TULLOH ISA", submit: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROKI PERMANA", submit: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RUDI HARTONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SAPRUDIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SARENGAT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SARWOKO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SATRI YULI PRAYOGO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SENTOT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SETYANA IAN PRADIBTA", submit: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SIGIT WIHARSO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SIROJUL KHOZANI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SLAMET HARYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SRIYANTO", submit: [3, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUGIYANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUKARNA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUKMA GUGUN GUNAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUNARI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUNARJO", submit: [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUPARTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUPRIYADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SURATMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TATO NITI ERLIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TOBI'IN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TOBRONI", submit: [1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TRI SUTRISNA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TRIMO", submit: [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TRISWIYATNO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TRIYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TURSINAH", submit: [5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "UMAR WIDODO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "URIP SETIAJI", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WAHYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WAHYUDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WAROKHIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WARTOYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WIDIANTORO", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WINA KARTIKA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YANUAR RENDY FIRDAUS", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YASODIK", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YOGA FAJAR ASIDIQ", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YUDHA YUNIAR DINANTA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YUNIAR DWI UTOMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YUSLIMU KHOIRI", submit: [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YUSUF ISMAIL", submit: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ZAENAL ARIFIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Production Planning & Control Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Remanufacturing Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Plant Operation": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Design Engineering Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Production Engineering Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Product Research & Development Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Prototype & Testing Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Quality Assurance Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Quality Control 1 Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Quality Control 2 Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Marketing & Cost Estimator Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Inventory & Warehouse Management Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Vendor Management Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Subcont Development Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Information System Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Digitalization Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Command Center Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Finance Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Accounting Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Tax Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Procurement Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Internal Control Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Human Capital Strategic Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate HC Administration & Services Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Safety, Health & Security Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Sustainability & General Services Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Patria Development Center": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ]
};

// ============================================================
// MAPPING DIVISION → DEPARTMENTS
// ============================================================

const divisionData = {
    strategicPlanningLegal: [
        "Corporate Management Development & Risk Management Department",
        "Corporate Legal Department",
        "Corporate Communication Department"
    ],
    businessDevelopment: [
        "Corporate Business Development Department"
    ],
    productionPlant1: [
        "Manufacturing Department",
        "Production Planning & Control Department"
    ],
    productionPlant2: [
        "Remanufacturing Department",
        "Plant Operation"
    ],
    engineering: [
        "Corporate Design Engineering Department",
        "Corporate Production Engineering Department"
    ],
    researchDevelopment: [
        "Corporate Product Research & Development Department",
        "Corporate Prototype & Testing Department"
    ],
    quality: [
        "Corporate Quality Assurance Department",
        "Quality Control 1 Department",
        "Quality Control 2 Department"
    ],
    supplyChain: [
        "Corporate Marketing & Cost Estimator Department",
        "Corporate Inventory & Warehouse Management Department",
        "Corporate Vendor Management Department",
        "Corporate Subcont Development Department"
    ],
    digitalization: [
        "Corporate Information System Department",
        "Corporate Digitalization Department",
        "Corporate Command Center Department"
    ],
    financeAccounting: [
        "Corporate Finance Department",
        "Corporate Accounting Department",
        "Corporate Tax Department",
        "Corporate Procurement Department",
        "Corporate Internal Control Department"
    ],
    humanCapital: [
        "Corporate Human Capital Strategic Department",
        "Corporate HC Administration & Services Department",
        "Corporate Safety, Health & Security Department",
        "Corporate Sustainability & General Services Department",
        "Patria Development Center"
    ]
};

// ============================================================
// KEYWORDS PRODUCTION (Plant)
// ============================================================

const plantKeywords = ["Manufacturing", "RBPS", "RBPM", "RJKT", "RTMK", "RSGT", "RBJN", "RADO", "UBPK", "RTJE"];

function isPlantDepartment(deptName) {
    return plantKeywords.some(kw => deptName.toLowerCase().includes(kw.toLowerCase()));
}

// ============================================================
// TARGET PER PEKERJA — AKUMULASI OTOMATIS BERDASARKAN BULAN
// Plant  : 4 × bulan
// Office : 1 × bulan
// ============================================================

function getTargetPerWorker(deptName, bulan) {
    const rate = isPlantDepartment(deptName) ? 4 : 1;
    return rate * bulan;
}

// ============================================================
// FIX UTAMA: Hitung total submit seorang worker sampai bulan N
// submit adalah array 12 elemen [Jan, Feb, Mar, ... Des]
// Jumlahkan index 0 s/d bulan-1
// ============================================================

function getWorkerSubmitUntilMonth(worker, bulan) {
    return worker.submit.slice(0, bulan).reduce((sum, val) => sum + val, 0);
}

// ============================================================
// HELPER — Hitung total submit semua worker di dept sampai bulan N
// ============================================================

function getTotalSubmit(deptName, bulan) {
    return (workerData[deptName] || []).reduce(
        (sum, w) => sum + getWorkerSubmitUntilMonth(w, bulan),
        0
    );
}

// ============================================================
// HELPER — Submit per bulan (untuk bar/trend chart) — semua dept
// Mengembalikan array 12 elemen, per bulan
// ============================================================

function getSubmitPerBulanDept(deptName) {
    const workers = workerData[deptName] || [];
    const hasil = Array(12).fill(0);
    workers.forEach(w => {
        w.submit.forEach((val, idx) => {
            hasil[idx] += val;
        });
    });
    return hasil;
}

// ============================================================
// HELPER — Akumulasi data dari bulan 1 sampai bulan N (OTOMATIS)
// ============================================================

function akumulasiData(dataPerBulan, sampai) {
    const map = {};
    for (let b = 1; b <= sampai; b++) {
        (dataPerBulan[b] || []).forEach(item => {
            const key = item.kategori.toUpperCase().trim();
            if (map[key]) {
                map[key].jumlah += item.jumlah;
            } else {
                map[key] = { kategori: item.kategori, jumlah: item.jumlah };
            }
        });
    }
    return Object.values(map).sort((a, b) => b.jumlah - a.jumlah);
}

// ============================================================
// HELPER — Total jumlah dari hasil akumulasi
// ============================================================

function totalAkumulasi(dataPerBulan, sampai) {
    return akumulasiData(dataPerBulan, sampai).reduce((s, i) => s + i.jumlah, 0);
}

// ============================================================
// STATS PER DIVISION — pakai bulan aktif
// ============================================================

function getDivisionStats(divisionKey, bulan) {
    const depts = divisionData[divisionKey] || [];
    let totalWorker = 0, totalSubmit = 0, totalTarget = 0;
    depts.forEach(dept => {
        const workers = workerData[dept] || [];
        const target = getTargetPerWorker(dept, bulan);
        totalWorker += workers.length;
        totalTarget += workers.length * target;
        totalSubmit += getTotalSubmit(dept, bulan);
    });
    return { total: totalWorker, submit: totalSubmit, target: totalTarget };
}

// ============================================================
// STATS PER DEPARTMENT — pakai bulan aktif
// ============================================================

function getDepartmentStats(deptName, bulan) {
    const workers = workerData[deptName] || [];
    const target = getTargetPerWorker(deptName, bulan);
    const totalTarget = workers.length * target;
    const totalSubmit = getTotalSubmit(deptName, bulan);
    return { total: workers.length, submit: totalSubmit, target: totalTarget };
}

// ============================================================
// STATS PRODUCTION vs NON PRODUCTION (untuk home) — pakai bulan aktif
// ============================================================

function getProductionStats(bulan) {
    let plant = { total: 0, submit: 0, target: 0 };
    let office = { total: 0, submit: 0, target: 0 };

    Object.keys(workerData).forEach(deptName => {
        const workers = workerData[deptName] || [];
        const target = getTargetPerWorker(deptName, bulan);
        const submit = getTotalSubmit(deptName, bulan);
        const bucket = isPlantDepartment(deptName) ? plant : office;
        bucket.total += workers.length;
        bucket.target += workers.length * target;
        bucket.submit += submit;
    });

    return { plant, office };
}

// ============================================================
// TOP TIER RANKING DEPARTMENT — pakai bulan aktif
// ============================================================

function generateDepartmentRanking(bulan) {
    return Object.keys(workerData).map(deptName => {
        const workers = workerData[deptName] || [];
        const submit = getTotalSubmit(deptName, bulan);
        const target = workers.length * getTargetPerWorker(deptName, bulan);
        const pct = target === 0 ? 0 : (submit / target) * 100;
        return { nama: deptName, total: workers.length, submit, target, pct };
    }).sort((a, b) => b.pct - a.pct);
}

// ============================================================
// HELPER — Pendekkan nama
// ============================================================

function shortenDeptName(nama) {
    return nama.replace("Corporate ", "").replace(" Department", "").replace(" Dept", "");
}

function shortenName(nama) {
    const parts = nama.split(" ");
    return parts.length <= 2 ? nama : parts[0] + " " + parts[1];
}

// ============================================================
// HELPER — Render generic tbody
// ============================================================

function renderTableBody(tbodyId, data, topN) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    const list = topN ? data.slice(0, topN) : data;
    const total = list.reduce((s, i) => s + i.jumlah, 0);
    tbody.innerHTML = list.map((item, idx) => {
        const pct = total === 0 ? "0%" : ((item.jumlah / total) * 100).toFixed(1) + "%";
        return `<tr>
            <td>${idx + 1}</td>
            <td>${item.kategori}</td>
            <td>${item.jumlah}</td>
            <td>${pct}</td>
        </tr>`;
    }).join("");
}

// ============================================================
// HELPER — Update label note filter
// ============================================================

function updateNote(noteId, bulan) {
    const el = document.getElementById(noteId);
    if (!el) return;
    el.textContent = bulan === 1 ? "Data Januari" : `Akumulasi Jan – ${NAMA_BULAN[bulan]}`;
}

// ============================================================
// RENDER — TOP TIER (tindakan & kondisi) — OTOMATIS AKUMULASI
// ============================================================

function renderTopTier(bulan) {
    const tindakan = akumulasiData(tindakanPerBulan, bulan);
    const kondisi = akumulasiData(kondisiPerBulan, bulan);

    if (tindakan.length === 0) {
        const tbody = document.getElementById("tindakanTableBody");
        if (tbody) tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;padding:20px;color:white;opacity:.7">Belum ada data</td></tr>`;
    } else {
        renderTableBody("tindakanTableBody", tindakan, 10);
    }

    if (kondisi.length === 0) {
        const tbody = document.getElementById("kondisiTableBody");
        if (tbody) tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;padding:20px;opacity:.7">Belum ada data</td></tr>`;
    } else {
        renderTableBody("kondisiTableBody", kondisi, 10);
    }

    updateNote("noteTopTier", bulan);
}

// ============================================================
// RENDER — KATEGORI & SUB KATEGORI — OTOMATIS AKUMULASI
// ============================================================

function renderKategori(bulan) {
    const kat = akumulasiData(kategoriPerBulan, bulan);
    const subKat = akumulasiData(subKategoriPerBulan, bulan);

    const staticKat = ["Workshop", "Warehouse", "Office Area", "Yard & Area Pendukung"];
    const staticSub = [
        "HEAD OFFICE (Office Area)", "ENGINEER (Office Area)",
        "PLANT A (Workshop)", "PLANT B (Workshop)", "PLANT C (Workshop)",
        "BLASTING & PAINTING (Workshop)", "JIG (Workshop)", "RND (Workshop)",
        "PDC (Workshop)", "INCOMING (Warehouse)", "OUTGOING (Warehouse)", "Lain-lain"
    ];

    if (kat.length === 0) {
        const el = document.getElementById("kategoriTableBody");
        if (el) el.innerHTML = staticKat.map((k, i) =>
            `<tr><td>${i + 1}</td><td>${k}</td><td>0</td><td>0%</td></tr>`).join("");
    } else {
        renderTableBody("kategoriTableBody", kat, null);
    }

    if (subKat.length === 0) {
        const el = document.getElementById("subKategoriTableBody");
        if (el) el.innerHTML = staticSub.map((k, i) =>
            `<tr><td>${i + 1}</td><td>${k}</td><td>0</td><td>0%</td></tr>`).join("");
    } else {
        renderTableBody("subKategoriTableBody", subKat, null);
    }

    updateNote("noteKategori", bulan);
}

// ============================================================
// CHART INSTANCES
// ============================================================

let plantChartInst = null;
let officeChartInst = null;
let plantBarInst = null;
let officeBarInst = null;
let pieChartInst = null;
let deptPieInst = null;
let barChartInst = null;
let submitChartInst = null;
let yearTrendInst = null;

function destroyIfExists(ref) {
    if (ref) { ref.destroy(); }
    return null;
}

// ============================================================
// RENDER — HOME CHARTS — update otomatis saat bulan berubah
// ============================================================

function renderHomeCharts(bulan) {
    const { plant, office } = getProductionStats(bulan);

    // Info cards
    const safeSet = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };

    safeSet("plantTotal", plant.total);
    safeSet("plantTarget", plant.target);
    safeSet("plantBelum", plant.submit);
    safeSet("officeTotal", office.total);
    safeSet("officeTarget", office.target);
    safeSet("officeBelum", office.submit);

    // Pencapaian %
    const totalSubmitAll = plant.submit + office.submit;
    const totalTargetAll = plant.target + office.target;
    const pct = totalTargetAll === 0 ? "0.0" : (totalSubmitAll / totalTargetAll * 100).toFixed(1);
    const pencEl = document.getElementById("pencapaian2026");
    if (pencEl) pencEl.innerText = ` ${pct}%`;

    // Jumlah Temuan — akumulasi sampai bulan terpilih
    const totalTindakan = totalAkumulasi(tindakanPerBulan, bulan);
    const totalKondisi = totalAkumulasi(kondisiPerBulan, bulan);
    const totalTemuan = totalTindakan + totalKondisi;

    safeSet("jumlahTemuan", totalTemuan);
    safeSet("unsafeAction", totalTindakan);
    safeSet("unsafeCondition", totalKondisi);
    safeSet("bulanTemuan", `BULAN ${NAMA_BULAN[bulan].toUpperCase()} 2026`);

    // Doughnut Production
    plantChartInst = destroyIfExists(plantChartInst);
    const plantCtx = document.getElementById("plantChart");
    if (plantCtx) {
        plantChartInst = new Chart(plantCtx, {
            type: "doughnut",
            data: {
                labels: ["Submit", "Belum"],
                datasets: [{
                    data: [plant.submit, Math.max(0, plant.target - plant.submit)],
                    backgroundColor: ["#24557a", "#b9dfff"]
                }]
            },
            options: {
                plugins: {
                    legend: { position: "bottom" },
                    datalabels: {
                        color: "#fff", font: { size: 16, weight: "bold" },
                        formatter: v => plant.target === 0 ? "0%" : (v / plant.target * 100).toFixed(1) + "%"
                    }
                }
            }
        });
    }

    // Doughnut Non Production
    officeChartInst = destroyIfExists(officeChartInst);
    const officeCtx = document.getElementById("officeChart");
    if (officeCtx) {
        officeChartInst = new Chart(officeCtx, {
            type: "doughnut",
            data: {
                labels: ["Submit", "Belum"],
                datasets: [{
                    data: [office.submit, Math.max(0, office.target - office.submit)],
                    backgroundColor: ["#24557a", "#b9dfff"]
                }]
            },
            options: {
                plugins: {
                    legend: { position: "bottom" },
                    datalabels: {
                        color: "#fff", font: { size: 16, weight: "bold" },
                        formatter: v => office.target === 0 ? "0%" : (v / office.target * 100).toFixed(1) + "%"
                    }
                }
            }
        });
    }

    // ============================================================
    // FIX BAR CHART: Tampilkan submit aktual per bulan 
    // ============================================================

    const labelsBulan = BULAN_SHORT.slice(1, bulan + 1);

    // Hitung submit plant & office per bulan secara aktual
    const plantBarData = Array(bulan).fill(0);
    const officeBarData = Array(bulan).fill(0);

    Object.keys(workerData).forEach(deptName => {
        const perBulanArr = getSubmitPerBulanDept(deptName);
        const isPlant = isPlantDepartment(deptName);
        for (let b = 0; b < bulan; b++) {
            if (isPlant) {
                plantBarData[b] += perBulanArr[b];
            } else {
                officeBarData[b] += perBulanArr[b];
            }
        }
    });

    plantBarInst = destroyIfExists(plantBarInst);
    const plantBarCtx = document.getElementById("plantBar");
    if (plantBarCtx) {
        plantBarInst = new Chart(plantBarCtx, {
            type: "bar",
            data: {
                labels: labelsBulan,
                datasets: [{
                    data: plantBarData,
                    backgroundColor: "#3b82b8",
                    borderRadius: 14
                }]
            },
            options: {
                plugins: {
                    legend: { display: false },
                    datalabels: {
                        anchor: "end", align: "top", color: "#183b56", font: { weight: "bold" },
                        formatter: v => v > 0 ? v : ""
                    }
                },
                scales: { y: { beginAtZero: true } }
            },
            plugins: [ChartDataLabels]
        });
    }

    officeBarInst = destroyIfExists(officeBarInst);
    const officeBarCtx = document.getElementById("officeBar");
    if (officeBarCtx) {
        officeBarInst = new Chart(officeBarCtx, {
            type: "bar",
            data: {
                labels: labelsBulan,
                datasets: [{
                    data: officeBarData,
                    backgroundColor: "#24557a",
                    borderRadius: 14
                }]
            },
            options: {
                plugins: {
                    legend: { display: false },
                    datalabels: {
                        anchor: "end", align: "top", color: "#183b56", font: { weight: "bold" },
                        formatter: v => v > 0 ? v : ""
                    }
                },
                scales: { y: { beginAtZero: true } }
            },
            plugins: [ChartDataLabels]
        });
    }
}

// ============================================================
// RENDER — PIE CHART DIVISI
// ============================================================

function renderDivisionPie(submit, target) {
    const notAchieve = Math.max(0, target - submit);
    pieChartInst = destroyIfExists(pieChartInst);
    const ctx = document.getElementById("pieChart");
    if (!ctx) return;
    pieChartInst = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Achieve", "Not Achieve"],
            datasets: [{ data: [submit, notAchieve], backgroundColor: ["#24557a", "#b9dfff"], borderWidth: 0 }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "bottom" },
                datalabels: {
                    color: "#ffffff", font: { size: 16, weight: "bold" },
                    formatter: (value) => target === 0 ? "0%" : (value / target * 100).toFixed(1) + "%"
                }
            }
        }
    });
}

// ============================================================
// RENDER — PIE CHART DEPARTMENT
// ============================================================

function renderDepartmentPie(submit, target) {
    const notAchieve = Math.max(0, target - submit);
    deptPieInst = destroyIfExists(deptPieInst);
    const ctx = document.getElementById("departmentPie");
    if (!ctx) return;
    deptPieInst = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Achieve", "Not Achieve"],
            datasets: [{ data: [submit, notAchieve], backgroundColor: ["#24557a", "#b9dfff"], borderWidth: 0 }]
        },
        options: {
            responsive: true,
            layout: { padding: 20 },
            plugins: {
                legend: { position: "bottom" },
                datalabels: {
                    anchor: "center", align: "center", color: "#ffffff",
                    font: { size: 13, weight: "bold" },
                    display: ctx => ctx.dataset.data[ctx.dataIndex] > 0,
                    formatter: (value) => target === 0 ? "0%" : (value / target * 100).toFixed(1) + "%"
                }
            }
        }
    });
}

// ============================================================
// RENDER — BAR CHART TOP TIER DEPARTMENT — pakai bulan aktif
// ============================================================

function renderBarChart(bulan) {
    const ranking = generateDepartmentRanking(bulan).slice(0, 5);
    barChartInst = destroyIfExists(barChartInst);
    const ctx = document.getElementById("barChart");
    if (!ctx) return;
    barChartInst = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ranking.map(d => shortenDeptName(d.nama)),
            datasets: [
                {
                    label: "Total Submit",
                    data: ranking.map(d => d.submit),
                    backgroundColor: "#24557a",
                    borderRadius: 12
                },
                {
                    label: "Sisa Target",
                    data: ranking.map(d => Math.max(0, d.target - d.submit)),
                    backgroundColor: "#b9dfff",
                    borderRadius: 12
                }
            ]
        },
        options: {
            responsive: true,
            layout: { padding: { top: 40 } },
            plugins: {
                legend: { position: "bottom" },
                datalabels: {
                    anchor: "end", align: "top", offset: 4,
                    color: "#183b56", font: { weight: "bold", size: 11 },
                    display: ctx => ctx.datasetIndex === 0,
                    formatter: (value, ctx) => {
                        const t = ranking[ctx.dataIndex].target;
                        return t === 0 ? "0%" : ((value / t) * 100).toFixed(0) + "%";
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        maxRotation: 30, minRotation: 0, font: { size: 10 },
                        callback: function (value, index) {
                            const label = this.getLabelForValue(index);
                            const words = label.split(" ");
                            const lines = []; let line = "";
                            words.forEach(w => {
                                if ((line + w).length > 15) { if (line) lines.push(line.trim()); line = w + " "; }
                                else line += w + " ";
                            });
                            if (line) lines.push(line.trim());
                            return lines;
                        }
                    }
                },
                y: { beginAtZero: true }
            }
        },
        plugins: [ChartDataLabels]
    });
}

// ============================================================
// RENDER — TABEL + CHART TOP SUBMIT PEKERJA — pakai bulan aktif
// FIX: submit dihitung akumulasi sampai bulan N
// ============================================================

function renderTopSubmit(deptName, bulan) {
    const workers = workerData[deptName] || [];
    const target = getTargetPerWorker(deptName, bulan);

    // Buat array dengan submit terakumulasi sampai bulan N
    const workersWithTotal = workers.map(w => ({
        ...w,
        totalSubmit: getWorkerSubmitUntilMonth(w, bulan)
    }));

    const sorted = [...workersWithTotal].sort((a, b) => b.totalSubmit - a.totalSubmit).slice(0, 5);

    const submitTableEl = document.getElementById("submitTable");
    if (submitTableEl) {
        submitTableEl.innerHTML = sorted.map((item, i) => {
            const achieve = item.totalSubmit >= target ? "Achieve" : "NonAchieve";
            const badge = achieve === "Achieve" ? "success" : "danger";
            return `<tr>
                <td>${i + 1}</td>
                <td>${item.nama}</td>
                <td>${item.totalSubmit}</td>
                <td><span class="${badge}">${achieve}</span></td>
            </tr>`;
        }).join("");
    }

    const maxVal = sorted.length ? Math.max(...sorted.map(i => i.totalSubmit)) : target;
    const chartMax = Math.max(maxVal + 2, target + 2);

    submitChartInst = destroyIfExists(submitChartInst);
    const ctx = document.getElementById("submitChart");
    if (!ctx) return;
    submitChartInst = new Chart(ctx, {
        type: "bar",
        data: {
            labels: sorted.map(item => shortenName(item.nama)),
            datasets: [{
                label: "Jumlah Submit",
                data: sorted.map(item => item.totalSubmit),
                backgroundColor: ["#24557a", "#3b82b8", "#4b97d1", "#73b3e7", "#b9dfff"],
                borderRadius: 12,
                maxBarThickness: 60
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            layout: { padding: { top: 24 } },
            plugins: {
                legend: { display: false },
                datalabels: {
                    anchor: "end", align: "top", offset: 2,
                    color: "#183b56", font: { weight: "bold", size: 12 },
                    formatter: v => v
                }
            },
            scales: {
                x: { ticks: { font: { size: 10 }, maxRotation: 20 } },
                y: { beginAtZero: true, suggestedMax: chartMax, ticks: { stepSize: 2 } }
            }
        }
    });
}

// ============================================================
// RENDER — TREN TAHUNAN DEPARTMENT — pakai bulan aktif
// FIX: gunakan data aktual per bulan dari workerData
// ============================================================

function renderTrendChart(deptName, bulan) {
    if (!deptName) return;

    const BULAN_LABEL = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"];

    const workers = workerData[deptName] || [];
    const rate = isPlantDepartment(deptName) ? 4 : 1;
    const targetPerBulan = workers.length * rate; // target per bulan 

    const submitPerBulan = getSubmitPerBulanDept(deptName);

    const dataBar = BULAN_LABEL.map((_, i) => {
        return i < bulan ? submitPerBulan[i] : 0;
    });

    const datasets = [
        {
            label: shortenDeptName(deptName),
            data: dataBar,
            backgroundColor: BULAN_LABEL.map((_, i) => i < bulan ? "#24557a" : "#24557a55"),
            borderRadius: 8,
            type: "bar"
        },
        {
            label: `Target/Bulan (${targetPerBulan})`,
            data: BULAN_LABEL.map(() => targetPerBulan),
            type: "line",
            borderColor: "#e74c3c",
            borderWidth: 2,
            borderDash: [6, 4],
            pointRadius: 0,
            fill: false,
            datalabels: { display: false }
        }
    ];

    yearTrendInst = destroyIfExists(yearTrendInst);
    const ctx = document.getElementById("yearTrendChart");
    if (!ctx) return;
    yearTrendInst = new Chart(ctx, {
        type: "bar",
        data: { labels: BULAN_LABEL, datasets },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "top" },
                datalabels: {
                    display: true, anchor: "end", align: "top",
                    color: "#183b56", font: { size: 10, weight: "bold" },
                    formatter: v => v > 0 ? v : ""
                }
            },
            scales: { y: { beginAtZero: true, suggestedMax: targetPerBulan + 5 } }
        }
    });
}

// ============================================================
// RENDER — TABEL PEKERJA — pakai bulan aktif
// FIX: submit dihitung akumulasi sampai bulan N
// ============================================================

function renderWorkerTable(deptName, bulan) {
    const workers = workerData[deptName] || [];
    const target = getTargetPerWorker(deptName, bulan);
    const workerTableEl = document.getElementById("workerTable");
    if (!workerTableEl) return;
    workerTableEl.innerHTML = workers.map((w, i) => {
        const totalSubmit = getWorkerSubmitUntilMonth(w, bulan);
        const pct = target === 0 ? "0" : ((totalSubmit / target) * 100).toFixed(0);
        const achieve = totalSubmit >= target ? "Achieve" : "NonAchieve";
        const badge = achieve === "Achieve" ? "success" : "danger";
        return `<tr>
            <td>${i + 1}</td>
            <td>${w.nama}</td>
            <td>${totalSubmit}</td>
            <td>${target}</td>
            <td><span class="${badge}">${achieve}</span></td>
            <td>${pct}%</td>
        </tr>`;
    }).join("");
}

// ============================================================
// SECTION VISIBILITY HELPERS
// ============================================================

function hideContentSections() {
    ["topTierSection", "workerSection", "topSubmitSection", "trendSection"]
        .forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = "none";
        });
}

function showContentSections() {
    ["topTierSection", "workerSection", "topSubmitSection", "trendSection"]
        .forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = "block";
        });
}

// ============================================================
// NAV HELPERS — show/hide halaman
// ============================================================

function showHome() {
    const homeSection = document.getElementById("homeSection");
    const hazardSection = document.getElementById("hazardSection");
    const searchSection = document.getElementById("searchSection");
    const navDropdown = document.getElementById("navDropdown");
    if (homeSection) homeSection.style.display = "block";
    if (hazardSection) hazardSection.style.display = "none";
    if (searchSection) searchSection.style.display = "none";
    if (navDropdown) navDropdown.style.display = "block";
}

function showHazard() {
    const homeSection = document.getElementById("homeSection");
    const hazardSection = document.getElementById("hazardSection");
    const searchSection = document.getElementById("searchSection");
    const navDropdown = document.getElementById("navDropdown");
    if (homeSection) homeSection.style.display = "none";
    if (hazardSection) hazardSection.style.display = "block";
    if (searchSection) searchSection.style.display = "none";
    if (navDropdown) navDropdown.style.display = "block";
}

function showSearch() {
    const homeSection = document.getElementById("homeSection");
    const hazardSection = document.getElementById("hazardSection");
    const searchSection = document.getElementById("searchSection");
    const navDropdown = document.getElementById("navDropdown");
    if (homeSection) homeSection.style.display = "none";
    if (hazardSection) hazardSection.style.display = "none";
    if (searchSection) searchSection.style.display = "block";
    if (navDropdown) navDropdown.style.display = "none";
}

// ============================================================
// DOM CONTENT LOADED — init semua
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // Register ChartDataLabels
    if (typeof ChartDataLabels !== "undefined") {
        Chart.register(ChartDataLabels);
    }

    // Ambil bulan awal dari dropdown navbar
    const globalMonthEl = document.getElementById("globalMonth");
    if (!globalMonthEl) return;
    let currentBulan = parseInt(globalMonthEl.value);

    // State untuk department yang sedang aktif
    let activeDept = null;
    let activeDivision = null;

    // ============================================================
    // DROPDOWN NAVBAR
    // ============================================================
    globalMonthEl.addEventListener("change", function () {
        currentBulan = parseInt(this.value);

        renderHomeCharts(currentBulan);

        if (activeDivision) {
            const stats = getDivisionStats(activeDivision, currentBulan);
            const jml = document.getElementById("jumlahPekerja");
            const sdh = document.getElementById("sudahMengisi");
            const blm = document.getElementById("belumMengisi");
            if (jml) jml.innerText = stats.total;
            if (sdh) sdh.innerText = stats.submit;
            if (blm) blm.innerText = stats.target;
            renderDivisionPie(stats.submit, stats.target);
        }

        if (activeDept) {
            const stats = getDepartmentStats(activeDept, currentBulan);
            const jmlD = document.getElementById("jumlahPekerjaDept");
            const sdhD = document.getElementById("sudahMengisiDept");
            const blmD = document.getElementById("belumMengisiDept");
            if (jmlD) jmlD.innerText = stats.total;
            if (sdhD) sdhD.innerText = stats.submit;
            if (blmD) blmD.innerText = stats.target;
            renderDepartmentPie(stats.submit, stats.target);
            renderBarChart(currentBulan);
            renderWorkerTable(activeDept, currentBulan);
            renderTopSubmit(activeDept, currentBulan);
            renderTrendChart(activeDept, currentBulan);
        }

        const filterTopTier = document.getElementById("monthFilterTopTier");
        const filterKategori = document.getElementById("monthFilterKategori");
        if (filterTopTier) filterTopTier.value = String(currentBulan);
        if (filterKategori) filterKategori.value = String(currentBulan);

        const searchSection = document.getElementById("searchSection");
        if (searchSection && searchSection.style.display !== "none") {
            renderTopTier(currentBulan);
            renderKategori(currentBulan);
        }
    });

    // ============================================================
    // NAV BUTTONS
    // ============================================================
    const viewHazardBtn = document.getElementById("viewHazardBtn");
    if (viewHazardBtn) viewHazardBtn.addEventListener("click", showHazard);

    const viewSearchBtn = document.getElementById("viewSearchBtn");
    if (viewSearchBtn) viewSearchBtn.addEventListener("click", function () {
        showSearch();
        const m = parseInt(document.getElementById("globalMonth").value);
        const filterTopTier = document.getElementById("monthFilterTopTier");
        const filterKategori = document.getElementById("monthFilterKategori");
        if (filterTopTier) filterTopTier.value = String(m);
        if (filterKategori) filterKategori.value = String(m);
        renderTopTier(m);
        renderKategori(m);
    });

    const backBtn = document.getElementById("backBtn");
    if (backBtn) backBtn.addEventListener("click", showHome);

    const backSearchBtn = document.getElementById("backSearchBtn");
    if (backSearchBtn) backSearchBtn.addEventListener("click", showHome);

    // ============================================================
    // FILTER DROPDOWN SEARCH SECTION — independen per tabel
    // ============================================================
    const monthFilterTopTier = document.getElementById("monthFilterTopTier");
    if (monthFilterTopTier) {
        monthFilterTopTier.addEventListener("change", function () {
            renderTopTier(parseInt(this.value));
        });
    }

    const monthFilterKategori = document.getElementById("monthFilterKategori");
    if (monthFilterKategori) {
        monthFilterKategori.addEventListener("change", function () {
            renderKategori(parseInt(this.value));
        });
    }

    // ============================================================
    // DIVISION SELECT
    // ============================================================
    const divisionSelect = document.getElementById("divisionSelect");
    const departmentSelect = document.getElementById("departmentSelect");

    if (divisionSelect) {
        divisionSelect.addEventListener("change", function () {
            const val = this.value;
            if (!val) return;

            activeDivision = val;
            activeDept = null;

            const stats = getDivisionStats(val, currentBulan);
            const jml = document.getElementById("jumlahPekerja");
            const sdh = document.getElementById("sudahMengisi");
            const blm = document.getElementById("belumMengisi");
            if (jml) jml.innerText = stats.total;
            if (sdh) sdh.innerText = stats.submit;
            if (blm) blm.innerText = stats.target;

            renderDivisionPie(stats.submit, stats.target);

            if (departmentSelect) {
                departmentSelect.innerHTML = `<option value="">Choose Department</option>`;
                (divisionData[val] || []).forEach(dept => {
                    const opt = document.createElement("option");
                    opt.value = dept;
                    opt.textContent = dept;
                    departmentSelect.appendChild(opt);
                });
            }

            const deptSection = document.getElementById("departmentSection");
            if (deptSection) deptSection.style.display = "flex";

            const jmlD = document.getElementById("jumlahPekerjaDept");
            const sdhD = document.getElementById("sudahMengisiDept");
            const blmD = document.getElementById("belumMengisiDept");
            if (jmlD) jmlD.innerText = "—";
            if (sdhD) sdhD.innerText = "—";
            if (blmD) blmD.innerText = "—";

            hideContentSections();
        });
    }

    // ============================================================
    // DEPARTMENT SELECT
    // ============================================================
    if (departmentSelect) {
        departmentSelect.addEventListener("change", function () {
            const dept = this.value;
            if (!dept) return;

            activeDept = dept;

            const stats = getDepartmentStats(dept, currentBulan);
            const jmlD = document.getElementById("jumlahPekerjaDept");
            const sdhD = document.getElementById("sudahMengisiDept");
            const blmD = document.getElementById("belumMengisiDept");
            if (jmlD) jmlD.innerText = stats.total;
            if (sdhD) sdhD.innerText = stats.submit;
            if (blmD) blmD.innerText = stats.target;

            renderDepartmentPie(stats.submit, stats.target);
            renderBarChart(currentBulan);
            renderWorkerTable(dept, currentBulan);
            renderTopSubmit(dept, currentBulan);
            renderTrendChart(dept, currentBulan);

            showContentSections();
        });
    }

    // ============================================================
    // SEARCH PEKERJA — real-time filter
    // ============================================================
    const searchWorkerEl = document.getElementById("searchWorker");
    if (searchWorkerEl) {
        searchWorkerEl.addEventListener("keyup", function () {
            const keyword = this.value.toLowerCase();
            document.querySelectorAll("#workerTable tr").forEach(row => {
                if (!row.children[1]) return;
                row.style.display = row.children[1].textContent.toLowerCase().includes(keyword) ? "" : "none";
            });
        });
    }

    // ============================================================
    // INISIALISASI AWAL — render home dengan bulan default
    // ============================================================
    renderHomeCharts(currentBulan);

    const deptSection = document.getElementById("departmentSection");
    if (deptSection) deptSection.style.display = "none";
    hideContentSections();

}); 
