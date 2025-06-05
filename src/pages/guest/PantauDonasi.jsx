import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const PantauDonasi = () => {
    return (
        <div>
            <Navbar />
            <Container className={"mt-20"}>
                <div className="bg-secondary w-11/12 mx-auto font-secondary mb-10 text-primary rounded-xl p-5">
                    <h3 className="text-lg md:text-2xl my-2 font-primary font-semibold text-center">Pantau Donasi Anda</h3>
                    <p className="text-center text-xs my-2 md:text-sm">Lacak status transaksi dan perkembangan campaign secara real‑time. Semua data ditarik langsung dari blockchain untuk memastikan transparansi penuh.</p>
                </div>
                <DonationTrackerForm />
            </Container>
            <Footer />
        </div>
    )   
}

const DonationTrackerForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md font-sans">
      <h2 className="text-center text-lg font-medium text-gray-800 mb-6">
        Masukan hash Transaksi atau ID donasi untuk melacak
      </h2>

      <form className="space-y-4">
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



export default PantauDonasi;