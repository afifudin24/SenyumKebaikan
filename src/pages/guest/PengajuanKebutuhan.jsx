import React from "react";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import toast from "react-hot-toast";
import baju from "../../assets/baju.png"
import SignatureCanvas from 'react-signature-canvas';
import { faEnvelopeCircleCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PengajuanKebutuhan = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data)

    const [modalSuccess, setModalSuccess] = useState(false);

    const refreshHalaman = () => {
        window.location.reload();
        setModalSuccess(false);
    }

    return (
        <div>
            <Navbar />
            <Container className={"mt-20"}>
                <div className="p-2 w-11/12 mx-auto">
                   
                    <div className="flex gap-2">
                        <div className="w-4/12 text-center ">
                            <img className="mx-auto" src={data.image} alt="" />
                        </div>
                        <div className="w-8/12">
                            <p className="text-primary font-semibold text-lg md:text-2xl xl:text-4xl">{data.barang}</p>
                          
                            <div className="bg-primary p-3 mt-5 w-full">
                                <div className="w-full bg-white rounded-lg">
                                    <div className="bg-accent p-1 rounded-lg" style={{ width: data.percent }}>

                                    </div>
                                </div>
                                <div className="flex justify-between mt-2" style={{ width: data.percent }}>
                                    <p className="text-white font-secondary font-light">
                                            {data.total} Terdonasikan
                                    </p>
                                    <p className="text-white font-secondary font-light">
                                        Sisa {data.sisa} Pcs
                                    </p>
                                </div>
                            </div>
                            <p className="text-primary font-secondary mt-5">
                            Persediaan baju tidak tentu jika anda memang di anggap membutuhkan dan stok barang masih ada maka pengajuan anda di terima tinggal menunggungu konfirmasi
                            </p>
                        </div>

                    </div>
                    <DonationForm modal={modalSuccess} setModal={setModalSuccess} />

                    <ModalSuccess modal={modalSuccess} refreshHalaman={refreshHalaman} setModal={setModalSuccess} />
                </div>
            </Container>
            <Footer />
        </div>
    )
}

