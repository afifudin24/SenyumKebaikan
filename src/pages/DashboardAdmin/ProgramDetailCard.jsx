import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const ProgramDetailCard = () => {
 const location = useLocation();
 const navigate = useNavigate();
  const [data, setData] = useState({
    id: null,
    nama: "",
    judul: "",
    targetDana: 0,
    lokasi: "",
    deskripsi : "",
    status: "",
  });
  useEffect(() => {
    if (location.state) {
      setData({
        id: location.state.id ?? null,
        nama: location.state.nama ?? "",
        judul: location.state.judul ?? "",
        targetDana: location.state.targetDana ?? 0,
        lokasi: location.state.lokasi ?? "",
        deskripsi : location.state.deskripsi ?? "",
        status: location.state.status ?? "",
      });
    }
  }, [location.state]);

   const handleUpdateStatus = (newStatus) => {
    setData(prev => ({ ...prev, status: newStatus }));
  };

  // Jika kamu juga ingin mengirimkan data yang sudah di‑update balik ke Page1:
  const handleBack = () => {
    navigate("/", { state: { updatedProgram: data } });
  };
  return (
    <div className="flex justify-center gap-1 items-center">
      <div className="w-3/12">
        <img
          src="https://via.placeholder.com/200x200"
          alt="Gambar utama"
          className="h-40 object-cover rounded"
        />
        </div>    
    <div className="w-9/12 mx-auto p-6 bg-primary font-primary text-white shadow-lg border rounded-lg">
    <div className="flex gap-1 justify-between items-start">
      <div>
      {/* Judul */}
      <h2 className="text-xl font-semibold text-white mb-1">Detail Program</h2>
      <p className="text-lg font-semibold text-white mb-4">{data.judul}</p>
      <p className="text-sm text-white mb-4"><span className="text-white font-medium">Status : {data.status}</span></p>
</div>
<div>
      {/* Gambar */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Gambar utama"
          className="col-span-2 h-40 object-cover rounded"
          />
        <div className="flex flex-col gap-2">
          <img
            src="https://via.placeholder.com/150x90"
            alt="Gambar 1"
            className="h-20 object-cover rounded"
            />
          <img
            src="https://via.placeholder.com/150x90"
            alt="Gambar 2"
            className="h-20 object-cover rounded"
            />
        </div>
            </div>
      </div>
      </div>
      {/* Deskripsi */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-1">Deskripsi Lengkap:</h3>
        <p className="text-sm text-white">
         {data.deskripsi}
        </p>
      </div>
      {/* Info Program */}
      <div className="grid grid-cols-2 gap-6 text-sm mb-6">
        <div>
          <h4 className="font-semibold mb-2">Target Dana & Rencana Penggunaan:</h4>
          <p className="mb-1">Rp75.000.000</p>
          <ul className="list-disc list-inside">
            <li>Barang 50%: Hulur, 50%</li>
            <li>Wirata Bersih: 30%</li>
            <li>Sementara Tengam: 20%</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Lokasi & Waktu Pelaksanaan:</h4>
          <p className="mb-4">{data.lokasi}</p>
          <h4 className="font-semibold mb-1">Identitas Pengaju:</h4>
          <p>{data.nama}</p>
          <p>arya@example.com</p>
          <p>+62 812-3456-7890</p>
        </div>
      </div>
      {/* Dokumen */}
      <div className="mb-6">
        <a href="#" className="text-sm block text-blue-400 ">identitasdir.pdf</a>
        <a href="#" className="text-sm block text-blue-400 ">proposal_banjir.pdf</a>
      </div>
      {/* Tombol Aksi */}
      <div className="flex justify-between">
        {/* <Link to='/dashboard' state={data}> */}
        <button onClick={() => { navigate(-1)}} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
          Kembali
        </button>
        {/* </Link> */}
        {
          data.status == 'Menunggu' ? (
               <div className="space-x-2">
          <button onClick={() => handleUpdateStatus("Ditolak")} className="px-4 py-2 bg-white text-primary hover:text-white rounded hover:bg-red-600">
            Tolak
          </button>
          <button onClick={() => handleUpdateStatus("Diterima")} className="px-4 py-2 bg-white text-primary hover:text-white rounded hover:bg-green-600">
            Terima
          </button>
        </div>
          ) : (
            ''
          )
        }
       
      </div>
    </div>
    </div>
  );
};
export default ProgramDetailCard;