import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const RiwayatDonasi = () => {
       const [tabActive, setTabActive] = useState(0);
        const tab = [
            {
                title : 'Donasi Uang',
                component : <DonasiUang />
            },
            {
                title : 'Donasi Barang',
                component : <DonasiBarang />
            }
        ]

    return(
         <DashboardLayout>
            <div className="text-2xl text-center text-primary font-primary">
               Riwayat Donasi
            </div>
            <div className="flex gap-2 mx-auto mt-5 w-11/12 md:w-6/12 ">

            {
                tab.map((item, index) => (
                    <div key={index} onClick={() => setTabActive(index)} className={`w-11/12 text-center md:w-10/12 mx-auto shadow-2xl rounded-2xl  cursor-pointer p-3 ${tabActive == index ? 'bg-primary text-white' : 'bg-white text-primary'}`} >
                        <p className="text-center mx-auto">
                        {item.title}
                        </p>
                    </div>
                ))
            }
            </div>
            {
                tab[tabActive].component
            }

        </DashboardLayout>
    )
}

const DonasiUang = () => {
  const [dataDonasiUang, setDataDonasiUang] = useState([
    {
      id: 1,
      nominal: 500000,
      tanggal: "2024-08-01",
      campaign: "Bantu Sekolah",
      type: "Transfer",
      detail: "Donasi dilakukan melalui transfer bank Mandiri"
    },
    {
      id: 2,
      nominal: 1000000,
      tanggal: "2024-08-02",
      campaign: "Donasi Bencana Alam",
      type: "Blockchain",
      detail: "Transaksi menggunakan ETH blockchain"
    },
    {
      id: 3,
      nominal: 750000,
      tanggal: "2024-08-03",
      campaign: "Bantu Lansia",
      type: "Transfer",
      detail: "Transfer via BCA Virtual Account"
    },
    {
      id: 4,
      nominal: 850000,
      tanggal: "2024-08-04",
      campaign: "Peduli Anak Yatim",
      type: "Transfer",
      detail: "Donasi melalui QRIS"
    },
    {
      id: 5,
      nominal: 200000,
      tanggal: "2024-08-05",
      campaign: "Pembangunan Masjid",
      type: "Blockchain",
      detail: "Menggunakan BNB Smart Chain"
    },
    {
      id: 6,
      nominal: 450000,
      tanggal: "2024-08-06",
      campaign: "Donasi Air Bersih",
      type: "Transfer",
      detail: "Transfer melalui Bank BNI"
    },
    {
      id: 7,
      nominal: 950000,
      tanggal: "2024-08-07",
      campaign: "Beasiswa Mahasiswa",
      type: "Transfer",
      detail: "Virtual Account Bank Mandiri"
    },
    {
      id: 8,
      nominal: 300000,
      tanggal: "2024-08-08",
      campaign: "Donasi Gempa",
      type: "Blockchain",
      detail: "Donasi dalam bentuk USDT"
    },
    {
      id: 9,
      nominal: 100000,
      tanggal: "2024-08-09",
      campaign: "Peduli Pendidikan",
      type: "Transfer",
      detail: "Transfer antar bank BCA"
    },
    {
      id: 10,
      nominal: 400000,
      tanggal: "2024-08-10",
      campaign: "Donasi Bencana Banjir",
      type: "Blockchain",
      detail: "Via wallet Metamask"
    }
  ]);

  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(dataDonasiUang.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = dataDonasiUang.slice(indexOfFirst, indexOfLast);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleDelete = (id) => {
    const filtered = dataDonasiUang.filter((item) => item.id !== id);
    setDataDonasiUang(filtered);
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto shadow-2xl rounded-2xl p-5">
      {currentItems.map((item, index) => (
        <div
          key={item.id}
          className="tab-item text-center py-4 text-primary border-b-2 border-gray-400 items-center flex justify-between"
        >
          <div className="text-start w-full">
            <div className="tab-item-title font-semibold mt-2 flex items-center gap-2">
              {indexOfFirst + index + 1}. {item.campaign}
            </div>
            <div className="tab-item-description mt-2">
              Rp {item.nominal.toLocaleString()}
            </div>
            <div className="mt-2 text-xs text-white bg-primary rounded-2xl w-auto inline-block px-2 py-1">
              {item.type}
            </div>
            {expandedRow === item.id && (
              <div className="bg-gray-100 text-sm mt-2 p-2 rounded">
                <p><strong>Detail:</strong> {item.detail}</p>
              </div>
            )}
          </div>
          <div className="tab-item-tanggal w-4/12 flex flex-col gap-3 items-end justify-between">
            <div className="flex gap-2 items-center text-sm">
              <FontAwesomeIcon icon={faCalendar} />
              {item.tanggal}
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => toggleExpand(item.id)}
                className="bg-green-500 text-white text-sm px-2 py-1 rounded-md"
              >
                {expandedRow === item.id ? 'Tutup' : 'Detail'}
              </button>
          
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-secondary text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};


const DonasiBarang = () => {
  const [dataDonasiBarang, setDataDonasiBarang] = useState([
    { id: 1, campaign: "Bantu Sekolah", namabarang: "Buku Tulis", qty: 100, kualitas: "Baru" },
    { id: 2, campaign: "Donasi Bencana Alam", namabarang: "Selimut", qty: 50, kualitas: "Layak Pakai" },
    { id: 3, campaign: "Bantu Lansia", namabarang: "Kursi Roda", qty: 5, kualitas: "Baru" },
    { id: 4, campaign: "Donasi Pendidikan", namabarang: "Pensil Warna", qty: 200, kualitas: "Baru" },
    { id: 5, campaign: "Bantu Korban Banjir", namabarang: "Pakaian Anak", qty: 80, kualitas: "Layak Pakai" },
    { id: 6, campaign: "Donasi Musim Dingin", namabarang: "Jaket", qty: 40, kualitas: "Baru" },
    { id: 7, campaign: "Kesehatan Gratis", namabarang: "Masker Kain", qty: 300, kualitas: "Baru" },
    { id: 8, campaign: "Donasi Anak Yatim", namabarang: "Mainan Edukatif", qty: 20, kualitas: "Baru" },
    { id: 9, campaign: "Bantu Desa Tertinggal", namabarang: "Peralatan Masak", qty: 30, kualitas: "Baru" },
    { id: 10, campaign: "Donasi Darurat", namabarang: "Tenda", qty: 10, kualitas: "Baru" },
    { id: 11, campaign: "Bantu Sekolah", namabarang: "Seragam Sekolah", qty: 70, kualitas: "Baru" },
    { id: 12, campaign: "Donasi Bencana Alam", namabarang: "Sepatu", qty: 45, kualitas: "Layak Pakai" },
    { id: 13, campaign: "Bantu Lansia", namabarang: "Alat Bantu Jalan", qty: 6, kualitas: "Baru" },
    { id: 14, campaign: "Donasi Pendidikan", namabarang: "Buku Cerita", qty: 90, kualitas: "Baru" },
    { id: 15, campaign: "Bantu Korban Banjir", namabarang: "Kasur Lipat", qty: 12, kualitas: "Layak Pakai" },
    { id: 16, campaign: "Donasi Musim Dingin", namabarang: "Syal & Kupluk", qty: 60, kualitas: "Baru" },
    { id: 17, campaign: "Kesehatan Gratis", namabarang: "Hand Sanitizer", qty: 100, kualitas: "Baru" },
    { id: 18, campaign: "Donasi Anak Yatim", namabarang: "Tas Sekolah", qty: 55, kualitas: "Baru" },
    { id: 19, campaign: "Bantu Desa Tertinggal", namabarang: "Alat Kebersihan", qty: 75, kualitas: "Baru" },
    { id: 20, campaign: "Donasi Darurat", namabarang: "Obat-obatan", qty: 150, kualitas: "Baru" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDelete = (id) => {
    const updated = dataDonasiBarang.filter((item) => item.id !== id);
    setDataDonasiBarang(updated);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = dataDonasiBarang.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dataDonasiBarang.length / itemsPerPage);

  return (
    <div className="p-4 w-10/12 mx-auto space-y-4">
      {currentData.map((item) => (
        <div key={item.id} className="bg-white border border-gray-400 rounded-lg shadow p-4 space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-primary">{item.namabarang}</h3>
              <p className="text-sm text-gray-500">Campaign: {item.campaign}</p>
            </div>
          
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
            <div>
              <p className="text-gray-500">Jumlah</p>
              <p>{item.qty}</p>
            </div>
            <div>
              <p className="text-gray-500">Kualitas</p>
              <p>{item.kualitas}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-secondary text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};



export default RiwayatDonasi;