const DonationForm = ({modal, setModal}) => {
    const signatureRef = useRef(null);
  const [dataForm, setDataForm] = useState({
    namaLengkap: '',
    email: '',
    noTlp: '',
    alamat: '',
    identitas: null,
    kategoriBarang: '',
    namaBarang: '',
    jumlah: '',
    urgensi: '',
    alasan: '',
    dokumenPendukung: null,
    fotoTambahan: null,
    tandaTangan: '',
    persetujuan1: false,
    persetujuan2: false,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
    }));
  };

  const handleClearSignature = () => {
    signatureRef.current.clear();
    setDataForm((prev) => ({ ...prev, tandaTangan: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Simpan tanda tangan base64
    // const signatureData = signatureRef.current
    // ? signatureRef.current.getTrimmedCanvas().toDataURL("image/png")
      // : null;
      const signatureData = signatureRef.current.toDataURL("image/png");

    console.log(signatureData);

      console.log("Functions:", Object.keys(signatureRef.current || {}));
  
    // Validasi isian kosong (kecuali file dan checkbox)
    const requiredFields = [
      'namaLengkap', 'email', 'noTlp', 'alamat',
      'kategoriBarang', 'namaBarang', 'jumlah', 'urgensi', 'alasan'
    ];
  
    for (const field of requiredFields) {
      if (!dataForm[field]) {
        toast.error('Pastikan mengisi semua data');
        return;
      }
    }
  
    // Validasi tanda tangan
    if (!signatureRef.current || signatureRef.current.isEmpty()) {
      toast.error('Tanda tangan wajib diisi');
      return;
    }
  
    const formData = new FormData();
  
    Object.entries(dataForm).forEach(([key, val]) => {
      if (val instanceof File) {
        formData.append(key, val);
      } else if (key === 'tandaTangan') {
        formData.append('tandaTangan', signatureData);
      } else {
        formData.append(key, val);
      }
    });
  
    
    const objData = {};
for (let [key, value] of formData.entries()) {
  // Jika value adalah File, kamu bisa simpan nama filenya saja atau base64 (jika diperlukan)
  if (value instanceof File) {
    objData[key] = value.name; // contoh simpan nama file saja
  } else {
    objData[key] = value;
  }
      }
      const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
objData['tanggal'] = `${yyyy}-${mm}-${dd}`; // "2025-06-05"

const newNotification = {
  title: "Pengajuan Barang",
  type: "pengajuan",
  data: objData,
};
    
      const existingNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
      const updatedNotifications = [...existingNotifications, newNotification];
    
      localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
  
    // Di sini kirim formData ke backend kalau perlu (pakai fetch/Axios)
  
      toast.success('Berhasil mengajukan');
      setModal(true);
  
    // Reset form opsional:
    // setDataForm({ ...kosongin kembali semua state });
    // signatureRef.current.clear();
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 space-y-8">
      {/* === Informasi Pribadi === */}
      <Section title="Informasi Pribadi Pemohon">
        <Input label="Nama Lengkap" name="namaLengkap" value={dataForm.namaLengkap} onChange={handleChange} />
        <Input label="Email" name="email" type="email" value={dataForm.email} onChange={handleChange} />
        <Input label="No Tlp" name="noTlp" value={dataForm.noTlp} onChange={handleChange} />
        <Textarea label="Alamat Lengkap" name="alamat" value={dataForm.alamat} onChange={handleChange} />
        <FileUpload label="Unggah Foto Identitas (KTP/SIM)" name="identitas" onChange={handleChange} />
      </Section>

      {/* === Kebutuhan === */}
      <Section title="Detail Kebutuhan Barang">
        <Select
          label="Kategori Barang"
          name="kategoriBarang"
          options={['Makanan', 'Pakaian', 'Obat-obatan']}
          value={dataForm.kategoriBarang}
          onChange={handleChange}
        />
        <Input label="Nama Barang" name="namaBarang" value={dataForm.namaBarang} onChange={handleChange} />
        <Input label="Jumlah yang Dibutuhkan" name="jumlah" type="number" value={dataForm.jumlah} onChange={handleChange} />
        <Select
          label="Urgensi Kebutuhan"
          name="urgensi"
          options={['Segera', 'Dalam Seminggu', 'Tidak Mendesak']}
          value={dataForm.urgensi}
          onChange={handleChange}
        />
        <Textarea label="Ceritakan kenapa anda butuh" name="alasan" value={dataForm.alasan} onChange={handleChange} />
      </Section>

      {/* === Dokumentasi === */}
      <Section title="Dokumentasi Pendukung">
        <FileUpload label="Unggah Dokumen Pendukung" name="dokumenPendukung" onChange={handleChange} />
        <FileUpload label="Unggah Foto Tambahan" name="fotoTambahan" onChange={handleChange} />

        {/* Signature */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Tanda Tangan</p>
          <div className="border border-gray-300 text-center w-3/6 rounded-lg overflow-hidden">
            <SignatureCanvas
              ref={signatureRef}
              canvasProps={{ width: 400, height: 150, className: 'bg-gray-100 ' }}
            />
          </div>
          <button type="button" onClick={handleClearSignature} className="mt-2 text-sm text-red-500 hover:underline">
            Hapus Tanda Tangan
          </button>
        </div>

        {/* Persetujuan */}
        <div className="space-y-2 mt-4">
          <Checkbox
            name="persetujuan1"
            checked={dataForm.persetujuan1}
            label="Saya menyatakan bahwa informasi yang diberikan adalah benar."
            onChange={handleChange}
          />
          <Checkbox
            name="persetujuan2"
            checked={dataForm.persetujuan2}
            label="Saya menyetujui penggunaan data untuk keperluan verifikasi."
            onChange={handleChange}
          />
        </div>
      </Section>

      {/* Tombol */}
      <div className="text-center">
        <button className="bg-primary hover:bg-secondary hover:text-primary text-white font-semibold py-3 px-8 rounded-full shadow transition">
         Kirim Kebutuhan
        </button>
      </div>
    </form>
  );

};
  
const Section = ({ title, children }) => (
    <section className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-700 text-center mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
  
  const Input = ({ label, name, value, onChange, type = 'text' }) => (
    <label className="block text-sm font-medium text-gray-700">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
      />
    </label>
  );
  
  const Textarea = ({ label, name, value, onChange }) => (
    <label className="block text-sm font-medium text-gray-700">
      {label}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full px-4 py-2 h-24 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-green-400 focus:outline-none"
      />
    </label>
  );
  
  const Select = ({ label, name, options, value, onChange }) => (
    <label className="block text-sm font-medium text-gray-700">
      {label}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 focus:outline-none"
      >
        <option value="">Pilih {label}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
  
  const FileUpload = ({ label, name, onChange }) => (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-1">{label}</p>
      <input
        type="file"
        name={name}
        accept=".jpg,.jpeg,.png"
        onChange={onChange}
        className="w-full file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:bg-gray-100 hover:file:bg-gray-200"
      />
    </div>
  );
  
  const Checkbox = ({ label, name, checked, onChange }) => (
    <label className="flex items-start gap-2 text-sm text-gray-700">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} className="mt-1 accent-green-600" />
      {label}
    </label>
);
  


const ModalSuccess = ({modal, setModal, refreshHalaman}) => {
  return (
   <div
  className={`rounded-xl mt-4 mb-4 text-center  ${
    modal ? "w-auto opacity-100 h-auto scale-100 " : "w-0 h-0 opacity-0 scale-95 "
  } md:w-6/12  duration-300 transition-all top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-400`}
>

      <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
        <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="text-5xl  text-accent" />
      <h4 className="font-semibold my-2 text-primary">Permintaan Telah Terkirim!</h4>
      <p className="text-sm">Data anda akan kami proses harap sabar menunggu</p>
        <FontAwesomeIcon onClick={refreshHalaman} className="absolute top-2 right-2" icon={faTimes} />
      </div>
         <p className="font-primary text-primary text-sm text-center mx-auto font-semibold my-1">Status : Dalam Proses Verifikasi</p>
        <p className="my-2 text-xs md:text-sm">Akan ada notifikasi selanjutnya apabila pengajuan anda diterima atau ditolak</p>
       
        <div className="flex gap-2 mt-3 mb-3 justify-center flex-row w-9/12 mx-auto">
           
            <button onClick={refreshHalaman} className="bg-secondary hover:bg-primary hover:text-white text-primary rounded-lg py-2 px-3 text-xs md:text-sm">
              Tutup
            </button>
        </div>

  
    </div>
  )
}

export default PengajuanKebutuhan;