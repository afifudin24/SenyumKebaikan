import React from "react";
import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const UpdateDistribusi = () => {
      const [user, setUser] = useState(() => {
                const savedUser = localStorage.getItem('user');
                return savedUser ? JSON.parse(savedUser) : null;
              }) 
              
    return (
        <DashboardVolunteerLayout>
             <h2 className="text-4xl md:text-2xl font-primary font-bold text-primary mb-4">Hi, {user.namadepan}</h2>
                <p className="text-xs md:text-sm font-secondary">Selamat datang di halaman dashboard Volunteer</p>
                <div className="mt-5">
          <DistribusiDonasi/>
                </div>
        </DashboardVolunteerLayout>
    )
}

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-center bg-primary text-white p-4 font-semibold">
          <span>Distribusi</span>
          <button onClick={onClose} className="text-white text-xl font-bold">×</button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const DistribusiForm = ({ onClose, item, setDistribusiData }) => {
  console.log(item);
 const [status, setStatus] = useState(item?.status || "");
const [file, setFile] = useState(item?.file || null);
const [deskripsi, setDeskripsi] = useState(item?.deskripsi || "");
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedItem = {
      ...item,
      status,
      file,
      deskripsi,
    };

    // Update distribusi berdasarkan ID
    setDistribusiData((prevData) =>
      prevData.map((d) => (d.id === item.id ? updatedItem : d))
    );

    toast.success("Data berhasil disimpan!");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-sm text-gray-700 mb-2 flex items-center gap-2">
        📍 Lokasi Distribusi: <span className="font-semibold">Kecamatan B</span>
      </div>
      <div className="text-sm text-gray-700 mb-4 flex items-center gap-2">
        📅 Tanggal Distribusi: <span className="font-semibold">09/05/2025</span>
      </div>

      <div>
        <label className="block text-primary mb-1">Status Distribusi</label>
        <select
          className="w-full p-2 rounded border bg-white border-gray-300 focus:outline-none"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Pilih Status</option>
          <option value="selesai">Selesai</option>
          <option value="Menunggu">Menunggu</option>
          <option value="tertunda">Tertunda</option>
          <option value="dibatalkan">Dibatalkan</option>
        </select>
      </div>

      <div>
        <label className="block text-primary mb-1">Upload Bukti</label>
        <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center bg-gray-50 text-gray-500 hover:bg-gray-100 cursor-pointer">
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
          <p className="text-sm text-primary mt-1">File: {file.name}</p>
        )}
      </div>

      <div>
        <label className="block text-primary mb-1">Deskripsi</label>
        <textarea
          className="w-full p-2 rounded border bg-white text-primary border-gray-300 resize-none"
          rows="4"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          placeholder="Tulis deskripsi di sini..."
        ></textarea>
      </div>

      <div className="flex justify-between mt-4">
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary"
        >
          Simpan
        </button>
        <button
          type="button"
          onClick={onClose}
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

  const { status, file, deskripsi } = data;

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
        {file ? (
          <div className="p-2 border border-gray-300 rounded bg-gray-50 text-sm">
            File: {file.name}
          </div>
        ) : (
          <p className="text-gray-500 italic">Belum ada file</p>
        )}
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
const DistribusiDonasi = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLihat, setModalLihat] = useState(false);

  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [distribusiData, setDistribusiData] = useState([
    { lokasi: 'Kecamatan B', bantuan: 'Barang', tanggal: '02/07/2024', status: 'Menunggu' },
    { lokasi: 'Kecamatan B', bantuan: 'Uang', tanggal: '02/07/2024', status: 'Selesai' },
    { lokasi: 'Kecamatan B', bantuan: 'Barang', tanggal: '02/07/2024', status: 'Dalam perjalanan' },
    { lokasi: 'Kecamatan B', bantuan: 'Barang', tanggal: '02/07/2024', status: 'Selesai' },
    { lokasi: 'Kecamatan B', bantuan: 'Barang', tanggal: '03/07/2024', status: 'Menunggu' },
    { lokasi: 'Kecamatan A', bantuan: 'Uang', tanggal: '03/07/2024', status: 'Selesai' },
    { lokasi: 'Kecamatan A', bantuan: 'Barang', tanggal: '03/07/2024', status: 'Dalam perjalanan' },
    { lokasi: 'Kecamatan A', bantuan: 'Barang', tanggal: '03/07/2024', status: 'Menunggu' },
    { lokasi: 'Kecamatan A', bantuan: 'Barang', tanggal: '04/07/2024', status: 'Selesai' },
    { lokasi: 'Kecamatan C', bantuan: 'Uang', tanggal: '04/07/2024', status: 'Dalam perjalanan' },
    { lokasi: 'Kecamatan C', bantuan: 'Barang', tanggal: '04/07/2024', status: 'Menunggu' },
    { lokasi: 'Kecamatan C', bantuan: 'Barang', tanggal: '04/07/2024', status: 'Selesai' },
    { lokasi: 'Kecamatan D', bantuan: 'Uang', tanggal: '05/07/2024', status: 'Menunggu' },
    { lokasi: 'Kecamatan D', bantuan: 'Barang', tanggal: '05/07/2024', status: 'Selesai' },
    { lokasi: 'Kecamatan D', bantuan: 'Barang', tanggal: '05/07/2024', status: 'Dalam perjalanan' },
    { lokasi: 'Kecamatan D', bantuan: 'Barang', tanggal: '05/07/2024', status: 'Menunggu' },
    { lokasi: 'Kecamatan E', bantuan: 'Barang', tanggal: '06/07/2024', status: 'Selesai' },
    { lokasi: 'Kecamatan E', bantuan: 'Barang', tanggal: '06/07/2024', status: 'Menunggu' },
    { lokasi: 'Kecamatan E', bantuan: 'Uang', tanggal: '06/07/2024', status: 'Selesai' },
    { lokasi: 'Kecamatan E', bantuan: 'Barang', tanggal: '06/07/2024', status: 'Menunggu' },
  ]);

  const totalPages = Math.ceil(distribusiData.length / itemsPerPage);
  const paginatedData = distribusiData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [selectedItem, setSelectedItem] = useState();
  const showModal = (status, item) => {
  const lowerStatus = status.toLowerCase();
  console.log(lowerStatus);

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
    <div className="max-w-4xl mx-auto space-y-6">
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
          {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <DistribusiForm item={selectedItem} setDistribusiData={setDistribusiData} onClose={() => setModalOpen(false)} />
        </Modal>
      )}
       {modalLihat && (
        <Modal onClose={() => setModalLihat(false)}>
          <DetailDistribusi data={selectedItem}  onClose={() => setModalOpen(false)} />
        </Modal>
      )}
        <h2 className="text-lg font-semibold text-gray-800">Jadwal Distribusi</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#2d4a48] text-white">
              <tr>
                <th className="px-4 py-2">Lokasi</th>
                <th className="px-4 py-2">Bantuan</th>
                <th className="px-4 py-2">Tanggal</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2">{item.lokasi}</td>
                  <td className="px-4 py-2">{item.bantuan}</td>
                  <td className="px-4 py-2">{item.tanggal}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2">
                 
                    <button onClick={() => showModal(item.status, item)} className="bg-[#2d4a48] text-white px-3 py-1 rounded hover:bg-[#1f3533]">
                      {item.status.toLowerCase() === 'menunggu' || item.status.toLowerCase().includes('perjalanan') ? 'Update' : 'Lihat'}
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
      </div>
    </div>
  );
};


export default UpdateDistribusi;