import React, {useState, useEffect} from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import ktpFile from "../../assets/ktp.png";
const PengajuanKebutuhanDashboard = () => {

const [showModal, setShowModal] = useState(false);
const [selectedPengajuan, setSelectedPengajuan] = useState(null);
const handleShowModal = (pengajuan) => {
  setSelectedPengajuan(pengajuan);
  setShowModal(true);
}
const [dataPengajuanKebutuhan, setDataPengajuanKebutuhan] = useState([
  {
    namalengkap: 'Ahmad Fauzi',
    email: 'ahmad.fauzi@example.com',
    notelp: '081234567890',
    alamat: 'Jl. Merdeka No. 1, Jakarta',
    kategoribarang: 'makanan',
    namabarang: 'Beras',
    jumlahdibutuhkan: 50,
    urgensikebutuhan: 'Segera',
    alasanbutuh: 'Untuk kebutuhan dapur umum pengungsi'
  },
  {
    namalengkap: 'Siti Aminah',
    email: 'siti.aminah@example.com',
    notelp: '081234567891',
    alamat: 'Jl. Sudirman No. 10, Bandung',
    kategoribarang: 'obat-obatan',
    namabarang: 'Paracetamol',
    jumlahdibutuhkan: 100,
    urgensikebutuhan: 'Segera',
    alasanbutuh: 'Wabah flu di lingkungan sekitar'
  },
  {
    namalengkap: 'Dedi Supriyadi',
    email: 'dedi.supriyadi@example.com',
    notelp: '081234567892',
    alamat: 'Jl. Asia Afrika No. 5, Surabaya',
    kategoribarang: 'pakaian',
    namabarang: 'Kaos dewasa',
    jumlahdibutuhkan: 200,
    urgensikebutuhan: 'dalam seminggu',
    alasanbutuh: 'Untuk korban kebakaran'
  },
  {
    namalengkap: 'Lina Marlina',
    email: 'lina.marlina@example.com',
    notelp: '081234567893',
    alamat: 'Jl. Diponegoro No. 3, Semarang',
    kategoribarang: 'makanan',
    namabarang: 'Mi Instan',
    jumlahdibutuhkan: 300,
    urgensikebutuhan: 'Segera',
    alasanbutuh: 'Persediaan logistik tanggap bencana'
  },
  {
    namalengkap: 'Yusuf Maulana',
    email: 'yusuf.maulana@example.com',
    notelp: '081234567894',
    alamat: 'Jl. Gajah Mada No. 7, Medan',
    kategoribarang: 'obat-obatan',
    namabarang: 'Vitamin C',
    jumlahdibutuhkan: 120,
    urgensikebutuhan: 'tidak mendesak',
    alasanbutuh: 'Peningkatan daya tahan tubuh'
  },
  {
    namalengkap: 'Dina Rahmawati',
    email: 'dina.rahmawati@example.com',
    notelp: '081234567895',
    alamat: 'Jl. Pahlawan No. 9, Yogyakarta',
    kategoribarang: 'pakaian',
    namabarang: 'Selimut',
    jumlahdibutuhkan: 80,
    urgensikebutuhan: 'dalam seminggu',
    alasanbutuh: 'Cuaca dingin di pengungsian'
  },
  {
    namalengkap: 'Rudi Hartono',
    email: 'rudi.hartono@example.com',
    notelp: '081234567896',
    alamat: 'Jl. Imam Bonjol No. 2, Malang',
    kategoribarang: 'makanan',
    namabarang: 'Susu bubuk',
    jumlahdibutuhkan: 90,
    urgensikebutuhan: 'Segera',
    alasanbutuh: 'Anak-anak kekurangan nutrisi'
  },
  {
    namalengkap: 'Tika Yuliana',
    email: 'tika.yuliana@example.com',
    notelp: '081234567897',
    alamat: 'Jl. Ahmad Yani No. 4, Palembang',
    kategoribarang: 'obat-obatan',
    namabarang: 'Antibiotik',
    jumlahdibutuhkan: 60,
    urgensikebutuhan: 'Segera',
    alasanbutuh: 'Infeksi menyebar di lokasi'
  },
  {
    namalengkap: 'Andi Kurniawan',
    email: 'andi.kurniawan@example.com',
    notelp: '081234567898',
    alamat: 'Jl. Hasanuddin No. 6, Makassar',
    kategoribarang: 'pakaian',
    namabarang: 'Celana panjang',
    jumlahdibutuhkan: 150,
    urgensikebutuhan: 'dalam seminggu',
    alasanbutuh: 'Untuk korban banjir'
  },
  {
    namalengkap: 'Maya Fitriani',
    email: 'maya.fitriani@example.com',
    notelp: '081234567899',
    alamat: 'Jl. Pemuda No. 11, Denpasar',
    kategoribarang: 'makanan',
    namabarang: 'Minyak goreng',
    jumlahdibutuhkan: 70,
    urgensikebutuhan: 'tidak mendesak',
    alasanbutuh: 'Stok persediaan dapur umum'
  },
  {
    namalengkap: 'Hendra Saputra',
    email: 'hendra.saputra@example.com',
    notelp: '081234567800',
    alamat: 'Jl. Kartini No. 8, Banjarmasin',
    kategoribarang: 'obat-obatan',
    namabarang: 'Obat diare',
    jumlahdibutuhkan: 50,
    urgensikebutuhan: 'Segera',
    alasanbutuh: 'Penyakit diare menyebar'
  },
  {
    namalengkap: 'Nur Aisyah',
    email: 'nur.aisyah@example.com',
    notelp: '081234567801',
    alamat: 'Jl. Soekarno Hatta No. 12, Pontianak',
    kategoribarang: 'pakaian',
    namabarang: 'Pakaian anak-anak',
    jumlahdibutuhkan: 100,
    urgensikebutuhan: 'dalam seminggu',
    alasanbutuh: 'Bantuan untuk anak-anak pengungsi'
  },
  {
    namalengkap: 'Fajar Nugraha',
    email: 'fajar.nugraha@example.com',
    notelp: '081234567802',
    alamat: 'Jl. Gatot Subroto No. 14, Balikpapan',
    kategoribarang: 'makanan',
    namabarang: 'Telur ayam',
    jumlahdibutuhkan: 200,
    urgensikebutuhan: 'Segera',
    alasanbutuh: 'Kebutuhan protein masyarakat'
  },
  {
    namalengkap: 'Ayu Lestari',
    email: 'ayu.lestari@example.com',
    notelp: '081234567803',
    alamat: 'Jl. Cendrawasih No. 16, Manado',
    kategoribarang: 'obat-obatan',
    namabarang: 'Obat demam',
    jumlahdibutuhkan: 75,
    urgensikebutuhan: 'Segera',
    alasanbutuh: 'Wabah demam menyerang warga'
  },
  {
    namalengkap: 'Bayu Pratama',
    email: 'bayu.pratama@example.com',
    notelp: '081234567804',
    alamat: 'Jl. Anggrek No. 18, Ternate',
    kategoribarang: 'pakaian',
    namabarang: 'Jaket hangat',
    jumlahdibutuhkan: 130,
    urgensikebutuhan: 'dalam seminggu',
    alasanbutuh: 'Daerah terdampak suhu ekstrem'
  },
  {
    namalengkap: 'Sarah Novita',
    email: 'sarah.novita@example.com',
    notelp: '081234567805',
    alamat: 'Jl. Melati No. 20, Kupang',
    kategoribarang: 'makanan',
    namabarang: 'Roti',
    jumlahdibutuhkan: 60,
    urgensikebutuhan: 'tidak mendesak',
    alasanbutuh: 'Cadangan makanan darurat'
  },
  {
    namalengkap: 'Ilham Ramadhan',
    email: 'ilham.ramadhan@example.com',
    notelp: '081234567806',
    alamat: 'Jl. Mawar No. 22, Bengkulu',
    kategoribarang: 'obat-obatan',
    namabarang: 'Obat batuk',
    jumlahdibutuhkan: 90,
    urgensikebutuhan: 'Segera',
    alasanbutuh: 'Banyak warga mengalami batuk'
  },
  {
    namalengkap: 'Mega Sari',
    email: 'mega.sari@example.com',
    notelp: '081234567807',
    alamat: 'Jl. Cemara No. 24, Mataram',
    kategoribarang: 'pakaian',
    namabarang: 'Sepatu anak-anak',
    jumlahdibutuhkan: 110,
    urgensikebutuhan: 'tidak mendesak',
    alasanbutuh: 'Untuk bantuan pendidikan'
  },
  {
    namalengkap: 'Rahmat Hidayat',
    email: 'rahmat.hidayat@example.com',
    notelp: '081234567808',
    alamat: 'Jl. Kenanga No. 26, Ambon',
    kategoribarang: 'makanan',
    namabarang: 'Sereal',
    jumlahdibutuhkan: 40,
    urgensikebutuhan: 'Segera',
    alasanbutuh: 'Makanan ringan untuk anak-anak'
  },
  {
    namalengkap: 'Fitri Andini',
    email: 'fitri.andini@example.com',
    notelp: '081234567809',
    alamat: 'Jl. Teratai No. 28, Jayapura',
    kategoribarang: 'obat-obatan',
    namabarang: 'Obat luka',
    jumlahdibutuhkan: 70,
    urgensikebutuhan: 'dalam seminggu',
    alasanbutuh: 'Perawatan korban luka-luka'
  }
]);

  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Saat pertama kali load, filteredCampaigns = semua campaigns
  useEffect(() => {
    setFilteredData(dataPengajuanKebutuhan);
  }, [dataPengajuanKebutuhan]);
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);
    setCurrentPage(1); // Reset ke halaman pertama saat pencarian

    const filtered = dataPengajuanKebutuhan.filter(
      (item) =>
        item.namalengkap.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword) ||
        item.namabarang.toLowerCase().includes(keyword) 
      
    );

    console.log(filtered);
    setFilteredData(filtered);
  };
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedRow(null); // Tutup detail saat ganti halaman
  };



    return (
        <DashboardLayout>
            <div className="p-2">
                 <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 font-primary text-primary">Pengajuan Kebutuhan</h1>
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
                           <ModalDetailPengajuan
                             showModal={showModal}
                             setShowModal={setShowModal}
                             selectedPengajuan={selectedPengajuan}
                           /> 
                           <div className="rounded-lg overflow-hidden">
                             <table className="min-w-full text-left bg-white rounded shadow border-gray-400 border roounded-4xl ">
                               <thead className="bg-primary text-left overflow-hidden  text-white p-2 rounded-b-4xl">
                                 <tr className="rounded-b-4xl bg-primary">
                               
                                   <th className="py-2 px-4">Nama</th>
                                   <th className="py-2 px-4 ">Email</th>
                                   <th className="py-2 px-4 ">Barang</th>
                                   <th className="py-2 px-4 ">Jumlah</th>
                                   <th className="py-2 px-4 ">Detail</th>
                                 </tr>
                               </thead>
                               <tbody className="text-left">
                                 {currentItems.map((kebutuhan, index) => (
                                   <React.Fragment key={index}>
                                     <tr className="">
                                       <td className="py-2 px-4">{kebutuhan.namalengkap}</td>
                                       <td className="py-2 px-4">{kebutuhan.email}</td>
                                       <td className="py-2 px-4 capitalize">{kebutuhan.namabarang}</td>
                                      
                                       <td className="py-2 px-4">{kebutuhan.jumlahdibutuhkan}</td>
                                       <td>
                                         <div className=" ">
                                           {/* <Link
                                             to={"/audit/detailaudit"}
                                             state={audit}
                                             className="flex gap-2 font-light items-center"
                                           > */}
                                           <div onClick={() => handleShowModal(kebutuhan)} className="flex cursor-pointer gap-2 font-light items-center">
                 
                                             <p>Lihat Detail</p>
                                             <FontAwesomeIcon icon={faArrowRight} />
                                           </div>
                                           {/* </Link> */}
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
    )
}

const ModalDetailPengajuan = ({ showModal, setShowModal, selectedPengajuan }) => {
  return (
    <div
      className={`${
        showModal
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      } fixed z-50 inset-0 flex items-center justify-center transition-all duration-300`}
    >
      <div className="bg-white rounded-xl w-full max-w-3xl shadow-xl border border-gray-300 overflow-hidden">
        {/* Header */}
        <div className="bg-secondary text-primary relative p-4 flex justify-center items-center">
          <h4 className="font-semibold text-lg">Detail Pengajuan Kebutuhan</h4>
          <FontAwesomeIcon
            icon={faTimes}
            className="absolute top-4 right-4 text-lg cursor-pointer text-primary hover:text-red-500"
            onClick={() => setShowModal(false)}
          />
        </div>

        {/* Gambar */}
        <div className="flex justify-center p-4 border-b">
          <img
            src={ktpFile}
            alt="Gambar Pengajuan"
            className="w-52 h-40 object-cover rounded shadow"
          />
        </div>

        {/* Informasi */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 font-roboto">
          <p><strong>Nama:</strong> {selectedPengajuan?.namalengkap || "-"}</p>
          <p><strong>Barang yang diajukan:</strong> {selectedPengajuan?.namabarang || "-"}</p>
          <p><strong>Kategori Barang:</strong> {selectedPengajuan?.kategoribarang || "-"}</p>
          <p><strong>Jumlah:</strong> {selectedPengajuan?.jumlahdibutuhkan || "-"}</p>
          <p><strong>Alamat:</strong> {selectedPengajuan?.alamat || "-"}</p>
          <p><strong>Urgensi Kebutuhan:</strong> {selectedPengajuan?.urgensikebutuhan || "-"}</p>
        </div>

        {/* Tombol Link Dokumen */}
        <div className="px-6 pb-6 text-center">
          {selectedPengajuan &&(
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
            >
              <FontAwesomeIcon icon={faFileAlt} />
              Lihat Dokumen Pendukung
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default PengajuanKebutuhanDashboard;