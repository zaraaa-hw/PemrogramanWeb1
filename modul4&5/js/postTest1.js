const hitungGaji = (e) => {
    e.preventDefault();
    const gol = document.getElementById("gol").value;
    const anak = parseInt(document.getElementById("anak").value || 0);

    const detailPerhitungan = [
        {
            golongan: "I",
            gajiPokok: 250000,
            persenTunjangan: 5,
        },
        {
            golongan: "II",
            gajiPokok: 300000,
            persenTunjangan: 10,
        },
        {
            golongan: "III",
            gajiPokok: 350000,
            persenTunjangan: 15,
        },
    ];

    const syarat = detailPerhitungan.find((fil) => {
        return fil.golongan === gol;
    });

    let gajiPokok = 0;
    let tunjangan = 0;
    let gajiBersih = 0;

    gajiPokok += syarat.gajiPokok;
    tunjangan += (anak * syarat.gajiPokok) * syarat.persenTunjangan / 100;
    gajiBersih += gajiPokok + tunjangan;

    document.getElementById("gapok").value = gajiPokok;
    document.getElementById("tunjangan").value = tunjangan;
    document.getElementById("gaji").value = gajiBersih;
}
