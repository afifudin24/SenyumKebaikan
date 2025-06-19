import React, { useState, useEffect } from "react";
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
      target: 1000,
      tercapai: 850,
      status: "Aktif",
      rekdistribusi: "BNI Syariah - 1234567890",
      tanggal_mulai: "2024-03-01",
      tanggal_selesai: "2024-03-31",
      distribusi: {
        status: "Selesai",
        tanggal_distribusi: "2024-04-02",
        bukti: "bukti_camp001.jpg",
        konfirmasi_distribusi: "Dikonfirmasi"
      },
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
      status: "Aktif",
      rekdistribusi: "Bank Mandiri - 0987654321",
      tanggal_mulai: "2024-04-01",
      tanggal_selesai: "2024-09-30",
      distribusi: {
        status: "Berlangsung",
        tanggal_distribusi: null,
        bukti: null,
        konfirmasi_distribusi: "Menunggu Konfirmasi"
      },
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
      status: "Aktif",
      rekdistribusi: "BCA - 1122334455",
      tanggal_mulai: "2024-07-01",
      tanggal_selesai: "2024-12-31",
      distribusi: null,
      donatur: [
        { nama: "Fajar Nugraha", tanggal: "2024-05-20", nominal: 5000000, email: "fajar.n@example.com" },
      ],
    },
    {
      id: "CAMP004",
      namaprogram: "Sembako untuk Dhuafa",
      Jenis: "barang",
      target: 500,
      tercapai: 500,
      status: "Non-Aktif",
      rekdistribusi: "BRI - 6789012345",
      tanggal_mulai: "2023-11-01",
      tanggal_selesai: "2023-12-15",
      distribusi: {
        status: "Selesai",
        tanggal_distribusi: "2023-12-20",
        bukti: "bukti_camp004.png",
        konfirmasi_distribusi: "Ditolak"
      },
      donatur: [
        { nama: "Gita Permata", tanggal: "2023-12-01", nominal: 200000, email: "gita.p@example.com" },
        { nama: "Hadi Kusumo", tanggal: "2023-12-05", nominal: 150000, email: "hadi.k@example.com" },
        { nama: "Indah Sari", tanggal: "2023-12-08", nominal: 400000, email: "indah.s@example.com" },
      ],
    },
    {
      id: "CAMP005",
      namaprogram: "Operasi Gratis",
      Jenis: "dana",
      target: 100000000,
      tercapai: 20000000,
      status: "Aktif",
      rekdistribusi: "CIMB Niaga - 5566778899",
      tanggal_mulai: "2024-05-01",
      tanggal_selesai: "2024-10-30",
      distribusi: null,
      donatur: [
        { nama: "Joko Widodo", tanggal: "2024-05-05", nominal: 1000000, email: "joko.w@example.com" }
      ],
    },
    {
      id: "CAMP006",
      namaprogram: "Bantuan Banjir Kalimantan",
      Jenis: "barang",
      target: 2000,
      tercapai: 1500,
      status: "Aktif",
      rekdistribusi: "Danamon - 6677889900",
      tanggal_mulai: "2024-01-10",
      tanggal_selesai: "2024-02-10",
      distribusi: {
        status: "Selesai",
        tanggal_distribusi: "2024-02-12",
        bukti: "bukti_camp006.jpg",
        konfirmasi_distribusi: "Dikonfirmasi"
      },
      donatur: [
        { nama: "Lina Marlina", tanggal: "2024-01-15", nominal: 250000, email: "lina.m@example.com" },
      ],
    },
    {
      id: "CAMP007",
      namaprogram: "Santunan Lansia",
      Jenis: "dana",
      target: 30000000,
      tercapai: 18000000,
      status: "Aktif",
      rekdistribusi: "BTN - 3344556677",
      tanggal_mulai: "2024-06-01",
      tanggal_selesai: "2024-08-01",
      distribusi: null,
      donatur: [],
    },
    {
      id: "CAMP008",
      namaprogram: "Pendidikan Santri",
      Jenis: "dana",
      target: 50000000,
      tercapai: 30000000,
      status: "Non-Aktif",
      rekdistribusi: "BSI - 8899001122",
      tanggal_mulai: "2023-09-01",
      tanggal_selesai: "2023-12-01",
      distribusi: {
        status: "Selesai",
        tanggal_distribusi: "2023-12-10",
        bukti: "bukti_camp008.jpg",
        konfirmasi_distribusi: "Dikonfirmasi"
      },
      donatur: [
        { nama: "Mahmud Arif", tanggal: "2023-10-15", nominal: 1000000, email: "mahmud.a@example.com" },
      ],
    },
    {
      id: "CAMP009",
      namaprogram: "Bantuan Air Bersih",
      Jenis: "barang",
      target: 1200,
      tercapai: 900,
      status: "Aktif",
      rekdistribusi: "Mega Syariah - 7766554433",
      tanggal_mulai: "2024-02-01",
      tanggal_selesai: "2024-03-15",
      distribusi: {
        status: "Berlangsung",
        tanggal_distribusi: null,
        bukti: null,
        konfirmasi_distribusi: "Menunggu Konfirmasi"
      },
      donatur: [],
    },
    {
      id: "CAMP010",
      namaprogram: "Al-Qur'an untuk Pelosok",
      Jenis: "barang",
      target: 500,
      tercapai: 200,
      status: "Aktif",
      rekdistribusi: "Muamalat - 5566442211",
      tanggal_mulai: "2024-07-10",
      tanggal_selesai: "2024-09-10",
      distribusi: null,
      donatur: [],
    },
    // Tambahan sampai 20
    ...Array.from({ length: 10 }, (_, i) => {
      const idNum = i + 11;
      return {
        id: `CAMP${String(idNum).padStart(3, '0')}`,
        namaprogram: `Program Bantuan ${idNum}`,
        Jenis: i % 2 === 0 ? "barang" : "dana",
        target: i % 2 === 0 ? 1000 + i * 100 : 5000000 + i * 1000000,
        tercapai: i % 2 === 0 ? 800 + i * 50 : 2500000 + i * 500000,
        status: i % 3 === 0 ? "Non-Aktif" : "Aktif",
        rekdistribusi: `Bank ${idNum} - ${1000000000 + idNum}`,
        tanggal_mulai: `2024-${String((i % 12) + 1).padStart(2, '0')}-01`,
        tanggal_selesai: `2024-${String((i % 12) + 2).padStart(2, '0')}-01`,
        distribusi: i % 4 === 0 ? {
          status: "Selesai",
          tanggal_distribusi: `2024-${String((i % 12) + 2).padStart(2, '0')}-10`,
          bukti: `bukti_camp${idNum}.jpg`,
          konfirmasi_distribusi: "Dikonfirmasi"
        } : null,
        donatur: [
          {
            nama: `Donatur ${idNum}`,
            tanggal: `2024-${String((i % 12) + 1).padStart(2, '0')}-10`,
            nominal: 100000 * idNum,
            email: `donatur${idNum}@example.com`
          }
        ]
      };
    })
  ]);
  
  const [isAddForm, setIsAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Saat pertama kali load, filteredCampaigns = semua campaigns
  useEffect(() => {
    setFilteredCampaigns(campaigns);
  }, [campaigns]);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);
    setCurrentPage(1); // reset ke halaman pertama saat pencarian

    const filtered = campaigns.filter((item) =>
      item.namaprogram.toLowerCase().includes(keyword)
    );
    setFilteredCampaigns(filtered);
  };

  const totalPages = Math.ceil(filteredCampaigns.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredCampaigns.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
      setIsAddForm(false);
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
              <div className="flex justify-between">
              <button
          onClick={() => setIsAddForm(!isAddForm)}
          className="px-4 py-2 bg-primary text-white rounded"
          >
          {isAddForm ? "Kembali" : "Tambah Campaign"}
        </button>

          {
            !isAddForm && (
              <div className="relative w-full max-w-sm">
  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
    <i className="fas fa-search"></i>
  </span>
  <input
    type="text"
    onChange={handleSearch}
    className="pl-10 border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
    placeholder="Cari Campaign"
  />
</div>
            )
          }
      {/* <div className="relative w-full max-w-sm">
  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
    <i className="fas fa-search"></i>
            </span>
            
  <input
    type="text"
    onChange={handleSearch}
    className="pl-10 border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
    placeholder="Cari Campaign"
  />
</div> */}

          </div>
              {isAddForm && (
                  <div className="bg-white p-6 rounded shadow-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
  { label: "Nama Program", name: "namaprogram" },
  {
    label: "Kategori / Jenis",
    name: "Jenis",
    type: "select",
    options: ["Pendidikan", "Bencana Alam", "Bantuan Sosial"],
  },
  { label: "Target Dana", name: "target", type: "number" },
  { label: "Tanggal Mulai", name: "tanggal_mulai", type: "date" },
  { label: "Tanggal Selesai", name: "tanggal_selesai", type: "date" },
  {
    label: "Status",
    name: "status",
    type: "select",
    options: ["Aktif", "Tidak Aktif"],
  },
  {
    label: "Status Distribusi",
    name: "status_distribusi",
    type: "select",
    options: ["Belum Diajukan", "Menunggu Konfirmasi", "Dikonfirmasi"],
  },
  { label: "Rekening Distribusi", name: "rekdistribusi" },
].map((field) => (
  <div key={field.name} className="mb-4">
    <label className="block mb-1">{field.label}</label>

    {field.type === "select" ? (
      <select
        name={field.name}
        value={newData[field.name] || ""}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      >
        <option value="">-- Pilih {field.label} --</option>
        {field.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={
          field.type
            ? field.type
            : field.name.includes("tanggal")
            ? "date"
            : field.name === "target"
            ? "number"
            : "text"
        }
        name={field.name}
        value={newData[field.name] || ""}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
    )}
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
                    <td className="py-2 px-4">{campaign.distribusi?.status ?? '-'}</td>

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
