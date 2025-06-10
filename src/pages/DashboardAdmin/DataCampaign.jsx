import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const dummyCampaigns = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  judul: `Program Sosial ${index + 1}`,
  kategori: index % 2 === 0 ? "Pendidikan" : "Kesehatan",
  targetDana: 10000000 + index * 500000,
  tanggalMulai: "2025-06-01",
  tanggalSelesai: "2025-08-01",
  noTelepon: `08${Math.floor(1000000000 + Math.random() * 900000000)}`
}));

const DataCampaign = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: "CAMP001",
      namaprogram: "Bantuan Pangan Lebaran",
      Jenis: "barang",
      target: 1000, // Angka saja (misal: 1000 paket)
      tercapai: 850, // Angka saja
      status_distribusi: "Selesai",
      status: "Aktif",
      rekdistribusi: "BNI Syariah - 1234567890",
      tanggal_mulai: "2024-03-01", // Tanggal mulai
      tanggal_selesai: "2024-03-31", // Tanggal selesai
      donatur: [
        { nama: "Andi Susanto", tanggal: "2024-03-10", nominal: 500000, email: "andi.s@example.com" },
        { nama: "Budi Santoso", tanggal: "2024-03-12", nominal: 250000, email: "budi.s@example.com" },
        { nama: "Citra Dewi", tanggal: "2024-03-15", nominal: 1000000, email: "citra.d@example.com" },
      ],
    },
    {
      id: "CAMP002",
      namaprogram: "Beasiswa Anak Yatim",
      Jenis: "dana",
      target: 75000000,
      tercapai: 62000000,
      status_distribusi: "Berlangsung",
      status: "Aktif",
      rekdistribusi: "Bank Mandiri - 0987654321",
      tanggal_mulai: "2024-04-01",
      tanggal_selesai: "2024-09-30",
      donatur: [
        { nama: "Dewi Lestari", tanggal: "2024-04-01", nominal: 750000, email: "dewi.l@example.com" },
        { nama: "Eko Pratama", tanggal: "2024-04-05", nominal: 300000, email: "eko.p@example.com" },
      ],
    },
    {
      id: "CAMP003",
      namaprogram: "Pembangunan Mushola",
      Jenis: "dana",
      target: 200000000,
      tercapai: 15000000,
      status_distribusi: "Belum Dimulai",
      status: "Aktif",
      rekdistribusi: "BCA - 1122334455",
      tanggal_mulai: "2024-07-01",
      tanggal_selesai: "2024-12-31",
      donatur: [
        { nama: "Fajar Nugraha", tanggal: "2024-05-20", nominal: 5000000, email: "fajar.n@example.com" },
      ],
    },
    {
      id: "CAMP004",
      namaprogram: "Sembako untuk Dhuafa",
      Jenis: "barang",
      target: 500, // Angka saja
      tercapai: 500, // Angka saja
      status_distribusi: "Selesai",
      status: "Non-Aktif",
      rekdistribusi: "BRI - 6789012345",
      tanggal_mulai: "2023-11-01",
      tanggal_selesai: "2023-12-15",
      donatur: [
        { nama: "Gita Permata", tanggal: "2023-12-01", nominal: 200000, email: "gita.p@example.com" },
        { nama: "Hadi Kusumo", tanggal: "2023-12-05", nominal: 150000, email: "hadi.k@example.com" },
        { nama: "Indah Sari", tanggal: "2023-12-08", nominal: 400000, email: "indah.s@example.com" },
      ],
    },
    {
      id: "CAMP005",
      namaprogram: "Pengadaan Buku Perpustakaan",
      Jenis: "barang",
      target: 1000, // Angka saja
      tercapai: 750, // Angka saja
      status_distribusi: "Berlangsung",
      status: "Aktif",
      rekdistribusi: "CIMB Niaga - 2345678901",
      tanggal_mulai: "2024-05-15",
      tanggal_selesai: "2024-08-31",
      donatur: [
        { nama: "Joko Santoso", tanggal: "2024-06-01", nominal: 100000, email: "joko.s@example.com" },
        { nama: "Kartika Putri", tanggal: "2024-06-03", nominal: 50000, email: "kartika.p@example.com" },
      ],
    },
    {
      id: "CAMP006",
      namaprogram: "Ambulans Gratis",
      Jenis: "dana",
      target: 150000000,
      tercapai: 0,
      status_distribusi: "Belum Dimulai",
      status: "Aktif",
      rekdistribusi: "BTN - 3456789012",
      tanggal_mulai: "2024-09-01",
      tanggal_selesai: "2025-02-28",
      donatur: [],
    },
    {
      id: "CAMP007",
      namaprogram: "Renovasi Sekolah Rusak",
      Jenis: "dana",
      target: 300000000,
      tercapai: 310000000,
      status_distribusi: "Selesai",
      status: "Aktif",
      rekdistribusi: "Danamon - 4567890123",
      tanggal_mulai: "2024-01-01",
      tanggal_selesai: "2024-04-30",
      donatur: [
        { nama: "Linda Wijaya", tanggal: "2024-01-15", nominal: 10000000, email: "linda.w@example.com" },
        { nama: "Martin Purnomo", tanggal: "2024-01-20", nominal: 5000000, email: "martin.p@example.com" },
      ],
    },
    {
      id: "CAMP008",
      namaprogram: "Pengadaan Sumur Bor",
      Jenis: "dana",
      target: 80000000,
      tercapai: 45000000,
      status_distribusi: "Berlangsung",
      status: "Aktif",
      rekdistribusi: "Permata Bank - 5678901234",
      tanggal_mulai: "2024-05-01",
      tanggal_selesai: "2024-08-31",
      donatur: [
        { nama: "Nia Ramadhani", tanggal: "2024-05-10", nominal: 2000000, email: "nia.r@example.com" },
      ],
    },
    {
      id: "CAMP009",
      namaprogram: "Bantuan Korban Bencana Alam",
      Jenis: "barang",
      target: 2000, // Angka saja
      tercapai: 2100, // Angka saja
      status_distribusi: "Selesai",
      status: "Non-Aktif",
      rekdistribusi: "BSI - 67890123456",
      tanggal_mulai: "2023-10-01",
      tanggal_selesai: "2023-11-30",
      donatur: [
        { nama: "Olivia Wijaya", tanggal: "2023-11-01", nominal: 1000000, email: "olivia.w@example.com" },
        { nama: "Putra Jaya", tanggal: "2023-11-03", nominal: 750000, email: "putra.j@example.com" },
        { nama: "Qori Amelia", tanggal: "2023-11-05", nominal: 500000, email: "qori.a@example.com" },
      ],
    },
    {
      id: "CAMP010",
      namaprogram: "Pelatihan Keterampilan Disabilitas",
      Jenis: "dana",
      target: 60000000,
      tercapai: 25000000,
      status_distribusi: "Berlangsung",
      status: "Aktif",
      rekdistribusi: "OCBC NISP - 7890123456",
      tanggal_mulai: "2024-06-01",
      tanggal_selesai: "2024-11-30",
      donatur: [
        { nama: "Rina Wijayanti", tanggal: "2024-06-08", nominal: 300000, email: "rina.w@example.com" },
      ],
    },
    {
      id: "CAMP011",
      namaprogram: "Program Gizi Balita",
      Jenis: "barang",
      target: 500, // Angka saja
      tercapai: 480, // Angka saja
      status_distribusi: "Selesai",
      status: "Aktif",
      rekdistribusi: "BTN Syariah - 8901234567",
      tanggal_mulai: "2024-01-15",
      tanggal_selesai: "2024-03-15",
      donatur: [
        { nama: "Santi Rahayu", tanggal: "2024-02-10", nominal: 150000, email: "santi.r@example.com" },
        { nama: "Taufik Hidayat", tanggal: "2024-02-12", nominal: 200000, email: "taufik.h@example.com" },
      ],
    },
    {
      id: "CAMP012",
      namaprogram: "Beasiswa Mahasiswa Kurang Mampu",
      Jenis: "dana",
      target: 90000000,
      tercapai: 0,
      status_distribusi: "Belum Dimulai",
      status: "Aktif",
      rekdistribusi: "Panin Bank - 9012345678",
      tanggal_mulai: "2024-08-01",
      tanggal_selesai: "2025-01-31",
      donatur: [],
    },
    {
      id: "CAMP013",
      namaprogram: "Rehabilitasi Rumah Tidak Layak Huni",
      Jenis: "dana",
      target: 180000000,
      tercapai: 90000000,
      status_distribusi: "Berlangsung",
      status: "Aktif",
      rekdistribusi: "Maybank - 0123456789",
      tanggal_mulai: "2024-04-15",
      tanggal_selesai: "2024-10-15",
      donatur: [
        { nama: "Umar Bakri", tanggal: "2024-05-01", nominal: 5000000, email: "umar.b@example.com" },
      ],
    },
    {
      id: "CAMP014",
      namaprogram: "Distribusi Air Bersih",
      Jenis: "barang",
      target: 100, // Angka saja
      tercapai: 105, // Angka saja
      status_distribusi: "Selesai",
      status: "Non-Aktif",
      rekdistribusi: "Bank Muamalat - 12345678901",
      tanggal_mulai: "2023-09-01",
      tanggal_selesai: "2023-11-15",
      donatur: [
        { nama: "Vina Lestari", tanggal: "2023-10-15", nominal: 300000, email: "vina.l@example.com" },
        { nama: "Wahyu Agung", tanggal: "2023-10-18", nominal: 250000, email: "wahyu.a@example.com" },
      ],
    },
    {
      id: "CAMP015",
      namaprogram: "Bantuan Modal UMKM",
      Jenis: "dana",
      target: 110000000,
      tercapai: 70000000,
      status_distribusi: "Berlangsung",
      status: "Aktif",
      rekdistribusi: "Bank Syariah Indonesia - 23456789012",
      tanggal_mulai: "2024-06-01",
      tanggal_selesai: "2024-12-31",
      donatur: [
        { nama: "Xena Adelia", tanggal: "2024-06-05", nominal: 1000000, email: "xena.a@example.com" },
      ],
    },
    {
      id: "CAMP016",
      namaprogram: "Pendirian Sanggar Belajar",
      Jenis: "dana",
      target: 130000000,
      tercapai: 0,
      status_distribusi: "Belum Dimulai",
      status: "Aktif",
      rekdistribusi: "Commonwealth Bank - 34567890123",
      tanggal_mulai: "2024-10-01",
      tanggal_selesai: "2025-03-31",
      donatur: [],
    },
    {
      id: "CAMP017",
      namaprogram: "Operasi Katarak Gratis",
      Jenis: "dana",
      target: 95000000,
      tercapai: 100000000,
      status_distribusi: "Selesai",
      status: "Aktif",
      rekdistribusi: "Bank Mega - 45678901234",
      tanggal_mulai: "2024-03-01",
      tanggal_selesai: "2024-04-15",
      donatur: [
        { nama: "Yuni Kartika", tanggal: "2024-03-20", nominal: 4000000, email: "yuni.k@example.com" },
        { nama: "Zainal Abidin", tanggal: "2024-03-22", nominal: 2000000, email: "zainal.a@example.com" },
      ],
    },
    {
      id: "CAMP018",
      namaprogram: "Pemberian Hewan Kurban",
      Jenis: "barang",
      target: 50, // Angka saja
      tercapai: 45, // Angka saja
      status_distribusi: "Berlangsung",
      status: "Aktif",
      rekdistribusi: "Bank Jabar Banten - 56789012345",
      tanggal_mulai: "2024-05-20",
      tanggal_selesai: "2024-06-30",
      donatur: [
        { nama: "Bunga Melati", tanggal: "2024-06-01", nominal: 500000, email: "bunga.m@example.com" },
      ],
    },
    {
      id: "CAMP019",
      namaprogram: "Bantuan Pendidikan Prasekolah",
      Jenis: "dana",
      target: 45000000,
      tercapai: 0,
      status_distribusi: "Belum Dimulai",
      status: "Aktif",
      rekdistribusi: "Bank Kalsel - 67890123456",
      tanggal_mulai: "2024-09-15",
      tanggal_selesai: "2025-04-30",
      donatur: [],
    },
    {
      id: "CAMP020",
      namaprogram: "Pembangunan MCK Umum",
      Jenis: "dana",
      target: 85000000,
      tercapai: 90000000,
      status_distribusi: "Selesai",
      status: "Aktif",
      rekdistribusi: "Bank Jateng - 78901234567",
      tanggal_mulai: "2024-04-01",
      tanggal_selesai: "2024-06-01",
      donatur: [
        { nama: "Dian Permata", tanggal: "2024-04-10", nominal: 1500000, email: "dian.p@example.com" },
        { nama: "Fajar Gemilang", tanggal: "2024-04-12", nominal: 1000000, email: "fajar.g@example.com" },
      ],
    },
  ]);
  const [isAddForm, setIsAddForm] = useState(false);
  
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(campaigns.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = campaigns.slice(startIndex, startIndex + itemsPerPage);
    const [newData, setNewData] = useState({
        judul: "",
        kategori: "",
        targetDana: "",
        tanggalMulai: "",
        tanggalSelesai: "",
        noTelepon: "",
      });
    

  const toggleDetail = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedRow(null); // Tutup detail saat ganti halaman
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewData(prev => ({ ...prev, [name]: value }));
      };
    
    const handleSave = () => {
          console.log(newData);
        const newCampaign = {
          id: campaigns.length + 1,
          ...newData,
          targetDana: parseInt(newData.targetDana)
        };
        setCampaigns(prev => [...prev, newCampaign]);
          setIsAddForm(false);
          toast.success("Campaign berhasil ditambahkan!");
        setNewData({
          judul: "",
          kategori: "",
          targetDana: "",
          tanggalMulai: "",
          tanggalSelesai: "",
          noTelepon: "",
        });
      };

  return (
      <DashboardLayout>
          <div className="w-11/12 md:w-9/12 mx-auto">
              
          
      <h1 className="text-2xl font-bold mb-4 text-center text-primary mt-2">
        {isAddForm ? "Tambah Campaign Baru" : "Data Campaign"}
              </h1>
              <button
          onClick={() => setIsAddForm(!isAddForm)}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          {isAddForm ? "Kembali" : "Tambah Campaign"}
        </button>
              {isAddForm && (
                  <div className="bg-white p-6 rounded shadow-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
  { label: "Judul", name: "judul" },
  { label: "Kategori", name: "kategori" },
  { label: "Target Dana", name: "targetDana" },
  { label: "Tanggal Mulai", name: "tanggalMulai" },
  { label: "Tanggal Selesai", name: "tanggalSelesai" },
  { label: "No Telepon", name: "noTelepon" },
].map((field) => (
  <div key={field.name}>
    <label className="block mb-1">{field.label}</label>
    <input
      type={
        field.name.includes("tanggal")
          ? "date"
          : field.name === "targetDana"
          ? "number"
          : "text"
      }
      name={field.name}
      value={newData[field.name]}
      onChange={handleChange}
      className="w-full border px-3 py-2 rounded"
    />
  </div>
))}

                      </div>
                      <button
                          onClick={handleSave}
                          className="mt-4 bg-primary text-white px-4 py-2 rounded"
                      >
                          Simpan Data
                      </button>
                  </div>
              )
              }
      {!isAddForm && (
        <div className="overflow-x-auto mt-4 rounded-lg  overflow-hidden">
          <table className="min-w-full text-left bg-white rounded shadow border-gray-400 border roounded-4xl ">
            <thead className="bg-primary text-left overflow-hidden  text-white p-2 rounded-b-4xl">
              <tr className="rounded-b-4xl bg-primary">
               
                <th className="py-2 px-4">Nama Program</th>
                <th className="py-2 px-4">Kategori</th>
                <th className="py-2 px-4 ">Status Distribusi</th>
                <th className="py-2 px-4 ">Status</th>
                <th className="py-2 px-4 ">Detail</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {currentItems.map((campaign, index) => (
                <React.Fragment key={campaign.id}>
                  <tr className="">
                 
                    <td className="py-2 px-4">{campaign.namaprogram}</td>
                    <td className="py-2 px-4 capitalize">{campaign.Jenis}</td>
                    <td className="py-2 px-4">{campaign.status_distribusi}</td>
                    <td className="py-2 px-4">
                      {campaign.status === "Aktif" ? (
                        <span className="text-green-500">Aktif</span>
                      ) : (
                        <span className="text-red-500">Tidak Aktif</span>
                      )}
                    </td>
                    <td>
                      <div className=" ">
                        <Link to={'/datacampaign/detailcampaign'} state={campaign} className="flex gap-2 font-light items-center">
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
              )}
              </div>
    </DashboardLayout>
  );
};

export default DataCampaign;
