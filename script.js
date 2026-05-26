// ============================================================
// SAFETRACK — script.js
// Versi: FIXED — Target Akumulasi Otomatis per Bulan
// ============================================================

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
        { nama: "Nama Karyawan 1", submit: 0 }
    ],
    "Corporate Legal Department": [
        { nama: "Nama Karyawan 1", submit: 0 }
    ],
    "Corporate Communication Department": [
        { nama: "Nama Karyawan 1", submit: 0 }
    ],
    "Corporate Business Development Department": [
        { nama: "Nama Karyawan 1", submit: 0 }
    ],
    "Manufacturing Department": [
        { nama: "WIRYO AGATHA PUTERA", submit: 0 },
        { nama: "IGNATIUS DANANG SASONGKO", submit: 0 },
        { nama: "MOHAMMAD ALFIN KARIM", submit: 0 },
        { nama: "AAN NURDIANTO", submit: 0 },
        { nama: "ABDUL AZIZ", submit: 0 },
        { nama: "ABDUL IMAM LATIF", submit: 0 },
        { nama: "ABDUL MAHMUD", submit: 0 },
        { nama: "ACHMAD KAMAL FIKRI", submit: 0 },
        { nama: "ADE DERMAWAN", submit: 1 },
        { nama: "ADITYA LESMANA", submit: 0 },
        { nama: "ADITYA PRATAMA", submit: 0 },
        { nama: "AFIT WAHYUDI", submit: 0 },
        { nama: "AGUNG DHESCA PERMANA PUTRA", submit: 0 },
        { nama: "AGUNG KRISTIAWAN RIYO PAMBUDI", submit: 0 },
        { nama: "AGUNG WIERATNO", submit: 0 },
        { nama: "AGUS ADI SUBARUDIN", submit: 9 },
        { nama: "AGUS PEBRIANTO", submit: 0 },
        { nama: "AGUS SETYO", submit: 0 },
        { nama: "AGUS WIDODO", submit: 0 },
        { nama: "AHMAD MUKHALIT", submit: 0 },
        { nama: "AHMAD TAUFIK HIDAYAT", submit: 0 },
        { nama: "ALI MASRUR", submit: 0 },
        { nama: "AMAL MUSTAKIM", submit: 0 },
        { nama: "ANDI ROMIADI", submit: 0 },
        { nama: "ANDRI DARMANTO", submit: 0 },
        { nama: "ANDRIAN KURNIAWAN", submit: 0 },
        { nama: "ANDRIAN TRI ANGGORO", submit: 0 },
        { nama: "ANGGA BIMA SAPUTRA", submit: 0 },
        { nama: "ARIF MAULANA", submit: 16 },
        { nama: "ARIF MIFTAKHUL HUDA", submit: 6 },
        { nama: "ARIF PURNOMO", submit: 0 },
        { nama: "ARIF RAHMAN", submit: 0 },
        { nama: "ARIFIN YULIANTO", submit: 0 },
        { nama: "ARIS SETIAWAN", submit: 0 },
        { nama: "ASEP PURWANTO", submit: 0 },
        { nama: "ASNAWI", submit: 0 },
        { nama: "ATANG WILDAN", submit: 0 },
        { nama: "BAHTIAR ANWAR", submit: 0 },
        { nama: "BANGKIT SAPUTRA", submit: 0 },
        { nama: "BANGUN SOLEH SAPUTRA", submit: 0 },
        { nama: "BELI APRI YANTO", submit: 0 },
        { nama: "BERLIAN SYAH PUTRA", submit: 7 },
        { nama: "BUDIMAN", submit: 0 },
        { nama: "DARMAWAN", submit: 0 },
        { nama: "DARU PURNOMO", submit: 0 },
        { nama: "DARYONO", submit: 0 },
        { nama: "DEDI ANTONI", submit: 1 },
        { nama: "DEDI GUNAWAN", submit: 0 },
        { nama: "DEDIK IRAWAN", submit: 0 },
        { nama: "DEFRI SATRIA", submit: 0 },
        { nama: "DENDI RUSMIADI", submit: 5 },
        { nama: "DENI PRASETYO", submit: 0 },
        { nama: "DIDI SUWARDI", submit: 0 },
        { nama: "DIDIH MUNAEJI", submit: 0 },
        { nama: "DIDIK PRIYO UTOMO", submit: 0 },
        { nama: "DIDIN JAMJUDIN", submit: 0 },
        { nama: "DIKA JULI ANDRI", submit: 0 },
        { nama: "DJUNARDI", submit: 0 },
        { nama: "DWI AFIANTO", submit: 0 },
        { nama: "DWI PURWANTO", submit: 1 },
        { nama: "DWI SUPRIYADI", submit: 0 },
        { nama: "EDY WINARTO", submit: 0 },
        { nama: "FAHRUDIN", submit: 0 },
        { nama: "FAJAR WAHYU DJULIARDI", submit: 0 },
        { nama: "FATKHUL ARIF", submit: 0 },
        { nama: "FEBI GIANTIKA RAMDANI", submit: 0 },
        { nama: "FEBRI FANI RIZAWANTO", submit: 0 },
        { nama: "HARTONO", submit: 0 },
        { nama: "HARYANTO", submit: 0 },
        { nama: "HENDRI", submit: 0 },
        { nama: "HENDRIANSYAH", submit: 0 },
        { nama: "HERMANTO", submit: 0 },
        { nama: "HERU", submit: 0 },
        { nama: "HERWANTO", submit: 0 },
        { nama: "HODI IRWAN HANDIKI", submit: 0 },
        { nama: "IDRIS PRATAMA", submit: 0 },
        { nama: "IMAM SETYONO", submit: 0 },
        { nama: "INDRA SURYA FATAH", submit: 1 },
        { nama: "IQBAL IKHFANI AZIS", submit: 0 },
        { nama: "IRFANUDIN", submit: 2 },
        { nama: "IRVAN SEPTIN LEGISTA", submit: 0 },
        { nama: "IRWAN FERIYANTO", submit: 0 },
        { nama: "ISTANTO", submit: 0 },
        { nama: "JANU WIYONO", submit: 0 },
        { nama: "JAROT WIDARSO", submit: 0 },
        { nama: "JOKO MARDIONO", submit: 0 },
        { nama: "JUWARSO", submit: 0 },
        { nama: "KARNO TRI WIDODO", submit: 0 },
        { nama: "KASMANTO", submit: 7 },
        { nama: "KEMAN", submit: 0 },
        { nama: "KHUMAEDI", submit: 16 },
        { nama: "KRISNATIANTO TANJUNG", submit: 0 },
        { nama: "LEO SUGIARTO", submit: 0 },
        { nama: "M CANDRA ZULIYANTO", submit: 0 },
        { nama: "M SHOLIHQIN", submit: 0 },
        { nama: "MAHFUDH QOSIM", submit: 0 },
        { nama: "MAMAN SUPRIYATNA", submit: 0 },
        { nama: "MARDIAN HENDRAWAN", submit: 2 },
        { nama: "MARIYOTO", submit: 0 },
        { nama: "MOCH. KHARIS", submit: 0 },
        { nama: "MOCHAMMAD ANDRIANTO", submit: 0 },
        { nama: "MOCHAMMAD MUHFIDIN", submit: 0 },
        { nama: "MOHAMAD RIZAL SETIA BANGUN", submit: 0 },
        { nama: "MUDZAKIR", submit: 0 },
        { nama: "MUFID SYAFII", submit: 1 },
        { nama: "MUHAMMAD RIFQI SHODIQIN", submit: 0 },
        { nama: "MUHAMMAD SARIFUDIN", submit: 0 },
        { nama: "MUKHLISIN", submit: 0 },
        { nama: "MULYADI", submit: 0 },
        { nama: "MUSLIM", submit: 0 },
        { nama: "MUSTANGIN", submit: 0 },
        { nama: "NAJIH IMTIHANI", submit: 0 },
        { nama: "NANANG SUKANA", submit: 0 },
        { nama: "NANANG SUNARYO", submit: 0 },
        { nama: "NANDA MEIDONA", submit: 1 },
        { nama: "NGADINO", submit: 0 },
        { nama: "NOVAL ANDIKA BAYO", submit: 0 },
        { nama: "NOVI YUNAEDI", submit: 2 },
        { nama: "NUGROHO DWI CAHYO", submit: 0 },
        { nama: "NUR HIDAYAT", submit: 0 },
        { nama: "NUR HOLIK", submit: 0 },
        { nama: "NUROKHMAN", submit: 0 },
        { nama: "NURWAKHIDIN", submit: 0 },
        { nama: "OKI SUTIAWAN", submit: 0 },
        { nama: "OKY MEGAKUSUMA", submit: 0 },
        { nama: "PANGGIH RIBOWO", submit: 4 },
        { nama: "PRASETIYO", submit: 0 },
        { nama: "PRATONO", submit: 0 },
        { nama: "PRITA AULIA", submit: 0 },
        { nama: "PRIYO SUSANTO", submit: 0 },
        { nama: "PUDIANTORO", submit: 1 },
        { nama: "PURWANTO", submit: 0 },
        { nama: "RAMADHANI LUTHFI MUKTAFI", submit: 0 },
        { nama: "RAMDHAN EKO PRASETYO", submit: 0 },
        { nama: "RASITO", submit: 0 },
        { nama: "RIZKI PRATAMA", submit: 0 },
        { nama: "ROBY NORMAN", submit: 0 },
        { nama: "ROCHMADI", submit: 5 },
        { nama: "ROHMAD TULLOH ISA", submit: 2 },
        { nama: "ROKI PERMANA", submit: 0 },
        { nama: "RUDI HARTONO", submit: 0 },
        { nama: "SANTO", submit: 0 },
        { nama: "SAPRUDIN", submit: 0 },
        { nama: "SARENGAT", submit: 0 },
        { nama: "SARWOKO", submit: 0 },
        { nama: "SATRI YULI PRAYOGO", submit: 0 },
        { nama: "SENTOT", submit: 0 },
        { nama: "SETYANA IAN PRADIBTA", submit: 0 },
        { nama: "SIGIT WIHARSO", submit: 0 },
        { nama: "SIROJUL KHOZANI", submit: 0 },
        { nama: "SLAMET HARYONO", submit: 0 },
        { nama: "SRIYANTO", submit: 3 },
        { nama: "SUGIYANTO", submit: 0 },
        { nama: "SUKARNA", submit: 0 },
        { nama: "SUKMA GUGUN GUNAWAN", submit: 0 },
        { nama: "SUNARI", submit: 0 },
        { nama: "SUNARJO", submit: 0 },
        { nama: "SUPARTO", submit: 0 },
        { nama: "SUPRIYADI", submit: 0 },
        { nama: "SURATMO", submit: 0 },
        { nama: "TATO NITI ERLIANTO", submit: 0 },
        { nama: "TOBI'IN", submit: 0 },
        { nama: "TOBRONI", submit: 1 },
        { nama: "TRI SUTRISNA", submit: 0 },
        { nama: "TRIMO", submit: 0 },
        { nama: "TRISWIYATNO", submit: 0 },
        { nama: "TRIYONO", submit: 0 },
        { nama: "TURSINAH", submit: 5 },
        { nama: "UMAR WIDODO", submit: 0 },
        { nama: "URIP SETIAJI", submit: 1 },
        { nama: "WAHYONO", submit: 0 },
        { nama: "WAHYUDI", submit: 0 },
        { nama: "WAROKHIM", submit: 0 },
        { nama: "WARTOYO", submit: 0 },
        { nama: "WIDIANTORO", submit: 0 },
        { nama: "WINA KARTIKA", submit: 1 },
        { nama: "YANUAR RENDY FIRDAUS", submit: 0 },
        { nama: "YASODIK", submit: 0 },
        { nama: "YOGA FAJAR ASIDIQ", submit: 0 },
        { nama: "YUDHA YUNIAR DINANTA", submit: 0 },
        { nama: "YUNIAR DWI UTOMO", submit: 0 },
        { nama: "YUSLIMU KHOIRI", submit: 0 },
        { nama: "YUSUF ISMAIL", submit: 0 },
        { nama: "ZAENAL ARIFIN", submit: 1 }
    ],
    "Production Planning & Control Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Remanufacturing Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Plant Operation": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Design Engineering Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Production Engineering Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Product Research & Development Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Prototype & Testing Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Quality Assurance Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Quality Control 1 Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Quality Control 2 Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Marketing & Cost Estimator Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Inventory & Warehouse Management Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Vendor Management Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Subcont Development Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Information System Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Digitalization Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Command Center Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Finance Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Accounting Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Tax Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Procurement Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Internal Control Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Human Capital Strategic Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate HC Administration & Services Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Safety, Health & Security Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Corporate Sustainability & General Services Department": [{ nama: "Nama Karyawan 1", submit: 0 }],
    "Patria Development Center": [{ nama: "Nama Karyawan 1", submit: 0 }]
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
// HELPER — Hitung total submit semua worker di dept
// ============================================================

