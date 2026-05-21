document.addEventListener("DOMContentLoaded", function () {

    // ============================================================
    // CHART.JS PLUGIN REGISTER
    // ============================================================

    if (typeof ChartDataLabels !== "undefined") {
        Chart.register(ChartDataLabels);
    }

    // ============================================================
    // VIEW PAGE — BACK & FORWARD BUTTONS
    // ============================================================

    const hazardSection = document.getElementById("hazardSection");
    const searchSection = document.getElementById("searchSection");
    const viewHazardBtn = document.getElementById("viewHazardBtn");
    const viewSearchBtn = document.getElementById("viewSearchBtn");
    const backBtn = document.getElementById("backBtn");
    const backSearchBtn = document.getElementById("backSearchBtn");

    function showHazard() {
        hazardSection.style.display = "block";
        searchSection.style.display = "none";
        document.querySelector(".hazard-preview").style.display = "none";
        document.querySelector(".dashboard-container").style.display = "none";
        document.querySelector(".bottom-chart").style.display = "none";
        document.querySelector(".total-card").style.display = "none";
        document.querySelector(".temuan-section").style.display = "none";
    }

    function showSearch() {
        searchSection.style.display = "block";
        hazardSection.style.display = "none";
        document.querySelector(".hazard-preview").style.display = "none";
        document.querySelector(".dashboard-container").style.display = "none";
        document.querySelector(".bottom-chart").style.display = "none";
        document.querySelector(".total-card").style.display = "none";
        document.querySelector(".temuan-section").style.display = "none";
    }

    function showHome() {
        hazardSection.style.display = "none";
        searchSection.style.display = "none";
        document.querySelector(".hazard-preview").style.display = "block";
        document.querySelector(".dashboard-container").style.display = "grid";
        document.querySelector(".bottom-chart").style.display = "block";
        document.querySelector(".total-card").style.display = "block";
        document.querySelector(".temuan-section").style.display = "block";
    }

    viewHazardBtn.addEventListener("click", showHazard);
    viewSearchBtn.addEventListener("click", showSearch);
    backBtn.addEventListener("click", showHome);
    backSearchBtn.addEventListener("click", showHome);

    // ============================================================
    // DATA WORKER PER DEPARTMENT
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
            { nama: "ADE DERMAWAN", submit: 0 },
            { nama: "ADITYA LESMANA", submit: 0 },
            { nama: "ADITYA PRATAMA", submit: 0 },
            { nama: "AFIT WAHYUDI", submit: 0 },
            { nama: "AGUNG DHESCA PERMANA PUTRA", submit: 0 },
            { nama: "AGUNG KRISTIAWAN RIYO PAMBUDI", submit: 0 },
            { nama: "AGUNG WIERATNO", submit: 0 },
            { nama: "AGUS ADI SUBARUDIN", submit: 0 },
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
            { nama: "ARIF MAULANA", submit: 0 },
            { nama: "ARIF MIFTAKHUL HUDA", submit: 6 },
            { nama: "ARIF PURNOMO", submit: 0 },
            { nama: "ARIF RAHMAN", submit: 2 },
            { nama: "ARIFIN YULIANTO", submit: 1 },
            { nama: "ARIS SETIAWAN", submit: 1 },
            { nama: "ASEP PURWANTO", submit: 8 },
            { nama: "ASNAWI", submit: 8 },
            { nama: "ATANG WILDAN", submit: 0 },
            { nama: "BAHTIAR ANWAR", submit: 0 },
            { nama: "BANGKIT SAPUTRA", submit: 0 },
            { nama: "BANGUN SOLEH SAPUTRA", submit: 10 },
            { nama: "BELI APRI YANTO", submit: 0 },
            { nama: "BERLIAN SYAH PUTRA", submit: 0 },
            { nama: "BUDIMAN", submit: 0 },
            { nama: "DARMAWAN", submit: 0 },
            { nama: "DARU PURNOMO", submit: 0 },
            { nama: "DARYONO", submit: 0 },
            { nama: "DEDI ANTONI", submit: 0 },
            { nama: "DEDI GUNAWAN", submit: 0 },
            { nama: "DEDIK IRAWAN", submit: 0 },
            { nama: "DEFRI SATRIA", submit: 0 },
            { nama: "DENDI RUSMIADI", submit: 0 },
            { nama: "DENI PRASETYO", submit: 0 },
            { nama: "DIDI SUWARDI", submit: 0 },
            { nama: "DIDIH MUNAEJI", submit: 0 },
            { nama: "DIDIK PRIYO UTOMO", submit: 0 },
            { nama: "DIDIN JAMJUDIN", submit: 0 },
            { nama: "DIKA JULI ANDRI", submit: 0 },
            { nama: "DJUNARDI", submit: 0 },
            { nama: "DWI AFIANTO", submit: 0 },
            { nama: "DWI PURWANTO", submit: 0 },
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
            { nama: "INDRA SURYA FATAH", submit: 0 },
            { nama: "IQBAL IKHFANI AZIS", submit: 10 },
            { nama: "IRFANUDIN", submit: 0 },
            { nama: "IRVAN SEPTIN LEGISTA", submit: 0 },
            { nama: "IRWAN FERIYANTO", submit: 0 },
            { nama: "ISTANTO", submit: 0 },
            { nama: "JANU WIYONO", submit: 0 },
            { nama: "JAROT WIDARSO", submit: 0 },
            { nama: "JOKO MARDIONO", submit: 0 },
            { nama: "JUWARSO", submit: 0 },
            { nama: "KARNO TRI WIDODO", submit: 0 },
            { nama: "KASMANTO", submit: 0 },
            { nama: "KEMAN", submit: 0 },
            { nama: "KHUMAEDI", submit: 0 },
            { nama: "KRISNATIANTO TANJUNG", submit: 0 },
            { nama: "LEO SUGIARTO", submit: 0 },
            { nama: "M CANDRA ZULIYANTO", submit: 0 },
            { nama: "M SHOLIHQIN", submit: 0 },
            { nama: "MAHFUDH QOSIM", submit: 0 },
            { nama: "MAMAN SUPRIYATNA", submit: 0 },
            { nama: "MARDIAN HENDRAWAN", submit: 0 },
            { nama: "MARIYOTO", submit: 0 },
            { nama: "MOCH. KHARIS", submit: 0 },
            { nama: "MOCHAMMAD ANDRIANTO", submit: 0 },
            { nama: "MOCHAMMAD MUHFIDIN", submit: 0 },
            { nama: "MOHAMAD RIZAL SETIA BANGUN", submit: 0 },
            { nama: "MUDZAKIR", submit: 0 },
            { nama: "MUFID SYAFII", submit: 0 },
            { nama: "MUHAMMAD RIFQI SHODIQIN", submit: 0 },
            { nama: "MUHAMMAD SARIFUDIN", submit: 0 },
            { nama: "MUKHLISIN", submit: 0 },
            { nama: "MULYADI", submit: 0 },
            { nama: "MUSLIM", submit: 0 },
            { nama: "MUSTANGIN", submit: 0 },
            { nama: "NAJIH IMTIHANI", submit: 0 },
            { nama: "NANANG SUKANA", submit: 0 },
            { nama: "NANANG SUNARYO", submit: 10 },
            { nama: "NANDA MEIDONA", submit: 0 },
            { nama: "NGADINO", submit: 0 },
            { nama: "NOVAL ANDIKA BAYO", submit: 0 },
            { nama: "NOVI YUNAEDI", submit: 0 },
            { nama: "NUGROHO DWI CAHYO", submit: 0 },
            { nama: "NUR HIDAYAT", submit: 0 },
            { nama: "NUR HOLIK", submit: 0 },
            { nama: "NUROKHMAN", submit: 0 },
            { nama: "NURWAKHIDIN", submit: 0 },
            { nama: "OKI SUTIAWAN", submit: 0 },
            { nama: "OKY MEGAKUSUMA", submit: 0 },
            { nama: "PANGGIH RIBOWO", submit: 0 },
            { nama: "PRASETIYO", submit: 0 },
            { nama: "PRATONO", submit: 0 },
            { nama: "PRITA AULIA", submit: 0 },
            { nama: "PRIYO SUSANTO", submit: 0 },
            { nama: "PUDIANTORO", submit: 0 },
            { nama: "PURWANTO", submit: 0 },
            { nama: "RAMADHANI LUTHFI MUKTAFI", submit: 0 },
            { nama: "RAMDHAN EKO PRASETYO", submit: 0 },
            { nama: "RASITO", submit: 0 },
            { nama: "RIZKI PRATAMA", submit: 0 },
            { nama: "ROBY NORMAN", submit: 0 },
            { nama: "ROCHMADI", submit: 0 },
            { nama: "ROHMAD TULLOH ISA", submit: 0 },
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
            { nama: "SRIYANTO", submit: 0 },
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
            { nama: "TOBRONI", submit: 0 },
            { nama: "TRI SUTRISNA", submit: 0 },
            { nama: "TRIMO", submit: 0 },
            { nama: "TRISWIYATNO", submit: 9 },
            { nama: "TRIYONO", submit: 0 },
            { nama: "TURSINAH", submit: 0 },
            { nama: "UMAR WIDODO", submit: 0 },
            { nama: "URIP SETIAJI", submit: 0 },
            { nama: "WAHYONO", submit: 0 },
            { nama: "WAHYUDI", submit: 0 },
            { nama: "WAROKHIM", submit: 0 },
            { nama: "WARTOYO", submit: 0 },
            { nama: "WIDIANTORO", submit: 0 },
            { nama: "WINA KARTIKA", submit: 0 },
            { nama: "YANUAR RENDY FIRDAUS", submit: 0 },
            { nama: "YASODIK", submit: 0 },
            { nama: "YOGA FAJAR ASIDIQ", submit: 0 },
            { nama: "YUDHA YUNIAR DINANTA", submit: 0 },
            { nama: "YUNIAR DWI UTOMO", submit: 0 },
            { nama: "YUSLIMU KHOIRI", submit: 0 },
            { nama: "YUSUF ISMAIL", submit: 0 },
            { nama: "ZAENAL ARIFIN", submit: 0 }
        ],
        "Production Planning & Control Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Remanufacturing Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Plant Operation": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Design Engineering Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Production Engineering Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Product Research & Development Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Prototype & Testing Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Quality Assurance Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Quality Control 1 Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Quality Control 2 Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Marketing & Cost Estimator Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Inventory & Warehouse Management Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Vendor Management Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Subcont Development Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Information System Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Digitalization Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Command Center Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Finance Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Accounting Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Tax Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Procurement Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Internal Control Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Human Capital Strategic Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Human Capital Administration & Services Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Safety, Health & Security Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Corporate Sustainability & General Services Department": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ],
        "Patria Development Center": [
            { nama: "Nama Karyawan 1", submit: 0 }
        ]
    };

    // ============================================================
    // KLASIFIKASI PRODUCTION vs NONPRODUCTION
    // Plant keywords = Production, sisanya = NonProduction
    // ============================================================

    const plantKeywords = [
        "Manufacturing", "RBPS", "RBPM", "RJKT", "RTMK",
        "RSGT", "RBJN", "RADO", "UBPK", "RTJE"
    ];

    function isPlantDepartment(deptName) {
        return plantKeywords.some(keyword =>
            deptName.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    // Hitung otomatis Production & NonProduction dari workerData
    function getProductionStats() {
        let plantTotal = 0, plantSubmit = 0;
        let officeTotal = 0, officeSubmit = 0;

        Object.keys(workerData).forEach(deptName => {
            const workers = workerData[deptName] || [];
            const totalWorker = workers.length;
            const sudah = workers.filter(w => w.submit > 0).length;

            if (isPlantDepartment(deptName)) {
                plantTotal += totalWorker;
                plantSubmit += sudah;
            } else {
                officeTotal += totalWorker;
                officeSubmit += sudah;
            }
        });

        return {
            plant: { total: plantTotal, submit: plantSubmit, belum: plantTotal - plantSubmit },
            office: { total: officeTotal, submit: officeSubmit, belum: officeTotal - officeSubmit }
        };
    }

    // ============================================================
    // DATA DIVISION → DEPARTMENTS
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
            "Corporate Human Capital Administration & Services Department",
            "Corporate Safety, Health & Security Department",
            "Corporate Sustainability & General Services Department",
            "Patria Development Center"
        ]
    };

    // ============================================================
    // TOP TIER — OTOMATIS DARI workerData
    // ============================================================

    function generateDepartmentRanking() {
        const ranking = [];
        Object.keys(workerData).forEach(departmentName => {
            const workers = workerData[departmentName] || [];
            const totalWorker = workers.length;
            let sudahMengisi = 0;
            workers.forEach(worker => {
                if (worker.submit > 0) sudahMengisi++;
            });
            const percentage = totalWorker === 0 ? 0 : (sudahMengisi / totalWorker) * 100;
            ranking.push({
                nama: departmentName,
                total: totalWorker,
                mengisi: sudahMengisi,
                belum: totalWorker - sudahMengisi,
                percentage: percentage
            });
        });
        ranking.sort((a, b) => b.percentage - a.percentage);
        return ranking;
    }

    const dataDepartment = generateDepartmentRanking().slice(0, 5);

    // ============================================================
    // HITUNG STATS DARI workerData
    // ============================================================

    function getDivisionStats(divisionName) {
        const departments = divisionData[divisionName] || [];
        let totalWorker = 0, sudahMengisi = 0, belumMengisi = 0;
        departments.forEach(dept => {
            const workers = workerData[dept] || [];
            totalWorker += workers.length;
            workers.forEach(worker => {
                if (worker.submit > 0) sudahMengisi++;
                else belumMengisi++;
            });
        });
        return { total: totalWorker, submit: sudahMengisi, belum: belumMengisi };
    }

    function getDepartmentStats(departmentName) {
        const workers = workerData[departmentName] || [];
        let sudahMengisi = 0, belumMengisi = 0;
        workers.forEach(worker => {
            if (worker.submit > 0) sudahMengisi++;
            else belumMengisi++;
        });
        return { total: workers.length, submit: sudahMengisi, belum: belumMengisi };
    }

    // ============================================================
    // CHART INSTANCES
    // ============================================================

    let pieChartInstance = null;
    let departmentPieInstance = null;
    let barChartInstance = null;
    let submitChartInstance = null;
    let yearTrendInstance = null;

    // ============================================================
    // RENDER PIE CHART DIVISI
    // ============================================================

    function renderDivisionPie(submit, belum) {
        const total = submit + belum;
        if (pieChartInstance) pieChartInstance.destroy();
        pieChartInstance = new Chart(document.getElementById("pieChart"), {
            type: "doughnut",
            data: {
                labels: ["Sudah Mengisi", "Belum Mengisi"],
                datasets: [{
                    data: [submit, belum],
                    backgroundColor: ["#24557a", "#b9dfff"],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: "bottom" },
                    datalabels: {
                        display: true,
                        color: "#ffffff",
                        font: { size: 18, weight: "bold" },
                        formatter: (value) => total === 0 ? "0%" : (value / total * 100).toFixed(1) + "%"
                    }
                }
            }
        });
    }

    function renderDepartmentPie(submit, belum) {
        const total = submit + belum;
        if (departmentPieInstance) departmentPieInstance.destroy();
        departmentPieInstance = new Chart(document.getElementById("departmentPie"), {
            type: "doughnut",
            data: {
                labels: ["Sudah Submit", "Belum Submit"],
                datasets: [{
                    data: [submit, belum],
                    backgroundColor: ["#24557a", "#b9dfff"],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                layout: { padding: { top: 20, bottom: 20, left: 20, right: 20 } },
                plugins: {
                    legend: { position: "bottom" },
                    datalabels: {
                        anchor: "center",
                        align: "center",
                        color: "#ffffff",
                        font: { size: 14, weight: "bold" },
                        display: (context) => {
                            const value = context.dataset.data[context.dataIndex];
                            return value > 0;
                        },
                        formatter: (value) => {
                            if (total === 0) return "0%";
                            return (value / total * 100).toFixed(1) + "%";
                        }
                    }
                }
            }
        });
    }

    // ============================================================
    // RENDER TOP TIER TABLE
    // ============================================================

    function shortenDeptName(nama) {
        return nama
            .replace("Corporate ", "")
            .replace(" Department", "")
            .replace(" Dept", "");
    }

    function renderTopTierTable() {
        const tableBody = document.getElementById("tableBody");
        tableBody.innerHTML = "";
        dataDepartment.forEach((dept, index) => {
            const persen = dept.percentage.toFixed(0);
            tableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td title="${dept.nama}">${shortenDeptName(dept.nama)}</td>
                    <td>${dept.total}</td>
                    <td>${dept.mengisi}</td>
                    <td>${persen}%</td>
                </tr>`;
        });
    }

    // ============================================================
    // RENDER BAR CHART STATUS SUBMIT
    // ============================================================

    function renderBarChart() {
        if (barChartInstance) barChartInstance.destroy();
        barChartInstance = new Chart(document.getElementById("barChart"), {
            type: "bar",
            data: {
                labels: dataDepartment.map(item => shortenDeptName(item.nama)),
                datasets: [
                    {
                        label: "Sudah Mengisi",
                        data: dataDepartment.map(item => item.mengisi),
                        backgroundColor: "#24557a",
                        borderRadius: 12
                    },
                    {
                        label: "Belum Mengisi",
                        data: dataDepartment.map(item => item.belum),
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
                        anchor: "end",
                        align: "top",
                        offset: 4,
                        color: "#183b56",
                        font: { weight: "bold", size: 11 },
                        display: function (context) {
                            return context.datasetIndex === 0;
                        },
                        formatter: function (value, context) {
                            const total = dataDepartment[context.dataIndex].total;
                            if (total === 0) return "0%";
                            return ((value / total) * 100).toFixed(0) + "%";
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            maxRotation: 30,
                            minRotation: 0,
                            font: { size: 10 },
                            callback: function (value, index) {
                                const label = this.getLabelForValue(index);
                                const words = label.split(" ");
                                const lines = [];
                                let line = "";
                                words.forEach(word => {
                                    if ((line + word).length > 15) {
                                        if (line) lines.push(line.trim());
                                        line = word + " ";
                                    } else {
                                        line += word + " ";
                                    }
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
    // RENDER TOP SUBMIT TABLE + CHART
    // ============================================================

    function shortenName(nama) {
        const parts = nama.split(" ");
        if (parts.length <= 2) return nama;
        return parts[0] + " " + parts[1];
    }

    function renderTopSubmit(departmentName) {
        const workers = workerData[departmentName] || [];
        const target = 10;
        const sorted = [...workers].sort((a, b) => b.submit - a.submit).slice(0, 5);

        const submitTable = document.getElementById("submitTable");
        submitTable.innerHTML = "";
        sorted.forEach((item, index) => {
            const achieve = item.submit >= target ? "Achieve" : "NonAchieve";
            const badge = achieve === "Achieve" ? "success" : "danger";
            submitTable.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.nama}</td>
                    <td>${item.submit}</td>
                    <td><span class="${badge}">${achieve}</span></td>
                    <td>—</td>
                </tr>`;
        });

        const maxVal = sorted.length > 0 ? Math.max(...sorted.map(i => i.submit)) : target;
        const chartMax = Math.max(maxVal + 2, target + 2);

        if (submitChartInstance) submitChartInstance.destroy();
        submitChartInstance = new Chart(document.getElementById("submitChart"), {
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
                responsive: true,
                maintainAspectRatio: false,
                layout: { padding: { top: 24 } },
                plugins: {
                    legend: { display: false },
                    datalabels: {
                        anchor: "end",
                        align: "top",
                        offset: 2,
                        color: "#183b56",
                        font: { weight: "bold", size: 12 },
                        formatter: (value) => value
                    }
                },
                scales: {
                    x: {
                        ticks: { font: { size: 10 }, maxRotation: 20, minRotation: 0 },
                        categoryPercentage: 0.7,
                        barPercentage: 0.8
                    },
                    y: {
                        beginAtZero: true,
                        suggestedMax: chartMax,
                        ticks: { stepSize: 2 }
                    }
                }
            }
        });
    }

    // ============================================================
    // RENDER TREND CHART
    // ============================================================

    function renderTrendChart(divisionName) {
        const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"];
        const TARGET = 50;
        const now = new Date();
        const bulanSkrg = now.getMonth();
        const bulanSudah = bulanSkrg + 1;
        const departments = divisionData[divisionName] || [];
        const colors = ["#24557a", "#3b82b8", "#4b97d1", "#73b3e7", "#b9dfff", "#1a3d5c", "#5ba3d0"];

        const datasets = departments.map((deptName, idx) => {
            const workers = workerData[deptName] || [];
            const totalSubmit = workers.reduce((s, w) => s + w.submit, 0);
            const submitPerBulan = bulanSudah > 0 ? Math.floor(totalSubmit / bulanSudah) : 0;
            const sisa = totalSubmit - submitPerBulan * bulanSudah;
            const data = bulan.map((_, i) => {
                if (i < bulanSudah - 1) return submitPerBulan;
                if (i === bulanSudah - 1) return submitPerBulan + sisa;
                return 0;
            });
            return {
                label: shortenDeptName(deptName),
                data: data,
                backgroundColor: bulan.map((_, i) =>
                    i < bulanSudah ? colors[idx % colors.length] : colors[idx % colors.length] + "55"
                ),
                borderRadius: 8,
                type: "bar"
            };
        });

        datasets.push({
            label: "Target (50)",
            data: bulan.map(() => TARGET),
            type: "line",
            borderColor: "#e74c3c",
            borderWidth: 2,
            borderDash: [6, 4],
            pointRadius: 0,
            fill: false,
            datalabels: { display: false }
        });

        if (yearTrendInstance) yearTrendInstance.destroy();
        yearTrendInstance = new Chart(document.getElementById("yearTrendChart"), {
            type: "bar",
            data: { labels: bulan, datasets: datasets },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: "top" },
                    datalabels: {
                        display: true,
                        anchor: "end",
                        align: "top",
                        color: "#183b56",
                        font: { size: 10, weight: "bold" },
                        formatter: (value) => value > 0 ? value : ""
                    }
                },
                scales: {
                    y: { beginAtZero: true, suggestedMax: TARGET + 10 }
                }
            }
        });
    }

    // ============================================================
    // RENDER WORKER TABLE
    // ============================================================

    function renderWorkerTable(departmentName) {
        const workerTable = document.getElementById("workerTable");
        workerTable.innerHTML = "";
        const workers = workerData[departmentName] || [];
        workers.forEach((worker, index) => {
            const target = 10;
            const persen = ((worker.submit / target) * 100).toFixed(0);
            const achievement = worker.submit >= target ? "Achieve" : "NonAchieve";
            const badge = achievement === "Achieve" ? "success" : "danger";
            workerTable.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${worker.nama}</td>
                    <td>${worker.submit}</td>
                    <td>${target}</td>
                    <td><span class="${badge}">${achievement}</span></td>
                    <td>${persen}%</td>
                </tr>`;
        });
    }

    // ============================================================
    // SECTION VISIBILITY HELPERS
    // ============================================================

    const sectionDepartment = document.getElementById("departmentSection");
    const sectionTopTier = document.getElementById("topTierSection");
    const sectionWorker = document.getElementById("workerSection");
    const sectionTopSubmit = document.getElementById("topSubmitSection");
    const sectionTrend = document.getElementById("trendSection");

    function hideContentSections() {
        if (sectionTopTier) sectionTopTier.style.display = "none";
        if (sectionWorker) sectionWorker.style.display = "none";
        if (sectionTopSubmit) sectionTopSubmit.style.display = "none";
        if (sectionTrend) sectionTrend.style.display = "none";
    }

    function showContentSections() {
        if (sectionTopTier) sectionTopTier.style.display = "block";
        if (sectionWorker) sectionWorker.style.display = "block";
        if (sectionTopSubmit) sectionTopSubmit.style.display = "block";
        if (sectionTrend) sectionTrend.style.display = "block";
    }

    if (sectionDepartment) sectionDepartment.style.display = "none";
    hideContentSections();

    // ============================================================
    // EVENT: PILIH DIVISION
    // ============================================================

    const divisionSelect = document.getElementById("divisionSelect");
    const departmentSelect = document.getElementById("departmentSelect");

    divisionSelect.addEventListener("change", function () {
        const selectedDivision = this.value;
        if (!selectedDivision) return;

        const stats = getDivisionStats(selectedDivision);
        document.getElementById("jumlahPekerja").innerText = stats.total;
        document.getElementById("sudahMengisi").innerText = stats.submit;
        document.getElementById("belumMengisi").innerText = stats.belum;

        renderDivisionPie(stats.submit, stats.belum);

        departmentSelect.innerHTML = `<option value="">Choose Department</option>`;
        const departments = divisionData[selectedDivision] || [];
        departments.forEach(dept => {
            const opt = document.createElement("option");
            opt.value = dept;
            opt.textContent = dept;
            departmentSelect.appendChild(opt);
        });

        if (sectionDepartment) sectionDepartment.style.display = "flex";

        document.getElementById("jumlahPekerjaDept").innerText = "—";
        document.getElementById("sudahMengisiDept").innerText = "—";
        document.getElementById("belumMengisiDept").innerText = "—";

        hideContentSections();
    });

    // ============================================================
    // EVENT: PILIH DEPARTMENT
    // ============================================================

    departmentSelect.addEventListener("change", function () {
        const selectedDept = this.value;
        if (!selectedDept) return;

        const stats = getDepartmentStats(selectedDept);
        document.getElementById("jumlahPekerjaDept").innerText = stats.total;
        document.getElementById("sudahMengisiDept").innerText = stats.submit;
        document.getElementById("belumMengisiDept").innerText = stats.belum;

        renderDepartmentPie(stats.submit, stats.belum);
        renderTopTierTable();
        renderBarChart();
        renderWorkerTable(selectedDept);
        renderTopSubmit(selectedDept);

        const selectedDivision = divisionSelect.value;
        renderTrendChart(selectedDivision);

        showContentSections();
    });

    // ============================================================
    // SEARCH WORKER
    // ============================================================

    const searchWorker = document.getElementById("searchWorker");
    if (searchWorker) {
        searchWorker.addEventListener("keyup", function () {
            const keyword = this.value.toLowerCase();
            const rows = document.querySelectorAll("#workerTable tr");
            rows.forEach(row => {
                if (!row.children[1]) return;
                const nama = row.children[1].textContent.toLowerCase();
                row.style.display = nama.includes(keyword) ? "" : "none";
            });
        });
    }

    // ============================================================
    // HOME PAGE — HITUNG OTOMATIS DARI workerData
    // ============================================================

    const prodStats = getProductionStats();

    const plantTotal   = prodStats.plant.total;
    const plantSubmit  = prodStats.plant.submit;
    const plantBelum   = prodStats.plant.belum;
    const officeTotal  = prodStats.office.total;
    const officeSubmit = prodStats.office.submit;
    const officeBelum  = prodStats.office.belum;

    // Update info cards
    const elPlantTotal  = document.getElementById("plantTotal");
    const elPlantSubmit = document.getElementById("plantSubmit");
    const elPlantBelum  = document.getElementById("plantBelum");
    const elOfficeTotal  = document.getElementById("officeTotal");
    const elOfficeSubmit = document.getElementById("officeSubmit");
    const elOfficeBelum  = document.getElementById("officeBelum");

    if (elPlantTotal)   elPlantTotal.innerText   = plantTotal;
    if (elPlantSubmit)  elPlantSubmit.innerText  = plantSubmit;
    if (elPlantBelum)   elPlantBelum.innerText   = plantBelum;
    if (elOfficeTotal)  elOfficeTotal.innerText  = officeTotal;
    if (elOfficeSubmit) elOfficeSubmit.innerText = officeSubmit;
    if (elOfficeBelum)  elOfficeBelum.innerText  = officeBelum;

    // Total Pie Chart (Production vs NonProduction)
    const totalPieData = [plantTotal, officeTotal];
    const totalPie = plantTotal + officeTotal;

    new Chart(document.getElementById("totalChart"), {
        type: "pie",
        data: {
            labels: ["Production", "NonProduction"],
            datasets: [{
                data: totalPieData,
                backgroundColor: ["#24557a", "#b9dfff"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "top", labels: { padding: 20, font: { size: 14, weight: "600" } } },
                datalabels: {
                    color: "#ffffff",
                    font: { size: 18, weight: "bold" },
                    formatter: (value) => totalPie === 0 ? "0%" : (value / totalPie * 100).toFixed(1) + "%"
                }
            }
        }
    });

    // Plant Doughnut Chart
    new Chart(document.getElementById("plantChart"), {
        type: "doughnut",
        data: {
            labels: ["Submit", "Belum"],
            datasets: [{ data: [plantSubmit, plantBelum], backgroundColor: ["#24557a", "#b9dfff"] }]
        },
        options: {
            plugins: {
                legend: { position: "bottom" },
                datalabels: {
                    color: "#ffffff",
                    font: { size: 18, weight: "bold" },
                    formatter: (value) => plantTotal === 0 ? "0%" : (value / plantTotal * 100).toFixed(1) + "%"
                }
            }
        }
    });

    // Office Doughnut Chart
    new Chart(document.getElementById("officeChart"), {
        type: "doughnut",
        data: {
            labels: ["Submit", "Belum"],
            datasets: [{ data: [officeSubmit, officeBelum], backgroundColor: ["#24557a", "#b9dfff"] }]
        },
        options: {
            plugins: {
                legend: { position: "bottom" },
                datalabels: {
                    color: "#ffffff",
                    font: { size: 18, weight: "bold" },
                    formatter: (value) => officeTotal === 0 ? "0%" : (value / officeTotal * 100).toFixed(1) + "%"
                }
            }
        }
    });

    // Bar chart Production per bulan (tetap manual karena data historis)
    new Chart(document.getElementById("plantBar"), {
        type: "bar",
        data: {
            labels: ["APR", "MEI", "JUN", "JUL"],
            datasets: [{ data: [20, 17, 13, 9], backgroundColor: "#3b82b8", borderRadius: 14 }]
        },
        options: {
            plugins: {
                datalabels: {
                    anchor: "end", align: "top", color: "#000", font: { weight: "bold" },
                    formatter: (value) => ((value / (20 + 17 + 13 + 9)) * 100).toFixed(0) + "%"
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    // Bar chart NonProduction per bulan (tetap manual karena data historis)
    new Chart(document.getElementById("officeBar"), {
        type: "bar",
        data: {
            labels: ["APR", "MEI", "JUN", "JUL"],
            datasets: [{ data: [15, 12, 9, 6], backgroundColor: "#24557a", borderRadius: 14 }]
        },
        options: {
            plugins: {
                datalabels: {
                    anchor: "end", align: "top", color: "#000", font: { weight: "bold" },
                    formatter: (value) => ((value / (15 + 12 + 9 + 6)) * 100).toFixed(0) + "%"
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    // ============================================================
    // PENCAPAIAN 2026 — dihitung dari data real
    // ============================================================

    const totalSubmitVal  = plantSubmit + officeSubmit;
    const totalTargetVal  = plantTotal + officeTotal;
    const persenPencapaian = totalTargetVal === 0 ? "0.0" : (totalSubmitVal / totalTargetVal * 100).toFixed(1);

    const pencapaianEl = document.getElementById("pencapaian2026");
    if (pencapaianEl) pencapaianEl.innerText = ` ${persenPencapaian}%`;

});