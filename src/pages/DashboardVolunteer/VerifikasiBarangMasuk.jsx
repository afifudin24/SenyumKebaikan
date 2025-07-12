import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const VerifikasiBarangMasuk = () => {
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);

  // 20 data dummy
const [data, setData] = useState([
  { id: "BRG-7A2", donatur: "John Dae", barang: "Buku Tulis", qty: 100, kualitas: "Baru", campaign: "Bantu Sekolah", status: "Menunggu", tanggal: "2025-07-01" },
  { id: "BRG-9XK", donatur: "Sarah A.", barang: "Pulpen", qty: 250, kualitas: "Baru", campaign: "Bantu Sekolah", status: "Selesai", tanggal: "2025-06-28" },
  { id: "BRG-1L3", donatur: "Ahmad R.", barang: "Tas Sekolah", qty: 40, kualitas: "Bekas Layak", campaign: "Bantu Sekolah", status: "Diterima", tanggal: "2025-06-29" },
  { id: "BRG-WE5", donatur: "Lisa M.", barang: "Sepatu", qty: 60, kualitas: "Baru", campaign: "Bencana Alam", status: "Ditolak", tanggal: "2025-06-25" },
  { id: "BRG-M98", donatur: "Tommy J.", barang: "Seragam", qty: 30, kualitas: "Baru", campaign: "Bantu Sekolah", status: "Menunggu", tanggal: "2025-07-03" },
  { id: "BRG-Q02", donatur: "Gita N.", barang: "Buku Cerita", qty: 150, kualitas: "Bekas Layak", campaign: "Literasi Desa", status: "Diterima", tanggal: "2025-06-30" },
  { id: "BRG-45P", donatur: "Robert A.", barang: "Laptop Bekas", qty: 10, kualitas: "Bekas Layak", campaign: "Digitalisasi Sekolah", status: "Selesai", tanggal: "2025-06-20" },
  { id: "BRG-T6U", donatur: "Hana F.", barang: "Meja Belajar", qty: 20, kualitas: "Baru", campaign: "Bantu Sekolah", status: "Menunggu", tanggal: "2025-07-02" },
  { id: "BRG-2ZD", donatur: "Dian W.", barang: "Masker Kain", qty: 500, kualitas: "Baru", campaign: "Bencana Alam", status: "Ditolak", tanggal: "2025-06-24" },
  { id: "BRG-A9L", donatur: "Irfan L.", barang: "Pensil Warna", qty: 300, kualitas: "Baru", campaign: "Literasi Desa", status: "Selesai", tanggal: "2025-06-29" },
  { id: "BRG-66H", donatur: "Mira S.", barang: "Papan Tulis", qty: 5, kualitas: "Baru", campaign: "Digitalisasi Sekolah", status: "Diterima", tanggal: "2025-06-27" },
  { id: "BRG-X0Y", donatur: "Kevin P.", barang: "Kursi", qty: 20, kualitas: "Bekas Layak", campaign: "Bantu Sekolah", status: "Selesai", tanggal: "2025-06-21" },
  { id: "BRG-5YU", donatur: "Tania Q.", barang: "Tablet", qty: 8, kualitas: "Baru", campaign: "Digitalisasi Sekolah", status: "Menunggu", tanggal: "2025-07-04" },
  { id: "BRG-BL2", donatur: "Fajar G.", barang: "Rak Buku", qty: 10, kualitas: "Baru", campaign: "Literasi Desa", status: "Diterima", tanggal: "2025-06-26" },
  { id: "BRG-Z78", donatur: "Anita R.", barang: "Baju Hangat", qty: 100, kualitas: "Baru", campaign: "Bencana Alam", status: "Ditolak", tanggal: "2025-06-22" },
  { id: "BRG-91K", donatur: "Bayu S.", barang: "Selimut", qty: 120, kualitas: "Baru", campaign: "Bencana Alam", status: "Selesai", tanggal: "2025-06-30" },
  { id: "BRG-P16", donatur: "Linda H.", barang: "Boneka", qty: 50, kualitas: "Bekas Layak", campaign: "Bantu Sekolah", status: "Menunggu", tanggal: "2025-07-05" },
  { id: "BRG-G43", donatur: "Niko V.", barang: "Crayon", qty: 200, kualitas: "Baru", campaign: "Literasi Desa", status: "Diterima", tanggal: "2025-06-23" },
  { id: "BRG-YU3", donatur: "Sinta Z.", barang: "Notebook", qty: 300, kualitas: "Baru", campaign: "Bantu Sekolah", status: "Diterima", tanggal: "2025-06-28" },
  { id: "BRG-F5N", donatur: "Yusuf K.", barang: "Buku Pelajaran", qty: 100, kualitas: "Bekas Layak", campaign: "Bantu Sekolah", status: "Selesai", tanggal: "2025-06-25" },
]);


  const totalPages = Math.ceil(data.length / itemsPerPage);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: "", body: "", icon : "" });
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const terima = (item) => {
    console.log(item);
    const updatedData = data.map((data) => {
      if (data.id === item.id) {
        return { ...data, status: "Diterima" };
      }
      return data;
    });
    setData(updatedData);
    setModalOpen(false);
    toast.success("Barang berhasil diterima!");
  }

  const kirim = (item) => {
    console.log(item);
    const updatedData = data.map((data) => {
      if (data.id === item.id) {
        return { ...data, status: "Selesai" };
      }
      return data;
    });
    setData(updatedData);
    setModalOpen(false);
    setSelectedFile(null);
    toast.success("Verifikasi Selesai!");
  }

  const tolak = (item) => {
    console.log(item);
    const updatedData = data.map((data) => {
      if (data.id === item.id) {
        return { ...data, status: "Ditolak" };
      }
      return data;
    });
    setData(updatedData);
    setModalOpen(false);
    toast.success("Barang berhasil ditolak!");
  }

  const LaporModalContent = ({ item, selectedFile, setSelectedFile, onSubmit }) => (
    <div>
      <h3 className="text-lg mt-2 text-center text-primary font-semibold">Campaign : <span className="font-normal">Campaign B</span></h3>
      <div className="mt-5 flex justify-between text-primary gap-2 w-9/12 mx-auto">
        <div>
          <h4>Jumlah Barang : <span>{item.jumlah} pcs</span></h4>
          <h4>Tanggal Tiba : <span>{item.tanggal}</span></h4>
        </div>
        <div>
          <h4>ID Donasi : <span>{item.id}</span></h4>
          <h4>Status : <span>{item.status}</span></h4>
        </div>
      </div>
  
      <div className="flex w-9/12 gap-2 mx-auto">
        <div className="mb-4">
          <p className="mb-2 mt-3 font-medium text-gray-700">Foto Unggah Bukti</p>
          <label className="flex flex-col items-center justify-center w-full h-40 p-4 text-gray-500 border-2 border-dashed rounded-2xl cursor-pointer hover:border-[#2d4a48] hover:text-[#2d4a48] transition-all">
            <svg className="w-8 h-4 mb-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 18 18">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L4 7m3-3l3 3M5 12h14" />
            </svg>
            <span className="text-sm text-center">Klik di sini untuk memilih file atau tarik file ke sini</span>
            <input type="file" className="hidden" onChange={(e) => setSelectedFile(e.target.files[0])} />
          </label>
          {selectedFile && (
            <p className="mt-2 text-sm text-green-600">
              File dipilih: <strong>{selectedFile.name}</strong>
            </p>
          )}
        </div>
      </div>
  
      <div className="text-center mt-5">
        <button onClick={() => onSubmit(item)} className="text-white bg-primary p-2 rounded-md hover:bg-secondary transition-all">Kirim</button>
      </div>
    </div>
  );
  

   const openModal = (item, type) => {
        let content = { title: "", body: "" };
      
        switch (type) {
          case "konfirmasi":
            content = {
              title: "Konfirmasi Donasi",
              icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faQuestionCircle} />,
              body: (
                <div className="flex  gap-2 justify-center mt-2 items-center">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-center font-semibold text-primary">Bukti Transfer</h3>
                    <div className="w-50 bg-primary rounded-2xl h-50"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-primary text-primary font-semibold">Campaign Tujuan</h3>
                    <p className="my-1 text-primary">Bantuan Pendidikan</p>
                    <p className="font-primary  text-sm my-1">Status : Belum Tercatat</p>
                    <p className="font-semibold mt-3">
                      Nama Donatur: <span className="font-light">{item.nama}</span>
                    </p>
                    <p className="font-semibold mt-2">
                      Tanggal: <span className="font-light">3 Juni 2025</span>
                    </p>
                    <div className="flex mt-5 gap-1">
                      <button
                        className="px-3 py-1 bg-gray-200 text-sm rounded hover:bg-secondary transition-all"
                      >
                        Tolak
                      </button>
                      <button
                        // onClick={() => konfirmasi(item) }
                        className="px-3 py-1 bg-accent text-sm rounded text-white hover:bg-secondary transition-all"
                      >
                        Konfirmasi
                      </button>
                    </div>
                  </div>
                </div>
              )
            };
            break;
          case "lapor":
            content = {
              icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faQuestionCircle} />,
              title: "Konfirmasi Penerimaan Barang",
              body: (
                <div className="">
                 <h3 className="text-lg mt-2 text-center text-primary font-semibold">Campaign : <span className="font-normal">Campaign B</span></h3>
                  <div className="mt-5 flex justify-between text-primary gap-2 w-9/12 mx-auto">
                    <div>
                      <h4>Jumlah Barang : <span className="">{item.jumlah} pcs</span></h4>
                      <h4>Tanggal Tiba : <span className="">{item.tanggal}</span></h4>
                    </div>
                    <div>
                        <h4>ID Donasi : <span className="">{item.id}</span></h4>
                        <h4>Status : <span className="">{item.status}</span></h4>
                    </div>
                  </div>
                  <div className="flex w-9/12 gap-2 mx-auto">
                  <div className="mb-4">
    <p className="mb-2 mt-3 font-medium text-gray-700">
      Foto Unggah Bukti 
    </p>
  
    <label className="flex flex-col items-center justify-center w-full h-40 p-4 text-gray-500 border-2 border-dashed rounded-2xl cursor-pointer hover:border-[#2d4a48] hover:text-[#2d4a48] transition-all">
      <svg
        className="w-8 h-4 mb-8 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 18 18"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L4 7m3-3l3 3M5 12h14" />
      </svg>
      <span className="text-sm text-center">
        Klik di sini untuk memilih file atau tarik file ke sini
      </span>
      {/* <input
        type="file"
        className="hidden"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      /> */}
                        
                         <input
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          setSelectedFile(file);
        
          setModalContent((prev) => ({
            ...prev,
            body: (
              <div className="">
              <h3 className="text-lg mt-2 text-center text-primary font-semibold">Campaign : <span className="font-normal">Campaign B</span></h3>
               <div className="mt-5 flex justify-between text-primary gap-2 w-9/12 mx-auto">
                 <div>
                   <h4>Jumlah Barang : <span className="">{item.jumlah} pcs</span></h4>
                   <h4>Tanggal Tiba : <span className="">{item.tanggal}</span></h4>
                 </div>
                 <div>
                     <h4>ID Donasi : <span className="">{item.id}</span></h4>
                     <h4>Status : <span className="">{item.status}</span></h4>
                 </div>
               </div>
              <div>
                <p className="mt-2 text-center text-sm text-green-600">
                  File dipilih: <strong>{file?.name}</strong>
                </p>
                </div>
                <div className="text-center mt-5">
                      <button onClick={() => kirim(item)} className="text-white bg-primary p-2 rounded-md hover:bg-secondary transition-all">Kirim</button>
                  </div>
                </div>
            ),
          }));
        }}
                          
      />
    </label>
  
    {selectedFile && (
      <p className="mt-2 text-sm text-green-600">
        File dipilih: <strong>{selectedFile.name}</strong>
      </p>
    )}
                    </div>
                    </div>
                    
                 
                  <div className="text-center mt-5">
                      <button onClick={() => kirim(item)} className="text-white bg-primary p-2 rounded-md hover:bg-secondary transition-all">Kirim</button>
                  </div>
                </div>
              ),
            };
            break;
          case "detail":
            content = {
                     title: "Detail Donasi Barang",
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
                                 <p className="text-primary font-primary">ID</p>
                                 <p className="text-primary font-primary">Barang</p>
                                 <p className="text-primary font-primary">Kuantitas</p>
                                 <p className="text-primary font-primary">Tanggal</p>
                                
                             </div>
                             <div className="w-1/2 flex flex-col gap-2">
                                  <p className="text-primary font-primary font-semibold">{item.id}</p>
                                 <p className="text-primary font-primary"> {item.barang}</p>
                                 <p className="text-primary font-primary"> {item.qty}</p>
                                 <p className="text-primary font-primary">{item.tanggal}</p>
                                 <p className="text-primary font-primary"> {item.tujuan}</p>
                             </div>
                          </div>

                          {
                            item.status == "Menunggu" ? (
                                     <div className="flex gap-5 justify-center mt-3 w-9/12 mx-auto">
                                <button onClick={() => terima(item)} className="p-2 rounded-lg bg-primary text-white hover:text-primary hover:bg-secondary">
                                   Terima
                                </button>
                                <button onClick={() => tolak(item)} className="p-2 rounded-lg bg-secondary text-primary hover:text-white hover:bg-primary">
                                   Tolak
                                </button>
                          </div>
                            ) : (
                                ''
                            )
                          }
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
          case "selesai": {
            content = {
              icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faCheckCircle} />,
              title: "Pengajuan Distribusi Selesai",
              body: (
                <div className="">
                 <h3 className="text-lg mt-2 text-center text-primary font-semibold">Judul Pengajuan : <span className="font-normal">{item.judulPengajuan}</span></h3>
                  <div className="mt-5 flex justify-between text-primary gap-2 w-9/12 mx-auto">
                    <div>
                      <h4>Jumlah Dana : <span className="">{item.jumlah}</span></h4>
                      <h4>Tanggal Distribusi : <span className="">{item.tanggal}</span></h4>
                    </div>
                    <div>
                        <h4>Tx Hash : <span className="">{item.txHash}</span></h4>
                        <h4>Status : <span className="">{item.status}</span></h4>
                    </div>
                  </div>
                  <div className="flex w-9/12 gap-2 mx-auto">
                  <div className="mb-4 h-40 w-1/2 p-2 block bg-white rounded-2xl shadow-2xl">
    
                    </div>
                    
                    <div className="mb-4 h-40 p-2 w-1/2 block bg-white rounded-2xl shadow-2xl">
  
                    </div>
  
                  </div>
                  <div className="w-9/12 mx-auto">
                    <h2 className="text-lg mt-2 text-center text-primary font-semibold">Deskripsi</h2>
                    <p className="text-sm text-primary text-center">{item.tujuan}</p>
                  </div>
                
                </div>
              ),
            };
          }
            break;
          default:
            break;
        }
      
        setModalContent(content);
        setModalOpen(true);
      };

  const renderAksi = (item) => {
    if (item.status === "Diterima") {
      return <span onClick={() => openModal(item, "lapor")} className="text-gray-600 hover:underline cursor-pointer">Lapor & Unggah Bukti</span>;
    }
    return <span onClick={() => openModal(item, "detail")} className="text-blue-600 hover:underline cursor-pointer">Lihat Detail</span>;
  };

    const Modal = ({ isOpen, icon, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-6/12 shadow-lg relative">
         <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
               {icon}
            <h4 className="font-semibold my-2 text-primary">{title}</h4>
            <p className="text-sm text-primary my-1">Berisi mengenai data yang telah anda masukan</p>
               
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
    <DashboardVolunteerLayout>
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <h1 className="text-xl font-semibold text-gray-800">Verifikasi Barang Masuk</h1>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Campaign</label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-700"
            value={selectedCampaign}
            onChange={(e) => setSelectedCampaign(e.target.value)}
          >
            <option value="">Pilih campaign</option>
            <option value="bantu-sekolah">Bantu Sekolah</option>
            <option value="bencana-alam">Bencana Alam</option>
          </select>
        </div>

        <div className="overflow-x-auto shadow rounded">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-[#395956] text-white">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Donatur</th>
                <th className="px-4 py-2">Barang</th>
                <th className="px-4 py-2">QTY</th>
                <th className="px-4 py-2">Kualitas</th>
                <th className="px-4 py-2">Campaign</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {paginatedData.map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="px-4 py-2">{item.donatur}</td>
                  <td className="px-4 py-2">{item.barang}</td>
                  <td className="px-4 py-2">{item.qty}</td>
                  <td className="px-4 py-2">{item.kualitas}</td>
                  <td className="px-4 py-2">{item.campaign}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2 flex items-center justify-between">
                    {renderAksi(item)}
                    <span className="ml-2">→</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 pt-4">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-[#395956] text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
        <Modal
  isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        icon ={modalContent.icon}
  title={modalContent.title}
>
  {modalContent.body}
</Modal>
    </DashboardVolunteerLayout>
  );
};


export default VerifikasiBarangMasuk;
