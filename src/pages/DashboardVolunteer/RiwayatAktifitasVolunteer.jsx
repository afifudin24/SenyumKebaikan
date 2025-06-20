import React from "react";
import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faE, faEye, faLock, faS, faSearch, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const RiwayatAktifitasVolunteer = () => {
      const [user, setUser] = useState(() => {
                const savedUser = localStorage.getItem('user');
                return savedUser ? JSON.parse(savedUser) : null;
              }) 
  return (
    <DashboardVolunteerLayout>
           <h2 className="text-4xl md:text-2xl font-primary font-bold text-primary mb-4">Hi, {user.namadepan}</h2>
                <p className="text-xs md:text-sm font-secondary">Selamat datang di halaman dashboard Volunteer</p>
                <div className="mt-3">

        <ActivityHistory />
                </div>
    </DashboardVolunteerLayout>
  );
}

const ActivityHistory = () => {
  const allActivities = [
    { id: 1, campaign: "Campaign A", text: "Laporan untuk Program 'Donasi Ramadhan' telah diterima, 2 Juni 2025", date: "01/04/2025", status: "dibaca" },
    { id: 2, campaign: "Campaign A", text: "Laporan untuk Program 'Donasi Ramadhan' telah diterima, 2 Juni 2025", date: "01/04/2025", status: "peringatan" },
    { id: 3, campaign: "Campaign A", text: "Laporan untuk Program 'Donasi Ramadhan' telah diterima, 2 Juni 2025", date: "01/04/2025", status: "terkunci" },
    { id: 4, campaign: "Campaign A", text: "Laporan untuk Program 'Donasi Ramadhan' telah diterima, 2 Juni 2025", date: "01/04/2025", status: "dibaca" },
    { id: 5, campaign: "Campaign A", text: "Laporan untuk Program 'Donasi Ramadhan' telah diterima, 2 Juni 2025", date: "01/04/2025", status: "dibaca" },
    { id: 6, campaign: "Campaign A", text: "Laporan untuk Program 'Donasi Ramadhan' telah diterima, 2 Juni 2025", date: "01/04/2025", status: "peringatan" },
    { id: 7, campaign: "Campaign A", text: "Laporan untuk Program 'Donasi Ramadhan' telah diterima, 2 Juni 2025", date: "01/04/2025", status: "terkunci" },
    { id: 8, campaign: "Campaign A", text: "Laporan untuk Program 'Donasi Ramadhan' telah diterima, 2 Juni 2025", date: "01/04/2025", status: "dibaca" },
    { id: 9, campaign: "Campaign A", text: "Laporan untuk Program 'Donasi Ramadhan' telah diterima, 2 Juni 2025", date: "01/04/2025", status: "dibaca" },
    { id: 10, campaign: "Campaign A", text: "Laporan untuk Program 'Donasi Ramadhan' telah diterima, 2 Juni 2025", date: "01/04/2025", status: "dibaca" },
    { id: 11, campaign: "Campaign A", text: "Laporan tambahan bulan Mei telah dikirimkan", date: "02/04/2025", status: "dibaca" },
    { id: 12, campaign: "Campaign A", text: "Revisi laporan bulan April diproses", date: "02/04/2025", status: "peringatan" },
  ];

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("semua");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const filtered = allActivities.filter((a) => {
    const matchesSearch = a.text.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "semua" || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const renderStatusIcon = (status) => {
    switch (status) {
      case "dibaca":
        return (
          <span className="text-emerald-700 flex items-center gap-1">
            <FontAwesomeIcon icon={faEye} className="w-3 h-3" /> Dibaca
          </span>
        );
      case "peringatan":
        return (
          <span className="text-yellow-600 flex items-center gap-1">
            <FontAwesomeIcon icon={faTriangleExclamation} className="w-3 h-3" /> Perhatian
          </span>
        );
      case "terkunci":
        return (
          <span className="text-orange-600 flex items-center gap-1">
            <FontAwesomeIcon icon={faLock} className="w-3 h-3" /> Terkunci
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-9/12 p-4 bg-white">
      <h2 className="text-xl font-semibold text-primary ">Riwayat Aktifitas</h2>
      <div className="w-full flex justify-end ">
            <div className="flex gap-2 items-center p-2 rounded-lg text-white bg-primary w-6/12 ">
        <select
          className="border px-2 py-1 text-sm rounded shadow-sm"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option className="text-primary" value="semua">Semua</option>
          <option className="text-primary" value="dibaca">Dibaca</option>
          <option className="text-primary" value="peringatan">Peringatan</option>
          <option className="text-primary" value="terkunci">Terkunci</option>
        </select>
        <div className="relative flex-1">
          <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-2.5 text-gray-400 text-xs" />
          <input
            type="text"
            className="w-full border text-primary bg-white  pl-8 pr-2 py-1 text-sm rounded-lg"
            placeholder="Cari..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      </div>
   
      <div className="space-y-3 border border-gray-500 rounded-lg p-4">
        {paginated.map((activity) => (
          <div key={activity.id} className="border-b pb-2">
            <div className="text-sm font-semibold text-gray-800">{activity.campaign}</div>
            <div className="text-sm text-gray-600">{activity.text}</div>
            <div className="flex justify-between text-xs mt-1">
              <span>{activity.date}</span>
              {renderStatusIcon(activity.status)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center pt-4">
        <span className="text-sm text-gray-600">
          Halaman {page} dari {totalPages}
        </span>
        <div className="space-x-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-2 py-1 text-sm border rounded disabled:opacity-30"
          >
            Sebelumnya
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-2 py-1 text-sm border rounded disabled:opacity-30"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiwayatAktifitasVolunteer;