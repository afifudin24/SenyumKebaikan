import React from "react";
import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheckCircle, faEye, faTrash, faQuestionCircle, faEnvelopeCircleCheck, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const DonasiMasuk = () => {
    const [tabActive, setTabActive] = useState(0);
    const tab = [
        {
            title : 'Donasi Bank',
            component : <DonasiUang />
        },
        {
            title : 'Donasi Crypto',
            component : <DonasiCrypto />
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
const formatRupiah = (angka) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(angka);

const statusColor = {
  Menunggu: "text-yellow-500",
  Diterima: "text-green-600",
  Ditolak: "text-red-600",
};

const DonasiUang = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });
  
  const [dataItem, setDataItem] = useState([
    { id: 1, transaksi: "INV-09878", nama: "Imam", nominal: 500000, status: "Terkonfirmasi" },
    { id: 2, transaksi: "INV-09878", nama: "Mukmin", nominal: 250000, status: "Terkonfirmasi" },
    { id: 3, transaksi: "INV-09878", nama: "Salim", nominal: 300000, status: "Terverifikasi" },
    { id: 4, transaksi: "INV-09878", nama: "Salim", nominal: 150000, status: "Gagal" },
    { id: 5, transaksi: "INV-09879", nama: "Budi", nominal: 400000, status: "Menunggu Konfirmasi" },
    { id: 6, transaksi: "INV-09880", nama: "Aisyah", nominal: 1000000, status: "Menunggu Konfirmasi" },
    { id: 7, transaksi: "INV-09881", nama: "Rahma", nominal: 750000, status: "Menunggu Konfirmasi" },
    { id: 8, transaksi: "INV-09882", nama: "Hasan", nominal: 600000, status: "Menunggu Konfirmasi" },
    { id: 9, transaksi: "INV-09883", nama: "Nina", nominal: 550000, status: "Menunggu Konfirmasi" },
  ]);
  

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filteredData = dataItem.filter(item =>
    item.transaksi.toLowerCase().includes(search.toLowerCase()) ||
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  const totalPage = Math.ceil(filteredData.length / perPage);
  const paginatedData = filteredData.slice((page - 1) * perPage, page * perPage);

  const konfirmasi = (item) => {
    toast.success("Donasi berhasil dikonfirmasi!");
    // update status dari item menjadi "Terkonfirmasi"
    const updatedData = dataItem.map((data) => {
      if (data.id === item.id) {
        return { ...data, status: "Terkonfirmasi" };
      }
      return data;
    });
  
    setDataItem(updatedData); // ini yang penting!
    setModalOpen(false);
    setModalContent({ title: "", body: "" });

  }
  const catat = (item) => {
    toast.success("Donasi berhasil dicatat!");
    // update status dari item menjadi "Terkonfirmasi"
    const updatedData = dataItem.map((data) => {
      if (data.id === item.id) {
        return { ...data, status: "Terverifikasi" };
      }
      return data;
    });
  
    setDataItem(updatedData); // ini yang penting!
    setModalOpen(false);
    setModalContent({ title: "", body: "" });
  }
  // modal
  const openModal = (item, type) => {
    let content = { title: "", body: "" };
  
    switch (type) {
      case "konfirmasi":
        content = {
          title: "Konfirmasi Donasi",
          icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faQuestionCircle} />,
          body: (
            <div className="flex  gap-2 justify-center mt-2 items-center">
              <div className="flex flex-col gap-2">
                <h3 className="text-center font-semibold text-primary">Bukti Transfer</h3>
                <div className="w-50 bg-primary rounded-2xl h-50"></div>
              </div>
              <div>
                <h3 className="text-lg font-primary text-primary font-semibold">Campaign Tujuan</h3>
                <p className="my-1 text-primary">Bantuan Pendidikan</p>
                <p className="font-primary  text-sm my-1">Status : Belum Tercatat</p>
                <p className="font-semibold mt-3">
                  Nama Donatur: <span className="font-light">{item.nama}</span>
                </p>
                <p className="font-semibold mt-2">
                  Tanggal: <span className="font-light">3 Juni 2025</span>
                </p>
                <div className="flex mt-5 gap-1">
                  <button
                    className="px-3 py-1 bg-gray-200 text-sm rounded hover:bg-secondary transition-all"
                  >
                    Tolak
                  </button>
                  <button
                    onClick={() => konfirmasi(item) }
                    className="px-3 py-1 bg-accent text-sm rounded text-white hover:bg-secondary transition-all"
                  >
                    Konfirmasi
                  </button>
                </div>
              </div>
            </div>
          )
        };
        break;
      case "blockchain":
        content = {
          icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faEnvelopeCircleCheck} />,
          title: "Konfirmasi Pencatatan Ke Blockchain",
          body: (
            <div className="">
              <h3 className="text-center">Status Ringaksan Transaksi</h3>
              <div className="flex gap-1 justify-center w-8/12 mx-auto">
                <div className="text-primary text-base">
                <h4 className="">ID Transaksi</h4>
                <h4>Nominal</h4>
                <h4>Nama Pengirim</h4>
                  
                </div>
                <div>
                  <h4>: {item.transaksi}</h4>
                  <h4>: {item.nominal}</h4>
                  <h4>: {item.nama}</h4>


                </div>
              </div>
              <p className="text-primary text-sm font-light text-center">Apakah anda yakin ingin menactat transaksi ini ke blockchain?</p>
              <div className="text-center">
                <button onClick={() => catat(item)} className="px-4 py-2 mt-3 mx-auto bg-primary text-white hover:text-primary text-sm rounded hover:bg-secondary">
                  Catat
              </button>

              </div>


            </div>
          ),
        };
        break;
      case "detail":
        content = {
          icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faCheckCircle} />,
          title: "Transaksi Berhasil Dicatat ke Blockchain",
          body: (
            <div>
              <h3 className="text-center">Status Ringaksan Transaksi</h3>
              <div className="flex gap-1 justify-center w-8/12 mx-auto">
                <div className="text-primary text-base">
                <h4 className="">ID Transaksi</h4>
                <h4>Nominal</h4>
                <h4>Nama Pengirim</h4>
                <h4>Link</h4>
                  
                </div>
                <div>
                  <h4>: {item.transaksi}</h4>
                  <h4>: {item.nominal}</h4>
                  <h4>: {item.nama}</h4>
                  <h4>: <a className="text-blue-500" href="https://etherscan.io/">[Lihat di Blockchain]</a></h4>
                </div>
              </div>
              <p>
                Klik link jika ingin melihat transaksi di blockchain explorer
              </p>
            </div>
          ),
        };
        break;
      case "gagal":
        content = {
          icon : <FontAwesomeIcon className="text-4xl text-accent" icon={faXmarkCircle} />,
          title: "Donasi Gagal",
          body: (
            <div>
              <p className="text-center">Donasi dari {item.nama} gagal diverifikasi</p>
            </div>
          ),
        };
        break;
      default:
        break;
    }
  
    setModalContent(content);
    setModalOpen(true);
  };
  


  const renderAksi = (item) => {
    switch (item.status) {
      case "Menunggu Konfirmasi":
        return (
          <button
            className="text-blue-500 hover:underline"
            onClick={() => openModal(item, "konfirmasi")}
          >
            Konfirmasi
          </button>
        );
      case "Terkonfirmasi":
        return (
          <button
            className="text-green-600 hover:underline"
            onClick={() => openModal(item, "blockchain")}
          >
            Catat di Blockchain →
          </button>
        );
      case "Terverifikasi":
        return (
          <button
            className="text-gray-600 hover:underline"
            onClick={() => openModal(item, "detail")}
          >
            Detail →
          </button>
        );
      case "Gagal":
        return (
          <button
            className="text-red-500 hover:underline"
            onClick={() => openModal(item, "gagal")}
          >
            Detail Gagal →
          </button>
        );
      default:
        return null;
    }
  };
  
  const Modal = ({ isOpen, icon, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md shadow-lg relative">
         <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
               {icon}
            <h4 className="font-semibold my-2 text-primary">{ title}</h4>
               
          </div>
          <div className="w-11/12 mx-auto">
         {children}

          </div>

          {/* {children} */}
          <div className="text-center my-3">

          <button
            onClick={onClose}
            className="px-4 py-2 mt-3 mx-auto bg-secondary text-primary hover:text-white text-sm rounded hover:bg-primary"
            >
          Tutup
          </button>
            </div>
        </div>
      </div>
    );
  };
  
  


  return (
    <div className="w-full mx-auto mt-10">
      <div className="flex justify-end items-center mb-4">
       
        <input
          type="text"
          placeholder="🔍 Cari..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset halaman jika search
          }}
          className="border border-gray-300 rounded-full px-3 py-1 text-sm"
        />
      </div>

      <div className="bg-white border border-gray-300 rounded-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">ID Transaksi</th>
              <th className="text-left px-4 py-2">Nama</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 font-medium">{item.transaksi}</td>
                  <td className="px-4 py-2">{item.nama}</td>
                  <td className={`px-4 py-2 ${statusColor[item.status] || ""}`}>
                    {item.status}
                  </td>
                  <td className="px-4 py-2">{renderAksi(item)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  Tidak ada data ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 py-3">
          <button
            className="text-xl disabled:text-gray-300"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            ‹
          </button>
          <span className="text-sm">
            Halaman {page} dari {totalPage}
          </span>
          <button
            className="text-xl disabled:text-gray-300"
            disabled={page === totalPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            ›
          </button>
        </div>
      </div>
      <Modal
  isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        icon ={modalContent.icon}
  title={modalContent.title}
>
  {modalContent.body}
</Modal>
    </div>
    
  );
};

