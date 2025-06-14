// Import tetap
import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import toast from "react-hot-toast";
const PesanSaya = () => {
const [kontakMasuk, setKontakMasuk] = useState([
  { id: 1, tanggal: '2025-06-01', pesan: 'Apakah saya bisa berdonasi pakaian layak pakai?', status: 'Belum Dibaca', balasan: 'Ya, tentu. Silakan isi formulir donasi barang di halaman utama kami.' },
  { id: 2, tanggal: '2025-06-02', pesan: 'Kapan jadwal distribusi berikutnya?', status: 'Dibaca', balasan: '' },
  { id: 3, tanggal: '2025-06-03', pesan: 'Saya ingin membantu tenaga di kegiatan lapangan, apakah bisa?', status: 'Belum Dibaca', balasan: 'Terima kasih atas kesediaan Anda. Kami akan hubungi untuk info relawan lebih lanjut.' },
  { id: 4, tanggal: '2025-06-04', pesan: 'Tolong update bukti penyaluran donasi bulan Mei.', status: 'Dibaca', balasan: '' },
  { id: 5, tanggal: '2025-06-05', pesan: 'Saya sudah transfer donasi dana, mohon konfirmasi.', status: 'Belum Dibaca', balasan: 'Terima kasih, kami akan cek dan konfirmasi secepatnya.' },
  { id: 6, tanggal: '2025-06-06', pesan: 'Apakah donasi berupa mainan anak diterima?', status: 'Belum Dibaca', balasan: '' },
  { id: 7, tanggal: '2025-06-07', pesan: 'Terima kasih sudah menyalurkan bantuan ke daerah kami.', status: 'Dibaca', balasan: '' },
  { id: 8, tanggal: '2025-06-08', pesan: 'Bagaimana cara menjadi donatur tetap?', status: 'Belum Dibaca', balasan: '' },
  { id: 9, tanggal: '2025-06-09', pesan: 'Saya ingin melaporkan penyalahgunaan bantuan.', status: 'Dibaca', balasan: '' },
  { id: 10, tanggal: '2025-06-10', pesan: 'Apakah bisa berdonasi makanan siap saji?', status: 'Belum Dibaca', balasan: '' },
  { id: 11, tanggal: '2025-06-11', pesan: 'Saya tidak bisa login ke akun donatur saya.', status: 'Dibaca', balasan: '' },
  { id: 12, tanggal: '2025-06-12', pesan: 'Apakah ada program bantuan pendidikan?', status: 'Belum Dibaca', balasan: '' },
  { id: 13, tanggal: '2025-06-13', pesan: 'Saya sudah kirim donasi barang, tapi belum ada konfirmasi.', status: 'Dibaca', balasan: '' },
  { id: 14, tanggal: '2025-06-14', pesan: 'Saya ingin menyalurkan bantuan ke daerah terpencil.', status: 'Belum Dibaca', balasan: '' },
  { id: 15, tanggal: '2025-06-15', pesan: 'Apakah program ini terdaftar secara resmi?', status: 'Belum Dibaca', balasan: '' },
  { id: 16, tanggal: '2025-06-16', pesan: 'Apakah ada laporan penggunaan dana donasi?', status: 'Dibaca', balasan: '' },
  { id: 17, tanggal: '2025-06-17', pesan: 'Bolehkan saya berdonasi atas nama orang lain?', status: 'Belum Dibaca', balasan: '' },
  { id: 18, tanggal: '2025-06-18', pesan: 'Terima kasih sudah membantu warga kami.', status: 'Belum Dibaca', balasan: '' },
  { id: 19, tanggal: '2025-06-19', pesan: 'Saya ingin menyumbang alat kesehatan.', status: 'Dibaca', balasan: '' },
  { id: 20, tanggal: '2025-06-20', pesan: 'Saya tertarik untuk jadi sponsor kegiatan.', status: 'Belum Dibaca', balasan: '' },
]);

    const [isAddForm, setIsAddForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [openItemId, setOpenItemId] = useState(null);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = kontakMasuk.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(kontakMasuk.length / itemsPerPage);
  const toggleItem = (id) => {
    setOpenItemId(id === openItemId ? null : id);
  };
  const handleUpdateStatus = (id) => {
    const updated = kontakMasuk.map(item =>
      item.id === id ? { ...item, status: 'Dibaca' } : item
    );
    setKontakMasuk(updated);
  };
  const handleClose = (id) => {
    if (id === openItemId) {
      setOpenItemId(null);
    }
  };
  const handleSave = (newPesan) => {
  setKontakMasuk([newPesan, ...kontakMasuk]);
  toast.success("Pesan berhasil dikirim!");
  setIsAddForm(false); // Sembunyikan form setelah berhasil menambahkan
};

  return (
    <DashboardLayout>
      <div className="p-2">
        <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 font-primary text-primary">Kontak Masuk</h1>
        <div className="space-y-3 border rounded-2xl p-4 border-gray-400 shadow-2xl">
          
          
            {
                !isAddForm ? (
                    <button className="bg-primary text-white py-2 px-4 rounded-md" onClick={() => setIsAddForm(true)}>Tambah Pesan</button>
                ) : null
            }
             {
                isAddForm ? (
                    <TambahPesanForm
                        onTambah={handleSave}
                        isAddForm={isAddForm}
                        setIsAddForm={setIsAddForm}
                    />
                ) : null
            }
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="rounded-md relative shadow-sm z-10 cursor-pointer hover:bg-secondary transition-all"
              onClick={() => toggleItem(item.id)}
            >
              {openItemId === item.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose(item.id);
                  }}
                  className="absolute top-2 right-3 bg-white rounded-md p-1 z-50"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              )}
              <div className="flex gap-2 p-3 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-3 h-3 rounded-full ${item.status === 'Belum Dibaca' ? 'bg-yellow-400' : 'bg-green-500'}`} />
                </div>
               <div className="flex-grow">
  <div className="text-sm text-gray-500 font-medium">
    #{item.id} • {new Date(item.tanggal).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
  </div>
  <div className="text-sm text-gray-700 truncate italic">
    "{item.pesan.slice(0, 40)}{item.pesan.length > 40 ? '...' : ''}"
  </div>
