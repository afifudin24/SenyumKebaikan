import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
const PantauDonasi = () => {
  
  const [showDetail, setShowDetail] = useState(false);
  
  return (
    <div>
      <Navbar />
      <Container className={"mt-20"}>
        <div className="bg-secondary w-11/12 mx-auto font-secondary mb-10 text-primary rounded-xl p-5">
          <h3 className="text-lg md:text-2xl my-2 font-primary font-semibold text-center">
            Pantau Donasi Anda
          </h3>
          <p className="text-center text-xs my-2 md:text-sm">
            Lacak status transaksi dan perkembangan campaign secara real‑time.
            Semua data ditarik langsung dari blockchain untuk memastikan
            transparansi penuh.
          </p>
        </div>

        {!showDetail ? (
          <DonationTrackerForm onShowDetail={() => setShowDetail(true)} />
        ) : (
          <DetailDonasi onBack={() => setShowDetail(false)} />
        )}
      </Container>
      <Footer />
    </div>
  );
};

const DonationTrackerForm = ({ onShowDetail }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // validasi bisa ditambahkan di sini
    onShowDetail();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md font-sans">
      <h2 className="text-center text-lg font-medium text-gray-800 mb-6">
        Masukan hash Transaksi atau ID donasi untuk melacak
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Tx Hash / ID Donasi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tx Hash / ID Donasi
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Contoh: 0x123abc..."
          />
        </div>

        {/* Pilih Campaign */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pilih Campaign
          </label>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300">
            <option value="">-- Pilih Campaign --</option>
            <option value="1">Campaign A</option>
            <option value="2">Campaign B</option>
          </select>
        </div>

        {/* Rentang Tanggal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rentang Tanggal
          </label>
          <div className="flex items-center gap-2">
            <input
              type="date"
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <span className="text-gray-500">-</span>
            <input
              type="date"
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-200 hover:bg-green-300 text-green-900 font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Tampilkan
        </button>
      </form>
    </div>
  );
};

const DetailDonasi = ({ onBack }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md font-sans">
      <h2 className="text-center text-xl font-semibold text-primary mb-4">
        Detail Donasi Anda
      </h2>

      {/* Contoh Detail (isi sesuai data sebenarnya) */}
      <div className="mb-6 space-y-3 text-sm text-gray-700">
  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm">
    <p className="font-semibold text-green-800 mb-1">Status</p>
    <p className="text-green-700">Terkonfirmasi</p>
  </div>

  <div className="bg-white border rounded-md p-4 shadow-sm">
    <p className="font-semibold text-gray-800">ID Donasi</p>
    <p className="text-gray-600 break-words">0x123abc456def789ghi...</p>
  </div>

  <div className="bg-white border rounded-md p-4 shadow-sm">
    <p className="font-semibold text-gray-800">Campaign</p>
    <p className="text-gray-600">Campaign A</p>
  </div>

  <div className="bg-white border rounded-md p-4 shadow-sm">
    <p className="font-semibold text-gray-800">Jumlah Donasi</p>
    <p className="text-green-600 font-bold text-lg">Rp1.000.000</p>
  </div>

  <div className="bg-white border rounded-md p-4 shadow-sm">
    <p className="font-semibold text-gray-800">Tanggal Donasi</p>
    <p className="text-gray-600">1 Juni 2025</p>
  </div>
</div>

      <button
        onClick={onBack}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        Kembali
      </button>
    </div>
  );
};


export default PantauDonasi;