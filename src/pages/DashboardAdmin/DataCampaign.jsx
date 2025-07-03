/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { elements } from "chart.js";

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
  const [selectedNav, setSelectedNav] = useState(0);
  const nav = [
    { id: 0, name: "Data Campaign", element : <DaftarCampaign /> },
    { id: 1, name: "Pengajuan Campaign",  element : <PengajuanCampaign /> },
  
  ]

  return (
    <DashboardLayout>
       <div className="mx-auto flex justify-center gap-2">
              {
                nav.map((item, index) => (
                  <button onClick={() => setSelectedNav(index)} className={`md:p-3 p-2 md:rounded-xl rounded-lg hover:bg-accent hover:text-white font-secondary  ${index === selectedNav ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                    <p>{item.name}</p>
                  </button>
                ))
                    
              }
              
            </div>
      {
        nav[selectedNav].element
      }
    </DashboardLayout>
  )
 
};
const DaftarCampaign = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: "CAMP001",
      namaprogram: "Bantuan Pangan Lebaran",
      kategori: "barang",
      tanggal_mulai: "2024-03-01",
      tanggal_selesai: "2024-03-31",
      target: 1000,
      tercapai: 850,
      deskripsi: "Distribusi sembako kepada keluarga prasejahtera selama Ramadhan.",
      status: "Aktif",
      rekdistribusi: "BNI Syariah - 1234567890",
      metadata: {
        namaLengkap: "Ahmad Zaki",
        nik: "1234567890123456",
        noTelepon: "+6281234567890",
        namaPemilik: "Ahmad Zaki",
        bank: "BNI Syariah",
        noRekening: "1234567890",
      },
      files: {
        fotoCampaign: "foto_lebaran.jpg",
        galeriPendukung: "galeri_lebaran.zip",
        fotoKTP: "ktp_ahmad.jpg",
        fotoDiriKTP: "selfie_ktp_ahmad.jpg"
      },
      distribusi: {
        status: "Selesai",
        tanggal_distribusi: "2024-04-02",
        bukti: "bukti_camp001.jpg",
        konfirmasi_distribusi: "Dikonfirmasi"
      },
      donatur: [
        { nama: "Andi Susanto", tanggal: "2024-03-10", nominal: 500000, email: "andi.s@example.com" },
        { nama: "Budi Santoso", tanggal: "2024-03-12", nominal: 250000, email: "budi.s@example.com" }
      ]
    },
    {
      id: "CAMP002",
      namaprogram: "Beasiswa Anak Yatim",
      kategori: "dana",
      tanggal_mulai: "2024-04-01",
      tanggal_selesai: "2024-09-30",
      target: 75000000,
      tercapai: 62000000,
      deskripsi: "Memberikan beasiswa pendidikan kepada anak-anak yatim di daerah terpencil.",
      status: "Aktif",
      rekdistribusi: "Bank Mandiri - 0987654321",
      metadata: {
        namaLengkap: "Rina Amelia",
        nik: "3271089999990001",
        noTelepon: "+628111223344",
        namaPemilik: "Rina Amelia",
        bank: "Bank Mandiri",
        noRekening: "0987654321"
      },
      files: {
        fotoCampaign: "foto_beasiswa.jpg",
        galeriPendukung: "galeri_beasiswa.zip",
        fotoKTP: "ktp_rina.jpg",
        fotoDiriKTP: "selfie_rina.jpg"
      },
      distribusi: {
        status: "Berlangsung",
        tanggal_distribusi: null,
        bukti: null,
        konfirmasi_distribusi: "Menunggu Konfirmasi"
      },
      donatur: [
        { nama: "Dewi Lestari", tanggal: "2024-04-01", nominal: 750000, email: "dewi.l@example.com" }
      ]
    },
    {
      id: "CAMP003",
      namaprogram: "Pembangunan Mushola",
      kategori: "dana",
      tanggal_mulai: "2024-07-01",
      tanggal_selesai: "2024-12-31",
      target: 200000000,
      tercapai: 15000000,
      deskripsi: "Membantu pembangunan Mushola di wilayah pelosok yang belum memiliki tempat ibadah.",
      status: "Aktif",
      rekdistribusi: "BCA - 1122334455",
      metadata: {
        namaLengkap: "Hendra Purnama",
        nik: "3210012345678901",
        noTelepon: "+628522223333",
        namaPemilik: "Hendra Purnama",
        bank: "BCA",
        noRekening: "1122334455"
      },
      files: {
        fotoCampaign: "foto_mushola.jpg",
        galeriPendukung: "galeri_mushola.zip",
        fotoKTP: "ktp_hendra.jpg",
        fotoDiriKTP: "selfie_hendra.jpg"
      },
      distribusi: null,
      donatur: []
    },
    {
      id: "CAMP004",
      namaprogram: "Santunan Lansia",
      kategori: "dana",
      tanggal_mulai: "2024-06-01",
      tanggal_selesai: "2024-08-01",
      target: 30000000,
      tercapai: 18000000,
      deskripsi: "Santunan rutin kepada para lansia yang hidup sendirian tanpa keluarga.",
      status: "Aktif",
      rekdistribusi: "BTN - 3344556677",
      metadata: {
        namaLengkap: "Nurhayati",
        nik: "3671099998880002",
        noTelepon: "+6289876543210",
        namaPemilik: "Nurhayati",
        bank: "BTN",
        noRekening: "3344556677"
      },
      files: {
        fotoCampaign: "foto_lansia.jpg",
        galeriPendukung: "galeri_lansia.zip",
        fotoKTP: "ktp_nur.jpg",
        fotoDiriKTP: "selfie_nur.jpg"
      },
      distribusi: null,
      donatur: []
    },
    {
      id: "CAMP005",
      namaprogram: "Operasi Gratis",
      kategori: "dana",
      tanggal_mulai: "2024-05-01",
      tanggal_selesai: "2024-10-30",
      target: 100000000,
      tercapai: 20000000,
      deskripsi: "Pembiayaan operasi gratis untuk masyarakat tidak mampu di daerah terpencil.",
      status: "Aktif",
      rekdistribusi: "CIMB Niaga - 5566778899",
      metadata: {
        namaLengkap: "Teguh Santoso",
        nik: "3302123456789000",
        noTelepon: "+6281345678900",
        namaPemilik: "Teguh Santoso",
        bank: "CIMB Niaga",
        noRekening: "5566778899"
      },
      files: {
        fotoCampaign: "foto_operasi.jpg",
        galeriPendukung: "galeri_operasi.zip",
        fotoKTP: "ktp_teguh.jpg",
        fotoDiriKTP: "selfie_teguh.jpg"
      },
      distribusi: null,
      donatur: [
        { nama: "Joko Widodo", tanggal: "2024-05-05", nominal: 1000000, email: "joko.w@example.com" }
      ]
    }
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
      namaprogram: '',
      kategori: '',
      tanggalMulai: '',
      tanggalSelesai: '',
      noTelepon: '',
      targetDana: '',
      deskripsi: '',
      fotoCampaign: null,
      galeriPendukung: null,
      namaLengkap: '',
      nik: '',
      bank: '',
      noRekening: '',
      namaPemilik: '',
      fotoKTP: null,
      fotoDiriKTP: null,
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
          status : "Aktif",
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
     
          <div className="w-11/12 md:w-9/12 mt-5 mx-auto">
              
          
     
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

          </div>
              {isAddForm && (
                   <div className="p-2 w-10/12">

                   <h1 className="font-primary text-primary my-2 font-semibold text-xl">Judul Program</h1>
                  <input
         type="text"
         className="rounded-md border border-gray-500 p-2 w-full block"
         name="namaprogram"
         value={newData.namaprogram}
         onChange={handleChange}
       />
                   <div className="my-2 rounded-md bg-primary">
                     <div className="p-2 flex justify-center gap-2">
                           {/* kiri */}
                           <div className="w-1/2 text-white font-semibold p-2">
                           <div className="mb-2">
       
                               <h3 className="my-1">Kategori</h3>
                             <select
         name="kategori"
         className="w-9/12 my-1 bg-white font-light text-primary p-2 rounded-lg"
         value={newData.kategori}
         onChange={handleChange}
       >
         <option value="">Pilih Kategori</option>
         <option value="Bencana Alam">Bencana Alam</option>
         <option value="Bantuan Sosial">Bantuan Sosial</option>
         <option value="Pendidikan">Pendidikan</option>
       </select>
                           </div>
                             <div className="mb-2">
       
                               <h3 className="my-1">Tanggal Mulai</h3>
                              <input
         type="date"
         name="tanggalMulai"
         className="w-9/12 my-1 bg-white font-light text-primary p-2 rounded-lg"
         value={newData.tanggalMulai}
         onChange={handleChange}
       />
       
                           </div>
                             <div className="mb-2">
       
                               <h3 className="my-1">No Telepon</h3>
                             <input
         type="text"
         name="noTelepon"
         className="w-9/12 my-1 bg-white font-light text-primary p-2 rounded-lg"
         value={newData.noTelepon}
         onChange={handleChange}
       />
                           </div>
                           </div>
                           <div className="w-1/2 text-white p-2">
                                 <div className="mb-2">
       
                               <h3 className="my-1">Target Dana</h3>
                           <input
         type="number"
         name="targetDana"
         className="w-9/12 my-1 bg-white font-light text-primary p-2 rounded-lg"
         value={newData.targetDana}
         onChange={handleChange}
       />
                           </div>
                             <div className="mb-2">
       
                               <h3 className="my-1">Tanggal Selesai</h3>
                                <input
         type="date"
         name="tanggalSelesai"
         className="w-9/12 my-1 bg-white font-light text-primary p-2 rounded-lg"
         value={newData.tanggalSelesai}
         onChange={handleChange}
       />
                           </div>
                           </div>
                   </div>
                   <div className="p-2 mx-2 w-11/12">
                       <h3 className="font-primary  text-white my-2 font-semibold text-xl">Deskripsi Program</h3>
                       <textarea className="w-full border h-52 border-gray-400 bg-white text-primary rounded-md p-2" onChange={handleChange} name="deskripsi" id="">{newData.deskripsi}</textarea>
                 </div>
                   </div>
              
       <div className="flex justify-between gap-2">
                 {/* Foto utama dan galeri pendukung */}
       <div className="my-2">
         <h1 className="font-primary text-primary my-2 font-semibold text-xl">Foto utama Campaign (Thumbnail)</h1>
         <input type="file" name="fotoCampaign" onChange={handleChange} className="rounded-md border border-gray-400 p-2 block" />
       </div>
       
       <div className="my-2">
         <h1 className="font-primary text-primary my-2 font-semibold text-xl">Galeri Foto/Video Pendukung</h1>
         <input type="file" name="galeriPendukung" multiple onChange={handleChange} className="rounded-md border border-gray-400 p-2 block" />
                   </div>
                   </div>
       
                   <div className="my-4 rounded-md bg-primary text-white p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
           <label className="block mb-1">Nama Lengkap (sesuai KTP)</label>
           <input type="text" name="namaLengkap" className="w-full p-2 bg-white text-primary rounded-md" value={newData.namaLengkap} onChange={handleChange} />
       
           <label className="block  mt-2 mb-1">Pilih Bank/Ewallet</label>
           <input type="text" name="bank" className="w-full p-2 bg-white text-primary rounded-md" value={newData.bank} onChange={handleChange} />
       
           <label className="block mt-2 mb-1">Nama Pemilik</label>
           <input type="text" name="namaPemilik" className="w-full bg-white p-2 text-primary rounded-md" value={newData.namaPemilik} onChange={handleChange} />
       
           <label className="block mt-2 mb-1">Foto KTP</label>
           <input type="file" name="fotoKTP" onChange={handleChange} className="w-full bg-white text-primary p-2 rounded-md" />
         </div>
       
         <div>
           <label className="block mb-1">Nomor Induk Kependudukan (NIK)</label>
           <input type="text" name="nik" className="w-full p-2 bg-white text-primary rounded-md" value={newData.nik} onChange={handleChange} />
       
           <label className="block mt-2 mb-1">No Rekening</label>
           <input type="text" name="noRekening" className="w-full bg-white p-2 text-primary rounded-md" value={newData.noRekening} onChange={handleChange} />
                     <div>
                   <label className="block mt-2 mb-1">Alamat</label>
                   <input type="text" name="alamat" className="w-full bg-white p-2 text-primary rounded-md" value={newData.alamat} onChange={handleChange} />
                 </div>
           <label className="block mt-2 mb-1">Foto Diri dengan KTP</label>
           <input type="file" name="fotoDiriKTP" onChange={handleChange} className="w-full bg-white text-primary p-2 rounded-md" />
         </div>
       </div>
       
                   <div className="text-center my-4">
                       <button onClick={handleSave} className="w-auto mx-auto bg-primary hover:bg-secondary cursor-pointer hover:text-primary text-white rounded-lg py-2 px-3 text-base md:text-lg">Kirim Pengajuan</button>
                   </div>
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
                    <td className="py-2 px-4 capitalize">{campaign.kategori}</td>
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
   
  );
}

const PengajuanCampaign = () => {
  const [currentPage, setCurrentPage] = useState(1);
   const [searchTerm, setSearchTerm] = useState("");
 const [programs, setPrograms] = useState([
   {
     id: 1,
     nama: "Tarikum Slam",
     judul: "Air Bersih Lereng Merapi",
     targetDana: 50000000,
     lokasi: "Klaten, Jawa Tengah",
     status: "Menunggu",
     deskripsi: "Penyediaan sumber air bersih untuk warga yang tinggal di lereng Merapi dengan membangun sumur dan instalasi penjernih air."
   },
   {
     id: 2,
     nama: "Anisa Rahma",
     judul: "Donasi Buku Pelosok",
     targetDana: 15000000,
     lokasi: "Lombok, NTB",
     status: "Diterima",
     deskripsi: "Program pengiriman buku bacaan dan pelajaran ke sekolah dasar di daerah terpencil Lombok."
   },
   {
     id: 3,
     nama: "Rian Pratama",
     judul: "Jembatan Desa Terisolir",
     targetDana: 100000000,
     lokasi: "Banten, Jawa Barat",
     status: "Ditolak",
     deskripsi: "Pembangunan jembatan darurat untuk menghubungkan desa yang terisolir akibat banjir dan kerusakan jalan."
   },
   {
     id: 4,
     nama: "Siti Aisyah",
     judul: "Sumur Daerah Kering",
     targetDana: 75000000,
     lokasi: "Sumba Timur, NTT",
     status: "Menunggu",
     deskripsi: "Penggalian dan pembuatan sumur air bersih untuk warga yang mengalami kekeringan panjang."
   },
   {
     id: 5,
     nama: "Budi Hartono",
     judul: "Perahu untuk Nelayan",
     targetDana: 30000000,
     lokasi: "Karimun Jawa, Jateng",
     status: "Diterima",
     deskripsi: "Bantuan perahu dan alat tangkap ikan untuk nelayan kecil agar bisa melaut dengan aman dan efektif."
   },
   {
     id: 6,
     nama: "Rika Ningsih",
     judul: "Panti Asuhan Harapan",
     targetDana: 25000000,
     lokasi: "Bandung, Jawa Barat",
     status: "Menunggu",
     deskripsi: "Perbaikan fasilitas panti asuhan dan pengadaan perlengkapan pendidikan bagi anak-anak yatim piatu."
   },
   {
     id: 7,
     nama: "Deni Maulana",
     judul: "Pelatihan UMKM",
     targetDana: 20000000,
     lokasi: "Sukabumi, Jawa Barat",
     status: "Ditolak",
     deskripsi: "Pelatihan keterampilan dan pengelolaan bisnis untuk pelaku UMKM lokal agar dapat berkembang mandiri."
   },
   {
     id: 8,
     nama: "Lisa Fitriani",
     judul: "Beasiswa Anak Petani",
     targetDana: 45000000,
     lokasi: "Madura, Jawa Timur",
     status: "Diterima",
     deskripsi: "Memberikan beasiswa pendidikan bagi anak-anak petani berprestasi yang kurang mampu."
   },
   {
     id: 9,
     nama: "Agus Haryanto",
     judul: "Kebun Sekolah",
     targetDana: 12000000,
     lokasi: "Bogor, Jawa Barat",
     status: "Menunggu",
     deskripsi: "Membangun kebun edukatif di lingkungan sekolah untuk mendukung program ketahanan pangan."
   },
   {
     id: 10,
     nama: "Nani Kartika",
     judul: "Posyandu Mandiri",
     targetDana: 18000000,
     lokasi: "Tegal, Jawa Tengah",
     status: "Diterima",
     deskripsi: "Peningkatan sarana dan prasarana Posyandu agar pelayanan kesehatan ibu dan anak lebih optimal."
   },
   {
     id: 11,
     nama: "Hendra Wijaya",
     judul: "Pembangunan Mushola",
     targetDana: 70000000,
     lokasi: "Depok, Jawa Barat",
     status: "Menunggu",
     deskripsi: "Membangun mushola baru di pemukiman padat yang belum memiliki tempat ibadah."
   },
   {
     id: 12,
     nama: "Melati Ayu",
     judul: "Sanitasi Sekolah",
     targetDana: 55000000,
     lokasi: "Mataram, NTB",
     status: "Diterima",
     deskripsi: "Pembangunan toilet dan tempat cuci tangan yang layak untuk siswa dan guru di sekolah dasar."
   },
   {
     id: 13,
     nama: "Bayu Wicaksono",
     judul: "Solar Panel Desa",
     targetDana: 95000000,
     lokasi: "Wonosobo, Jawa Tengah",
     status: "Ditolak",
     deskripsi: "Penyediaan panel surya untuk daerah pedalaman yang belum terjangkau listrik PLN."
   },
   {
     id: 14,
     nama: "Winda Permata",
     judul: "Perpustakaan Mini",
     targetDana: 30000000,
     lokasi: "Cilacap, Jawa Tengah",
     status: "Diterima",
     deskripsi: "Pendirian perpustakaan mini keliling untuk meningkatkan literasi di kampung pesisir."
   },
   {
     id: 15,
     nama: "Indra Lesmana",
     judul: "Bengkel Gratis",
     targetDana: 40000000,
     lokasi: "Palembang, Sumsel",
     status: "Menunggu",
     deskripsi: "Bengkel keliling gratis untuk perbaikan motor warga tidak mampu dan pelatihan mekanik muda."
   },
   {
     id: 16,
     nama: "Rosa Kurnia",
     judul: "Klinik Gratis Lansia",
     targetDana: 80000000,
     lokasi: "Padang, Sumbar",
     status: "Diterima",
     deskripsi: "Layanan pemeriksaan kesehatan gratis untuk lansia setiap minggu di desa terpencil."
   },
   {
     id: 17,
     nama: "Slamet Riyadi",
     judul: "Koperasi Sekolah",
     targetDana: 23000000,
     lokasi: "Purwokerto, Jateng",
     status: "Ditolak",
     deskripsi: "Pengembangan koperasi sekolah sebagai tempat belajar kewirausahaan siswa."
   },
   {
     id: 18,
     nama: "Andini Safira",
     judul: "Laptop untuk Siswa",
     targetDana: 60000000,
     lokasi: "Cirebon, Jawa Barat",
     status: "Menunggu",
     deskripsi: "Pengadaan laptop untuk siswa tidak mampu guna menunjang pembelajaran digital."
   },
   {
     id: 19,
     nama: "Tegar Prasetyo",
     judul: "Pengadaan Air Bersih",
     targetDana: 51000000,
     lokasi: "Grobogan, Jateng",
     status: "Diterima",
     deskripsi: "Proyek pembuatan jaringan pipa air bersih dari sumber mata air ke desa rawan kekeringan."
   },
   {
     id: 20,
     nama: "Lutfiana Dewi",
     judul: "Rumah Ramah Anak",
     targetDana: 67000000,
     lokasi: "Kudus, Jawa Tengah",
     status: "Menunggu",
     deskripsi: "Pembangunan pusat kegiatan anak-anak agar bisa bermain dan belajar dengan aman."
   }
 ]);
   const itemsPerPage = 5;
 
   const filteredPrograms = programs.filter((item) =>
     item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.judul.toLowerCase().includes(searchTerm.toLowerCase())
   );
 
   const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
   const startIndex = (currentPage - 1) * itemsPerPage;
   const displayedPrograms = filteredPrograms.slice(startIndex, startIndex + itemsPerPage);
 
   const formatRupiah = (angka) =>
     new Intl.NumberFormat("id-ID", {
       style: "currency",
       currency: "IDR",
     }).format(angka);
 
   const statusColor = {
     Menunggu: "text-yellow-500",
     Diterima: "text-green-600",
     Ditolak: "text-red-600",
   };
 
   const handleStatusChange = (id, newStatus) => {
     setPrograms((prev) =>
       prev.map((p) =>
         p.id === id ? { ...p, status: newStatus } : p
       )
     );
   };
 
   return (
   
     <div className="p-6 bg-white mt-5 rounded-lg shadow">
       {/* Header & Search */}
       <div className="flex justify-between items-center mb-4">
         <h2 className="text-xl font-semibold">Daftar Program</h2>
         <div className="relative w-64">
           <FontAwesomeIcon
             icon={faSearch}
             className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
           />
           <input
             type="text"
             placeholder="Cari..."
             value={searchTerm}
             onChange={(e) => {
               setSearchTerm(e.target.value);
               setCurrentPage(1);
             }}
             className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm outline-none focus:outline-none focus:ring-1 focus:ring-accent border-primary"
           />
         </div>
       </div>
 
       {/* Table */}
       <div className="overflow-x-auto">
         <table className="min-w-full table-auto border-collapse">
           <thead className="bg-primary text-white rounded-2xl">
             <tr>
               <th className="p-3 text-left">Nama</th>
               <th className="p-3 text-left">Judul Program</th>
               <th className="p-3 text-left">Target Dana</th>
               <th className="p-3 text-left">Lokasi</th>
               <th className="p-3 text-left">Status</th>
               <th className="p-3 text-left">Aksi</th>
             </tr>
           </thead>
           <tbody>
             {displayedPrograms.length > 0 ? (
               displayedPrograms.map((item) => (
                 <tr key={item.id} className="border-b hover:bg-gray-50">
                   <td className="p-3">
                     <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
                         {item.nama.split(" ").map((n) => n[0]).join("")}
                       </div>
                       <span>{item.nama}</span>
                     </div>
                   </td>
                   <td className="p-3">
                     <p className="font-medium">{item.judul}</p>
                     <p className="text-sm text-gray-500">Program sosial untuk masyarakat.</p>
                   </td>
                   <td className="p-3">{formatRupiah(item.targetDana)}</td>
                   <td className="p-3">{item.lokasi}</td>
                   <td className="p-3">
                     <select
                       value={item.status}
                       onChange={(e) => handleStatusChange(item.id, e.target.value)}
                       className={`text-sm font-semibold rounded px-2 py-1 bg-transparent ${statusColor[item.status]} focus:outline-none`}
                     >
                       <option value="Menunggu">Menunggu</option>
                       <option value="Diterima">Diterima</option>
                       <option value="Ditolak">Ditolak</option>
                     </select>
                   </td>
                   <td className="p-3 text-primary hover:underline cursor-pointer">
                     <Link state={item} to='/programdetailcard'>
                     Lihat Detail →
                     </Link>
                   </td>
                 </tr>
               ))
             ) : (
               <tr>
                 <td colSpan="6" className="p-4 text-center text-gray-500">
                   Tidak ada data yang cocok.
                 </td>
               </tr>
             )}
           </tbody>
         </table>
 
         {/* Pagination */}
         <div className="flex justify-between items-center mt-4">
           <button
             className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50"
             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
             disabled={currentPage === 1}
           >
             Prev
           </button>
           <div className="text-sm text-gray-700">
             Halaman {currentPage} dari {totalPages || 1}
           </div>
           <button
             className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50"
             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
             disabled={currentPage === totalPages}
           >
             Next
           </button>
         </div>
       </div>
     </div>

   );
 }

export default DataCampaign;