const DonasiCrypto = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "", icon: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [dataItem, setDataItem] = useState([
    { id: 1, txHash: "0xabc123", nama: "Ali", donasi: 0.5, status: "Belum Diverifikasi" },
    { id: 2, txHash: "0xdef456", nama: "Dina", donasi: 1.2, status: "Terverifikasi" },
    { id: 3, txHash: "0xghi789", nama: "Rudi", donasi: 0.3, status: "Gagal" },
    { id: 4, txHash: "0xjkl012", nama: "Budi", donasi: 0.8, status: "Belum Diverifikasi" },
    { id: 5, txHash: "0xaaa111", nama: "Siti", donasi: 2.1, status: "Terverifikasi" },
    { id: 6, txHash: "0xbbb222", nama: "Tono", donasi: 0.7, status: "Belum Diverifikasi" },
    { id: 7, txHash: "0xccc333", nama: "Andi", donasi: 1.5, status: "Gagal" },
    { id: 8, txHash: "0xddd444", nama: "Yuni", donasi: 0.9, status: "Belum Diverifikasi" },
    { id: 9, txHash: "0xeee555", nama: "Fajar", donasi: 1.7, status: "Terverifikasi" },
    { id: 10, txHash: "0xfff666", nama: "Winda", donasi: 0.4, status: "Belum Diverifikasi" },
    { id: 11, txHash: "0xggg777", nama: "Hana", donasi: 1.1, status: "Terverifikasi" },
    { id: 12, txHash: "0xhhh888", nama: "Iwan", donasi: 0.6, status: "Gagal" },
    { id: 13, txHash: "0xiii999", nama: "Joko", donasi: 2.0, status: "Belum Diverifikasi" },
    { id: 14, txHash: "0xjjj000", nama: "Kevin", donasi: 1.3, status: "Terverifikasi" },
    { id: 15, txHash: "0xkkk111", nama: "Lina", donasi: 0.2, status: "Gagal" },
    { id: 16, txHash: "0xlll222", nama: "Mira", donasi: 1.6, status: "Belum Diverifikasi" },
    { id: 17, txHash: "0xmmm333", nama: "Nina", donasi: 0.75, status: "Terverifikasi" },
    { id: 18, txHash: "0xnnn444", nama: "Oscar", donasi: 1.9, status: "Belum Diverifikasi" },
    { id: 19, txHash: "0xooo555", nama: "Putri", donasi: 0.65, status: "Gagal" },
    { id: 20, txHash: "0xppp666", nama: "Qori", donasi: 1.8, status: "Belum Diverifikasi" },
  ]);

  const verif = (item) => {
    toast.success('Berhasil Diverifikasi');
    const updatedData = dataItem.map((data) =>
      data.id === item.id ? { ...data, status: "Terverifikasi" } : data
    );
    setDataItem(updatedData);
    setModalOpen(false);
  };

  const openModal = (item, type) => {
    let content = { title: "", body: "", icon: null };

    switch (type) {
      case "lihat":
        content = {
          icon: <FontAwesomeIcon className="text-4xl text-accent" icon={faQuestionCircle} />,
          title: "Detail Transaksi Crypto",
          body: (
            <div className="text-sm text-primary">
              <p>Nama Donatur: {item.nama}</p>
              <p>Tx Hash: {item.txHash}</p>
              <p>Donasi: {item.donasi} ETH</p>
              <p>Status: {item.status}</p>
              <div className="text-center mt-4">
                <button
                  onClick={() => verif(item)}
                  className="px-4 py-2 bg-primary text-white hover:text-primary text-sm rounded hover:bg-secondary"
                >
                  Verifikasi
                </button>
              </div>
            </div>
          ),
        };
        break;
      case "lihatBlockchain":
        content = {
          icon: <FontAwesomeIcon className="text-4xl text-accent" icon={faCheckCircle} />,
          title: "Terverifikasi di Blockchain",
          body: (
            <div className="text-sm text-primary">
              <p>Nama Donatur: {item.nama}</p>
              <p>Tx Hash: {item.txHash}</p>
              <p>Donasi: {item.donasi} ETH</p>
              <p>Status: {item.status}</p>
              <p>
                Link:{" "}
                <a
                  className="text-blue-500 underline"
                  href={`https://etherscan.io/tx/${item.txHash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Lihat di Blockchain
                </a>
              </p>
            </div>
          ),
        };
        break;
      case "gagal":
        content = {
          icon: <FontAwesomeIcon className="text-4xl text-accent" icon={faXmarkCircle} />,
          title: "Transaksi Gagal",
          body: (
            <div className="text-sm text-center text-primary">
              <p>Transaksi oleh {item.nama} dengan hash {item.txHash} gagal diverifikasi.</p>
            </div>
          ),
        };
        break;
      default:
        break;
    }

    setModalContent(content);
    setModalOpen(true);
  };

  const renderAksi = (item) => {
    switch (item.status) {
      case "Belum Diverifikasi":
        return <button className="text-blue-500 hover:underline" onClick={() => openModal(item, "lihat")}>Lihat</button>;
      case "Terverifikasi":
        return <button className="text-green-600 hover:underline" onClick={() => openModal(item, "lihatBlockchain")}>Lihat di Blockchain →</button>;
      case "Gagal":
        return <button className="text-red-500 hover:underline" onClick={() => openModal(item, "gagal")}>Detail Gagal →</button>;
      default:
        return null;
    }
  };

  const filteredItems = dataItem.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.txHash.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const Modal = ({ isOpen, icon, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black/60 bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md shadow-lg relative">
          <div className="flex flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 bg-secondary">
            {icon}
            <h4 className="font-semibold my-2 text-primary">{title}</h4>
          </div>
          <div className="p-4">{children}</div>
          <div className="text-center mb-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-secondary text-primary hover:text-white text-sm rounded hover:bg-primary"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
       
        <input
          type="text"
          placeholder="Cari nama atau txHash..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset halaman ke 1 saat pencarian
          }}
          className="ml-auto border px-3 py-1 rounded text-sm"
        />
      </div>

      <div className="bg-white border border-gray-300 rounded-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left px-4 py-2">Tx Hash</th>
              <th className="text-left px-4 py-2">Nama</th>
              <th className="text-left px-4 py-2">Donasi (ETH)</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedItems.length > 0 ? (
              paginatedItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 font-mono">{item.txHash}</td>
                  <td className="px-4 py-2">{item.nama}</td>
                  <td className="px-4 py-2">{item.donasi}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2">{renderAksi(item)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Data tidak ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-end mt-4 gap-2 text-sm">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          &larr;
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-primary text-white" : ""}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          &rarr;
        </button>
      </div>

      <Modal
        isOpen={modalOpen}
        icon={modalContent.icon}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
      >
        {modalContent.body}
      </Modal>
    </div>
  );
};


const DonasiBarang = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });
  const [dataBarang, setDataBarang] = useState([
    {
      id: 1,
      volunteer: "John Doe",
      campaign: "Bantu Sekolah",
      namabarang: "Buku Tulis",
      qty: 100,
      kualitas: "Baru",
      status: "Menunggu Konfirmasi",
      kota: "Jakarta",
      kontak: "08123456789",
    },
    {
      id: 2,
      volunteer: "Jane Dui",
      campaign: "Donasi Bencana Alam",
      namabarang: "Selimut",
      qty: 50,
      kualitas: "Layak Pakai",
      status: "Terkonfirmasi",
      kota: "Bandung",
      kontak: "08234567890",
    },
    {
      id: 3,
      volunteer: "Arif Alfiansyah",
      campaign: "Bantu Lansia",
      namabarang: "Kursi Roda",
      qty: 5,
      kualitas: "Baru",
      status: "Terverifikasi",
      kota: "Yogyakarta",
      kontak: "08345678901",
    },
    {
      id: 4,
      volunteer: "Aminah",
      campaign: "Bantu Anak Yatim",
      namabarang: "Mainan Anak",
      qty: 25,
      kualitas: "Baru",
      status: "Gagal",
      kota: "Surabaya",
      kontak: "08456789012",
    },
    {
      id: 5,
      volunteer: "Bambang",
      campaign: "Bantuan Kebakaran",
      namabarang: "Pakaian",
      qty: 70,
      kualitas: "Baru",
      status: "Menunggu Konfirmasi",
      kota: "Semarang",
      kontak: "08567890123",
    },
    {
      id: 6,
      volunteer: "Citra",
      campaign: "Bantu Sekolah",
      namabarang: "Seragam",
      qty: 60,
      kualitas: "Layak Pakai",
      status: "Terkonfirmasi",
      kota: "Depok",
      kontak: "08678901234",
    },
    {
      id: 7,
      volunteer: "Dedi",
      campaign: "Donasi Bencana Alam",
      namabarang: "Tenda",
      qty: 10,
      kualitas: "Baru",
      status: "Terverifikasi",
      kota: "Bogor",
      kontak: "08789012345",
    },
    {
      id: 8,
      volunteer: "Eka",
      campaign: "Bantu Lansia",
      namabarang: "Makanan",
      qty: 200,
      kualitas: "Baru",
      status: "Gagal",
      kota: "Tangerang",
      kontak: "08890123456",
    },
    {
      id: 9,
      volunteer: "Fajar",
      campaign: "Bantu Sekolah",
      namabarang: "Alat Tulis",
      qty: 120,
      kualitas: "Baru",
      status: "Menunggu Konfirmasi",
      kota: "Bekasi",
      kontak: "08901234567",
    },
    {
      id: 10,
      volunteer: "Gita",
      campaign: "Donasi Kesehatan",
      namabarang: "Obat-obatan",
      qty: 30,
      kualitas: "Baru",
      status: "Menunggu Konfirmasi",
      kota: "Padang",
      kontak: "08012345678",
    },
  ]);

  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleDelete = (id) => {
    const updated = dataBarang.filter((item) => item.id !== id);
    setDataDonasiBarang(updated);
  };

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = dataBarang.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dataBarang.length / itemsPerPage);

  const handleStatusUpdate = (id, newStatus) => {
    const updated = dataBarang.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setDataBarang(updated);
    setModalOpen(false);
    setModalContent({ title: "", body: "" });
    toast.success("Berhasil Update Status");
  };
  const openModal = (item, type) => {
    let content = { title: "", body: "", icon: null };

    switch (type) {
      case "konfirmasi":
        content = {
          title: "Konfirmasi Donasi Barang",
          icon: <FontAwesomeIcon icon={faQuestionCircle} className="text-4xl text-accent" />,
          body: (
            <div className="text-center">
              <p>Yakin ingin konfirmasi donasi dari {item.volunteer}?</p>
              <button
                onClick={() => handleStatusUpdate(item.id, "Terkonfirmasi")}
                className="mt-3 px-3 py-1 bg-accent text-white rounded"
              >
                Konfirmasi
              </button>
            </div>
          ),
        };
        break;
      case "blockchain":
        content = {
          title: "Pencatatan ke Blockchain",
          icon: <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="text-4xl text-accent" />,
          body: (
            <div className="text-center">
              <p>Catat donasi barang dari {item.volunteer} ke blockchain?</p>
              <button
                onClick={() => handleStatusUpdate(item.id, "Terverifikasi")}
                className="mt-3 px-3 py-1 bg-primary text-white rounded"
              >
                Catat
              </button>
            </div>
          ),
        };
        break;
      case "detail":
        content = {
          title: "Detail Donasi Barang",
          icon: <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-accent" />,
          body: (
            <div>
              <p>Donatur: {item.volunteer}</p>
              <p>Kota Asal: {item.kota}</p>
              <p>Campaign: {item.campaign}</p>
              <p>Barang: {item.namabarang}</p>
              <p>Kuantitas: {item.qty}</p>
              <p>Status: {item.status}</p>
              <p>Link: <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer" className="text-blue-500">Lihat di Blockchain</a></p>
            </div>
          ),
        };
        break;
      case "gagal":
        content = {
          title: "Donasi Gagal",
          icon: <FontAwesomeIcon icon={faXmarkCircle} className="text-4xl text-red-500" />,
          body: <p className="text-center">Donasi dari {item.volunteer} gagal diproses.</p>,
        };
        break;
      default:
        break;
    }

    setModalContent(content);
    setModalOpen(true);
  };

  const renderAksi = (item) => {
    switch (item.status) {
      case "Menunggu Konfirmasi":
        return (
          <button className="text-blue-500 hover:underline" onClick={() => openModal(item, "konfirmasi")}>Konfirmasi</button>
        );
      case "Terkonfirmasi":
        return (
          <button className="text-green-600 hover:underline" onClick={() => openModal(item, "blockchain")}>Catat di Blockchain →</button>
        );
      case "Terverifikasi":
        return (
          <button className="text-gray-600 hover:underline" onClick={() => openModal(item, "detail")}>Lihat di Blockchain</button>
        );
      case "Gagal":
        return (
          <button className="text-red-500 hover:underline" onClick={() => openModal(item, "gagal")}>Detail Gagal</button>
        );
      default:
        return null;
    }
  };

  const Modal = ({ isOpen, onClose, icon, title, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black/60 bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md p-4">
          <div className="text-center">
            {icon}
            <h2 className="text-lg font-semibold mt-2">{title}</h2>
            <div className="mt-3">{children}</div>
            <button onClick={onClose} className="mt-4 px-4 py-1 bg-secondary text-primary rounded hover:bg-primary hover:text-white">
              Tutup
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      <table className="w-full text-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th className="p-3">No</th>
            <th className="p-3">Donatur</th>
            <th className="p-3">Barang</th>
            <th className="p-3">Kuantitas</th>
            <th className="p-3">Status</th>
            <th className="p-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataBarang.map((item, index) => (
            <tr key={item.id} className="border-b text-center">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{item.volunteer}</td>
              <td className="p-3">{item.namabarang}</td>
              <td className="p-3">{item.qty}</td>
              <td className={`p-3 ${statusColor[item.status]}`}>{item.status}</td>
              <td className="p-3">{renderAksi(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} icon={modalContent.icon} title={modalContent.title}>
        {modalContent.body}
      </Modal>
    </div>
  );
};

export default DonasiMasuk;