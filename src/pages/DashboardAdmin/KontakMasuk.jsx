import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useState } from "react";
import Dashboard from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import toast from "react-hot-toast";
const KontakMasuk = () => { 
         const [kontakMasuk, setKontakMasuk] = useState([
    { id: 1, tanggal: '2025-06-01', pengirim: 'Ali', pesan: 'Pesan 1', status: 'Belum Dibaca' },
    { id: 2, tanggal: '2025-06-02', pengirim: 'Budi', pesan: 'Pesan 2', status: 'Dibaca' },
    { id: 3, tanggal: '2025-06-03', pengirim: 'Citra', pesan: 'Pesan 3', status: 'Belum Dibaca' },
    { id: 4, tanggal: '2025-06-04', pengirim: 'Dewi', pesan: 'Pesan 4', status: 'Dibaca' },
    { id: 5, tanggal: '2025-06-05', pengirim: 'Eka', pesan: 'Pesan 5', status: 'Belum Dibaca' },
    { id: 6, tanggal: '2025-06-06', pengirim: 'Fajar', pesan: 'Pesan 6', status: 'Belum Dibaca' },
    { id: 7, tanggal: '2025-06-07', pengirim: 'Gita', pesan: 'Pesan 7', status: 'Dibaca' },
    { id: 8, tanggal: '2025-06-08', pengirim: 'Hadi', pesan: 'Pesan 8', status: 'Belum Dibaca' },
    { id: 9, tanggal: '2025-06-09', pengirim: 'Indra', pesan: 'Pesan 9', status: 'Dibaca' },
    { id: 10, tanggal: '2025-06-10', pengirim: 'Joko', pesan: 'Pesan 10', status: 'Belum Dibaca' },
    { id: 11, tanggal: '2025-06-11', pengirim: 'Kiki', pesan: 'Pesan 11', status: 'Dibaca' },
    { id: 12, tanggal: '2025-06-12', pengirim: 'Lia', pesan: 'Pesan 12', status: 'Belum Dibaca' },
    { id: 13, tanggal: '2025-06-13', pengirim: 'Maya', pesan: 'Pesan 13', status: 'Dibaca' },
    { id: 14, tanggal: '2025-06-14', pengirim: 'Nina', pesan: 'Pesan 14', status: 'Belum Dibaca' },
    { id: 15, tanggal: '2025-06-15', pengirim: 'Oscar', pesan: 'Pesan 15', status: 'Belum Dibaca' },
    { id: 16, tanggal: '2025-06-16', pengirim: 'Putri', pesan: 'Pesan 16', status: 'Dibaca' },
    { id: 17, tanggal: '2025-06-17', pengirim: 'Qory', pesan: 'Pesan 17', status: 'Belum Dibaca' },
    { id: 18, tanggal: '2025-06-18', pengirim: 'Rizki', pesan: 'Pesan 18', status: 'Belum Dibaca' },
    { id: 19, tanggal: '2025-06-19', pengirim: 'Sari', pesan: 'Pesan 19', status: 'Dibaca' },
    { id: 20, tanggal: '2025-06-20', pengirim: 'Taufik', pesan: 'Pesan 20', status: 'Belum Dibaca' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = kontakMasuk.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(kontakMasuk.length / itemsPerPage);
   const [openItemId, setOpenItemId] = useState(null);
  const [showReplyForm, setShowReplyForm] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');
 const toggleItem = (id) => {
    setOpenItemId(id);
    console.log(openItemId);
    // setShowReplyForm(null); // Tutup form balasan saat collapse ditutup
  };

  const handleUpdateStatus = (id) => {
    const updated = kontakMasuk.map(item =>
      item.id === id ? { ...item, status: 'Dibaca' } : item
    );
    setKontakMasuk(updated);
  };

  const handleReply = (id) => {
    setShowReplyForm(id);
    setOpenItemId(id);
  };

  const handleClose = (id) => {
    if(id == openItemId){
      setShowReplyForm(null);
      setOpenItemId(null);
    }
    // setOpenItemId(null);
  }


  const handleKirim = (id) => {
    toast.success("Pesan berhasil dikirim!");
    console.log(`Pesan terkirim ke ID ${id}:`, replyMessage);
    setReplyMessage('');
    setShowReplyForm(null);
  };

  const handlePageChange = (page) => setCurrentPage(page);
    return (
        <DashboardLayout>
            <div className="p-2">
                 <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 font-primary text-primary">Kontak Masuk</h1>
                 <div className="space-y-3 border rounded-2xl p-4 border-gray-400 shadow-2xl">
        {currentItems.map((item) => (
           <div
            key={item.id}
            className="rounded-md relative shadow-sm  z-10 cursor-pointer hover:bg-secondary transition-all"
            onClick={() => toggleItem(item.id)}
          >
            {
              openItemId === item.id && (
                <button   onClick={(e) => {
                     e.stopPropagation();
                      handleClose(item.id);
                    }} className="absolute cursor-pointer top-2 bg-white rounded-md p-1 right-3 z-50">
<FontAwesomeIcon icon={faTimes}  />
                </button>
              )
            }
            
            <div className="flex gap-2 p-3 items-start">
              <div className="flex-shrink-0 mt-1">
                <div className={`w-3 h-3 rounded-full ${item.status === 'Belum Dibaca' ? 'bg-yellow-400' : 'bg-green-500'}`} />
              </div>
              <div className="flex-grow">
                <div className="text-sm text-gray-500">{item.tanggal}</div>
                <div className="text-sm font-semibold">Pengirim : {item.pengirim}</div>
              </div>
            </div>

            {openItemId === item.id && (
              <div className="px-5 pb-4 text-sm text-gray-700 animate-fade-in">
                <div className="mb-2">{item.pesan}</div>

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
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReply(item.id);
                    }}
                    className="text-xs bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Balas
                  </button>
                
                 
                </div>

                {showReplyForm === item.id && (
                  <div className="mt-3">
                    <textarea
                      value={replyMessage}
                    
                      onChange={(e) => setReplyMessage(e.target.value)}
                      className="w-full border rounded px-2 py-1 text-sm"
                      rows={2}
                      placeholder="Tulis pesan balasan..."
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleKirim(item.id);
                      }}
                      className="mt-2 text-xs bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
                    >
                      Kirim
                    </button>
                  </div>
                )}
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
    )
}

export default KontakMasuk;