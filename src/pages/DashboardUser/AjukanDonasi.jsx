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
  noTelepon: '',
  targetDana: '',
  tanggalSelesai: '',
  deskripsi : '',
  buktiIdentitas: null,
  lokasiTKP: null,
});

const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (files) {
    setNewData((prev) => ({ ...prev, [name]: files[0] }));
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
    noTelepon,
    targetDana,
    tanggalSelesai,
    buktiIdentitas,
    lokasiTKP,
  } = newData;

  if (
    judulProgram &&
    kategori &&
    tanggalMulai &&
    noTelepon &&
    targetDana &&
    tanggalSelesai &&
    buktiIdentitas &&
    lokasiTKP
  ) {
    console.log('Berhasil melakukan pengajuan', newData);
    resetForm();
    // toast.success('Berhasil melakukan pengajuan');
    setShowModal(true);
  } else {
    console.log(newData)
    console.log('Semua field harus diisi!');
    toast.error('Semua field harus diisi');
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
            </div>
            <div className="flex justify-between gap-2">
                <div>

                <h1 className="font-primary text-primary my-2 font-semibold text-xl">Unggah Bukti Identitas</h1>
               <input
  type="file"
  name="buktiIdentitas"
  className="rounded-md border border-gray-400 p-2"
  onChange={handleChange}
/>
                </div>
                <div>
                    <h1 className="font-primary text-primary my-2 font-semibold text-xl">Unggah TKP</h1>
                         <input
  type="file"
  name="lokasiTKP"
  className="rounded-md border border-gray-400 p-2"
  onChange={handleChange}
/>
                </div>
            </div>
            <div>
                <h3 className="font-primary text-primary my-2 font-semibold text-xl">Deskripsi</h3>
                <textarea className="w-full border border-gray-400 rounded-md p-2" onChange={handleChange} name="deskripsi" id="">{newData.deskripsi}</textarea>
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
        <p className="my-1 text-primary font-primary text-base">Silahkan pantau donasi yang telah diajukan, untuk mengetahui status pengajuan</p>
        <p className="my-1 text-primary font-primary text-base">Akun anda akan menjadi volunteer setelah donasi diterima</p>
        <button onClick={() => location.reload()} className="p-2 rounded-xl my-2 w-4/12 bg-accent text-white hover:bg-secondary hover:text-primary">Tutup</button>
      </div>
       
        
  
    </div>
  )
}

export default AjukanDonasi;