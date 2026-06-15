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
        { nama: "MARIYOTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDRIAN KURNIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADITYA LESMANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD MUKHALIT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HENDRI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF MIFTAKHUL HUDA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IQBAL IKHFANI AZIS", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MULYADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "OKI SUTIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "INDRA RAMADAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RONI ADI SETYAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YUSUF FERRY NUGROHO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "VALEN NAJIB", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "GILANG FATURAHMAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RAKHMAD SAFRI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RAMDHAN EKO PRASETYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDI GUNAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUNARJO", submit: [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUKARNA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WARTOYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BUDIMAN", submit: [0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AAN NURDIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NUROKHMAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HERU", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BAHTIAR ANWAR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "EDY WINARTO", submit: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SIRAJUL KHOZANI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RAMADHAN LUTFI MUKTAFI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DENI PRASETYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TRISWIYATNO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS PEBRIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DWI PURWANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUNG KRISTIAWAN RIYO PAMBUDI", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TOBRONI", submit: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ASEP PURWANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WAHYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDI ANTONI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HARTONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF YULIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RASITO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUNARTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WIDIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AFIF WAHYUDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MAHFUDH QOSIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ACHMAD KAMAL FIKRI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUGIYANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUKMA GUGUN GUNAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF RAHMAN", submit: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ATANG WILDAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DIKA JULI ANDRIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MOCHAMMAD ANDRIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AMAL MUSTAKIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DWI AFIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUNG WIERATNO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HODI IRWAN HANDIKI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SAPRUDIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ZAENAL ARIFIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IRVAN SEPTI LEGISTA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "M SHOLIHIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ALI MASRUR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROKI PERMANA", submit: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDI SUPRIYADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROBY PERMANI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IRWAN FERIYANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WAHYUDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "LEO SUGIARTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FAJAR WAHYU DJULIARDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUDIF SYAFII", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NAJI IMTIHANI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SIGIT WIHARSO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SARENGAT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TRIMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DARMAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DENDI RUSMIADI", submit: [8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DELI AJI YANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "JAROT WIDARSO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDYA MEDIANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANITA PRATAMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "KASMANTO", submit: [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUSLIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF MAULANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS SETYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HERMANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IRFAUDIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PURWANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "UMAR WIDODO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADE DERMAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS ADI SUBRANI", submit: [8, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDI SATRIA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IDRIS PRATAMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDUL IMAM LATIF", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TURSINAH", submit: [5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YUSUF ISMAIL", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NUR HIDAYAT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "KARNO TRI WIDODO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUPRIYADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDUL MAHMUD", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BANGKIT SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RUDI HARTONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BRIERIAN SYAH PUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MOCHAMMAD MUHIDIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "M CANDRA ZULIYANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIZKI PRATAMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YASODI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NANANG SUKANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SURIMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUTARTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DINI JARNUDIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROCHMADI", submit: [7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WAROKIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NOVAL ANDIKA BAYO", submit: [4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDI DARMANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "JUWARSO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HENDRIANSYAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SLAMET HARYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDI IRAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "OKY MEGAKUSUMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SARWOKO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DARYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROHMAT TULLOH ISA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FATHUL ARIF", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "INDRA SURYA FATAH", submit: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD TRI ANGGORO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUSTANGIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SARTI YULI PRAYOGO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANGGA BIMA SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PRIYO SUTANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUKARYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SRIYANTO", submit: [3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "CATUR SUPRIYANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIZKI RAMADHAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IMAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUNG MAULANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF SETIA NUGRAHA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADE PRIYANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROSYID SIDIQ", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUGIYANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HARIS FADILAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDI HARI NUGROHO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YOGI PAMUNGKAS DJATI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RENDI EKIYADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SULAEMAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "JOKO PURWANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANGGI SAPUTRA JAYA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RUSLAN MAULANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IYAN FIRMANSYAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADE PURNOMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARI RUDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDI WAWAN RIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HARIANO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MARTONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MULYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DANU TRI YUDANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDI KURNIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FEBRI SETIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ITO ADIYANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD FARIZAL", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "KUSNO GUNAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SETYANA IAN PRADIBTA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABY MAULANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MOCH. KHARIS", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YANUAR RENDY FIRDAUS", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MARDAN HENDRAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD TAUFIK HIDAYAT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DIDIK PRIYO UTOMO", submit: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF PURNOMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TRI HASTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "INDRA GUNAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MIDADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WAHYANI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SENO SETIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NIKOLA ARYA WIRATAMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MOHAMMAD RIDWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NURUL MA'RUFI", submit: [3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MOHAMMAD RIFQI SHODIQIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PRITA AULIA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WINA KARTIKA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WILL YANTO SYAM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
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
        { nama: "DIDIK EKO PRASTYO", submit: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] }
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
        { nama: "NOVI KUSUMAWARDHANI", submit: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Tax Department": [
        { nama: "PUTRI ASRI PERTIWI", submit: [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Procurement Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Internal Control Department": [
        { nama: "ARVIANTY NAZILA NIRA PRAWESTY", submit: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "REZA ARIZONA", submit: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DICKY NUGRAHA", submit: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Human Capital Strategic Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate HC Administration & Services Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Safety, Health & Security Department": [
        { nama: "NURUL CHOTIMAH", submit: [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Corporate Sustainability & General Services Department": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "Patria Development Center": [
        { nama: "AHMAT YULIANTO", submit: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AJENG KURNIA PERMATASARI", submit: [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0] }
    ],

    "RBPS": [
        { nama: "ABDUL HAMKA", submit: [5, 4, 3, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDHIKA SUKMANA", submit: [7, 7, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIFIN", submit: [3, 6, 5, 12, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARTHA DWI ALDIZA", submit: [0, 4, 3, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ASEP ANGGARA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AZAM MUZAKKI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DENNY SAPPE RORIE", submit: [7, 8, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DWI SULISTIONO", submit: [5, 6, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "EEND JUSA HERMAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FALDIAN PAMUNGKAS", submit: [3, 5, 1, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "GALIH RAMADHAN", submit: [5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HAFID", submit: [2, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IMAM SUBAYIN", submit: [2, 1, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MIFTAKHUL HUDA", submit: [6, 8, 4, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MOCHAMMAD EKO WAHYUDI", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUSAHID", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NOVI RIANA", submit: [8, 6, 5, 8, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIESKI MATULESSY", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RUDIANSYAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RUDY SETIAWAN", submit: [4, 4, 5, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RULLY SETYAWAN", submit: [8, 5, 6, 10, 0, 1, 0, 0, 0, 0, 0, 0] },
        { nama: "TRI FIKIY HERMANTO", submit: [7, 7, 7, 8, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROTIP PURWADI", submit: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TEGUH TRI WINARNO", submit: [0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0] },
        { nama: "ILHAM", submit: [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDULLAH MUADZ", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ACHMAD ABDI DWIANSYAH", submit: [4, 9, 3, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADE RAHMAD SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ADI SETIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUNG PRASETYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD RAMADHAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AKBAR I JUNIOR", submit: [4, 4, 3, 9, 0, 2, 0, 0, 0, 0, 0, 0] },
        { nama: "AKBAR II SENIOR", submit: [8, 5, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ALAMSYAH ILHAM QODRI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ALI MASYKUR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDI ASWAR SYAHRIADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANGGA DWI SAPUTRA", submit: [3, 4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANGGA TATOR", submit: [6, 4, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANGGER WICAKSONO", submit: [4, 9, 5, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANNISA KARTINI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARBAIN", submit: [7, 4, 0, 8, 0, 2, 0, 0, 0, 0, 0, 0] },
        { nama: "ARDI TRI SAPUTRA", submit: [1, 5, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARDIAN", submit: [6, 5, 5, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARDIANTO", submit: [9, 8, 7, 10, 0, 5, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIF MAULANA", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARINA NADA", submit: [3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BAMBANG HERMANTO", submit: [1, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BINTANG SAPUTRA", submit: [7, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DHANURTHA SALEH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DIAN HADIR", submit: [2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "E. M BANAZAR SYAFULLAH", submit: [2, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "EKO WAHYU", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ERWIN I", submit: [5, 5, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FERY SETIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD HAFIZHAL", submit: [0, 0, 3, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HAERUDDIN D", submit: [4, 8, 5, 11, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HENDRIKUS B", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HERI SETIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HERU ANASTYO WIBOWO", submit: [7, 5, 5, 7, 0, 3, 0, 0, 0, 0, 0, 0] },
        { nama: "HESTI NURAFNI", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IRFAN EFENDI", submit: [6, 0, 5, 10, 0, 1, 0, 0, 0, 0, 0, 0] },
        { nama: "M SONY ANDI", submit: [5, 5, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MASITA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD ARIF SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD FAUJAN DAFFANI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NURMUAT", submit: [10, 4, 3, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PRIMA DHIAN AJIARDANA", submit: [1, 6, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0] },
        { nama: "RAHDIAN RIZKI SANGAJI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RAHMAD SUCIPTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RATNA SARI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RENALD PALTOR", submit: [9, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RENGGA RAHMAD LISTYADIN", submit: [5, 7, 2, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIDHO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIPAN JULIANTO", submit: [7, 4, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIZAL", submit: [4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROMY ROYANSYAH", submit: [9, 7, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROXY NORMANIA RANGGAYANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RYAN ANDRY WIJAYA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SAMPURNA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SANDI", submit: [2, 0, 2, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SLAMET", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUGENG FITRIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUGENG RIADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SULISTIONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUNARDI", submit: [4, 6, 5, 10, 0, 1, 0, 0, 0, 0, 0, 0] },
        { nama: "SUPRATOMO", submit: [2, 6, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SYAMSIKA AKBAR ABDA'U", submit: [7, 8, 7, 11, 0, 1, 0, 0, 0, 0, 0, 0] },
        { nama: "WENDY TRIATMADJA", submit: [4, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YOGA PRATAMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YULI SUSANTO", submit: [9, 5, 3, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ZACKY", submit: [6, 8, 4, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RICKY SAPUTRA NUGRAHA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ],

    "RBPM": [
        { nama: "ABDUL MALLEHY", submit: [6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUK RUDIANTO", submit: [3, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS YASMANTO", submit: [0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANTHONIUS UTAMANING PRABOWO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARY WAHYUDI", submit: [0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0] },
        { nama: "CECEP ABADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "CHASANUDDIN", submit: [5, 0, 1, 5, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DARIYANTO", submit: [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEFRINNOSA P PANJAITAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DWI WIJANARKO", submit: [1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "EDDY MACHFUDIN", submit: [0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IMAM THABIB", submit: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RAJA GABRIEL JONGGI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MARYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUCHAMAD JUANDA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD BASHORI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD ZUHRI NURUDDIN", submit: [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NYONO BUDI RAHARDJO", submit: [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RENGGA BAYU PRABOWO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RICO ADIN ALDIANSYAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "STEVI FAHLEVI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUTRISNO", submit: [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YUSUF", submit: [1, 1, 2, 0, 1, 4, 0, 0, 0, 0, 0, 0] },
        { nama: "ADITYA WIRATAMA PRAYOGA", submit: [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDI BASO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARI MARTONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ARIANTO WIBOWO", submit: [1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BAYU RISKY ALAM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BONI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DAVID MANGIRI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DICKY EKA PRADANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ENDRA PURNAMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ERNAWATI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FATHUR RACHMAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FENLY RIAN KEINTJEM", submit: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HAFIZ RIZQIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HENDRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HENDRIK PURNOMO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HERIANSYAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HERU DESMANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IKHSAN MARTA PUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "JUMADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "KEVIN SETIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "LAODE ARDIANSYAH", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD FAHRIL ILMI", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD HAERUL", submit: [0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "M SYUKUR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD ADAM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MAHFUT AFANDIK", submit: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MAHRIZA AULIA RAHMAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MOHAMMAD ALAQBAR SABANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD RIZQI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NASRUL", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PURWANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RAMATA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RANDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROCHMI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROMDHON KRESNIAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUGIRI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AGUS SUTRISNO", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TRIA WISNU MURTI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TURMAN MUSTIONANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "USMAN ARPIANSYAH", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HARI RIZKY HIDAYAT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "INDRA IBRAHIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YAHYA MAULANA FIRDAUS", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SEPTIANTO RAHMA PUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIZKI ISLAMIATI NOOR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD DIMAS", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PANDI PRAYOGA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MOCHAMMAD YOGI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUARDI", submit: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SURIADI", submit: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HARDI WIJAYA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIZKI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SYAHRUL", submit: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AWAL RAMADHANI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DAVID UMANTEO", submit: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IHZAN YUSRIL ZUHRI", submit: [1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0] },
        { nama: "LADUNI ZAUKI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TEGUH PRASTYO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD SYAHRIL AJAIB", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD ZAKI AULIA", submit: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ALDAIR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DIKY ADE KURNIAWAN", submit: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HERI AMIRAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RISA SEFIRA", submit: [3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Adam Muhammad Yunus", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Yoyok Sudarmanto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Novian Putra Ramadhan", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nia Lorenza br Sinuhaji", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DWI ZHAROTUL NIKMAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ],

    "RJKT": [
        { nama: "R. Digdo Winarso", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Irfan Nugroho", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Benedictus Bayu Bagaskoro", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Fahrul Wardani", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Rosid", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muji Siswanto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Eko Susilo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sapon", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Suripto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Yayat Supriyatna", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YOGA SOFYAN NUGRAHA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhamad Faqih Santanu", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Fitri Wulansari", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Mahmudi", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Nahrawi", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aldie Ja Langi", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Michael Widodo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Imam Solihin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Devi Setiawan", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Fathurrohman", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Purwanto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ferri Prasetyo Margono Widodo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Viki Dwi Adrianto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Riza Isma Ardani", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Dwi Susanto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Indriyanto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nurochman", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Eko Fitriyatno", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ous", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ],

    "RTMK": [
        { nama: "Nama Karyawan 1", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    "RSGT": [
        { nama: "ABDILAH MUSLIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDUL RAHMAN", submit: [0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDREAS KELUANG", submit: [2, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANGGA CAHYA LUKMANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BAYU RATNA TRI CAHYONO", submit: [0, 0, 9, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "CHRIS DAMAYANTI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "CIPTO DEFRY H. SIAHAAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "EKI KHOIRULLIANUM", submit: [1, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FAJAR NUR MUHAIMIN", submit: [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "GREATY CHINTYA M. LUMOLOS", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IMAM MASHURI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ISMAIL MULYONO", submit: [13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "JUNAIDI", submit: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0] },
        { nama: "M. ABDUL AZIS", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MARYADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD ANSHORUDIN FADHILLAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NAHRUDIN KASIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RISWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RONADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SABRI", submit: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TRI ALIMI YOGA PRIANGGA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YOHANIS", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "YULIANUS PETO", submit: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WAHYUDI", submit: [0, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "THORIQ DZUL FAUZY", submit: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IMRAN SAPUTRA SIREGAR", submit: [0, 3, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RINALDI BENHARD MANURUNG", submit: [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SUPRIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SARJONO", submit: [2, 2, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BAMBANG SETIYONO LUTFI", submit: [8, 8, 12, 11, 10, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DARWIS", submit: [8, 9, 3, 13, 6, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HARIYANTO", submit: [1, 1, 1, 3, 2, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDRI WAHYU PURNOMO", submit: [2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ],

    "RBJN": [
        { nama: "DAHLIS", submit: [0, 0, 0, 3, 5, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD CHADAFI", submit: [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ROMDANI", submit: [9, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SYAFRIADI", submit: [3, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ASEP TRIANTO", submit: [0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "AHMAD YULIAN HANAFI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEVIANA NOFRIANTY", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "GILANG RAMADHAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HIDAYAT", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "IVAN ERIK IRAWAN", submit: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "JEKY BERLE ADJI PRIBADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "KHAIRUN NISA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "M. IBRAHIM DA WARA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "M. IQBAL MAULIDANI", submit: [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD ALFIYANOOR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD FADZR YONNALDY", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD HARIYANOOR", submit: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD SYAUFIE FUADI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIZKI SEPTI ANDRIYANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SYAMSRIZAL", submit: [1, 1, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NOOR IQBAL", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NUR IMAM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FARHAN NOOR HAKIM", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIDHWAN HIDAYATULLAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "A.TAUFIK SULISTIYONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DIMAS PRAYOGO PARYAMBUDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "M.GILANG PRAYOGA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ],

    "RADO": [
        { nama: "Bambang Kurniawan", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Hary Pratama", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Lukman Bidayah", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sholeh Budiarto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Miftah Syaifudin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAFI AHSANI TAQWIM", submit: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0] },
        { nama: "Dedy Kurniawan", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Deni Yoga Kusuma", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Fajeri", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Riduan", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Arifin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Budi Hermanto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Debora", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ade Putri Atmajaya Parada", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Akhmad Sidik", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "As'ari", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Fahrul Rozakin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Syaripudin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Faisal", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Eldi Fahri", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Fitri Yuliana", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Risky", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ihsanul Amin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Kharry Efendi", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Fauji", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Deny Saputra", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Richi Arista", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nani Supriyadi", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sapdianor", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muawatun nisa", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "M Supiyanor", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ],

    "UBPK": [
        { nama: "AHMAD RIZAL", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BUDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIDWAN WAHYU EKO RADIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FAUZAN AMRULLAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FENDI ARDIYANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HARYO PUTRO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "INDRAS ADI HARNO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "JANSEN BARUS", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD TAUFIK AKBAR", submit: [0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NANANG PURWANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Noverlandi Giaristanto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RIKI CHANDRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "SALIMAT SHOLEH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TRISMADI", submit: [5, 0, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "WISKARIYONO", submit: [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0] },
        { nama: "RARA NOVITA SAPITRI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HARIS SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "FIRZAN NAUFAL RAMADHAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "M PIANUR", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "NURDIN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "TOMY PERDANA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD RIFKI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDREW NOOR HASAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "GILANG ALFANDI", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "RAIHAN ADE PRATAMA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "MUHAMMAD ICHSAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PANDU TANAYA PURWANDOKO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "HAIKAL TASLIM TUASIKAL", submit: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0] },
        { nama: "RIZKY SAPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "BIARIADI WAHYUONO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABDUL MUIZ LIDINILLAHI ALTHON", submit: [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0] },
        { nama: "JUNIARTO BONAR TAMBUNAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ISMAIL", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "GUNAWAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Anang Agus Setiawan", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rahmat Rizaldy", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "M Khalis Afin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "PUTRI NAVISYA ANDITA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Arma Yana", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ABU HANIFAH", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "ANDI FAHRUL", submit: [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0] },
        { nama: "RENDY DAFATRIANTO", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ],

    "RTJE": [
        { nama: "ADE YUDHISTIRA", submit: [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "LAUREN AGUSMAN PANJAITAN", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DHONI GRANADA", submit: [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DEDY PURWANTO", submit: [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "EDO PANGESTU", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "DONNY SYAHPUTRA", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ],
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
        "Plant Operation",
        "RBPS", "RBPM", "RJKT",
        "RTMK", "RSGT", "RBJN",
        "RADO", "UBPK", "RTJE"
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
// DATA STATUS TEMUAN PER DEPARTMENT PER BULAN
// ============================================================

const departmentStatusData = {
    "Manufacturing Department": { open: [22, , 32, 34, 44, 15, 0, 0, 0, 0, 0, 0], close: [77, 49, 72, 98, 29, 0, 0, 0, 0, 0, 0, 0] },
    "Production Planning & Control Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Remanufacturing Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Plant Operation": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "RBPS": { open: [307, 344, 300, 336, 266, 0, 0, 0, 0, 0, 0, 0], close: [106, 241, 177, 182, 153, 0, 0, 0, 0, 0, 0, 0] },
    "RBPM": { open: [47, 89, 100, 61, 5, 0, 0, 0, 0, 0, 0, 0], close: [369, 489, 463, 297, 126, 0, 0, 0, 0, 0, 0, 0] },
    "RJKT": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "RTMK": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "RSGT": { open: [1, 65, 76, 47, 0, 0, 0, 0, 0, 0, 0, 0], close: [34, 85, 108, 93, 25, 0, 0, 0, 0, 0, 0, 0] },
    "RBJN": { open: [21, 59, 73, 46, 5, 0, 0, 0, 0, 0, 0, 0], close: [13, 62, 74, 52, 7, 0, 0, 0, 0, 0, 0, 0] },
    "RADO": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "UBPK": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "RTJE": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Management Development & Risk Management Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Legal Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Communication Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Business Development Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Design Engineering Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Production Engineering Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Product Research & Development Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Prototype & Testing Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Quality Assurance Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Quality Control 1 Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Quality Control 2 Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Marketing & Cost Estimator Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Inventory & Warehouse Management Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Vendor Management Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Subcont Development Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Information System Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Digitalization Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Command Center Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Finance Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Accounting Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Tax Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Procurement Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Internal Control Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Human Capital Strategic Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate HC Administration & Services Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Safety, Health & Security Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Corporate Sustainability & General Services Department": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    "Patria Development Center": { open: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], close: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
};

// ============================================================
// HELPER — Akumulasi status open/close SEMUA dept sampai bulan N
// ============================================================

function getStatusTemuan(bulan) {
    let totalOpen = 0, totalClose = 0;
    Object.keys(departmentStatusData).forEach(dept => {
        const d = departmentStatusData[dept];
        for (let b = 0; b < bulan; b++) {
            totalOpen += (d.open[b] || 0);
            totalClose += (d.close[b] || 0);
        }
    });
    return { open: totalOpen, close: totalClose };
}

// ============================================================
// HELPER — Status open/close satu DIVISION sampai bulan N
// ============================================================

function getDivisionStatus(divisionKey, bulan) {
    const depts = divisionData[divisionKey] || [];
    let open = 0, close = 0;
    depts.forEach(dept => {
        const d = departmentStatusData[dept];
        if (!d) return;
        for (let b = 0; b < bulan; b++) {
            open += (d.open[b] || 0);
            close += (d.close[b] || 0);
        }
    });
    return { open, close };
}

// ============================================================
// HELPER — Status open/close satu DEPARTMENT sampai bulan N
// ============================================================

function getDepartmentStatus(deptName, bulan) {
    const d = departmentStatusData[deptName];
    if (!d) return { open: 0, close: 0 };
    let open = 0, close = 0;
    for (let b = 0; b < bulan; b++) {
        open += (d.open[b] || 0);
        close += (d.close[b] || 0);
    }
    return { open, close };
}

// ============================================================
// KEYWORDS PRODUCTION (Plant)
// ============================================================

const plantKeywords = ["Manufacturing", "RBPS", "RBPM", "RJKT", "RTMK", "RSGT", "RBJN", "RADO", "UBPK", "RTJE"];

function isPlantDepartment(deptName) {
    return plantKeywords.some(kw => deptName.toLowerCase().includes(kw.toLowerCase()));
}

// ============================================================
// TARGET PER PEKERJA
// Plant  : 4 × bulan | Office : 1 × bulan
// ============================================================

function getTargetPerWorker(deptName, bulan) {
    const rate = isPlantDepartment(deptName) ? 4 : 1;
    return rate * bulan;
}

function getWorkerSubmitUntilMonth(worker, bulan) {
    return worker.submit.slice(0, bulan).reduce((sum, val) => sum + val, 0);
}

function getTotalSubmit(deptName, bulan) {
    return (workerData[deptName] || []).reduce(
        (sum, w) => sum + getWorkerSubmitUntilMonth(w, bulan),
        0
    );
}

function getSubmitPerBulanDept(deptName) {
    const workers = workerData[deptName] || [];
    const hasil = Array(12).fill(0);
    workers.forEach(w => {
        w.submit.forEach((val, idx) => { hasil[idx] += val; });
    });
    return hasil;
}

function akumulasiData(dataPerBulan, sampai) {
    const map = {};
    for (let b = 1; b <= sampai; b++) {
        (dataPerBulan[b] || []).forEach(item => {
            const key = item.kategori.toUpperCase().trim();
            if (map[key]) { map[key].jumlah += item.jumlah; }
            else { map[key] = { kategori: item.kategori, jumlah: item.jumlah }; }
        });
    }
    return Object.values(map).sort((a, b) => b.jumlah - a.jumlah);
}

function totalAkumulasi(dataPerBulan, sampai) {
    return akumulasiData(dataPerBulan, sampai).reduce((s, i) => s + i.jumlah, 0);
}

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

function getDepartmentStats(deptName, bulan) {
    const workers = workerData[deptName] || [];
    const target = getTargetPerWorker(deptName, bulan);
    const totalTarget = workers.length * target;
    const totalSubmit = getTotalSubmit(deptName, bulan);
    return { total: workers.length, submit: totalSubmit, target: totalTarget };
}

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

function generateDepartmentRanking(bulan) {
    return Object.keys(workerData).map(deptName => {
        const workers = workerData[deptName] || [];
        const submit = getTotalSubmit(deptName, bulan);
        const target = workers.length * getTargetPerWorker(deptName, bulan);
        const pct = target === 0 ? 0 : (submit / target) * 100;
        return { nama: deptName, total: workers.length, submit, target, pct };
    }).sort((a, b) => b.pct - a.pct);
}

function shortenDeptName(nama) {
    return nama.replace("Corporate ", "").replace(" Department", "").replace(" Dept", "");
}

function shortenName(nama) {
    const parts = nama.split(" ");
    return parts.length <= 2 ? nama : parts[0] + " " + parts[1];
}

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

function updateNote(noteId, bulan) {
    const el = document.getElementById(noteId);
    if (!el) return;
    el.textContent = bulan === 1 ? "Data Januari" : `Akumulasi Jan – ${NAMA_BULAN[bulan]}`;
}

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
// HELPER — safeSet
// ============================================================

function safeSet(id, val) {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
}

// ============================================================
// RENDER HOME CHARTS
// ============================================================

function renderHomeCharts(bulan) {
    const { plant, office } = getProductionStats(bulan);

    safeSet("plantTotal", plant.total);
    safeSet("plantTarget", plant.target);
    safeSet("plantBelum", plant.submit);
    safeSet("officeTotal", office.total);
    safeSet("officeTarget", office.target);
    safeSet("officeBelum", office.submit);

    const totalSubmitAll = plant.submit + office.submit;
    const totalTargetAll = plant.target + office.target;
    const pct = totalTargetAll === 0 ? "0.0" : (totalSubmitAll / totalTargetAll * 100).toFixed(1);
    const pencEl = document.getElementById("pencapaian2026");
    if (pencEl) pencEl.innerText = ` ${pct}%`;

    const totalTindakan = totalAkumulasi(tindakanPerBulan, bulan);
    const totalKondisi = totalAkumulasi(kondisiPerBulan, bulan);
    const totalTemuan = totalTindakan + totalKondisi;

    safeSet("jumlahTemuan", totalTemuan);
    safeSet("unsafeAction", totalTindakan);
    safeSet("unsafeCondition", totalKondisi);
    safeSet("bulanTemuan", `BULAN ${NAMA_BULAN[bulan].toUpperCase()} 2026`);

    const statusHome = getStatusTemuan(bulan);
    const homeSection = document.getElementById("homeSection");
    if (homeSection) {
        const homeOpenEl = homeSection.querySelector("#divisionOpen");
        const homeCloseEl = homeSection.querySelector("#divisionClose");
        if (homeOpenEl) homeOpenEl.textContent = statusHome.open;
        if (homeCloseEl) homeCloseEl.textContent = statusHome.close;
    }

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

    const labelsBulan = BULAN_SHORT.slice(1, bulan + 1);
    const plantBarData = Array(bulan).fill(0);
    const officeBarData = Array(bulan).fill(0);

    Object.keys(workerData).forEach(deptName => {
        const perBulanArr = getSubmitPerBulanDept(deptName);
        const isPlant = isPlantDepartment(deptName);
        for (let b = 0; b < bulan; b++) {
            if (isPlant) { plantBarData[b] += perBulanArr[b]; }
            else { officeBarData[b] += perBulanArr[b]; }
        }
    });

    plantBarInst = destroyIfExists(plantBarInst);
    const plantBarCtx = document.getElementById("plantBar");
    if (plantBarCtx) {
        plantBarInst = new Chart(plantBarCtx, {
            type: "bar",
            data: {
                labels: labelsBulan,
                datasets: [{ data: plantBarData, backgroundColor: "#3b82b8", borderRadius: 14 }]
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
                datasets: [{ data: officeBarData, backgroundColor: "#24557a", borderRadius: 14 }]
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
// RENDER PIE CHARTS
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
// RENDER BAR CHART TOP TIER
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
// RENDER TOP SUBMIT
// ============================================================

function renderTopSubmit(deptName, bulan) {
    const workers = workerData[deptName] || [];
    const target = getTargetPerWorker(deptName, bulan);

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
// RENDER TREND CHART
// ============================================================

function renderTrendChart(deptName, bulan) {
    if (!deptName) return;

    const BULAN_LABEL = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"];

    const workers = workerData[deptName] || [];
    const rate = isPlantDepartment(deptName) ? 4 : 1;
    const targetPerBulan = workers.length * rate;

    const submitPerBulan = getSubmitPerBulanDept(deptName);

    const dataBar = BULAN_LABEL.map((_, i) => i < bulan ? submitPerBulan[i] : 0);

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
// RENDER WORKER TABLE
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
// SECTION VISIBILITY
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
// DOM CONTENT LOADED
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    if (typeof ChartDataLabels !== "undefined") {
        Chart.register(ChartDataLabels);
    }

    const globalMonthEl = document.getElementById("globalMonth");
    if (!globalMonthEl) return;
    let currentBulan = parseInt(globalMonthEl.value);

    let activeDept = null;
    let activeDivision = null;

    // Reset semua stats ke "—" sebelum user memilih apapun
    ["jumlahPekerja", "sudahMengisi", "belumMengisi",
        "jumlahPekerjaDept", "sudahMengisiDept", "belumMengisiDept"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerText = "—";
        });

    // ============================================================
    // DROPDOWN NAVBAR — ganti bulan global
    // ============================================================

    globalMonthEl.addEventListener("change", function () {
        currentBulan = parseInt(this.value);

        renderHomeCharts(currentBulan);

        if (activeDivision) {
            const stats = getDivisionStats(activeDivision, currentBulan);
            safeSet("jumlahPekerja", stats.total);
            safeSet("sudahMengisi", stats.submit);
            safeSet("belumMengisi", stats.target);
            renderDivisionPie(stats.submit, stats.target);

            const divStatus = getDivisionStatus(activeDivision, currentBulan);
            const hazardSection = document.getElementById("hazardSection");
            if (hazardSection) {
                const divStatusBars = hazardSection.querySelectorAll(".status-temuan-bar");
                if (divStatusBars[0]) {
                    const openEl = divStatusBars[0].querySelector("#divisionOpen");
                    const closeEl = divStatusBars[0].querySelector("#divisionClose");
                    if (openEl) openEl.textContent = divStatus.open;
                    if (closeEl) closeEl.textContent = divStatus.close;
                }
            }
        }

        if (activeDept) {
            const stats = getDepartmentStats(activeDept, currentBulan);
            safeSet("jumlahPekerjaDept", stats.total);
            safeSet("sudahMengisiDept", stats.submit);
            safeSet("belumMengisiDept", stats.target);
            renderDepartmentPie(stats.submit, stats.target);
            renderBarChart(currentBulan);
            renderWorkerTable(activeDept, currentBulan);
            renderTopSubmit(activeDept, currentBulan);
            renderTrendChart(activeDept, currentBulan);

            const deptStatus = getDepartmentStatus(activeDept, currentBulan);
            const deptOpenEl = document.getElementById("departmentOpen");
            const deptCloseEl = document.getElementById("departmentClose");
            if (deptOpenEl) deptOpenEl.textContent = deptStatus.open;
            if (deptCloseEl) deptCloseEl.textContent = deptStatus.close;
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
    // FILTER SEARCH SECTION
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
            safeSet("jumlahPekerja", stats.total);
            safeSet("sudahMengisi", stats.submit);
            safeSet("belumMengisi", stats.target);

            renderDivisionPie(stats.submit, stats.target);

            const divStatus = getDivisionStatus(val, currentBulan);
            const hazardSection = document.getElementById("hazardSection");
            if (hazardSection) {
                const divStatusBars = hazardSection.querySelectorAll(".status-temuan-bar");
                if (divStatusBars[0]) {
                    const openEl = divStatusBars[0].querySelector("#divisionOpen");
                    const closeEl = divStatusBars[0].querySelector("#divisionClose");
                    if (openEl) openEl.textContent = divStatus.open;
                    if (closeEl) closeEl.textContent = divStatus.close;
                }
            }

            if (departmentSelect) {
                departmentSelect.innerHTML = `<option value="">Choose Department</option>`;
                (divisionData[val] || []).forEach(dept => {
                    const opt = document.createElement("option");
                    opt.value = dept;
                    opt.textContent = dept;
                    departmentSelect.appendChild(opt);
                });
            }

            safeSet("jumlahPekerjaDept", "—");
            safeSet("sudahMengisiDept", "—");
            safeSet("belumMengisiDept", "—");

            const deptSection = document.getElementById("departmentSection");
            if (deptSection) deptSection.style.display = "flex";

            const deptOpenEl = document.getElementById("departmentOpen");
            const deptCloseEl = document.getElementById("departmentClose");
            if (deptOpenEl) deptOpenEl.textContent = "0";
            if (deptCloseEl) deptCloseEl.textContent = "0";

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
            safeSet("jumlahPekerjaDept", stats.total);
            safeSet("sudahMengisiDept", stats.submit);
            safeSet("belumMengisiDept", stats.target);

            renderDepartmentPie(stats.submit, stats.target);
            renderBarChart(currentBulan);
            renderWorkerTable(dept, currentBulan);
            renderTopSubmit(dept, currentBulan);
            renderTrendChart(dept, currentBulan);

            const deptStatus = getDepartmentStatus(dept, currentBulan);
            const deptOpenEl = document.getElementById("departmentOpen");
            const deptCloseEl = document.getElementById("departmentClose");
            if (deptOpenEl) deptOpenEl.textContent = deptStatus.open;
            if (deptCloseEl) deptCloseEl.textContent = deptStatus.close;

            showContentSections();
        });
    }

    // ============================================================
    // SEARCH PEKERJA
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
    // INISIALISASI AWAL
    // ============================================================

    renderHomeCharts(currentBulan);

    const deptSection = document.getElementById("departmentSection");
    if (deptSection) deptSection.style.display = "none";
    hideContentSections();

});
