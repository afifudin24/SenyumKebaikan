import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import DashboardLayout from "../../components/DashboardLayout";

const PengajuanKebutuhanSaya = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPengajuan, setSelectedPengajuan] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

const [dataPengajuanKebutuhan, setDataPengajuanKebutuhan] = useState([
  {
    namabarang: "Beras",
    kategoribarang: "Sembako",
    jumlahdibutuhkan: 10,
    alamat: "Jl. Mawar No. 1, Jakarta",
    urgensikebutuhan: "Tinggi",
    alasanbutuh: "Untuk keluarga yang terkena PHK",
  },
  {
    namabarang: "Obat demam",
    kategoribarang: "Kesehatan",
    jumlahdibutuhkan: 5,
    alamat: "Jl. Kenanga No. 2, Bandung",
    urgensikebutuhan: "Sedang",
    alasanbutuh: "Untuk pengungsi banjir",
  },
  {
    namabarang: "Mie Instan",
    kategoribarang: "Sembako",
    jumlahdibutuhkan: 20,
    alamat: "Jl. Melati No. 3, Surabaya",
    urgensikebutuhan: "Tinggi",
    alasanbutuh: "Bantuan darurat untuk warga terdampak longsor",
  },
  {
    namabarang: "Masker medis",
    kategoribarang: "Kesehatan",
    jumlahdibutuhkan: 100,
    alamat: "Jl. Anggrek No. 4, Yogyakarta",
    urgensikebutuhan: "Rendah",
    alasanbutuh: "Persiapan stok posyandu",
  },
  {
    namabarang: "Selimut",
    kategoribarang: "Pakaian",
    jumlahdibutuhkan: 30,
    alamat: "Jl. Dahlia No. 5, Medan",
    urgensikebutuhan: "Tinggi",
    alasanbutuh: "Untuk pengungsi gempa",
  },
  {
    namabarang: "Susu bayi",
    kategoribarang: "Nutrisi",
    jumlahdibutuhkan: 15,
    alamat: "Jl. Sakura No. 6, Makassar",
    urgensikebutuhan: "Tinggi",
    alasanbutuh: "Bayi tidak mendapatkan ASI",
  },
  {
    namabarang: "Air mineral",
    kategoribarang: "Minuman",
    jumlahdibutuhkan: 50,
    alamat: "Jl. Teratai No. 7, Semarang",
    urgensikebutuhan: "Sedang",
    alasanbutuh: "Kesulitan akses air bersih",
  },
  {
    namabarang: "Pakaian anak",
    kategoribarang: "Pakaian",
    jumlahdibutuhkan: 25,
    alamat: "Jl. Cemara No. 8, Balikpapan",
    urgensikebutuhan: "Sedang",
    alasanbutuh: "Banjir merusak pakaian anak-anak",
  },
  {
    namabarang: "Buku tulis",
    kategoribarang: "Alat Tulis",
    jumlahdibutuhkan: 40,
    alamat: "Jl. Flamboyan No. 9, Malang",
    urgensikebutuhan: "Rendah",
    alasanbutuh: "Untuk kegiatan belajar di pengungsian",
  },
  {
    namabarang: "Kompor portable",
    kategoribarang: "Peralatan",
    jumlahdibutuhkan: 10,
    alamat: "Jl. Bougenville No. 10, Padang",
    urgensikebutuhan: "Tinggi",
    alasanbutuh: "Dapur umum tidak memadai",
  },
  {
    namabarang: "Sabun mandi",
    kategoribarang: "Kebersihan",
    jumlahdibutuhkan: 60,
    alamat: "Jl. Angsana No. 11, Pontianak",
    urgensikebutuhan: "Sedang",
    alasanbutuh: "Kurangnya kebersihan di penampungan",
  },
  {
    namabarang: "Hand sanitizer",
    kategoribarang: "Kesehatan",
    jumlahdibutuhkan: 80,
    alamat: "Jl. Kemuning No. 12, Palembang",
    urgensikebutuhan: "Tinggi",
    alasanbutuh: "Pencegahan penyebaran penyakit",
  },
  {
    namabarang: "Tikar",
    kategoribarang: "Peralatan",
    jumlahdibutuhkan: 20,
    alamat: "Jl. Jati No. 13, Banjarmasin",
    urgensikebutuhan: "Rendah",
    alasanbutuh: "Untuk tidur di tempat evakuasi",
  },
  {
    namabarang: "Vitamin C",
    kategoribarang: "Kesehatan",
    jumlahdibutuhkan: 100,
    alamat: "Jl. Pinus No. 14, Denpasar",
    urgensikebutuhan: "Tinggi",
    alasanbutuh: "Menjaga imun pengungsi",
  },
  {
    namabarang: "Sandal jepit",
    kategoribarang: "Pakaian",
    jumlahdibutuhkan: 50,
    alamat: "Jl. Rambutan No. 15, Pekanbaru",
    urgensikebutuhan: "Sedang",
    alasanbutuh: "Kehilangan alas kaki saat banjir",
  },
  {
    namabarang: "Rokok elektrik",
    kategoribarang: "Lainnya",
    jumlahdibutuhkan: 5,
    alamat: "Jl. Belimbing No. 16, Manado",
    urgensikebutuhan: "Rendah",
    alasanbutuh: "Permintaan pribadi (tidak darurat)",
  },
  {
    namabarang: "Popok bayi",
    kategoribarang: "Nutrisi",
    jumlahdibutuhkan: 100,
    alamat: "Jl. Sawo No. 17, Batam",
    urgensikebutuhan: "Tinggi",
    alasanbutuh: "Bayi tidak punya perlengkapan",
  },
  {
    namabarang: "Senter",
    kategoribarang: "Peralatan",
    jumlahdibutuhkan: 30,
    alamat: "Jl. Duku No. 18, Banda Aceh",
    urgensikebutuhan: "Tinggi",
    alasanbutuh: "Pemadaman listrik di pengungsian",
  },
  {
    namabarang: "Baterai AA",
    kategoribarang: "Peralatan",
    jumlahdibutuhkan: 100,
    alamat: "Jl. Durian No. 19, Serang",
    urgensikebutuhan: "Sedang",
    alasanbutuh: "Untuk alat penerangan",
  },
  {
    namabarang: "Jas hujan",
    kategoribarang: "Pakaian",
    jumlahdibutuhkan: 25,
    alamat: "Jl. Mangga No. 20, Tangerang",
    urgensikebutuhan: "Sedang",
    alasanbutuh: "Untuk relawan lapangan",
  }
]);

  useEffect(() => {
    setFilteredData(dataPengajuanKebutuhan);
  }, [dataPengajuanKebutuhan]);

  const handleShowModal = (pengajuan) => {
    setSelectedPengajuan(pengajuan);
    setShowModal(true);
  };

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);
    setCurrentPage(1);
    const filtered = dataPengajuanKebutuhan.filter(
      (item) =>
       
        item.namabarang.toLowerCase().includes(keyword)
    );
    setFilteredData(filtered);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 text-primary">
          Pengajuan Kebutuhan
        </h1>

        <div className="flex justify-end mb-4">
          <input
            type="text"
            onChange={handleSearch}
            className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Cari berdasarkan email atau nama barang"
          />
        </div>

        <ModalDetailPengajuan
          showModal={showModal}
          setShowModal={setShowModal}
          selectedPengajuan={selectedPengajuan}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
            >
              <p className="text-sm font-semibold mb-1 capitalize">
                {item.namabarang}
              </p>
              <p className="text-xs mb-1 text-gray-600">
                Kategori: {item.kategoribarang}
              </p>
              <p className="text-xs mb-1 text-gray-600">
                Jumlah: {item.jumlahdibutuhkan}
              </p>
              <p className="text-xs mb-1 text-gray-600">Email: {item.email}</p>

              <button
                onClick={() => handleShowModal(item)}
                className="text-primary mt-2 text-sm flex items-center gap-2"
              >
                Lihat Detail <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2">
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
    </DashboardLayout>
  );
};