</div>
              </div>
              {openItemId === item.id && (
                <div className="px-5 pb-4 text-sm text-gray-700 animate-fade-in">
                  <div className="mb-2">Pesan: {item.pesan}</div>
                  {item.balasan && (
                    <div className="mb-2 bg-gray-100 border-l-4 border-primary px-3 py-2 rounded">
                      <strong>Balasan:</strong>
                      <div>{item.balasan}</div>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpdateStatus(item.id);
                      }}
                      className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Tandai Sudah Dibaca
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

const TambahPesanForm = ({ onTambah, isAddForm, setIsAddForm }) => {
  const [tanggal, setTanggal] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tanggal || !pesan) return alert("Isi semua field terlebih dahulu.");

    const newPesan = {
      id: Date.now(), // ID unik
      tanggal,
      pesan,
      status: "Belum Dibaca",
      balasan: "",
    };

    onTambah(newPesan);
    setTanggal("");
    setPesan("");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-xl shadow-md mb-4 space-y-3">
      <h2 className="text-lg font-semibold text-primary">Tambah Pesan Baru</h2>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Tanggal</label>
        <input
          type="date"
          className="border rounded px-3 py-2 text-sm"
          value={tanggal}
          onChange={(e) => setTanggal(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Pesan</label>
        <textarea
          className="border rounded px-3 py-2 text-sm"
          rows={3}
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesan..."
          required
        />
      </div>
    <div className="flex justify-end gap-2">

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 text-sm"
        >
        Tambah Pesan
      </button>
      <button type="button" onClick={() => setIsAddForm(false)} className="bg-accent text-white px-4 py-2 rounded hover:bg-opacity-80 text-sm">
        Tutup
      </button>
          </div>
    </form>
  );
};

export default PesanSaya;