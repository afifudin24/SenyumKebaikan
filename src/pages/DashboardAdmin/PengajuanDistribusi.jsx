import React, {useState, useEffect} from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheckCircle, faEnvelopeCircleCheck, faFileAlt, faQuestionCircle, faTimes, faTimesCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import ktpFile from "../../assets/ktp.png";
import toast from "react-hot-toast";
const PengajuanDistribusi = () => {

const [showModal, setShowModal] = useState(false);
const [selectedPengajuan, setSelectedPengajuan] = useState(null);
const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });
const handleShowModal = (pengajuan) => {
  setSelectedPengajuan(pengajuan);
  setShowModal(true);
}
const [pengajuanDistribusi, setPengajuanDistribusi] = useState([
  {
    id: "DST-003",
    namaVolunteer: "John Dae",
    namaCampaign: "Bantu Sekolah",
    jumlahDiajukan: 5000000,
    tanggal: "02/07/2024",
    status: "Menunggu",
    aksi: "Konfirmasi",
    deskripsi: "Pengajuan dana untuk membeli perlengkapan sekolah dasar."
  },
  {
    id: "DST-004",
    namaVolunteer: "Jane Smith",
    namaCampaign: "Bangun Perpustakaan",
    jumlahDiajukan: 7500000,
    tanggal: "03/07/2024",
    status: "Diterima",
    aksi: "Catat di Blockchain",
    deskripsi: "Membangun perpustakaan mini di daerah terpencil."
  },
  {
    id: "DST-005",
    namaVolunteer: "Ari Wijaya",
    namaCampaign: "Bantu Anak Yatim",
    jumlahDiajukan: 3000000,
    tanggal: "04/07/2024",
    status: "Berhasil",
    aksi: "Detail",
    deskripsi: "Pengadaan makanan sehat untuk anak-anak panti asuhan."
  },
  {
    id: "DST-006",
    namaVolunteer: "Linda Kusuma",
    namaCampaign: "Renovasi Sekolah",
    jumlahDiajukan: 10000000,
    tanggal: "05/07/2024",
    status: "Berhasil",
    aksi: "Detail",
    deskripsi: "Renovasi ruang kelas yang rusak di SD Negeri 02."
  },
  {
    id: "DST-007",
    namaVolunteer: "Budi Santoso",
    namaCampaign: "Donasi Buku",
    jumlahDiajukan: 2000000,
    tanggal: "05/07/2024",
    status: "Tolak",
    aksi: "Detail Tolak",
    deskripsi: "Distribusi buku bacaan anak-anak ke sekolah pinggiran kota."
  },
  {
    id: "DST-008",
    namaVolunteer: "Siti Aminah",
    namaCampaign: "Pendidikan Anak Desa",
    jumlahDiajukan: 6000000,
    tanggal: "06/07/2024",
    status: "Menunggu",
    aksi: "Konfirmasi",
    deskripsi: "Pelatihan literasi dan pemberian alat tulis bagi anak desa."
  },
  {
    id: "DST-009",
    namaVolunteer: "Rizky Pratama",
    namaCampaign: "Beasiswa Siswa Kurang Mampu",
    jumlahDiajukan: 8000000,
    tanggal: "06/07/2024",
    status: "Diterima",
    aksi: "Catat di Blockchain",
    deskripsi: "Beasiswa untuk 10 siswa tingkat SMP selama satu semester."
  },
  {
    id: "DST-010",
    namaVolunteer: "Dina Maharani",
    namaCampaign: "Akses Air Bersih",
    jumlahDiajukan: 9500000,
    tanggal: "07/07/2024",
    status: "Berhasil",
    aksi: "Detail",
    deskripsi: "Pembangunan sumur bor untuk sekolah dan warga sekitar."
  },
  {
    id: "DST-011",
    namaVolunteer: "Andi Nugroho",
    namaCampaign: "Pembangunan Kelas",
    jumlahDiajukan: 7000000,
    tanggal: "07/07/2024",
    status: "Tolak",
    aksi: "Detail Tolak",
    deskripsi: "Proposal pembangunan ruang kelas tambahan di MI Nurul Falah."
  },
  {
    id: "DST-012",
    namaVolunteer: "Maya Sari",
    namaCampaign: "Bantu Guru Honorer",
    jumlahDiajukan: 4500000,
    tanggal: "08/07/2024",
    status: "Menunggu",
    aksi: "Konfirmasi",
    deskripsi: "Dukungan dana transportasi bagi guru honorer di desa terpencil."
  }
]);


  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Saat pertama kali load, filteredCampaigns = semua campaigns
  useEffect(() => {
    setFilteredData(pengajuanDistribusi);
  }, [pengajuanDistribusi]);
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);
    setCurrentPage(1); // Reset ke halaman pertama saat pencarian

    const filtered = pengajuanDistribusi.filter(
      (item) =>
        item.namaCampaign.toLowerCase().includes(keyword) ||
        item.namaVolunteer.toLowerCase().includes(keyword) 
      
      
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
  const handleUpdateStatus = (newStatus) => {

  if (!selectedPengajuan) return;

  setDataPengajuanKebutuhan((prevData) =>
    prevData.map((item) =>
      item.email === selectedPengajuan.email
        ? { ...item, status: newStatus }
        : item
    )
  );
  toast.success("Berhasil Update Status");
  // Perbarui juga selectedPengajuan-nya agar UI langsung berubah
  setSelectedPengajuan((prev) => ({ ...prev, status: newStatus }));
};

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedRow(null); // Tutup detail saat ganti halaman
  };
    const konfirmasi = (item) => {
    toast.success("Donasi berhasil dikonfirmasi!");
    // update status dari item menjadi "Terkonfirmasi"
    const updatedData = pengajuanDistribusi.map((data) => {
      if (data.id === item.id) {
        return { ...data, status: "Diterima" };
      }
      return data;
    });
  
    setPengajuanDistribusi(updatedData); // ini yang penting!
    setModalOpen(false);
    setModalContent({ title: "", body: "" });

  }
    const tolak = (item) => {
    toast.success("Donasi berhasil ditolak!");
    // update status dari item menjadi "Terkonfirmasi"
    const updatedData = pengajuanDistribusi.map((data) => {
      if (data.id === item.id) {
        return { ...data, status: "Ditolak" };
      }
      return data;
    });
  
    setPengajuanDistribusi(updatedData); // ini yang penting!
    setModalOpen(false);
    setModalContent({ title: "", body: "" });

  }
    const catat = (item) => {
    toast.success("Donasi berhasil dicatat!");
    // update status dari item menjadi "Terkonfirmasi"
    const updatedData = pengajuanDistribusi.map((data) => {
      if (data.id === item.id) {
        return { ...data, status: "Berhasil" };
      }
      return data;
    });
  
    setPengajuanDistribusi(updatedData); // ini yang penting!
    // setModalOpen(false);
    setModalContent({ title: " Transaksi Berhasil Dicatat ke Blockchain ",  body: (
              <div className="">
                <h3 className="text-center">Status Ringkasan Transaksi</h3>
               <div className="w-10/12 mx-auto mt-4">
  <table className="w-full text-sm text-left border border-gray-300">
    <tbody>
      <tr className="border-b">
        <th className="py-2 px-4 text-gray-600 w-1/3">ID</th>
        <td className="py-2 px-4">{item.id}</td>
      </tr>
      <tr className="border-b">
        <th className="py-2 px-4 text-gray-600">Jumlah Dana</th>
        <td className="py-2 px-4">Rp {item.jumlahDiajukan.toLocaleString("id-ID")}</td>
      </tr>
      <tr className="border-b">
        <th className="py-2 px-4 text-gray-600">Tujuan Penggunaan</th>
        <td className="py-2 px-4">{item.deskripsi}</td>
      </tr>
      <tr className="border-b">
        <th className="py-2 px-4 text-gray-600">Tanggal Transaksi</th>
        <td className="py-2 px-4">{item.tanggal}</td>
      </tr>
      <tr>
        <th className="py-2 px-4 text-gray-600">Link Bukti</th>
        <td className="py-2 px-4">
          <a
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtXciVqgAqnthXt1CajUzjXakxFTsFGZ7RAMyqcdqQK9IPg03QAkV1Z7WYC8Nb6QpFPE&usqp=CAU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-600"
          >
            Lihat Bukti
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

                <p className="text-primary text-sm font-light text-center mt-3">Klik link jika ingin melihat transaksi di Blockchain exploler</p>
             
  
              </div>
            ),
           icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faCheckCircle} /> });
  }
    const openModal = (item, type) => {
      let content = { title: "", body: "", icon : "" };
    
      switch (type) {
        case "konfirmasi":
          content = {
            title: "Detail Pengajuan Distribusi",
            icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faQuestionCircle} />,
            body: (
              <div className="mt-2 items-center">
                 <div className="w-100 mx-auto bg-white shadow-2xl rounded-2xl h-50 my-2"></div>
                 <div className="mt-5 w-full ">
                 <hr className="text-primary bg-primary" />
                 </div>
                 <div className="text-center mt-2 text-base text-primary">
                    <p className="font-semibold">Status Saat Ini : <span className="font-normal italic">{item.status}</span> </p>
                 </div>
                 <div className="flex gap-2 justify-between mt-3 w-9/12 mx-auto">
                    <div className="w-1/2 flex flex-col gap-2">
                        <p className="text-primary font-primary"> Judul Pengajuan</p>
                        <p className="text-primary font-primary"> Jumlah Dana</p>
                        <p className="text-primary font-primary">Tanggal</p>
                        <p className="text-primary font-primary"> Deskripsi</p>
                        

                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                         <p className="text-primary font-primary font-semibold">{item.namaCampaign}</p>
                        <p className="text-primary font-primary"> {item.jumlahDiajukan}</p>
                        <p className="text-primary font-primary">{item.tanggal}</p>
                        <p className="text-primary font-primary"> {item.deskripsi}</p>
                    </div>
                 </div>
                   <div className="flex mx-auto w-6/12 text-center justify-center mt-5 gap-1">
                  <button
                  onClick={() => tolak(item) }
                    className="px-3 py-1 bg-gray-200 text-sm rounded hover:bg-secondary transition-all"
                  >
                    Tolak
                  </button>
                  <button
                    onClick={() => konfirmasi(item) }
                    className="px-3 py-1 bg-accent text-sm rounded text-white hover:bg-secondary transition-all"
                  >
                    Konfirmasi
                  </button>
                </div>
            
            
              </div>
            )
          };
          break;
        case "blockchain":
          content = {
            icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faEnvelopeCircleCheck} />,
            title: "Konfirmasi Pencatatan Ke Blockchain",
            body: (
              <div className="">
                <h3 className="text-center">Status Ringkasan Transaksi</h3>
                <div className="flex gap-1 justify-center w-8/12 mx-auto">
                  <div className="text-primary text-base">
                  <h4 className="">ID</h4>
                  <h4>Jumlah Dana</h4>
                  <h4>Tujuan Penggunaan</h4>
                  <h4>Tanggal Transaksi</h4>
                    
                  </div>
                  <div>
                    <h4>: {item.id}</h4>
                    <h4>: {item.jumlahDiajukan}</h4>
                    <h4>: {item.deskripsi}</h4>
                    <h4>: {item.tanggal}</h4>
  
  
                  </div>
                </div>
                <p className="text-primary text-sm font-light text-center mt-3">Apakah anda yakin ingin mencatat transaksi ini ke blockchain?</p>
                <div className="text-center">
                  <button onClick={() => catat(item)} className="px-4 py-2 mt-3 mx-auto bg-primary text-white hover:text-primary text-sm rounded hover:bg-secondary">
                    Catat
                </button>
  
                </div>
  
  
              </div>
            ),
          };
          break;
        case "detail":
          content = {
            icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faCheckCircle} />,
            title: "Transaksi Berhasil Dicatat ke Blockchain",
           body: (
              <div className="mt-2 items-center">
                 <div className="w-100 mx-auto bg-white shadow-2xl rounded-2xl h-50 my-2"></div>
                 <div className="mt-5 w-full ">
                 <hr className="text-primary bg-primary" />
                 </div>
                 <div className="text-center gap-2 flex justify-center mt-2 text-base  text-primary">
                  <p className="font-semibold text-center">
  Status Saat Ini :{" "}
</p>
<p>
     {item.status === "Diterima" || item.status === "Berhasil" ? (
    <span className="font-normal  italic text-green-600 flex items-center gap-1">
      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
      {item.status}
    </span>
  ) : item.status === "Tolak" ? (
    <span className="font-normal italic  text-red-600 flex items-center gap-1">
      <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />
      {item.status}
    </span>
  ) : (
    <span className="font-normal italic inline">{item.status}</span>
  )}
</p>


                 </div>
                 <div className="flex gap-2 justify-between mt-3 w-9/12 mx-auto">
                    <div className="w-1/2 flex flex-col gap-2">
                        <p className="text-primary font-primary"> Judul Pengajuan</p>
                        <p className="text-primary font-primary"> Jumlah Dana</p>
                        <p className="text-primary font-primary">Tanggal</p>
                        <p className="text-primary font-primary"> Deskripsi</p>
                        

                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                         <p className="text-primary font-primary font-semibold">{item.namaCampaign}</p>
                        <p className="text-primary font-primary"> {item.jumlahDiajukan}</p>
                        <p className="text-primary font-primary">{item.tanggal}</p>
                        <p className="text-primary font-primary"> {item.deskripsi}</p>
                    </div>
                 </div>
                  
            
            
              </div>
            )
          };
          break;
        case "gagal":
          content = {
            icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faXmarkCircle} />,
            title: "Donasi Gagal",
            body: (
              <div>
                <p className="text-center">Donasi dari {item.nama} gagal diverifikasi</p>
              </div>
            ),
          };
          break;
        default:
          break;
      }
    
      setModalContent(content);
      setModalOpen(true);
    };
    
  
  
    const renderAksi = (item) => {
       
      switch (item.status) {
        case "Menunggu":
          return (
            <button
              className="text-blue-500 hover:underline"
              onClick={() => openModal(item, "konfirmasi")}
            >
              Konfirmasi
            </button>
          );
        case "Diterima":
          return (
            <button
              className="text-green-600 hover:underline"
              onClick={() => openModal(item, "blockchain")}
            >
              Catat di Blockchain →
            </button>
          );
        case "Berhasil":
          return (
            <button
              className="text-gray-600 hover:underline"
              onClick={() => openModal(item, "detail")}
            >
              Detail →
            </button>
          );
        case "Tolak":
          return (
            <button
              className="text-red-500 hover:underline"
              onClick={() => openModal(item, "gagal")}
            >
              Detail Gagal →
            </button>
          );
        default:
          return null;
      }
    };
    
    const Modal = ({ isOpen, icon, onClose, title, children }) => {
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-6/12 shadow-lg relative">
           <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
                 {icon}
              <h4 className="font-semibold my-2 text-primary">{ title}</h4>
              <p className="text-sm text-primary">Berisi mengenai data yang telah anda masukan</p>
                 
            </div>
            <div className="w-11/12 mx-auto">
           {children}
  
            </div>
  
            {/* {children} */}
            <div className="text-center my-3">
  
            <button
              onClick={onClose}
              className="px-4 py-2 mt-3 mx-auto bg-secondary text-primary hover:text-white text-sm rounded hover:bg-primary"
              >
            Tutup
            </button>
              </div>
          </div>
        </div>
      );
    };
    



    return (
        <DashboardLayout>
            <div className="p-2">
                 <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 font-primary text-primary">Pengajuan Distribusi</h1>
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
                                   <th className="py-2 px-4">Nama Volunteer</th>
                                   <th className="py-2 px-4 ">Nama Campaign</th>
                                   <th className="py-2 px-4 ">Jumlah Diajukan</th>
                                   <th className="py-2 px-4 ">Tanggal</th>
                                   <th className="py-2 px-4 ">Status</th>
                                   <th className="py-2 px-4 ">Aksi</th>
                                 </tr>
                               </thead>
                               <tbody className="text-left">
                                 {currentItems.map((kebutuhan, index) => (
                                   <React.Fragment key={index}>
                                     <tr className="">
                                       <td className="py-2 px-4">{kebutuhan.id}</td>
                                       <td className="py-2 px-4">{kebutuhan.namaVolunteer}</td>
                                       <td className="py-2 px-4">{kebutuhan.namaCampaign}</td>
                                       <td className="py-2 px-4 capitalize">{kebutuhan.jumlahDiajukan}</td>
                                      
                                       <td className="py-2 px-4">{kebutuhan.tanggal}</td>
                                       <td className="py-2 px-4 capitalize">{kebutuhan.status}</td>
                                      <td>
  {renderAksi(kebutuhan)}
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
              <Modal
  isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        icon ={modalContent.icon}
  title={modalContent.title}
  children={modalContent.body}
/>
        </DashboardLayout>
    )
}

const ModalDetailPengajuan = ({ showModal, handleUpdateStatus, setShowModal, selectedPengajuan }) => {
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
       <div className="text-center">
  <p className="font-semibold">
    Status Saat Ini :{" "}
    {selectedPengajuan?.status === 'menunggu verifikasi' ? (
      <span className="text-primary capitalize italic font-normal">
        {selectedPengajuan.status}
      </span>
    ) : selectedPengajuan?.status === 'ditolak' ? (
      <span className="text-red-500 font-normal capitalize">
        {selectedPengajuan.status}
      </span>
    ) : selectedPengajuan?.status === 'diterima' ? (
      <span className="text-green-600 font-normal capitalize flex justify-center items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {selectedPengajuan.status}
      </span>
    ) : (
      <span className="text-gray-500 font-normal">Tidak diketahui</span>
    )}
  </p>
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

      <div className="px-6 pb-6 text-center">
  {selectedPengajuan?.status === 'menunggu verifikasi' && (
    <div className="flex justify-center gap-4 mb-4">
      <button
        onClick={() => handleUpdateStatus('ditolak')}
        className="bg-secondary text-primary hover:text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Tolak
      </button>

      <button
        onClick={() => handleUpdateStatus('diterima')}
        className="bg-accent text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Terima
      </button>
    </div>
  )}

  {selectedPengajuan && (
    <a
      href="#"
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
export default PengajuanDistribusi;