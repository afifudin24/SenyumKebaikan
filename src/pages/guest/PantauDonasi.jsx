import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
const PantauDonasi = () => {
  
  const [showModalDetail, setShowModalDetail] = useState(false);
  
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

           <DonationTrackerForm onShowDetail={() => setShowModalDetail(true)} />

      
          <DetailDonasi onBack={() => setShowDetail(false)} showDetail={showModalDetail} setShowDetail={setShowModalDetail} />
        
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


const DetailDonasi = ({ showDetail, setShowDetail, onBack }) => {
  return (
    <div
      className={`rounded-xl mt-4 mb-4 text-center ${
        showDetail
          ? "w-auto opacity-100 h-auto scale-100"
          : "w-0 h-0 opacity-0 scale-95"
      } md:w-96 duration-300 transition-all z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-300 shadow-lg`}
    >
      {/* Header Hijau */}
      <div className="flex flex-col items-center justify-center bg-green-100 p-5 rounded-t-xl text-green-700 relative">
        <FontAwesomeIcon icon={faCheckCircle} className="text-4xl mb-2" />
        <h3 className="text-lg font-semibold">Donasi Ditemukan</h3>
        <p className="text-sm">(Tx Hash Valid)</p>
      </div>

      {/* Ringkasan Transaksi */}
      <div className="px-6 py-5">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          RINGKASAN TRANSAKSI
        </h4>

        <div className="text-left text-sm text-gray-700 space-y-3">
          <div className="flex items-start">
            <span className="w-28 font-medium">Status</span>
            <span className="mr-1">:</span>
            <span className="text-green-600 font-medium flex items-center gap-1">
              ✅ Terkonfirmasi
            </span>
          </div>
          <div className="flex items-start">
            <span className="w-28 font-medium">Tx Hash</span>
            <span className="mr-1">:</span>
            <span className="break-all">0x9a296a7b...</span>
          </div>
          <div className="flex items-start">
            <span className="w-28 font-medium">Waktu Blok</span>
            <span className="mr-1">:</span>
            <span>24 Apr 2025 10:16 WIB</span>
          </div>
          <div className="flex items-start">
            <span className="w-28 font-medium">Jumlah</span>
            <span className="mr-1">:</span>
            <span>Rp100.000 / 0,005 ETH</span>
          </div>
          <div className="flex items-start">
            <span className="w-28 font-medium">Dari → Ke</span>
            <span className="mr-1">:</span>
            <span>
              Anonim → <span className="font-medium">Bencana Banjir</span>
            </span>
          </div>
          <div className="flex items-start">
            <span className="w-28 font-medium">Gas Fee</span>
            <span className="mr-1">:</span>
            <span>0,00021 ETH</span>
          </div>
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-center gap-4 p-4 bg-green-50 rounded-b-xl">
        <button
          onClick={() => {
            setShowDetail(false)
          }}
          className="bg-green-200 text-green-900 px-4 py-2 rounded-md font-semibold hover:bg-green-300"
        >
          Kembali
        </button>
        <a
          href="https://etherscan.io/tx/0x9a296a7b..." // Contoh link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-200 text-green-900 px-4 py-2 rounded-md font-semibold hover:bg-green-300"
        >
          Lihat di Etherscan
        </a>
      </div>
    </div>
  );
};
export default PantauDonasi;