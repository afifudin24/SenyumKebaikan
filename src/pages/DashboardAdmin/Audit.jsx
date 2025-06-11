import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Audit = () => {
  const [dataAudit, setDataAudit] = useState([
    {
      namadonatur: "Aulia Rahma",
      donasi: "Rp200.000",
      campaign: "Bantu Biaya Sekolah Anak Yatim",
      kategori: "dana",
      status: "terverifikasi",
      tanggal: "2025-06-01",
      idtransaksi: "TXN1001",
    },
    {
      namadonatur: "Bayu Nugroho",
      donasi: "Beras 10kg",
      campaign: "Paket Sembako Ramadhan",
      kategori: "barang",
      status: "terverifikasi",
      tanggal: "2025-06-02",
      idtransaksi: "TXN1002",
    },
    {
      namadonatur: "Citra Lestari",
      donasi: "Rp500.000",
      campaign: "Bantu Korban Banjir",
      kategori: "dana",
      status: "pending",
      tanggal: "2025-06-03",
      idtransaksi: "TXN1003",
    },
    {
      namadonatur: "Dedi Setiawan",
      donasi: "Pakaian layak pakai",
      campaign: "Donasi untuk Pengungsi",
      kategori: "barang",
      status: "terverifikasi",
      tanggal: "2025-06-04",
      idtransaksi: "TXN1004",
    },
    {
      namadonatur: "Erna Sari",
      donasi: "Rp1.000.000",
      campaign: "Pembangunan Masjid",
      kategori: "dana",
      status: "terverifikasi",
      tanggal: "2025-06-05",
      idtransaksi: "TXN1005",
    },
    {
      namadonatur: "Fadli Ahmad",
      donasi: "BTC 0.002",
      campaign: "Digital Charity for Palestine",
      kategori: "dana",
      status: "pending",
      tanggal: "2025-06-06",
      idtransaksi: "TXN1006",
    },
    {
      namadonatur: "Gita Maulida",
      donasi: "Selimut dan bantal",
      campaign: "Musim Dingin untuk Pengungsi",
      kategori: "barang",
      status: "terverifikasi",
      tanggal: "2025-06-07",
      idtransaksi: "TXN1007",
    },
    {
      namadonatur: "Hendra Wijaya",
      donasi: "Rp750.000",
      campaign: "Beasiswa Anak Asuh",
      kategori: "dana",
      status: "terverifikasi",
      tanggal: "2025-06-08",
      idtransaksi: "TXN1008",
    },
    {
      namadonatur: "Indah Pertiwi",
      donasi: "Mainan anak",
      campaign: "Kado Lebaran untuk Yatim",
      kategori: "barang",
      status: "pending",
      tanggal: "2025-06-09",
      idtransaksi: "TXN1009",
    },
    {
      namadonatur: "Joko Susilo",
      donasi: "Rp300.000",
      campaign: "Pengadaan Al-Qur'an",
      kategori: "dana",
      status: "terverifikasi",
      tanggal: "2025-06-10",
      idtransaksi: "TXN1010",
    },
    {
      namadonatur: "Kirana Ayu",
      donasi: "Kursi roda",
      campaign: "Bantu Lansia dan Difabel",
      kategori: "barang",
      status: "terverifikasi",
      tanggal: "2025-06-11",
      idtransaksi: "TXN1011",
    },
    {
      namadonatur: "Lukman Hakim",
      donasi: "Rp150.000",
      campaign: "Santunan Dhuafa",
      kategori: "dana",
      status: "pending",
      tanggal: "2025-06-12",
      idtransaksi: "TXN1012",
    },
    {
      namadonatur: "Melati Nur",
      donasi: "Obat-obatan",
      campaign: "Donasi Kesehatan",
      kategori: "barang",
      status: "terverifikasi",
      tanggal: "2025-06-13",
      idtransaksi: "TXN1013",
    },
    {
      namadonatur: "Nanda Pratama",
      donasi: "Rp2.000.000",
      campaign: "Bantu Korban Gempa",
      kategori: "dana",
      status: "terverifikasi",
      tanggal: "2025-06-14",
      idtransaksi: "TXN1014",
    },
    {
      namadonatur: "Oktaviani Putri",
      donasi: "Laptop bekas",
      campaign: "Perlengkapan Belajar Yatim",
      kategori: "barang",
      status: "pending",
      tanggal: "2025-06-15",
      idtransaksi: "TXN1015",
    },
    {
      namadonatur: "Putra Mahendra",
      donasi: "ETH 0.01",
      campaign: "Crypto untuk Kebaikan",
      kategori: "dana",
      status: "terverifikasi",
      tanggal: "2025-06-16",
      idtransaksi: "TXN1016",
    },
    {
      namadonatur: "Qori Azzahra",
      donasi: "Alat tulis sekolah",
      campaign: "Bantu Peralatan Sekolah",
      kategori: "barang",
      status: "terverifikasi",
      tanggal: "2025-06-17",
      idtransaksi: "TXN1017",
    },
    {
      namadonatur: "Rizki Hidayat",
      donasi: "Rp100.000",
      campaign: "Makan Gratis Jumat Berkah",
      kategori: "dana",
      status: "terverifikasi",
      tanggal: "2025-06-18",
      idtransaksi: "TXN1018",
    },
    {
      namadonatur: "Sari Melinda",
      donasi: "Sepatu layak pakai",
      campaign: "Donasi Keperluan Sekolah",
      kategori: "barang",
      status: "pending",
      tanggal: "2025-06-19",
      idtransaksi: "TXN1019",
    },
    {
      namadonatur: "Taufik Hidayat",
      donasi: "Rp1.500.000",
      campaign: "Bantu Operasi Anak",
      kategori: "dana",
      status: "terverifikasi",
      tanggal: "2025-06-20",
      idtransaksi: "TXN1020",
    },
  ]);
  const [filteredDataAudit, setFilteredDataAudit] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Saat pertama kali load, filteredCampaigns = semua campaigns
  useEffect(() => {
    setFilteredDataAudit(dataAudit);
  }, [dataAudit]);
 const handleSearch = (e) => {
  const keyword = e.target.value.toLowerCase();
  setSearchTerm(keyword);
  setCurrentPage(1); // Reset ke halaman pertama saat pencarian

  const filtered = dataAudit.filter((item) =>
    item.namadonatur.toLowerCase().includes(keyword) ||
    item.tanggal.toLowerCase().includes(keyword) ||
    item.status.toLowerCase().includes(keyword) ||
    item.idtransaksi.toLowerCase().includes(keyword)
  );

  console.log(filtered);
  setFilteredDataAudit(filtered);
};
  const totalPages = Math.ceil(filteredDataAudit.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredDataAudit.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedRow(null); // Tutup detail saat ganti halaman
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 font-primary text-primary ">
          Data Audit
        </h1>
        <div className="overflow-x-auto mt-4 rounded-lg  overflow-hidden">
          <div className="flex justify-end my-5">
            <div className="relative w-full max-w-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                onChange={handleSearch}
                className="pl-10 border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Cari Audit"
              />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">

          <table className="min-w-full text-left bg-white rounded shadow border-gray-400 border roounded-4xl ">
            <thead className="bg-primary text-left overflow-hidden  text-white p-2 rounded-b-4xl">
              <tr className="rounded-b-4xl bg-primary">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Nama Donatur</th>
                <th className="py-2 px-4 ">Jumlah Donasi</th>
                <th className="py-2 px-4 ">Status</th>
                <th className="py-2 px-4 ">Tanggal</th>
                <th className="py-2 px-4 ">Detail</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {currentItems.map((audit, index) => (
                <React.Fragment key={audit.idtransaksi}>
                  <tr className="">
                    <td className="py-2 px-4">{audit.idtransaksi}</td>
                    <td className="py-2 px-4">{audit.namadonatur}</td>
                    <td className="py-2 px-4 capitalize">{audit.donasi}</td>
                    <td className="py-2 px-4">
                      {audit.status === "terverifikasi" ? (
                          <span className="text-green-500">Terverifikasi</span>
                        ) : (
                            <span className="text-red-500">Pending</span>
                        )}
                    </td>
                    <td className="py-2 px-4">{audit.tanggal}</td>
                    <td>
                      <div className=" ">
                        <Link
                          to={"/audit/detailaudit"}
                          state={audit}
                          className="flex gap-2 font-light items-center"
                          >
                          <p>Lihat Detail</p>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
                >
                {i + 1}
              </button>
            ))}
          </div>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Audit;
