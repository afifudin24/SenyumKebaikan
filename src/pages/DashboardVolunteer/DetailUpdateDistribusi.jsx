import React from "react";
import { useState } from "react";
import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
const DetailUpdateDistribusi = () => {
    const location = useLocation();
    const data = location.state;
     const [user, setUser] = useState(() => {
                const savedUser = localStorage.getItem('user');
                return savedUser ? JSON.parse(savedUser) : null;
              }) 
    return (
        <DashboardVolunteerLayout>
            <div className="max-w-md mt-8">
                 <h2 className="text-4xl md:text-2xl font-primary font-bold text-primary mb-4">Hi, {user.namadepan}</h2>
                <p className="text-xs md:text-sm font-secondary">Selamat datang di halaman dashboard Volunteer</p>
                <h2 className="text-2xl text-primary font-semibold mb-4">Detail Update Distribusi</h2>
                <DistribusiForm />
            </div>
        </DashboardVolunteerLayout>
    );
}
const DistribusiForm = () => {
  const [status, setStatus] = useState("");
  const [file, setFile] = useState(null);
  const [deskripsi, setDeskripsi] = useState("");
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan data di sini (API call atau lainnya)
    console.log({ status, file, deskripsi });
    toast.success("Data berhasil disimpan!");
  };
  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="text-sm text-gray-700 mb-2 flex items-center gap-2">
        <span className="inline-flex items-center gap-1">
          <span role="img" aria-label="location">📍</span>
          Lokasi Distribusi : <span className="font-semibold">Kecamatan B</span>
        </span>
      </div>
      <div className="text-sm text-gray-700 mb-4 flex items-center gap-2">
        <span className="inline-flex items-center gap-1">
          <span role="img" aria-label="calendar">📅</span>
          Tanggal Distribusi : <span className="font-semibold">09/05/2025</span>
        </span>
      </div>
      <div className=" ">

      
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded-lg shadow-md space-y-4"
      >
        <div className="bg-primary p-4 rounded-lg shadow-md">

       
        <div className="">
          <label className="block text-white mb-1">Status Distribusi</label>
          <select
            className="w-full p-2 rounded border bg-white text-primary border-gray-300 focus:outline-none"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Pilih Status</option>
            <option value="selesai">Selesai</option>
            <option value="tertunda">Tertunda</option>
            <option value="dibatalkan">Dibatalkan</option>
          </select>
        </div>
        <div>
          <label className="block text-white mb-1">Upload Bukti</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center bg-white text-gray-500 hover:bg-gray-100 cursor-pointer">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="upload"
            />
            <label htmlFor="upload" className="cursor-pointer block">
              Upload atau seret file atau gambar ke sini
            </label>
          </div>
          {file && (
            <p className="text-sm text-white mt-1">File: {file.name}</p>
          )}
        </div>
        <div>
          <label className="block text-white mb-1">Deskripsi</label>
          <textarea
            className="w-full p-2 rounded border bg-white text-primary border-gray-300 resize-none"
            rows="4"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Tulis deskripsi di sini..."
          ></textarea>
        </div>
         </div>
        
     
      <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="bg-[#2F4F4F] text-white px-6 py-2 rounded hover:bg-[#3e5d5d]"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={() => alert("Dibatalkan")}
            className="bg-[#2F4F4F] text-white px-6 py-2 rounded hover:bg-[#3e5d5d]"
          >
            Batal
          </button>
        </div>
         </form>
        </div>
    </div>
  );
}
export default DetailUpdateDistribusi;