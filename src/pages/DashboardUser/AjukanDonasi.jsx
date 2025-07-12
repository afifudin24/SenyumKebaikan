import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
const AjukanDonasi = () => {
  const [showModal, setShowModal] = useState(false);
  const [newData, setNewData] = useState({
    judulProgram: '',
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
  
  // Handler masih sama:
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setNewData((prev) => ({ ...prev, [name]: files.length > 1 ? files : files[0] }));
    } else {
      setNewData((prev) => ({ ...prev, [name]: value }));
    }
  };
const resetForm = () => {
 
  setNewData({
    judulProgram: '',
    kategori: '',
    tanggalMulai: '',
    noTelepon: '',
    targetDana: '',
    tanggalSelesai: '',
    deskripsi : '',
    buktiIdentitas: null,
    lokasiTKP: null,
  });

  console.log('databaru', newData);
}

const handleSave = () => {
  const {
    judulProgram,
    kategori,
    tanggalMulai,
    tanggalSelesai,
    noTelepon,
    targetDana,
    deskripsi,
    fotoCampaign,
    galeriPendukung,
    namaLengkap,
    nik,
    bank,
    noRekening,
    namaPemilik,
    fotoKTP,
    fotoDiriKTP
  } = newData;
  
  if (
    judulProgram &&
    kategori &&
    tanggalMulai &&
    tanggalSelesai &&
    noTelepon &&
    targetDana &&
    deskripsi &&
    fotoCampaign &&
    galeriPendukung &&
    namaLengkap &&
    nik &&
    bank &&
    noRekening &&
    namaPemilik &&
    fotoKTP &&
    fotoDiriKTP
  ) {
    // kirim data
    setShowModal(true);
    toast.success("Berhasil melakukan pengajuan");
  } else {
    toast.error("Semua field wajib diisi!");
  }
  
};
    return (
        <DashboardLayout>
            <div className="p-2 w-10/12">

            <h1 className="font-primary text-primary my-2 font-semibold text-xl">Judul Program</h1>
           <input
  type="text"
  className="rounded-md border border-gray-500 p-2 w-full block"
  name="judulProgram"
  value={newData.judulProgram}
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
        
        <ModalSuccess showModal={showModal} setShowModal={setShowModal} />
        </DashboardLayout>
    );
}

const ModalSuccess = ({showModal, setShowModal}) => {
  return (
   <div
  className={`rounded-xl mt-4 mb-4 text-center  ${
    showModal ? "w-auto opacity-100 h-auto scale-100 " : "w-0 h-0 opacity-0 scale-95 "
  } md:w-6/12  duration-300 transition-all z-999 top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-400`}
>
      <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
        <FontAwesomeIcon icon={faCheckCircle} className="text-5xl  text-accent"  />
      <h4 className="font-semibold my-2 text-primary">Selamat, Pengajuan Anda Telah Berhasil.</h4>
     
        <FontAwesomeIcon onClick={() => setShowModal(false)} className="absolute top-2 right-2" icon={faTimes} />
      </div>
      <div className="mx-auto w-11/12 md:w-8/12 text-center gap-6 mt-5">
        <p className="my-1 text-primary font-primary text-base">Status : Menunggu Konfirmasi Admin</p>
        <p className="my-1 text-primary font-primary text-base">Silahkan pantau campaign anda untuk agar tranparansi bedampak, dan lakukan tugas anda sebagai volunteer sebaik mungkin </p>
        {/* <p className="my-1 text-primary font-primary text-base">Akun anda akan menjadi volunteer setelah donasi diterima</p> */}
        <button onClick={() => location.reload()} className="p-2 rounded-xl my-2 w-4/12 bg-accent text-white hover:bg-secondary hover:text-primary">Tutup</button>
      </div>
       
        
  
    </div>
  )
}

export default AjukanDonasi;