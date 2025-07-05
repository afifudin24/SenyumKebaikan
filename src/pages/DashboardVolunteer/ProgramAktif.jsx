import React from "react"
import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout"
import { useState } from "react"
const ProgramAktif = () => {
     const [user, setUser] = useState(() => {
            const savedUser = localStorage.getItem('user');
            return savedUser ? JSON.parse(savedUser) : null;
          }) 
    return (
        <DashboardVolunteerLayout>
                <ManajemenDonasiAktif />
        </DashboardVolunteerLayout>
    )
}
const ManajemenDonasiAktif = () => {
  return (
    <div className="p-4 md:p-8">
      {/* Judul */}
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
          Manajemen program donasi aktif
        </h1>
        <p className="text-gray-500 text-sm">
          Update real-time progres penyaluran bantuan
        </p>
      </div>
      {/* Card Program */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {/* Card 1 */}
        <div className="bg-[#2d4a48] h-full text-white rounded-lg p-4 w-[300px] shadow-md">
          <h3 className="text-sm font-medium text-green-200">BENCANA ALAM</h3>
          <h2 className="text-lg font-bold my-1">
            Banjir bandang di pinggiran kota METROPOLITAN
          </h2>
          <div className="text-sm my-3">
            <div className="flex justify-between">
              <span>Target dana</span>
              <span>60%</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Rp 60.000.000</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Dana Terkumpul</span>
              <span>Rp 30.000.000</span>
            </div>
          </div>
          
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg w-[300px] shadow-sm">
          <div className="text-sm flex flex-col justify-between h-full my-3">
            <div className="p-4">
              <p>Total Dana Masuk</p>
              <p className="font-semibold text-primary text-2xl">Rp 7.000.000</p>
            </div>
            <div className="w-full text-white bg-primary p-4 rounded-lg">
              <p>Total Dana Keluar</p>
              <p className="font-semibold text-2xl  ">Rp 3.000.000</p>
            </div>
         
          </div>
        
        </div>
      </div>
      {/* Tabel Donatur */}
      <div className="bg-white  overflow-x-auto">
        <TabelDonatur />
        <div className="my-20">

        </div>
        <TablePengeluaran />
      </div>
      {/* Tombol Update */}
    
    </div>
  );
};
const TabelDonatur = () => {
  // Data dummy berbeda-beda
  const [donaturData] = useState([
    { nama: "Maman", nominal: "Rp. 100.000", tanggal: "02/07/2024" },
    { nama: "Ayu", nominal: "Rp. 250.000", tanggal: "03/07/2024" },
    { nama: "Rudi", nominal: "Rp. 500.000", tanggal: "04/07/2024" },
    { nama: "Dina", nominal: "Rp. 150.000", tanggal: "05/07/2024" },
    { nama: "Joko", nominal: "Rp. 300.000", tanggal: "06/07/2024" },
    { nama: "Sari", nominal: "Rp. 200.000", tanggal: "07/07/2024" },
    { nama: "Wawan", nominal: "Rp. 400.000", tanggal: "08/07/2024" },
    { nama: "Nina", nominal: "Rp. 180.000", tanggal: "09/07/2024" },
    { nama: "Budi", nominal: "Rp. 700.000", tanggal: "10/07/2024" },
    { nama: "Tari", nominal: "Rp. 230.000", tanggal: "11/07/2024" },
    { nama: "Yusuf", nominal: "Rp. 330.000", tanggal: "12/07/2024" },
    { nama: "Lina", nominal: "Rp. 210.000", tanggal: "13/07/2024" },
    { nama: "Arif", nominal: "Rp. 310.000", tanggal: "14/07/2024" },
    { nama: "Rina", nominal: "Rp. 450.000", tanggal: "15/07/2024" },
    { nama: "Bayu", nominal: "Rp. 120.000", tanggal: "16/07/2024" },
    { nama: "Eka", nominal: "Rp. 520.000", tanggal: "17/07/2024" },
    { nama: "Doni", nominal: "Rp. 270.000", tanggal: "18/07/2024" },
    { nama: "Hani", nominal: "Rp. 130.000", tanggal: "19/07/2024" },
    { nama: "Rama", nominal: "Rp. 600.000", tanggal: "20/07/2024" },
    { nama: "Putri", nominal: "Rp. 480.000", tanggal: "21/07/2024" },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const totalPages = Math.ceil(donaturData.length / dataPerPage);
  const indexOfLast = currentPage * dataPerPage;
  const indexOfFirst = indexOfLast - dataPerPage;
  const currentData = donaturData.slice(indexOfFirst, indexOfLast);
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="min-w-full text-sm text-left text-primary">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Nama Donatur</th>
            <th className="px-4 py-3">Nominal</th>
            <th className="px-4 py-3">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2">{item.nama}</td>
              <td className="px-4 py-2">{item.nominal}</td>
              <td className="px-4 py-2">{item.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 py-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded border hover:bg-gray-100 disabled:opacity-50"
        >
          {'<'}
        </button>
        <span className="text-sm text-gray-600">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded border hover:bg-gray-100 disabled:opacity-50"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

const TablePengeluaran = () => {
  const [danakeluar, setDanaKeluar] = useState([
    {
      tanggal: "2025-05-22",
      keterangan: "Pembelian 50 paket seragam sekolah",
      jumlah: -2000000,
      txHash: "0x8b9c123...d4f",
      bukti: "bukti_seragam_1.jpg"
    },
    {
      tanggal: "2025-05-20",
      keterangan: "Pembelian alat tulis siswa SD",
      jumlah: -1500000,
      txHash: "0x8b9c234...d4f",
      bukti: "bukti_alattulis_2.jpg"
    },
    {
      tanggal: "2025-05-18",
      keterangan: "Pembayaran honor guru relawan",
      jumlah: -3000000,
      txHash: "0x8b9c345...d4f",
      bukti: "bukti_honor_3.jpg"
    },
    {
      tanggal: "2025-05-17",
      keterangan: "Pembelian bahan makanan untuk dapur umum",
      jumlah: -2500000,
      txHash: "0x8b9c456...d4f",
      bukti: "bukti_makanan_4.jpg"
    },
    {
      tanggal: "2025-05-16",
      keterangan: "Transportasi distribusi sembako",
      jumlah: -1000000,
      txHash: "0x8b9c567...d4f",
      bukti: "bukti_transport_5.jpg"
    },
    {
      tanggal: "2025-05-15",
      keterangan: "Pembuatan spanduk dan media kampanye",
      jumlah: -500000,
      txHash: "0x8b9c678...d4f",
      bukti: "bukti_spanduk_6.jpg"
    },
    {
      tanggal: "2025-05-14",
      keterangan: "Pembelian alat kebersihan",
      jumlah: -800000,
      txHash: "0x8b9c789...d4f",
      bukti: "bukti_kebersihan_7.jpg"
    },
    {
      tanggal: "2025-05-13",
      keterangan: "Sewa tempat kegiatan sosial",
      jumlah: -1200000,
      txHash: "0x8b9c890...d4f",
      bukti: "bukti_sewa_8.jpg"
    },
    {
      tanggal: "2025-05-12",
      keterangan: "Pembelian paket buka puasa bersama",
      jumlah: -2200000,
      txHash: "0x8b9c901...d4f",
      bukti: "bukti_bukapuasa_9.jpg"
    },
    {
      tanggal: "2025-05-11",
      keterangan: "Cetak brosur dan flyer donasi",
      jumlah: -600000,
      txHash: "0x8b9c012...d4f",
      bukti: "bukti_brosur_10.jpg"
    },
    {
      tanggal: "2025-05-10",
      keterangan: "Perbaikan mobil operasional",
      jumlah: -1700000,
      txHash: "0x8b9c131...d4f",
      bukti: "bukti_mobil_11.jpg"
    },
    {
      tanggal: "2025-05-09",
      keterangan: "Pembelian perlengkapan medis",
      jumlah: -2100000,
      txHash: "0x8b9c142...d4f",
      bukti: "bukti_medis_12.jpg"
    },
    {
      tanggal: "2025-05-08",
      keterangan: "Donasi langsung ke panti asuhan",
      jumlah: -5000000,
      txHash: "0x8b9c153...d4f",
      bukti: "bukti_panti_13.jpg"
    },
    {
      tanggal: "2025-05-07",
      keterangan: "Operasional penggalangan dana",
      jumlah: -1300000,
      txHash: "0x8b9c164...d4f",
      bukti: "bukti_operasional_14.jpg"
    },
    {
      tanggal: "2025-05-06",
      keterangan: "Cetak kartu ucapan terima kasih",
      jumlah: -450000,
      txHash: "0x8b9c175...d4f",
      bukti: "bukti_kartu_15.jpg"
    },
    {
      tanggal: "2025-05-05",
      keterangan: "Pelatihan keterampilan remaja",
      jumlah: -2700000,
      txHash: "0x8b9c186...d4f",
      bukti: "bukti_pelatihan_16.jpg"
    },
    {
      tanggal: "2025-05-04",
      keterangan: "Beli kebutuhan dapur warga",
      jumlah: -1800000,
      txHash: "0x8b9c197...d4f",
      bukti: "bukti_dapur_17.jpg"
    },
    {
      tanggal: "2025-05-03",
      keterangan: "Santunan anak yatim",
      jumlah: -3500000,
      txHash: "0x8b9c208...d4f",
      bukti: "bukti_santunan_18.jpg"
    },
    {
      tanggal: "2025-05-02",
      keterangan: "Penyuluhan kesehatan masyarakat",
      jumlah: -1600000,
      txHash: "0x8b9c219...d4f",
      bukti: "bukti_penyuluhan_19.jpg"
    },
    {
      tanggal: "2025-05-01",
      keterangan: "Pengadaan alat bantu difabel",
      jumlah: -3000000,
      txHash: "0x8b9c220...d4f",
      bukti: "bukti_difabel_20.jpg"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10; // Jumlah item per halaman
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = danakeluar.slice(startIndex, endIndex);

  const totalPages = Math.ceil(danakeluar.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className=" mt-2   bg-white rounded-lg shadow-md overflow-x-auto">
    
      <table className="min-w-full text-sm text-left shadow-md text-primary">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-4 py-2">Tanggal</th>
            <th className="px-4 py-2">Keterangan</th>
            <th className="px-4 py-2">Jumlah</th>
            <th className="px-4 py-2">Tx Hash</th>
            <th className="px-4 py-2">Bukti</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{item.tanggal}</td>
              <td className="px-4 py-2">{item.keterangan}</td>
              <td className="px-4 py-2">{item.jumlah}</td>
              <td className="px-4 py-2">{item.txHash}</td>
              <td className="px-4 py-2">
                <a className="text-blue-500 underline hover:text-blue-600" href="/">
                {item.bukti}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-2 py-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded border hover:bg-gray-100 disabled:opacity-50"
        >
          {'<'}
        </button>
        <span className="text-sm text-gray-600">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded border hover:bg-gray-100 disabled:opacity-50"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}
export default ProgramAktif;