const ModalDetailPengajuan = ({ showModal, setShowModal, selectedPengajuan }) => {
  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
        showModal ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      } bg-white border border-gray-400 w-[90%] md:w-1/2 rounded-xl shadow-lg`}
    >
      <div className="relative p-6 bg-secondary rounded-t-xl text-primary">
        <h4 className="text-lg font-semibold">Detail Pengajuan Kebutuhan</h4>
        <FontAwesomeIcon
          onClick={() => setShowModal(false)}
          icon={faTimes}
          className="absolute top-4 right-4 cursor-pointer text-primary"
        />
      </div>
      <div className="p-6 space-y-2 text-sm text-gray-700">
        <p>Barang: {selectedPengajuan?.namabarang || "-"}</p>
        <p>Kategori: {selectedPengajuan?.kategoribarang || "-"}</p>
        <p>Jumlah: {selectedPengajuan?.jumlahdibutuhkan || "-"}</p>
        <p>Email: {selectedPengajuan?.email || "-"}</p>
        <p>Alamat: {selectedPengajuan?.alamat || "-"}</p>
        <p>Urgensi: {selectedPengajuan?.urgensikebutuhan || "-"}</p>
        <p>Alasan: {selectedPengajuan?.alasanbutuh || "-"}</p>
      </div>
    </div>
  );
};

export default PengajuanKebutuhanSaya;
