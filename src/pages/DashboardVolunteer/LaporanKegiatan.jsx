import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
const LaporanKegiatan = () => {
    return (
        <DashboardVolunteerLayout>
            <LaporanKegiatanForm />
        </DashboardVolunteerLayout>
    );
}

const LaporanKegiatanForm = () => {
  const [formData, setFormData] = useState({
    campaign: '',
    judul: '',
    lokasi: '',
    tanggal: '',
    deskripsi: '',
    status: 'proses',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    toast.success('Laporan berhasil dikirim!');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    // Kirim ke backend di sini
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Campaign</label>
        <select
          name="campaign"
          value={formData.campaign}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        >
          <option value="">Pilih campaign</option>
          <option value="bencana1">Bencana Alam 1</option>
          <option value="bencana2">Bencana Alam 2</option>
        </select>
      </div>

      <div className="bg-[#2d4a48] text-white p-4 rounded-lg space-y-4">
        <div>
          <label className="block text-sm">Judul Laporan</label>
          <input
            type="text"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded text-primary bg-white"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm">Lokasi</label>
            <input
              type="text"
              name="lokasi"
              value={formData.lokasi}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded text-primary bg-white"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm">Tanggal</label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded text-primary bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm">Deskripsi Kegiatan</label>
          <textarea
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            rows="4"
            className="w-full mt-1 p-2 rounded text-primary bg-white"
          ></textarea>
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Unggah bukti foto/video</label>
          <div className="border border-dashed border-gray-400 mt-1 rounded p-4 text-center text-sm text-gray-500">
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full opacity-0 text-sm"
              accept="image/*,video/*"
            />
            <div className="text-center">
            <FontAwesomeIcon icon={faCloudUpload} className="text-2xl text-primary font-semibold" />
            <p>Upload atau seret file atau gambar ke sini</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Status Program</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="proses">Proses</option>
            <option value="selesai">Selesai</option>
            <option value="ditunda">Ditunda</option>
          </select>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="bg-[#2d4a48] text-white px-6 py-2 rounded hover:bg-[#1f3533]"
        >
          Kirim Laporan
        </button>
      </div>
    </form>
  );
};
export default LaporanKegiatan;