function getTotalSubmit(deptName) {
    return (workerData[deptName] || []).reduce((sum, w) => sum + w.submit, 0);
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
        const target  = getTargetPerWorker(dept, bulan);
        totalWorker  += workers.length;
        totalTarget  += workers.length * target;
        totalSubmit  += getTotalSubmit(dept);
    });
    return { total: totalWorker, submit: totalSubmit, target: totalTarget };
}

// ============================================================
// STATS PER DEPARTMENT — pakai bulan aktif
// ============================================================

function getDepartmentStats(deptName, bulan) {
    const workers    = workerData[deptName] || [];
    const target     = getTargetPerWorker(deptName, bulan);
    const totalTarget = workers.length * target;
    const totalSubmit = getTotalSubmit(deptName);
    return { total: workers.length, submit: totalSubmit, target: totalTarget };
}

// ============================================================
// STATS PRODUCTION vs NON PRODUCTION (untuk home) — pakai bulan aktif
// ============================================================

function getProductionStats(bulan) {
    let plant  = { total: 0, submit: 0, target: 0 };
    let office = { total: 0, submit: 0, target: 0 };

    Object.keys(workerData).forEach(deptName => {
        const workers = workerData[deptName] || [];
        const target  = getTargetPerWorker(deptName, bulan);
        const submit  = getTotalSubmit(deptName);
        const bucket  = isPlantDepartment(deptName) ? plant : office;
        bucket.total  += workers.length;
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
        const submit  = getTotalSubmit(deptName);
        const target  = workers.length * getTargetPerWorker(deptName, bulan);
        const pct     = target === 0 ? 0 : (submit / target) * 100;
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
    const list  = topN ? data.slice(0, topN) : data;
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
    const kondisi  = akumulasiData(kondisiPerBulan, bulan);

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
    const kat    = akumulasiData(kategoriPerBulan, bulan);
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

let plantChartInst  = null;
let officeChartInst = null;
let plantBarInst    = null;
let officeBarInst   = null;
let pieChartInst    = null;
let deptPieInst     = null;
let barChartInst    = null;
let submitChartInst = null;
let yearTrendInst   = null;

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
    document.getElementById("plantTotal").innerText  = plant.total;
    document.getElementById("plantTarget").innerText = plant.target;
    document.getElementById("plantBelum").innerText  = plant.submit;
    document.getElementById("officeTotal").innerText  = office.total;
    document.getElementById("officeTarget").innerText = office.target;
    document.getElementById("officeBelum").innerText  = office.submit;

    // Pencapaian %
    const totalSubmitAll = plant.submit + office.submit;
    const totalTargetAll = plant.target + office.target;
    const pct = totalTargetAll === 0 ? "0.0" : (totalSubmitAll / totalTargetAll * 100).toFixed(1);
    const pencEl = document.getElementById("pencapaian2026");
    if (pencEl) pencEl.innerText = ` ${pct}%`;

    // Jumlah Temuan — akumulasi sampai bulan terpilih
    const totalTindakan = totalAkumulasi(tindakanPerBulan, bulan);
    const totalKondisi  = totalAkumulasi(kondisiPerBulan, bulan);
    const totalTemuan   = totalTindakan + totalKondisi;

    document.getElementById("jumlahTemuan").innerText    = totalTemuan;
    document.getElementById("unsafeAction").innerText    = totalTindakan;
    document.getElementById("unsafeCondition").innerText = totalKondisi;
    document.getElementById("bulanTemuan").innerText     = `BULAN ${NAMA_BULAN[bulan].toUpperCase()} 2026`;

    // Doughnut Production
    plantChartInst = destroyIfExists(plantChartInst);
    plantChartInst = new Chart(document.getElementById("plantChart"), {
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

    // Doughnut Non Production
    officeChartInst = destroyIfExists(officeChartInst);
    officeChartInst = new Chart(document.getElementById("officeChart"), {
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

    // Bar Production — tampilkan per bulan sampai bulan terpilih
    const labelsBulan  = BULAN_SHORT.slice(1, bulan + 1);

    // Kalkulasi submit per bulan untuk bar chart (distribusi merata)
    const plantBarData = Array(bulan).fill(0);
    plantBarData[bulan - 1] = plant.submit;

    plantBarInst = destroyIfExists(plantBarInst);
    plantBarInst = new Chart(document.getElementById("plantBar"), {
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

    // Bar Non Production
    const officeBarData = Array(bulan).fill(0);
    officeBarData[bulan - 1] = office.submit;

    officeBarInst = destroyIfExists(officeBarInst);
    officeBarInst = new Chart(document.getElementById("officeBar"), {
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

// ============================================================
// RENDER — PIE CHART DIVISI
// ============================================================

function renderDivisionPie(submit, target) {
    const notAchieve = Math.max(0, target - submit);
    pieChartInst = destroyIfExists(pieChartInst);
    pieChartInst = new Chart(document.getElementById("pieChart"), {
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
    deptPieInst = new Chart(document.getElementById("departmentPie"), {
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
    barChartInst = new Chart(document.getElementById("barChart"), {
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
// ============================================================

function renderTopSubmit(deptName, bulan) {
    const workers = workerData[deptName] || [];
    const target  = getTargetPerWorker(deptName, bulan);
    const sorted  = [...workers].sort((a, b) => b.submit - a.submit).slice(0, 5);

    document.getElementById("submitTable").innerHTML = sorted.map((item, i) => {
        const achieve = item.submit >= target ? "Achieve" : "NonAchieve";
        const badge   = achieve === "Achieve" ? "success" : "danger";
        return `<tr>
            <td>${i + 1}</td>
            <td>${item.nama}</td>
            <td>${item.submit}</td>
            <td><span class="${badge}">${achieve}</span></td>
        </tr>`;
    }).join("");

    const maxVal   = sorted.length ? Math.max(...sorted.map(i => i.submit)) : target;
    const chartMax = Math.max(maxVal + 2, target + 2);

    submitChartInst = destroyIfExists(submitChartInst);
    submitChartInst = new Chart(document.getElementById("submitChart"), {
        type: "bar",
        data: {
            labels: sorted.map(item => shortenName(item.nama)),
            datasets: [{
                label: "Jumlah Submit",
                data: sorted.map(item => item.submit),
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
// ============================================================

function renderTrendChart(deptName, bulan) {
    if (!deptName) return;

    const BULAN_LABEL = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"];

    const workers     = workerData[deptName] || [];
    // Target per bulan per orang (rate), bukan akumulasi — untuk garis target di chart
    const rate        = isPlantDepartment(deptName) ? 4 : 1;
    const targetPerBulan = workers.length * rate; // target tiap bulan

    const totalSubmit = getTotalSubmit(deptName);

    // Distribusi submit merata ke tiap bulan yang sudah lewat
    const perBulan = bulan > 0 ? Math.floor(totalSubmit / bulan) : 0;
    const sisa     = totalSubmit - perBulan * bulan;

    const dataBar = BULAN_LABEL.map((_, i) => {
        if (i < bulan - 1) return perBulan;
        if (i === bulan - 1) return perBulan + sisa;
        return 0;
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
    yearTrendInst = new Chart(document.getElementById("yearTrendChart"), {
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
// ============================================================

function renderWorkerTable(deptName, bulan) {
    const workers = workerData[deptName] || [];
    const target  = getTargetPerWorker(deptName, bulan);
    document.getElementById("workerTable").innerHTML = workers.map((w, i) => {
        const pct     = target === 0 ? "0" : ((w.submit / target) * 100).toFixed(0);
        const achieve = w.submit >= target ? "Achieve" : "NonAchieve";
        const badge   = achieve === "Achieve" ? "success" : "danger";
        return `<tr>
            <td>${i + 1}</td>
            <td>${w.nama}</td>
            <td>${w.submit}</td>
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
    document.getElementById("homeSection").style.display   = "block";
    document.getElementById("hazardSection").style.display = "none";
    document.getElementById("searchSection").style.display = "none";
    document.getElementById("navDropdown").style.display   = "block";
}

function showHazard() {
    document.getElementById("homeSection").style.display   = "none";
    document.getElementById("hazardSection").style.display = "block";
    document.getElementById("searchSection").style.display = "none";
    document.getElementById("navDropdown").style.display   = "block";
}

function showSearch() {
    document.getElementById("homeSection").style.display   = "none";
    document.getElementById("hazardSection").style.display = "none";
    document.getElementById("searchSection").style.display = "block";
    document.getElementById("navDropdown").style.display   = "none";
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
    let currentBulan    = parseInt(globalMonthEl.value);

    // State untuk department yang sedang aktif
    let activeDept     = null;
    let activeDivision = null;

    // ============================================================
    // DROPDOWN NAVBAR — saat bulan berubah, semua update otomatis
    // ============================================================
    globalMonthEl.addEventListener("change", function () {
        currentBulan = parseInt(this.value);

        // Update home page (target otomatis berubah)
        renderHomeCharts(currentBulan);

        // Kalau division sudah dipilih, update stats division
        if (activeDivision) {
            const stats = getDivisionStats(activeDivision, currentBulan);
            document.getElementById("jumlahPekerja").innerText = stats.total;
            document.getElementById("sudahMengisi").innerText  = stats.submit;
            document.getElementById("belumMengisi").innerText  = stats.target;
            renderDivisionPie(stats.submit, stats.target);
        }

        // Kalau department sudah dipilih, update semua yang terkait
        if (activeDept) {
            const stats = getDepartmentStats(activeDept, currentBulan);
            document.getElementById("jumlahPekerjaDept").innerText = stats.total;
            document.getElementById("sudahMengisiDept").innerText  = stats.submit;
            document.getElementById("belumMengisiDept").innerText  = stats.target;
            renderDepartmentPie(stats.submit, stats.target);
            renderBarChart(currentBulan);
            renderWorkerTable(activeDept, currentBulan);
            renderTopSubmit(activeDept, currentBulan);
            renderTrendChart(activeDept, currentBulan);
        }

        // Sinkron dropdown di search section agar sama
        const filterTopTier  = document.getElementById("monthFilterTopTier");
        const filterKategori = document.getElementById("monthFilterKategori");
        if (filterTopTier)  filterTopTier.value  = String(currentBulan);
        if (filterKategori) filterKategori.value = String(currentBulan);

        // Kalau search section sedang terbuka, re-render
        if (document.getElementById("searchSection").style.display !== "none") {
            renderTopTier(currentBulan);
            renderKategori(currentBulan);
        }
    });

    // ============================================================
    // NAV BUTTONS
    // ============================================================
    document.getElementById("viewHazardBtn").addEventListener("click", showHazard);

    document.getElementById("viewSearchBtn").addEventListener("click", function () {
        showSearch();
        // Sinkron bulan filter dengan global
        const m = parseInt(document.getElementById("globalMonth").value);
        document.getElementById("monthFilterTopTier").value  = String(m);
        document.getElementById("monthFilterKategori").value = String(m);
        renderTopTier(m);
        renderKategori(m);
    });

    document.getElementById("backBtn").addEventListener("click", showHome);
    document.getElementById("backSearchBtn").addEventListener("click", showHome);

    // ============================================================
    // FILTER DROPDOWN SEARCH SECTION — independen per tabel
    // ============================================================
    document.getElementById("monthFilterTopTier").addEventListener("change", function () {
        renderTopTier(parseInt(this.value));
    });

    document.getElementById("monthFilterKategori").addEventListener("change", function () {
        renderKategori(parseInt(this.value));
    });

    // ============================================================
    // DIVISION SELECT
    // ============================================================
    const divisionSelect   = document.getElementById("divisionSelect");
    const departmentSelect = document.getElementById("departmentSelect");

    divisionSelect.addEventListener("change", function () {
        const val = this.value;
        if (!val) return;

        activeDivision = val;
        activeDept     = null;

        const stats = getDivisionStats(val, currentBulan);
        document.getElementById("jumlahPekerja").innerText = stats.total;
        document.getElementById("sudahMengisi").innerText  = stats.submit;
        document.getElementById("belumMengisi").innerText  = stats.target;

        renderDivisionPie(stats.submit, stats.target);

        // Populate department dropdown
        departmentSelect.innerHTML = `<option value="">Choose Department</option>`;
        (divisionData[val] || []).forEach(dept => {
            const opt       = document.createElement("option");
            opt.value       = dept;
            opt.textContent = dept;
            departmentSelect.appendChild(opt);
        });

        document.getElementById("departmentSection").style.display = "flex";
        document.getElementById("jumlahPekerjaDept").innerText = "—";
        document.getElementById("sudahMengisiDept").innerText  = "—";
        document.getElementById("belumMengisiDept").innerText  = "—";

        hideContentSections();
    });

    // ============================================================
    // DEPARTMENT SELECT
    // ============================================================
    departmentSelect.addEventListener("change", function () {
        const dept = this.value;
        if (!dept) return;

        activeDept = dept;

        const stats = getDepartmentStats(dept, currentBulan);
        document.getElementById("jumlahPekerjaDept").innerText = stats.total;
        document.getElementById("sudahMengisiDept").innerText  = stats.submit;
        document.getElementById("belumMengisiDept").innerText  = stats.target;

        renderDepartmentPie(stats.submit, stats.target);
        renderBarChart(currentBulan);
        renderWorkerTable(dept, currentBulan);
        renderTopSubmit(dept, currentBulan);
        renderTrendChart(dept, currentBulan);

        showContentSections();
    });

    // ============================================================
    // SEARCH PEKERJA — real-time filter
    // ============================================================
    document.getElementById("searchWorker").addEventListener("keyup", function () {
        const keyword = this.value.toLowerCase();
        document.querySelectorAll("#workerTable tr").forEach(row => {
            if (!row.children[1]) return;
            row.style.display = row.children[1].textContent.toLowerCase().includes(keyword) ? "" : "none";
        });
    });

    // ============================================================
    // INISIALISASI AWAL — render home dengan bulan default
    // ============================================================
    renderHomeCharts(currentBulan);

    document.getElementById("departmentSection").style.display = "none";
    hideContentSections();

}); // end DOMContentLoaded
