import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";



const PengelolaanAPK = () => {
  const [smartContractStatus, setSmartContractStatus] = useState("Aktif");
  const [smartContractAddress, setSmartContractAddress] = useState("0x1234...abcdef");

  const handleChangeSmartContract = () => {
    toast.success("Mengubah smart contract...");
    // Simulasi perubahan alamat smart contract
    setSmartContractAddress("0xABCD...9876");
    toast.success("Smart Contract berhasil diperbarui!");
  };

  const handleVerifikasi = () => {
    toast.success("Smart Contract berhasil diverifikasi!");
  };

  const handleUbahKeamanan = (jenis) => {
    toast.success(`Pengaturan keamanan '${jenis}' berhasil diubah.`);
  };

  const handleUbahBatasan = (jenis) => {
    toast.success(`Batasan '${jenis}' berhasil diperbarui.`);
  };

  const handleUbahKebijakan = (jenis) => {
    toast.success(`Kebijakan '${jenis}' berhasil diperbarui.`);
  };

  const handleLihatAudit = () => {
    toast("Menampilkan riwayat audit...");
  };

  const handleLihatLog = () => {
    toast("Menampilkan log perubahan...");
  };

  return (
    <DashboardLayout>
      <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 font-primary text-primary">Pengelolaan APK</h1>

      {/* Keamanan */}
      <Section
        title="Keamanan"
        items={[
          { label: "Kebijakan Keamanan", onClick: () => handleUbahKeamanan("Kebijakan Keamanan") },
          { label: "Kebijakan Enkripsi", onClick: () => handleUbahKeamanan("Kebijakan Enkripsi") },
          { label: "Autentikasi Pengguna", onClick: () => handleUbahKeamanan("Autentikasi Pengguna") },
        ]}
      />

      {/* Pembatasan Donasi */}
      <Section
        title="Pembatasan Donasi"
        items={[
          { label: "Pembatasan Donasi Per Hari", onClick: () => handleUbahBatasan("Per Hari") },
          { label: "Pembatasan Donasi Maksimum", onClick: () => handleUbahBatasan("Maksimum") },
          { label: "Pembatasan Donasi Per Pengguna", onClick: () => handleUbahBatasan("Per Pengguna") },
        ]}
      />

      {/* Kebijakan Privasi */}
      <Section
        title="Kebijakan Privasi"
        items={[
          { label: "Kebijakan Pengumpulan Data", onClick: () => handleUbahKebijakan("Pengumpulan Data") },
          { label: "Pengaturan Data Pengguna", onClick: () => handleUbahKebijakan("Data Pengguna") },
          { label: "Pembatasan Akses Data", onClick: () => handleUbahKebijakan("Akses Data") },
        ]}
      />

      {/* Smart Contact */}
      <div className="w-10/12 mt-5 mx-auto">
        <SectionTitle title="Smart Contact" />
        <div className="border my-2 border-gray-200 rounded-lg p-4">
          <Row label="Status Smart Contract" content={<span className="p-2 bg-white text-primary rounded-lg">{smartContractStatus} <FontAwesomeIcon icon={faArrowAltCircleRight} /></span>} />
          <Row label="Smart Contact Address" content={<span className="p-2 bg-white text-primary rounded-lg">{smartContractAddress}</span>} />
          <Row label="Tanggal Pembuatan" content={<span className="p-2 text-primary">10 Februari 2025</span>} />
          <Row label="" content={<button onClick={handleChangeSmartContract} className="p-2 rounded-lg text-primary border border-primary">Ubah Smart Contract</button>} />
        </div>
      </div>

      {/* Verifikasi */}
      <div className="w-10/12 mt-5 mx-auto">
        <SectionTitle title="Verifikasi Smart Contact" />
        <div className="border my-2 border-gray-200 rounded-lg p-4">
          <Row label="Status Smart Contract" content={<button onClick={handleVerifikasi} className="p-2 rounded-lg text-primary border border-primary">Verifikasi</button>} />
        </div>
      </div>

      {/* Audit */}
      <div className="w-10/12 mt-5 mx-auto">
        <SectionTitle title="Audit Smart Contact" />
        <div className="border my-2 border-gray-200 rounded-lg p-4">
          <Row label="History Audit" content={<button onClick={handleLihatAudit} className="p-2 rounded-lg text-primary border border-primary">Lihat Audit History</button>} />
          <Row label="Log Perubahan" content={<button onClick={handleLihatLog} className="p-2 rounded-lg text-primary border border-primary">Lihat Log Perubahan</button>} />
        </div>
      </div>
    </DashboardLayout>
  );
};

const Section = ({ title, items }) => (
  <div className="w-10/12 mt-5 mx-auto">
    <h3 className="p-2 block font-primary w-4/12 rounded-t-2xl text-center text-lg md:text-xl font-normal text-white bg-primary">
      {title}
    </h3>
    <div className="border my-2 border-gray-200 rounded-lg p-4">
      {items.map((item, i) => (
        <div key={i} className="flex my-2 justify-between w-10/12 mx-auto">
          <p className="font-semibold text-primary">{item.label}</p>
          <button onClick={item.onClick} className="p-2 rounded-lg bg-white text-primary border border-primary">{item.buttonLabel || "Ubah"}</button>
        </div>
      ))}
    </div>
  </div>
);

const SectionTitle = ({ title }) => (
  <h3 className="p-2 block font-primary w-4/12 rounded-t-2xl text-center text-lg md:text-xl font-normal text-white bg-primary">
    {title}
  </h3>
);

const Row = ({ label, content }) => (
  <div className="flex my-2 justify-between w-10/12 mx-auto">
    <p className="font-semibold text-primary">{label}</p>
    {content}
  </div>
);

export default PengelolaanAPK;
