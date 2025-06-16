import React from "react";
import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
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
const DistribusiDonasi = () => {
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const distribusiData = [
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
  ];

  const totalPages = Math.ceil(distribusiData.length / itemsPerPage);
  const paginatedData = distribusiData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
                    <Link to={'/updatedistribusi/detailupdate'}>
                    <button className="bg-[#2d4a48] text-white px-3 py-1 rounded hover:bg-[#1f3533]">
                      {item.status.toLowerCase() === 'menunggu' || item.status.toLowerCase().includes('perjalanan') ? 'Update' : 'Lihat'}
                    </button>
                    </Link>
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