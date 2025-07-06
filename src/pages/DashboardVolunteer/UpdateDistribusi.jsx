import React from "react";
import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout";
import UploadPreview from "../../components/UploadPreview";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect} from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { faCheckCircle, faEnvelopeCircleCheck, faFileAlt, faInfo, faInfoCircle, faPlus, faQuestionCircle, faUpload, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
const UpdateDistribusi = () => {
      const [user, setUser] = useState(() => {
                const savedUser = localStorage.getItem('user');
                return savedUser ? JSON.parse(savedUser) : null;
      }) 
      const [bukti1, setBukti1] = useState(null);
      const [bukti2, setBukti2] = useState(null);
  const [isAdd, setIsAdd] = useState(false);  
    return (
        <DashboardVolunteerLayout>
          
                <div className="mt-5">
          <DistribusiDonasi bukti1={bukti1} setBukti1={setBukti1} bukti2={bukti2} setBukti2={setBukti2} />
          

                </div>
        </DashboardVolunteerLayout>
    )
}

const Modal = ({ isOpen, icon, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-6/12 shadow-lg relative">
        <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
          {icon}
          <h4 className="font-semibold my-2 text-primary">{title}</h4>
          <p className="text-sm text-primary my-1">Berisi mengenai data yang telah anda masukan</p>
        </div>
        <div className="w-11/12 mx-auto">{children}</div>
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

const ModalContentLapor = ({ item, bukti1, setBukti1, bukti2, setBukti2, kirim }) => {
  const handleFilePreview = (file, setFile) => (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(URL.createObjectURL(selected));
    }
  };

  return (
    <div>
      <h3 className="text-lg mt-2 text-center text-primary font-semibold">
        Judul Pengajuan : <span className="font-normal">{item.judulPengajuan}</span>
      </h3>
      <div className="mt-5 flex justify-between text-primary gap-2 w-9/12 mx-auto">
        <div>
          <h4>Jumlah Dana : <span>{item.jumlah}</span></h4>
          <h4>Tanggal Distribusi : <span>{item.tanggal}</span></h4>
        </div>
        <div>
          <h4>Tx Hash : <span>{item.txHash}</span></h4>
          <h4>Status : <span>{item.status}</span></h4>
        </div>
      </div>

      <div className="flex w-9/12 gap-4 mx-auto mt-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-primary mb-1">
            Foto Unggah Bukti Transaksi (Kuitansi/Nota)
          </label>
          <input type="file" accept="image/*" onChange={handleFilePreview(bukti1, setBukti1)} className="w-full p-2 border rounded-md" />
          {/* {bukti1 && <img src={bukti1} alt="Bukti 1" className="mt-2 h-32 w-full object-cover rounded-md shadow" />} */}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-primary mb-1">
            Foto Diri dengan Dokumentasi - SANGAT DIANJURKAN
          </label>
          <input type="file" accept="image/*" onChange={handleFilePreview(bukti2, setBukti2)} className="w-full p-2 border rounded-md" />
          {/* {bukti2 && <img src={bukti2} alt="Bukti 2" className="mt-2 h-32 w-full object-cover rounded-md shadow" />} */}
        </div>
      </div>

      <div className="w-9/12 mx-auto mt-4">
        <h2 className="text-lg text-center text-primary font-semibold">Deskripsi</h2>
        <p className="text-sm text-primary text-center">{item.tujuan}</p>
      </div>

      <div className="text-center mt-5">
        <button
          onClick={() => kirim(item)}
          className="text-white bg-primary px-6 py-2 rounded-md hover:bg-secondary transition-all"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};


const DistribusiForm = ({ onClose,  setDistribusiData, distribusiData, setIsAdd }) => {

  const [newData, setNewData] = useState({
    judulProgram : "",
    jumlahDana: "",
    file: null,
    deskripsi: "",
  });

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
     setNewData((prev) => ({
      ...prev,
      file: file.name, // hanya simpan nama file
    }));
    }
  };

  const handleSubmit = (e) => {
   e.preventDefault();
  const generateId = () => {
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0'); // hasil misal: 007, 123
  return `DST-${random}`;
};
  const today = new Date();
  const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${
  (today.getMonth() + 1).toString().padStart(2, '0')
  }/${today.getFullYear()}`;

    const newDistribusi = {
      id: generateId(),
      judulPengajuan: newData.judulProgram,
      tujuan: newData.deskripsi,
      jumlah: newData.jumlahDana,
      tanggal: formattedDate,
      status: 'Menunggu Konfirmasi',
      txHash: '0xabc002'
    };

    setDistribusiData((prevData) => [...prevData, newDistribusi]);
    setIsAdd(false);
    // onClose();
    
    toast.success("Data berhasil disimpan!");
    
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-xl text-gray-700 mb-2 flex items-center gap-2">
       <p className="font-semibold"> Pengajuan Distribusi  <span className="font-normal">: Campaign B</span></p>
      </div>

      <div className="p-4 rounded-lg bg-primary text-white">
        <div className="flex justify-between gap-3">
            <div className="flex w-1/2 flex-col gap-1">
              <p className="my-1 font-semibold">Judul Program</p>
              <input type="text" value={newData.judulProgram} name="judulProgram" onChange={(e) => setNewData({ ...newData, judulProgram: e.target.value })} placeholder="" className="p-2 w-full rounded-md bg-white text-primary" />
            </div>
            <div className="flex w-1/2 flex-col gap-1">
              <p className="my-1 font-semibold">Jumlah Dana</p>
              <input type="text" name="jumlahDana" onChange={(e) => setNewData({ ...newData, jumlahDana: e.target.value })} value={newData.jumlahDana} className="p-2 w-full rounded-md bg-white text-primary" />
              <p className="text-light text-green-500">Saldo tersedia : Rp. 8.500.000</p>
            </div>
        </div>
        <div className="w-1/2 mt-2">
          <p>
            Dokumen Pendukung (Opsional) : 
            <span className="text-primary"> (pdf, png, jpg, jpeg)</span>
          </p>
         <div
      className="p-2 border border-dashed bg-white h-28 border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition"
      onClick={handleClick}
    >
      {preview ? (
        <img src={preview} alt="Preview" className="h-full object-contain" />
      ) : (
        <div className="text-gray-500 text-sm flex flex-col items-center gap-1">
          <FontAwesomeIcon icon={faUpload} className="text-xl" />
          <span>Unggah Gambar</span>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
        </div>
           <div>
        <label className="block text-white my-2">Deskripsi</label>
        <textarea
          className="w-full p-2 rounded border bg-white text-primary border-gray-300 resize-none"
          rows="4"
          value={newData.deskripsi}
          onChange={(e) => setNewData({ ...newData, deskripsi: e.target.value })}
          placeholder="Tulis deskripsi di sini..."
        ></textarea>
      </div>
      </div>
    

      

   

   

      <div className="flex gap-2 mt-4">
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary"
        >
          Ajukan
        </button>
        <button
          type="button"
          onClick={() => setIsAdd(false)}
          className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          Batal
        </button>
      </div>
    </form>
  );
};

const DetailDistribusi = ({ data, onClose }) => {
  if (!data) return null;
  console.log(data);

  const { status, file, deskripsi, txHash, buktiUpload } = data;

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-700 mb-2 flex items-center gap-2">
        📍 Lokasi Distribusi: <span className="font-semibold">Kecamatan B</span>
      </div>
      <div className="text-sm text-gray-700 mb-4 flex items-center gap-2">
        📅 Tanggal Distribusi: <span className="font-semibold">09/05/2025</span>
      </div>

      <div>
        <h4 className="text-primary font-semibold mb-1">Status Distribusi</h4>
        <p className="text-gray-800 border border-gray-300 p-2 rounded bg-gray-50">
          {status || "-"}
        </p>
      </div>

      <div>
        <h4 className="text-primary font-semibold mb-1">Bukti Upload</h4>
        {file || buktiUpload ? (
          <div className="p-2 border border-gray-300 rounded bg-gray-50 text-sm">
            File: {file?.name || buktiUpload}
          </div>
        ) : (
          <p className="text-gray-500 italic">Belum ada file</p>
        )}
      </div>

      <div>
        <h4 className="text-primary font-semibold mb-1">Tx Hash</h4>
        <p className="text-gray-800 border border-gray-300 p-2 rounded bg-gray-50 break-all">
          {txHash || "-"}
        </p>
      </div>

      <div>
        <h4 className="text-primary font-semibold mb-1">Deskripsi</h4>
        <p className="text-gray-800 border border-gray-300 p-2 rounded bg-gray-50 whitespace-pre-line">
          {deskripsi || "-"}
        </p>
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

// upload preview

// akhir upload preview

const DistribusiDonasi = ({ bukti1, setBukti1, bukti2, setBukti2}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLihat, setModalLihat] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "", icon : '' });
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [isAdd, setIsAdd] = useState(false);


  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [distribusiData, setDistribusiData] = useState([
    {
      id: 'DST-003',
      judulPengajuan: 'Pembelian Sembako',
      tujuan: 'Pembelian 100 paket sembako',
      jumlah: 5000000,
      tanggal: '02/07/2024',
      status: 'Selesai Dilaporkan',
      aksi: 'Lihat Laporan',
      txHash: '0xabc001'
    },
    {
      id: 'DST-003',
      judulPengajuan: 'Pembelian Sembako',
      tujuan: 'Pembelian 100 paket sembako',
      jumlah: 5000000,
      tanggal: '02/07/2024',
      status: 'Disetujui',
      aksi: 'Lapor & Unggah bukti',
      txHash: '0xabc002'
    },
    {
      id: 'DST-003',
      judulPengajuan: 'Pembelian Sembako',
      tujuan: 'Pembelian 100 paket sembako',
      jumlah: 5000000,
      tanggal: '02/07/2024',
      status: 'Ditolak',
      aksi: 'Lihat Detail',
      txHash: '0xabc003'
    },
    {
      id: 'DST-004',
      judulPengajuan: 'Alat Tulis Sekolah',
      tujuan: 'Pembelian alat tulis anak-anak',
      jumlah: 3000000,
      tanggal: '03/07/2024',
      status: 'Selesai Dilaporkan',
      aksi: 'Lihat Laporan',
      txHash: '0xabc004'
    },
    {
      id: 'DST-005',
      judulPengajuan: 'Air Bersih Darurat',
      tujuan: 'Pengadaan air bersih darurat',
      jumlah: 7000000,
      tanggal: '03/07/2024',
      status: 'Disetujui',
      aksi: 'Lapor & Unggah bukti',
      txHash: '0xabc005'
    },
    {
      id: 'DST-006',
      judulPengajuan: 'Donasi Kebakaran',
      tujuan: 'Donasi untuk korban kebakaran',
      jumlah: 10000000,
      tanggal: '04/07/2024',
      status: 'Ditolak',
      aksi: 'Lihat Detail',
      txHash: '0xabc006'
    },
    {
      id: 'DST-007',
      judulPengajuan: 'Logistik Bencana',
      tujuan: 'Pembelian selimut dan matras',
      jumlah: 4500000,
      tanggal: '04/07/2024',
      status: 'Disetujui',
      aksi: 'Lapor & Unggah bukti',
      txHash: '0xabc007'
    },
    {
      id: 'DST-008',
      judulPengajuan: 'Pengadaan Dapur Umum',
      tujuan: 'Pengadaan dapur umum',
      jumlah: 6000000,
      tanggal: '05/07/2024',
      status: 'Selesai Dilaporkan',
      aksi: 'Lihat Laporan',
      txHash: '0xabc008'
    },
    {
      id: 'DST-009',
      judulPengajuan: 'Logistik Banjir',
      tujuan: 'Bantuan logistik banjir',
      jumlah: 8000000,
      tanggal: '06/07/2024',
      status: 'Disetujui',
      aksi: 'Lapor & Unggah bukti',
      txHash: '0xabc009'
    },
    {
      id: 'DST-010',
      judulPengajuan: 'Perlengkapan Kesehatan',
      tujuan: 'Pembelian perlengkapan mandi',
      jumlah: 2000000,
      tanggal: '06/07/2024',
      status: 'Ditolak',
      aksi: 'Lihat Detail',
      txHash: '0xabc010'
    },
  ]);
  const kirim = (item) => {
    toast.success("Pengajuan berhasil dikirimkan!");
    // update status dari item menjadi "Terkonfirmasi"
    const updatedData = distribusiData.map((data) => {
      if (data.id === item.id) {
        return { ...data, status: "Selesai Dilaporkan" };
      }
      return data;
    });
    setDistribusiData(updatedData);
    setModalOpen(false);
  }
  
  
   // modal
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
            icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faFileAlt} />,
            title: "Lapor Distribusi",
            body: (
              <ModalContentLapor
                item={item}
                bukti1={bukti1}
                setBukti1={setBukti1}
                bukti2={bukti2}
                setBukti2={setBukti2}
                kirim={kirim}
              />
            ),
          };
          break;
        case "detail":
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
                                <p className="text-primary font-primary font-semibold">{item.judulPengajuan}</p>
                               <p className="text-primary font-primary"> {item.jumlah}</p>
                               <p className="text-primary font-primary">{item.tanggal}</p>
                               <p className="text-primary font-primary"> {item.tujuan}</p>
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
      switch (item.status) {
        case "Menunggu Konfirmasi":
          return (
            <button
              className="text-blue-500 hover:underline"
              onClick={() => openModal(item, "detail")}
            >
              Lihat Detail →
            </button>
          );
        case "Disetujui":
          return (
            <button
              className="text-green-600 hover:underline"
              onClick={() => openModal(item, "lapor")}
            >
              Lapor & Unggah Bukti →
            </button>
          );
        case "Ditolak":
          return (
            <button
              className="text-gray-600 hover:underline"
              onClick={() => openModal(item, "detail")}
            >
              Lihat Detail →
            </button>
          );
        case "Selesai Dilaporkan":
          return (
            <button
              className="text-gray-600 hover:underline"
              onClick={() => openModal(item, "selesai")}
            >
              Lihat Detail →
            </button>
          )
       
        default:
          return null;
      }
    };
    
  
  
  
  const filteredData = selectedCampaign
  ? distribusiData.filter((d) => d.campaign === selectedCampaign)
  : distribusiData;
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const [selectedItem, setSelectedItem] = useState();
  const showModal = (status, item) => {
  const lowerStatus = status.toLowerCase();


  if (lowerStatus === 'menunggu') {
    setModalOpen(true);           // untuk modal update
    setModalLihat(false);     // modal lihat dimatikan
  } else if (lowerStatus == 'dalam perjalanan') {
    setModalOpen(true);          // modal update dimatikan
    setModalLihat(false);      // untuk modal lihat
  } else {
    setModalOpen(false);          // default modal update dimatikan
    setModalLihat(true);      // default ke modal lihat
  }
    setSelectedItem(item);
  }


  return (
    
      isAdd ? (
        <div className="p-2 w-6/12 ">
          <DistribusiForm setIsAdd={setIsAdd} setDistribusiData={setDistribusiData} />
        </div>
      ) : (
            <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Pengajuan Distribusi Donasi</h1>
        
      </div>
     <div>
  <label className="block font-semibold text-gray-700">Campaign</label>
  <select
    className="mt-1 border rounded w-full p-2"
    value={selectedCampaign}
    onChange={(e) => setSelectedCampaign(e.target.value)}
  >
    <option value="">Pilih campaign</option>
    <option value="bencana1">Bencana Alam 1</option>
    <option value="bencana2">Bencana Alam 2</option>
  </select>
</div>

      <div>
          {/* {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <DistribusiForm item={selectedItem} setDistribusiData={setDistribusiData} distribusiData={distribusiData} onClose={() => setModalOpen(false)} />
        </Modal>
      )} */}
       {/* {modalLihat && (
        <Modal onClose={() => setModalLihat(false)}>
          <DetailDistribusi data={selectedItem}  onClose={() => setModalLihat(false)} />
        </Modal>
      )} */}
        
       
                <h2 className="text-lg font-semibold text-gray-800">Riwayat Distribusi</h2>
        <div className="overflow-x-auto  rounded-sm shadow-xl overflow-hidden">
        <table className="min-w-full mt-5 rounded-sm shadow-2xl overflow-hidden text-sm text-left">
  <thead className="bg-[#2d4a48] text-white">
    <tr>
      <th className="px-4 py-2">ID</th>
      <th className="px-4 py-2">Tujuan</th>
      <th className="px-4 py-2">Jumlah Rp</th>
      <th className="px-4 py-2">Tanggal</th>
      <th className="px-4 py-2">Status</th>
      <th className="px-4 py-2">Aksi</th>
    </tr>
  </thead>
  <tbody>
    {paginatedData.map((item, idx) => (
      <tr key={idx} className="border-t">
        <td className="px-4 py-2">{item.id}</td>
        <td className="px-4 py-2">{item.tujuan}</td>
        <td className="px-4 py-2">
          Rp {item.jumlah.toLocaleString("id-ID")}
        </td>
        <td className="px-4 py-2">{item.tanggal}</td>
        <td className="px-4 py-2">{item.status}</td>
        <td className="px-4 py-2">
          {
            renderAksi(item)
      }
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
        <Modal
  isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        icon ={modalContent.icon}
  title={modalContent.title}
>
  {modalContent.body}
</Modal>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-2 py-1 rounded border hover:bg-gray-100"
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
          <span className="px-2 py-1">{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-2 py-1 rounded border hover:bg-gray-100"
            disabled={currentPage === totalPages}
          >
            {'>'}
          </button>
        </div>

        {/* penutup pagination */}
        <div className="flex flex-end justify-end w-full">
        <button onClick={() => setIsAdd(true)} className="bg-primary text-white px-4 py-2 rounded hover:text-primary hover:bg-secondary">
          <FontAwesomeIcon icon={faPlus} /> Ajukan Penyaluran Baru
        </button>
        </div>
     
    </div>
     </div>
      )
    
  
          )
   
};




export default UpdateDistribusi;