import React from "react"
import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout"
import { useState } from "react"
const ProgramAktif = () => {
     const [user, setUser] = useState(() => {
            const savedUser = localStorage.getItem('user');
            return savedUser ? JSON.parse(savedUser) : null;
          }) 
    return (
        <DashboardVolunteerLayout>
            <h2 className="text-4xl md:text-2xl font-primary font-bold text-primary mb-4">Hi, {user.namadepan}</h2>
                <p className="text-xs md:text-sm font-secondary">Selamat datang di halaman dashboard Volunteer</p>
                {/* <RingkasanProgram /> */}
                {/* <DonasiLineChart /> */}
                <ManajemenDonasiAktif />
        </DashboardVolunteerLayout>
    )
}
const ManajemenDonasiAktif = () => {
  return (
    <div className="p-4 md:p-8">
      {/* Judul */}
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
          Manajemen program donasi aktif
        </h1>
        <p className="text-gray-500 text-sm">
          Update real-time progres penyaluran bantuan
        </p>
      </div>
      {/* Card Program */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {/* Card 1 */}
        <div className="bg-[#2d4a48] text-white rounded-lg p-4 w-[300px] shadow-md">
          <h3 className="text-sm font-medium text-green-200">BENCANA ALAM</h3>
          <h2 className="text-lg font-bold my-1">
            Banjir bandang di pinggiran kota METROPOLITAN
          </h2>
          <div className="text-sm my-3">
            <div className="flex justify-between">
              <span>Target dana</span>
              <span>60%</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Rp 60.000.000</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Dana Terkumpul</span>
              <span>Rp 30.000.000</span>
            </div>
          </div>
          <p className="mt-4 text-green-300 text-sm">Status distribusi: <span className="font-semibold">Proses</span></p>
        </div>
        {/* Card 2 */}
        <div className="bg-white border rounded-lg p-4 w-[300px] shadow-sm">
          <h3 className="text-sm font-medium text-green-800">BENCANA ALAM</h3>
          <h2 className="text-lg font-bold my-1 text-gray-800">
            Beda campaign
          </h2>
          <div className="text-sm my-3">
            <div className="flex justify-between">
              <span>Target dana</span>
              <span>100%</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Rp 7.000.000</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Dana Terkumpul</span>
              <span>Rp 7.000.000</span>
            </div>
          </div>
          <p className="mt-4 text-green-600 text-sm">Status distribusi: <span className="font-semibold">Proses</span></p>
        </div>
      </div>
      {/* Tabel Donatur */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
       <TabelDonatur />
      </div>
      {/* Tombol Update */}
    
    </div>
  );
};
const TabelDonatur = () => {
  // Data dummy berbeda-beda
  const [donaturData] = useState([
    { nama: "Maman", nominal: "Rp. 100.000", tanggal: "02/07/2024" },
    { nama: "Ayu", nominal: "Rp. 250.000", tanggal: "03/07/2024" },
    { nama: "Rudi", nominal: "Rp. 500.000", tanggal: "04/07/2024" },
    { nama: "Dina", nominal: "Rp. 150.000", tanggal: "05/07/2024" },
    { nama: "Joko", nominal: "Rp. 300.000", tanggal: "06/07/2024" },
    { nama: "Sari", nominal: "Rp. 200.000", tanggal: "07/07/2024" },
    { nama: "Wawan", nominal: "Rp. 400.000", tanggal: "08/07/2024" },
    { nama: "Nina", nominal: "Rp. 180.000", tanggal: "09/07/2024" },
    { nama: "Budi", nominal: "Rp. 700.000", tanggal: "10/07/2024" },
    { nama: "Tari", nominal: "Rp. 230.000", tanggal: "11/07/2024" },
    { nama: "Yusuf", nominal: "Rp. 330.000", tanggal: "12/07/2024" },
    { nama: "Lina", nominal: "Rp. 210.000", tanggal: "13/07/2024" },
    { nama: "Arif", nominal: "Rp. 310.000", tanggal: "14/07/2024" },
    { nama: "Rina", nominal: "Rp. 450.000", tanggal: "15/07/2024" },
    { nama: "Bayu", nominal: "Rp. 120.000", tanggal: "16/07/2024" },
    { nama: "Eka", nominal: "Rp. 520.000", tanggal: "17/07/2024" },
    { nama: "Doni", nominal: "Rp. 270.000", tanggal: "18/07/2024" },
    { nama: "Hani", nominal: "Rp. 130.000", tanggal: "19/07/2024" },
    { nama: "Rama", nominal: "Rp. 600.000", tanggal: "20/07/2024" },
    { nama: "Putri", nominal: "Rp. 480.000", tanggal: "21/07/2024" },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const totalPages = Math.ceil(donaturData.length / dataPerPage);
  const indexOfLast = currentPage * dataPerPage;
  const indexOfFirst = indexOfLast - dataPerPage;
  const currentData = donaturData.slice(indexOfFirst, indexOfLast);
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Nama Donatur</th>
            <th className="px-4 py-3">Nominal</th>
            <th className="px-4 py-3">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2">{item.nama}</td>
              <td className="px-4 py-2">{item.nominal}</td>
              <td className="px-4 py-2">{item.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 py-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded border hover:bg-gray-100 disabled:opacity-50"
        >
          {'<'}
        </button>
        <span className="text-sm text-gray-600">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded border hover:bg-gray-100 disabled:opacity-50"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};
export default ProgramAktif;