import React from "react";
import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
const DonasiMasuk = () => {
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
    return (
        <DashboardLayout>
            <div className="text-2xl text-center text-primary font-primary">
                Donasi Masuk
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
    volunteer: "John Doe",
    nominal: 500000,
    tanggal: "2024-08-01",
    campaign: "Bantu Sekolah",
    type: "Transfer",
    detail: "Donasi dilakukan melalui transfer bank Mandiri"
  },
  {
    id: 2,
    volunteer: "Jane Dui",
    nominal: 1000000,
    tanggal: "2024-08-02",
    campaign: "Donasi Bencana Alam",
    type: "Blockchain",
    detail: "Transaksi menggunakan ETH blockchain"
  },
  {
    id: 3,
    volunteer: "Arif Alfiansyah",
    nominal: 750000,
    tanggal: "2024-08-03",
    campaign: "Bantu Lansia",
    type: "Transfer",
    detail: "Transfer via BCA Virtual Account"
  },
  {
    id: 4,
    volunteer: "Siti Nurhaliza",
    nominal: 850000,
    tanggal: "2024-08-04",
    campaign: "Peduli Anak Yatim",
    type: "Transfer",
    detail: "Donasi melalui QRIS"
  },
  {
    id: 5,
    volunteer: "Andi Wijaya",
    nominal: 200000,
    tanggal: "2024-08-05",
    campaign: "Pembangunan Masjid",
    type: "Blockchain",
    detail: "Menggunakan BNB Smart Chain"
  },
  {
    id: 6,
    volunteer: "Rina Marlina",
    nominal: 450000,
    tanggal: "2024-08-06",
    campaign: "Donasi Air Bersih",
    type: "Transfer",
    detail: "Transfer melalui Bank BNI"
  },
  {
    id: 7,
    volunteer: "Budi Santoso",
    nominal: 950000,
    tanggal: "2024-08-07",
    campaign: "Beasiswa Mahasiswa",
    type: "Transfer",
    detail: "Virtual Account Bank Mandiri"
  },
  {
    id: 8,
    volunteer: "Citra Ayu",
    nominal: 300000,
    tanggal: "2024-08-08",
    campaign: "Donasi Gempa",
    type: "Blockchain",
    detail: "Donasi dalam bentuk USDT"
  },
  {
    id: 9,
    volunteer: "Dewi Sartika",
    nominal: 100000,
    tanggal: "2024-08-09",
    campaign: "Peduli Pendidikan",
    type: "Transfer",
    detail: "Transfer antar bank BCA"
  },
  {
    id: 10,
    volunteer: "Ilham Saputra",
    nominal: 400000,
    tanggal: "2024-08-10",
    campaign: "Donasi Bencana Banjir",
    type: "Blockchain",
    detail: "Via wallet Metamask"
  },
  {
    id: 11,
    volunteer: "Sari Utami",
    nominal: 650000,
    tanggal: "2024-08-11",
    campaign: "Bantuan Korban Kebakaran",
    type: "Transfer",
    detail: "Transfer ke Bank Syariah"
  },
  {
    id: 12,
    volunteer: "Tono Suroso",
    nominal: 275000,
    tanggal: "2024-08-12",
    campaign: "Peduli Difabel",
    type: "Blockchain",
    detail: "Menggunakan Binance Pay"
  },
  {
    id: 13,
    volunteer: "Nina Wulandari",
    nominal: 880000,
    tanggal: "2024-08-13",
    campaign: "Santunan Dhuafa",
    type: "Transfer",
    detail: "VA BRI"
  },
  {
    id: 14,
    volunteer: "Agus Hartono",
    nominal: 990000,
    tanggal: "2024-08-14",
    campaign: "Bantuan Gizi Anak",
    type: "Blockchain",
    detail: "Melalui jaringan Polygon"
  },
  {
    id: 15,
    volunteer: "Yuniar Lestari",
    nominal: 550000,
    tanggal: "2024-08-15",
    campaign: "Donasi Alat Kesehatan",
    type: "Transfer",
    detail: "QRIS Maybank"
  },
  {
    id: 16,
    volunteer: "Rama Pratama",
    nominal: 1250000,
    tanggal: "2024-08-16",
    campaign: "Panti Jompo",
    type: "Transfer",
    detail: "Transfer BCA Internet Banking"
  },
  {
    id: 17,
    volunteer: "Vina Anjani",
    nominal: 325000,
    tanggal: "2024-08-17",
    campaign: "Donasi Kurban",
    type: "Blockchain",
    detail: "Donasi menggunakan BTC"
  },
  {
    id: 18,
    volunteer: "Fajar Nugroho",
    nominal: 600000,
    tanggal: "2024-08-18",
    campaign: "Pembangunan Sekolah",
    type: "Transfer",
    detail: "Transfer melalui Mandiri VA"
  },
  {
    id: 19,
    volunteer: "Dimas Akbar",
    nominal: 700000,
    tanggal: "2024-08-19",
    campaign: "Santunan Anak Jalanan",
    type: "Blockchain",
    detail: "Donasi melalui Solana wallet"
  },
  {
    id: 20,
    volunteer: "Nadya Khairunnisa",
    nominal: 800000,
    tanggal: "2024-08-20",
    campaign: "Bantuan Sembako",
    type: "Transfer",
    detail: "Transfer ke rekening BSI"
  }
]);


  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDelete = (id) => {
    const updated = dataDonasiUang.filter((item) => item.id !== id);
    setDataDonasiUang(updated);
  };

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = dataDonasiUang.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dataDonasiUang.length / itemsPerPage);

  return (
    <div className="p-4">
    
      <table className="w-full table-auto border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-accent font-normal text-white text-left">
          <tr>
            <th className="p-2">No</th>
            <th className="p-2">Volunteer</th>
            <th className="p-2">Nominal</th>
            <th className="p-2 hidden md:table-cell">Tanggal</th>
            <th className="p-2 hidden md:table-cell">Campaign</th>
            <th className="p-2 hidden md:table-cell">Tipe</th>
            <th className="p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <React.Fragment key={item.id}>
              <tr className="border-t">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.volunteer}</td>
                <td className="p-2">Rp {item.nominal.toLocaleString()}</td>
                <td className="p-2 hidden md:table-cell">{item.tanggal}</td>
                <td className="p-2 hidden md:table-cell">{item.campaign}</td>
                <td className="p-2 hidden md:table-cell">{item.type}</td>
                <td className="p-2 flex flex-col justify-center md:justify-start items-center gap-1 md:flex-row">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="bg-green-500 cursor-pointer block md:hidden text-white px-2 py-1 rounded-md"
                  >
                    {expandedRow === item.id ? "Tutup" : "Detail"}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white  px-2 py-1 rounded-md cursor-pointer"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
              {expandedRow === item.id && (
                <tr className="bg-gray-100 border-t">
                  <td colSpan="7" className="p-3">
                    <div className="flex gap-2">
                        <div className="flex-col flex gap-1">
                            <strong>Tanggal</strong>
                            <strong>Campaign</strong>
                            <strong>Tipe</strong>
                            <strong>Detail</strong>

                        </div>
                        <div className="flex-col flex gap-1">
                            <p>: {item.tanggal}</p>
                            <p>: {item.campaign}</p>
                            <p>: {item.type}</p>
                            <p>: {item.detail}</p>
                        </div>
                    </div>
                  
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

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
    {
      id: 1,
      volunteer: "John Doe",
      campaign: "Bantu Sekolah",
      namabarang: "Buku Tulis",
      qty: 100,
      kualitas: "Baru"
    },
    {
      id: 2,
      volunteer: "Jane Dui",
      campaign: "Donasi Bencana Alam",
      namabarang: "Selimut",
      qty: 50,
      kualitas: "Layak Pakai"
    },
    {
      id: 3,
      volunteer: "Arif Alfiansyah",
      campaign: "Bantu Lansia",
      namabarang: "Kursi Roda",
      qty: 5,
      kualitas: "Baru"
    },
    // Tambah data jika perlu
  ]);

  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDelete = (id) => {
    const updated = dataDonasiBarang.filter((item) => item.id !== id);
    setDataDonasiBarang(updated);
  };

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = dataDonasiBarang.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dataDonasiBarang.length / itemsPerPage);

  return (
    <div className="p-4">
      <table className="w-full table-auto border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-accent font-normal text-white text-left">
          <tr>
            <th className="p-2">No</th>
            <th className="p-2">Volunteer</th>
            <th className="p-2">Barang</th>
            <th className="p-2 hidden md:table-cell">QTY</th>
            <th className="p-2 hidden md:table-cell">Kualitas</th>
            <th className="p-2 hidden md:table-cell">Campaign</th>
            <th className="p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <React.Fragment key={item.id}>
              <tr className="border-t">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.volunteer}</td>
                <td className="p-2">{item.namabarang}</td>
                <td className="p-2 hidden md:table-cell">{item.qty}</td>
                <td className="p-2 hidden md:table-cell">{item.kualitas}</td>
                <td className="p-2 hidden md:table-cell">{item.campaign}</td>
                <td className="p-2 flex flex-col justify-center md:justify-start items-center gap-1 md:flex-row">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded-md block md:hidden"
                  >
                    {expandedRow === item.id ? "Tutup" : "Detail"}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
              {expandedRow === item.id && (
                <tr className="bg-gray-100 border-t">
                  <td colSpan="7" className="p-3">
                    <div className="flex gap-2">
                      <div className="flex-col flex gap-1 font-semibold">
                        <span>Barang</span>
                        <span>QTY</span>
                        <span>Kualitas</span>
                        <span>Campaign</span>
                      </div>
                      <div className="flex-col flex gap-1">
                        <span>: {item.namabarang}</span>
                        <span>: {item.qty}</span>
                        <span>: {item.kualitas}</span>
                        <span>: {item.campaign}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

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

export default DonasiMasuk;