const syarat = [
    { kode: "B001", nama: "Buku", harga: 5000 },
    { kode: "B002", nama: "Penggaris", harga: 1500 },
    { kode: "B003", nama: "Puplen", harga: 2000 },
  ];
  
  // fungsi perhitungan
  const fungsiHitungPotongan = (persenPotongan, jumlahBayar) => {
    return (jumlahBayar * persenPotongan) / 100;
  };
  
  const fungsiTotalBayar = (jumlahBayar, potongan) => {
    return jumlahBayar - potongan;
  };
  
  const fungsiJumlahBayar = (harga, jumlahBeli) => {
    return Number(harga) * Number(jumlahBeli);
  };
  
  // Data akhir
  let barangPilihan = {
    kodeBarang: "",
    namaBarang: "",
    hargaBarang: 0,
    jumlahBeli: 0,
    persenPotongan: 0,
    jumlahBayar: 0,
    potongan: 0,
    totalBayar: 0,
  };
  
  const handleTampilkan = (e) => {
    e.preventDefault();
    let nota = document.querySelector(".notaPenjualan");
    nota.innerHTML = `
      <table>
        <thead>
          <tr>
            <th colspan="3" style="text-align: left; font-size: 25px;">Nota Penjualan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kode Barang</td>
            <td>=</td>
            <td>${barangPilihan.kodeBarang}</td>
          </tr>
          <tr>
            <td>Nama Barang</td>
            <td>=</td>
            <td>${barangPilihan.namaBarang}</td>
          </tr>
          <tr>
            <td>Harga Barang</td>
            <td>=</td>
            <td>${barangPilihan.hargaBarang}</td>
          </tr>
          <tr>
            <td>Jumlah beli</td>
            <td>=</td>
            <td>${barangPilihan.jumlahBeli}</td>
          </tr>
          <tr>
            <td colspan="3" style="border: 1px dashed black;"></td>
          </tr>
          <tr>
            <td>Jumlah Bayar</td>
            <td>=</td>
            <td>${barangPilihan.jumlahBayar}</td>
          </tr>
          <tr>
            <td>Potongan</td>
            <td>=</td>
            <td>${barangPilihan.potongan}</td>
          </tr>
          <tr>
            <td colspan="3">=======================</td>
          </tr>
          <tr>
            <td>Total Bayar</td>
            <td>=</td>
            <td>${barangPilihan.totalBayar}</td>
          </tr>
        </tbody>
      </table>
    `;
  };
  
  const handleJumlahBeli = (e) => {
    const inputJumlah = e.target.value;
    let persenPotongan = 0;
    if (inputJumlah <= 10) {
      persenPotongan = 5;
    } else if (inputJumlah >= 11 && inputJumlah <= 20) {
      persenPotongan = 10;
    } else if (inputJumlah >= 21) {
      persenPotongan = 15;
    }
  
    const jumlahBayar = fungsiJumlahBayar(barangPilihan.hargaBarang, inputJumlah);
    const potongan = fungsiHitungPotongan(persenPotongan, jumlahBayar);
    const totalBayar = fungsiTotalBayar(jumlahBayar, potongan);
  
    barangPilihan = {
      ...barangPilihan,
      jumlahBeli: Number(e.target.value),
      jumlahBayar,
      persenPotongan,
      potongan,
      totalBayar,
    };
  
    document.getElementById("jumlahBayar").value = jumlahBayar;
    document.getElementById("potongan").value = persenPotongan;
    document.getElementById("jumlahPotongan").value = potongan;
    document.getElementById("totalBayar").value = totalBayar;
  };
  
  const handleKodeBarang = (e) => {
    const item = syarat.find((fil) => {
      return fil.kode === e.target.value;
    });
  
    document.getElementById("namaBarang").value = item.nama;
    document.getElementById("hargaBarang").value = item.harga;
  
    barangPilihan = {
      ...barangPilihan,
      kodeBarang: item.kode,
      namaBarang: item.nama,
      hargaBarang: item.harga,
    };
  };
  