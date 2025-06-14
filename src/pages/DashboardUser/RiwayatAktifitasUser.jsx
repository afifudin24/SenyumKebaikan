import React, {useState} from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const RiwayatAktifitasUser = () => {
    const [riwayatAktifitasUser, setRiwayatAktifitasUser] = useState([
  {
    id: 1,
    tanggal: '2025-06-01',
    waktu: '08:00',
    jenisAktifitas: 'Login',
    deskripsi: 'User berhasil login ke sistem',
    status: 'Berhasil',
    ipAddress: '192.168.1.10',
  },
  {
    id: 2,
    tanggal: '2025-06-01',
    waktu: '08:10',
    jenisAktifitas: 'Lihat Dashboard',
    deskripsi: 'Mengakses halaman dashboard utama',
    status: 'Berhasil',
    ipAddress: '192.168.1.10',
  },
  {
    id: 3,
    tanggal: '2025-06-01',
    waktu: '08:15',
    jenisAktifitas: 'Donasi',
    deskripsi: 'Melakukan donasi sebesar Rp 50.000',
    status: 'Berhasil',
    ipAddress: '192.168.1.10',
  },
  {
    id: 4,
    tanggal: '2025-06-01',
    waktu: '08:25',
    jenisAktifitas: 'Logout',
    deskripsi: 'User keluar dari sistem',
    status: 'Berhasil',
    ipAddress: '192.168.1.10',
  },
  {
    id: 5,
    tanggal: '2025-06-02',
    waktu: '09:00',
    jenisAktifitas: 'Login',
    deskripsi: 'User login dari perangkat berbeda',
    status: 'Berhasil',
    ipAddress: '192.168.1.12',
  },
  {
    id: 6,
    tanggal: '2025-06-02',
    waktu: '09:05',
    jenisAktifitas: 'Update Profil',
    deskripsi: 'Mengubah foto profil',
    status: 'Berhasil',
    ipAddress: '192.168.1.12',
  },
  {
    id: 7,
    tanggal: '2025-06-02',
    waktu: '09:10',
    jenisAktifitas: 'Donasi',
    deskripsi: 'Melakukan donasi sebesar Rp 25.000',
    status: 'Berhasil',
    ipAddress: '192.168.1.12',
  },
  {
    id: 8,
    tanggal: '2025-06-02',
    waktu: '09:15',
    jenisAktifitas: 'Lihat Riwayat Donasi',
    deskripsi: 'Membuka halaman riwayat donasi',
    status: 'Berhasil',
    ipAddress: '192.168.1.12',
  },
  {
    id: 9,
    tanggal: '2025-06-03',
    waktu: '10:00',
    jenisAktifitas: 'Login',
    deskripsi: 'Login dengan email dan password',
    status: 'Berhasil',
    ipAddress: '192.168.1.14',
  },
  {
    id: 10,
    tanggal: '2025-06-03',
    waktu: '10:05',
    jenisAktifitas: 'Ajukan Kebutuhan',
    deskripsi: 'Mengajukan bantuan makanan',
    status: 'Berhasil',
    ipAddress: '192.168.1.14',
  },
  {
    id: 11,
    tanggal: '2025-06-03',
    waktu: '10:10',
    jenisAktifitas: 'Logout',
    deskripsi: 'Keluar dari sistem',
    status: 'Berhasil',
    ipAddress: '192.168.1.14',
  },
  {
    id: 12,
    tanggal: '2025-06-04',
    waktu: '07:50',
    jenisAktifitas: 'Login',
    deskripsi: 'User login',
    status: 'Gagal',
    ipAddress: '192.168.1.20',
  },
  {
    id: 13,
    tanggal: '2025-06-04',
    waktu: '07:51',
    jenisAktifitas: 'Login',
    deskripsi: 'User berhasil login setelah percobaan sebelumnya gagal',
    status: 'Berhasil',
    ipAddress: '192.168.1.20',
  },
  {
    id: 14,
    tanggal: '2025-06-04',
    waktu: '08:00',
    jenisAktifitas: 'Ganti Password',
    deskripsi: 'Mengubah kata sandi akun',
    status: 'Berhasil',
    ipAddress: '192.168.1.20',
  },
  {
    id: 15,
    tanggal: '2025-06-04',
    waktu: '08:10',
    jenisAktifitas: 'Donasi',
    deskripsi: 'Donasi barang - pakaian layak pakai',
    status: 'Berhasil',
    ipAddress: '192.168.1.20',
  },
  {
    id: 16,
    tanggal: '2025-06-05',
    waktu: '10:20',
    jenisAktifitas: 'Lihat Profil',
    deskripsi: 'Mengakses halaman profil',
    status: 'Berhasil',
    ipAddress: '192.168.1.21',
  },
  {
    id: 17,
    tanggal: '2025-06-05',
    waktu: '10:25',
    jenisAktifitas: 'Pesan Masuk',
    deskripsi: 'Membaca pesan dari admin',
    status: 'Berhasil',
    ipAddress: '192.168.1.21',
  },
  {
    id: 18,
    tanggal: '2025-06-05',
    waktu: '10:30',
    jenisAktifitas: 'Donasi',
    deskripsi: 'Donasi uang sebesar Rp 10.000',
    status: 'Berhasil',
    ipAddress: '192.168.1.21',
  },
  {
    id: 19,
    tanggal: '2025-06-06',
    waktu: '11:00',
    jenisAktifitas: 'Lihat Pengajuan',
    deskripsi: 'Melihat status pengajuan kebutuhan',
    status: 'Berhasil',
    ipAddress: '192.168.1.23',
  },
  {
    id: 20,
    tanggal: '2025-06-06',
    waktu: '11:15',
    jenisAktifitas: 'Logout',
    deskripsi: 'Keluar dari aplikasi',
    status: 'Berhasil',
    ipAddress: '192.168.1.23',
  },
]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(riwayatAktifitasUser / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentItems = riwayatAktifitasUser.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

    return (
        <DashboardLayout>
            <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 font-primary text-primary">Riwayat Aktifitas</h1>
            <div className="w-11/12 md:w-10/12 mx-auto shadow-2xl rounded-2xl p-5">
      {currentItems.map((item, index) => (
        <div
          key={item.id}
          className="tab-item text-center py-4 text-primary border-b-2 border-gray-400 items-center flex justify-between"
        >
          <div className="text-start">
            <div className="tab-item-title font-semibold mt-2">
             {item.jenisAktifitas}
            </div>
            <div className="tab-item-description mt-2">
              {item.deskripsi}
            </div>
            <div className="mt-2 font-light text-xs text-white bg-primary rounded-2xl w-auto inline-block px-2 py-1">
              {item.status}
            </div>
          </div>
          <div className="tab-item-tanggal flex gap-2 items-center">
            <FontAwesomeIcon icon={faCalendar} />
            {item.tanggal}
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Sebelumnya
        </button>
        <span className="text-sm text-gray-600">
          Halaman {currentPage + 1} dari {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Selanjutnya
        </button>
      </div>
    </div>
        </DashboardLayout>
    );
}
export default RiwayatAktifitasUser;