import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const DataUsers = () => {
const [dataUsers, setDataUsers] = useState([
  {
    id: 1,
    name: "John Doe",
    email: "jwVXa@example.com",
    telepon: "081234567890",
    alamat: "Jl. Merdeka No.1, Jakarta",
    totalDonasiUang: 1000000,
    totalDonasiBarang: 2,
    campaignDidukung: ["Bantu Palestina", "Gempa Cianjur"],
    isActive: true,
    isVolunteer: true,
    riwayatAktifitas: [
      { tanggal: "2024-05-01", nominal: 500000, campaign: "Bantu Palestina" },
      { tanggal: "2024-06-12", nominal: 500000, campaign: "Gempa Cianjur" }
    ]
  },
  {
    id: 2,
    name: "Jane Dui",
    email: "janedui@example.com",
    telepon: "081223344556",
    alamat: "Jl. Sudirman No.2, Bandung",
    totalDonasiUang: 750000,
    totalDonasiBarang: 1,
    campaignDidukung: ["Banjir Aceh"],
    isActive: true,
    isVolunteer: false,
    riwayatAktifitas: [
      { tanggal: "2024-04-10", nominal: 250000, campaign: "Banjir Aceh" },
      { tanggal: "2024-05-18", nominal: 500000, campaign: "Banjir Aceh" }
    ]
  },
  {
    id: 3,
    name: "Arif Alfiansyah",
    email: "arif@example.com",
    telepon: "081298765432",
    alamat: "Jl. Diponegoro No.5, Yogyakarta",
    totalDonasiUang: 0,
    totalDonasiBarang: 3,
    campaignDidukung: ["Peduli Yatim"],
    isActive: false,
    isVolunteer: true,
    riwayatAktifitas: [
      { tanggal: "2024-03-21", nominal: 0, campaign: "Peduli Yatim" }
    ]
  },
  {
    id: 4,
    name: "Budi Santoso",
    email: "budi@example.com",
    telepon: "081334455667",
    alamat: "Jl. Gajah Mada No.7, Surabaya",
    totalDonasiUang: 500000,
    totalDonasiBarang: 0,
    campaignDidukung: ["Bantu Palestina"],
    isActive: true,
    isVolunteer: false,
    riwayatAktifitas: [
      { tanggal: "2024-02-14", nominal: 500000, campaign: "Bantu Palestina" }
    ]
  },
  {
    id: 5,
    name: "Citra Lestari",
    email: "citra@example.com",
    telepon: "082112345678",
    alamat: "Jl. Asia Afrika No.3, Bandung",
    totalDonasiUang: 0,
    totalDonasiBarang: 2,
    campaignDidukung: ["Gempa Cianjur"],
    isActive: false,
    isVolunteer: false,
    riwayatAktifitas: [
      { tanggal: "2024-05-01", nominal: 0, campaign: "Gempa Cianjur" }
    ]
  },
  {
    id: 6,
    name: "Dedi Pratama",
    email: "dedi@example.com",
    telepon: "081812345678",
    alamat: "Jl. Dr. Sutomo No.2, Medan",
    totalDonasiUang: 1500000,
    totalDonasiBarang: 1,
    campaignDidukung: ["Peduli Anak Jalanan", "Bantu Palestina"],
    isActive: true,
    isVolunteer: true,
    riwayatAktifitas: [
      { tanggal: "2024-06-20", nominal: 1000000, campaign: "Peduli Anak Jalanan" },
      { tanggal: "2024-07-01", nominal: 500000, campaign: "Bantu Palestina" }
    ]
  },
  {
    id: 7,
    name: "Eka Nuraini",
    email: "eka@example.com",
    telepon: "089911223344",
    alamat: "Jl. Pattimura No.10, Malang",
    totalDonasiUang: 0,
    totalDonasiBarang: 5,
    campaignDidukung: ["Gempa Cianjur"],
    isActive: false,
    isVolunteer: true,
    riwayatAktifitas: [
      { tanggal: "2024-04-15", nominal: 0, campaign: "Gempa Cianjur" }
    ]
  },
  {
    id: 8,
    name: "Fajar Hidayat",
    email: "fajar@example.com",
    telepon: "081245678901",
    alamat: "Jl. Ahmad Yani No.4, Semarang",
    totalDonasiUang: 300000,
    totalDonasiBarang: 0,
    campaignDidukung: ["Bantu Palestina"],
    isActive: true,
    isVolunteer: false,
    riwayatAktifitas: [
      { tanggal: "2024-05-20", nominal: 300000, campaign: "Bantu Palestina" }
    ]
  },
  {
    id: 9,
    name: "Gita Wulandari",
    email: "gita@example.com",
    telepon: "082123456789",
    alamat: "Jl. Kenangan No.9, Palembang",
    totalDonasiUang: 0,
    totalDonasiBarang: 1,
    campaignDidukung: ["Peduli Yatim"],
    isActive: false,
    isVolunteer: false,
    riwayatAktifitas: [
      { tanggal: "2024-03-10", nominal: 0, campaign: "Peduli Yatim" }
    ]
  },
  {
    id: 10,
    name: "Hendra Saputra",
    email: "hendra@example.com",
    telepon: "081255566677",
    alamat: "Jl. Sisingamangaraja No.6, Medan",
    totalDonasiUang: 200000,
    totalDonasiBarang: 1,
    campaignDidukung: ["Banjir Aceh"],
    isActive: true,
    isVolunteer: true,
    riwayatAktifitas: [
      { tanggal: "2024-05-25", nominal: 200000, campaign: "Banjir Aceh" }
    ]
  },
  {
    id: 11,
    name: "Indah Permata",
    email: "indah@example.com",
    telepon: "089977665544",
    alamat: "Jl. S. Parman No.1, Depok",
    totalDonasiUang: 500000,
    totalDonasiBarang: 0,
    campaignDidukung: ["Peduli Anak Jalanan"],
    isActive: true,
    isVolunteer: false,
    riwayatAktifitas: [
      { tanggal: "2024-04-01", nominal: 500000, campaign: "Peduli Anak Jalanan" }
    ]
  },
  {
    id: 12,
    name: "Joko Susilo",
    email: "joko@example.com",
    telepon: "087755667788",
    alamat: "Jl. Slamet Riyadi No.3, Solo",
    totalDonasiUang: 0,
    totalDonasiBarang: 2,
    campaignDidukung: ["Gempa Cianjur"],
    isActive: false,
    isVolunteer: true,
    riwayatAktifitas: [
      { tanggal: "2024-06-05", nominal: 60000, campaign: "Gempa Cianjur" }
    ]
  },
  {
    id: 13,
    name: "Kiki Ramadhan",
    email: "kiki@example.com",
    telepon: "081388877766",
    alamat: "Jl. Pahlawan No.5, Bekasi",
    totalDonasiUang: 1000000,
    totalDonasiBarang: 3,
    campaignDidukung: ["Bantu Palestina", "Peduli Yatim"],
    isActive: true,
    isVolunteer: true,
    riwayatAktifitas: [
      { tanggal: "2024-05-11", nominal: 700000, campaign: "Bantu Palestina" },
      { tanggal: "2024-05-20", nominal: 300000, campaign: "Peduli Yatim" }
    ]
  },
  {
    id: 14,
    name: "Lina Marlina",
    email: "lina@example.com",
    telepon: "081266778899",
    alamat: "Jl. Gatot Subroto No.2, Tangerang",
    totalDonasiUang: 0,
    totalDonasiBarang: 0,
    campaignDidukung: [],
    isActive: false,
    isVolunteer: false,
    riwayatAktifitas: []
  },
  {
    id: 15,
    name: "Mahmud Fauzi",
    email: "mahmud@example.com",
    telepon: "089876543210",
    alamat: "Jl. Dipatiukur No.6, Bandung",
    totalDonasiUang: 350000,
    totalDonasiBarang: 1,
    campaignDidukung: ["Banjir Aceh"],
    isActive: true,
    isVolunteer: false,
    riwayatAktifitas: [
      { tanggal: "2024-06-01", nominal: 350000, campaign: "Banjir Aceh" }
    ]
  },
  {
    id: 16,
    name: "Nina Kurnia",
    email: "nina@example.com",
    telepon: "081334455000",
    alamat: "Jl. Mawar No.10, Bogor",
    totalDonasiUang: 250000,
    totalDonasiBarang: 0,
    campaignDidukung: ["Bantu Palestina"],
    isActive: true,
    isVolunteer: false,
    riwayatAktifitas: [
      { tanggal: "2024-05-01", nominal: 250000, campaign: "Bantu Palestina" }
    ]
  },
  {
    id: 17,
    name: "Oka Prasetyo",
    email: "oka@example.com",
    telepon: "081122334455",
    alamat: "Jl. Veteran No.5, Surakarta",
    totalDonasiUang: 0,
    totalDonasiBarang: 4,
    campaignDidukung: ["Peduli Yatim"],
    isActive: false,
    isVolunteer: true,
    riwayatAktifitas: [
      { tanggal: "2024-07-01", nominal: 30000000, campaign: "Peduli Yatim" }
    ]
  },
  {
    id: 18,
    name: "Putri Salma",
    email: "putri@example.com",
    telepon: "082134567899",
    alamat: "Jl. Cendrawasih No.3, Pekanbaru",
    totalDonasiUang: 800000,
    totalDonasiBarang: 1,
    campaignDidukung: ["Gempa Cianjur"],
    isActive: true,
    isVolunteer: true,
    riwayatAktifitas: [
      { tanggal: "2024-06-10", nominal: 800000, campaign: "Gempa Cianjur" }
    ]
  },
  {
    id: 19,
    name: "Rizky Aditya",
    email: "rizky@example.com",
    telepon: "081277788899",
    alamat: "Jl. Kalimantan No.7, Samarinda",
    totalDonasiUang: 400000,
    totalDonasiBarang: 0,
    campaignDidukung: ["Bantu Palestina"],
    isActive: true,
    isVolunteer: false,
    riwayatAktifitas: [
      { tanggal: "2024-05-03", nominal: 400000, campaign: "Bantu Palestina" }
    ]
  },
  {
    id: 20,
    name: "Siti Aisyah",
    email: "siti@example.com",
    telepon: "081200011122",
    alamat: "Jl. Anggrek No.8, Pontianak",
    totalDonasiUang: 0,
    totalDonasiBarang: 2,
    campaignDidukung: ["Peduli Anak Jalanan"],
    isActive: false,
    isVolunteer: true,
    riwayatAktifitas: [
      { tanggal: "2024-06-22", nominal: 10000, campaign: "Peduli Anak Jalanan" }
    ]
  }
]);

  const handleStatusChange = (id, newStatus) => {
  const updatedUsers = dataUsers.map(user =>
    user.id === id ? { ...user, isActive: newStatus === "true" } : user
  );
  setDataUsers(updatedUsers);
};
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = dataUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(dataUsers.length / usersPerPage);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <DashboardLayout>
        <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 font-primary text-primary ">Data Users</h1>
        <div className="w-11/12 mx-auto md:w-9/12 overflow-x-auto shadow-md">
          <table className="w-full table-auto border border-gray-300 text-sm font-primary overflow-hidden  rounded-md shadow-2xl min-w-max">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-2 px-4 text-left">Nama</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Volunteer</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Detail</th>
              </tr>
            </thead>
          <tbody>
  {currentUsers.map((user) => (
    <tr key={user.id} className="border-b">
      <td className="py-2 px-4">{user.name}</td>
      <td className="py-2 px-4">{user.email}</td>
      <td className="py-2 px-4">{user.isVolunteer ? "Ya" : "Tidak"}</td>
      <td className="py-2 px-4">
        <select
          value={user.isActive}
          onChange={(e) => handleStatusChange(user.id, e.target.value)}
          className={`border rounded p-2 ${user.isActive ? "text-green-500 " : "text-red-500 "}` }
        >
          <option value="true">Aktif</option>
          <option value="false">Tidak Aktif</option>
        </select>
      </td>
      <td className="py-2 px-4 text-primary font-light">
        <Link to={`/informasiuser`} state={user}>
        <p>Lihat Detail <FontAwesomeIcon icon={faArrowRight} /> </p>  
      
        </Link>
      </td>
    </tr>
  ))}
</tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};
export default DataUsers;