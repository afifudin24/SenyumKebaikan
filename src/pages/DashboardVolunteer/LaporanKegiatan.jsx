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
   
    file: null,
  });
  const [preview, setPreview] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };
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
        <h2 className="text-2xl text-primary font-semibold mb-4">Update Campaign</h2>
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

      <div className="bg-primary text-white p-4 rounded-lg space-y-4">
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

      <div className="text-center p-4 border border-dashed border-gray-300 rounded-lg">
      <label className="cursor-pointer">
        <div className="flex flex-col items-center space-y-2">
          <FontAwesomeIcon icon={faCloudUpload} className="text-2xl text-primary font-semibold" />
          <p>Upload atau seret file atau gambar kesini </p>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {preview && (
        <div className="mt-4">
          <p className="mb-2 font-medium text-gray-700">Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="mx-auto max-h-64 object-contain border rounded"
          />
        </div>
      )}
    </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-primary mx-auto text-white px-6 py-2 rounded hover:bg-[#1f3533]"
        >
          Kirim Laporan
        </button>
      </div>
    </form>
  );
};
export default LaporanKegiatan;