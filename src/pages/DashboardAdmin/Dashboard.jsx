import DashboardLayout from "../../components/DashboardLayout";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../../components/Container"
import { faEllipsis, faChartLine, faSearch, faArrowRight, faCalendar, faQuestion, faQuestionCircle, faEnvelopeCircleCheck, faCheckCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import CampaignProp from "../../assets/campaignpop.png"
import Grafik from "../../components/Grafik";
import { Line, Bar } from 'react-chartjs-2';
import toast from "react-hot-toast";
import { Chart as ChartJS,   ArcElement, CategoryScale, LinearScale, PointElement, LineElement,  BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const Dashboard = () => {

  return (
    <DashboardLayout>
     
      <h2 className="text-4xl md:text-2xl font-primary font-bold text-primary mb-4">Hi, Admin</h2>
      <p className="text-xs md:text-sm font-secondary">Selamat datang di halaman dashboard admin</p>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-7/12">

        
         <div className="grid grid-cols-1  sm:grid-cols-3 gap-6 p-6">
              {/* Kartu Donasi Uang */}
                  <div className="px-4 py-2 h-auto rounded-xl shadow-lg bg-secondary">
                    <div className='flex justify-between items-center mb-2 '>
                <h3 className="text-sm font-semibold  text-primary font-secondary">Donasi uang</h3>
                
                    </div>
                <p className="text-xl text-center font-bold text-primary mb-4"><span className='align-super'>Rp</span> 196.000,00</p>
                <p className="text-xs text-center text-green-600">  <span className='text-accent'><FontAwesomeIcon icon={faChartLine} />  +25%</span> dari bulan lalu</p>
              </div>
              {/* Kartu Donasi Barang */}
              <div className="bg-green-50 px-4 py-2  h-auto rounded-xl shadow-lg">
              <div className='flex justify-center items-center mb-2 '>
                <h3 className="text-sm font-semibold  text-primary font-secondary">Transaksi Tercatat Blockchain</h3>
             
                    </div>
                <p className="text-xl text-center font-bold text-primary mb-4">209</p>
             
              </div>
              {/* Kartu Donasi Terakhir */}
              <div className="bg-green-50 px-4 py-2  h-auto rounded-xl shadow-lg">
              <div className='flex justify-center items-center mb-2 '>
                <h3 className="text-sm font-semibold  text-primary font-secondary">Donasi Barang</h3>
              
                    </div>
                <p className="text-lg text-center font-bold text-primary mb-4">500 Item</p>
                <p className="text-xs text-center text-green-600"> <span className='text-accent'> <FontAwesomeIcon icon={faChartLine} /> +25% </span> dari bulan lalu</p>
              </div>


          </div>
              <UserJoin />

         
         
        </div>
        <div className="w-full md:w-5/12 p-2">
          <div className="bg-primary p-2 font-secondary text-white text-center rounded-2xl font-light">
            <p className="text-center text-2xl my-2 font-normal">Program</p>
            <div className="flex justify-between px-6 py-2">
              <div>
                <p>Aktif</p>
                <p>19</p>
              </div>
              <div>
                <p>Menunggu</p>
                <p>11</p>
              </div>
              <div>
                <p>Selesai</p>
                <p>576</p>
              </div>
            </div>
          </div>
          
          <CampaignPopuler />

          <Volunteer />
        </div>

        
      </div>
       <div className="p-6">
            <DonasiChart />
          </div>
      {/* Konten lainnya */}

      <div className="p-6">
        <ProgramSummaryHeader />
        <ProgramTable />

        <TransactionTable />
      </div>
    </DashboardLayout>
  );
};

const donationData = {
  bencanaAceh: {
    name: 'Bencana Alam Aceh',
    bulanan: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
      uang: [100000, 120000, 90000, 110000, 130000, 95000],
      barang: [60, 80, 70, 90, 100, 85],
    },
    mingguan: {
      labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
      uang: [30000, 40000, 35000, 45000],
      barang: [20, 25, 30, 28],
    },
    harian: {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      uang: [5000, 7000, 6500, 8000, 7500, 9000, 8500],
      barang: [3, 5, 6, 7, 4, 8, 9],
    },
  },
  pendidikan: {
    name: 'Pendidikan untuk Negeri',
    bulanan: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
      uang: [80000, 85000, 90000, 95000, 100000, 105000],
      barang: [40, 45, 50, 55, 60, 65],
    },
    mingguan: {
      labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
      uang: [20000, 25000, 22000, 27000],
      barang: [15, 18, 20, 22],
    },
    harian: {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      uang: [3000, 3500, 3200, 3700, 3900, 4200, 4100],
      barang: [1, 2, 3, 2, 4, 3, 5],
    },
  },
  kesehatanAnak: {
    name: 'Kesehatan dan Gizi Anak',
    bulanan: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
      uang: [95000, 97000, 99000, 105000, 110000, 108000],
      barang: [70, 75, 80, 85, 90, 88],
    },
    mingguan: {
      labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
      uang: [33000, 36000, 39000, 41000],
      barang: [21, 23, 26, 28],
    },
    harian: {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      uang: [4000, 4200, 4400, 4600, 4800, 5000, 5200],
      barang: [2, 3, 4, 5, 4, 6, 5],
    },
  },
};




const DonasiChart = () => {
  const [periodType, setPeriodType] = useState('bulanan');
  const [selectedCampaign, setSelectedCampaign] = useState('bencanaAceh');

  const currentData = donationData[selectedCampaign][periodType];

  const chartData = {
    labels: currentData.labels,
    datasets: [
      {
        label: 'Donasi Uang (Ribuan)',
        data: currentData.uang,
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(207, 253, 225, 1)',
         borderRadius: 5, // 🔸 inilah yang membuat batangnya rounded
        yAxisID: 'y1',
      },
      {
        label: 'Donasi Barang (pcs)',
        data: currentData.barang,
        borderColor: 'rgba(99, 234, 155, 1)',
         borderRadius: 5, // 🔸 inilah yang membuat batangnya rounded
        backgroundColor: 'rgba(104, 185, 132, 1)',
        yAxisID: 'y2',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#fff' } },

    },
    scales: {
      x: { beginAtZero: true,  ticks: {
      color: '#fff', // Ini membuat label bawah (Jan, Feb, dst) berwarna putih
    }, },
      y1: {
        beginAtZero: true,
        ticks: {
          color: 'rgba(99, 234, 155, 1)',
          callback: function (value) {
            return value / 1000 + 'k';
          },
        },
        title: {
          display: true,
          text: 'Donasi Uang (Ribuan)',
          color: 'rgba(99, 234, 155, 1)',
        },
      },
      y2: {
        beginAtZero: true,
        ticks: { stepSize: 10, color: 'rgba(34, 197, 94, 1)' },
        position: 'right',
        title: {
          display: true,
          color: 'rgba(34, 197, 94, 1)',
          text: 'Donasi Barang (pcs)',
        },
      },
    },
  };

  return (
    <div className="bg-primary p-6 rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <h3 className="text-white text-xl">
          Donasi: {donationData[selectedCampaign].name} ({periodType.charAt(0).toUpperCase() + periodType.slice(1)})
        </h3>
        <div className="flex gap-2">
          <select
            value={selectedCampaign}
            onChange={(e) => setSelectedCampaign(e.target.value)}
            className="p-2 rounded bg-white text-black"
          >
            {Object.entries(donationData).map(([key, value]) => (
              <option key={key} value={key}>
                {value.name}
              </option>
            ))}
          </select>
          <select
            value={periodType}
            onChange={(e) => setPeriodType(e.target.value)}
            className="p-2 rounded bg-white text-black"
          >
            <option value="bulanan">Bulanan</option>
            <option value="mingguan">Mingguan</option>
            <option value="harian">Harian</option>
          </select>
        </div>
      </div>
      <div className="2xl:hidden block">
        <Bar data={chartData} options={options} height={120} />
      </div>
      <div className="2xl:block hidden">
        <Bar data={chartData} options={options} height={150} />
      </div>
    </div>
  );
};




const CampaignPopuler = () => {
  const formatRupiah = (angka) => {
    return 'Rp. ' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  const campaign = [
    {
      title: 'Bantuan Pendidikan',
      donasi: 1000000,
      sisahari: '12',
      percent: '50%',
    },
    {
      title: 'Donasi Bencana Alam',
      donasi: 2500000,
      sisahari: '8',
      percent: '70%',
    },
    {
      title: 'Santunan Anak Yatim',
      donasi: 1750000,
      sisahari: '5',
      percent: '35%',
    },
  ];
  
  return (
    <div className="rounded-xl shadow-lg mt-5">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-primary mb-4">Campaign Populer</h2>
        <div className="space-y-4">
          {campaign.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <div className="w-2/12">
                <img src={CampaignProp} className="w-full" alt="" />
              </div>
              <div className="w-10/12">

              <div className="flex justify-between items-center my-2">
                <h3 className="text-lg font-semibold text-primary ">{item.title}</h3>
                <p className="text-primary">{formatRupiah(item.donasi)}</p>
              </div>
              <div>
                <div className="w-full rounded-lg bg-primary my-2"> 
                  <div className="p-1 rounded-lg bg-accent" style={{width: `${item.percent}`}}>
                  </div>
                </div>
                <div className="flex justify-between my-2" style={{width: `${item.percent}`}}>
                <p className="text-primary"> Sisa {item.sisahari} hari </p>
                <p className="text-primary">{item.percent}</p>

                </div>
              </div>
            </div>
              </div>
          ))}
        </div>
      </div>
      </div>
      )
}

const Volunteer = () => {
  const volunteerData = [
    {
      name: 'Arif Alfiansyah',
      campaign: 'Bantuan banjir Brebes',
    },
    {
      name: 'Siti Nurhaliza',
      campaign: 'Donasi Pendidikan Anak Yatim',
    },
    {
      name: 'Rizky Hidayat',
      campaign: 'Santunan Korban Gempa Cianjur',
    },
  ];
  
  return (

    <div className="rounded-2xl shadow-lg p-6  bg-white mt-5">
      <h2 className="my-3 font-semibold text-primary text-xl">Volunteer</h2>
      {
        volunteerData.map((item, index) => (
          <div className="flex justify-between items-center gap-2 my-2">
            <div className="w-2/12 text-center rounded-full">
              <img className="rounded-full w-20 h-20" src={CampaignProp} alt="" />
            </div>
            <div className="w-10/12">
            <p className="text-primary">{item.name}</p>
            <p className="text-primary">Campaign <FontAwesomeIcon icon={faArrowRight} /> {item.campaign}</p>
            </div>
          </div>
        ))
      }
      </div>
  )
}

const UserJoin = () => {
 const userJoinData = [
  { nama: 'Arif Alfiansyah' },
  { nama: 'Budi Santoso' },
  { nama: 'Citra Lestari' },
  { nama: 'Dedi Pratama' },
  { nama: 'Eka Nuraini' },
  { nama: 'Fajar Hidayat' },
  { nama: 'Gita Wulandari' },
  { nama: 'Hendra Saputra' },
  { nama: 'Indah Permata' },
  { nama: 'Joko Susilo' },
  { nama: 'Kiki Ramadhan' },
  { nama: 'Lina Marlina' },
  { nama: 'Mahmud Fauzi' },
  { nama: 'Nina Septiani' },
  { nama: 'Oki Hermawan' },
  { nama: 'Putri Andini' },
  { nama: 'Qori Azizah' },
  { nama: 'Rian Nugroho' },
  { nama: 'Siti Aisyah' },
  { nama: 'Taufik Hidayat' }
];

return (
  <div className=''>
    <h1 className='text-primary text-2xl font-semibold'>889 Pengguna</h1>
    <p className='text-primary opacity-50'>Sudah bergabung dengan Senyum Kebaikan</p>
    <div className='mt-5 flex flex-wrap gap-1 font-secondary'>
        {
          userJoinData.map((item, index) => (
            <div key={index} className='flex flex-col gap-1 text-primary justify-center items-center px-2 py-1 rounded-lg'>
            <img 
  src={CampaignProp} 
  className="w-16 h-16 object-cover rounded-full" 
  alt="" 
/>
              {item.nama}
              </div>
          ))
        }
        <div className='flex flex-col justify-center items-center'>

        <div className="w-16 h-16 object-cover border-gray-400 bg-secondary text-primary flex justify-center items-center rounded-full "> 
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <p>Selengkapnya</p>
        </div>
    </div>
  </div>
)

}

function ProgramSummaryHeader() {
  return (
    <div className="flex bg-primary text-white rounded-lg overflow-hidden text-sm">
      {/* Kiri: Bulan Ini */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#3b5252] border-r border-white/20">
        
        <FontAwesomeIcon icon={faCalendar} />
        <span className="font-semibold">Bulan ini</span>
      </div>

      {/* Program Aktif */}
      <div className="px-6 py-3 border-r border-white/20">
        <p className="font-light">Program Aktif</p>
        <p className="text-lg font-semibold mt-1">50</p>
      </div>

      {/* Program Menunggu Verifikasi */}
      <div className="px-6 py-3 border-r border-white/20">
        <p className="font-light">Program Menunggu Verifikasi</p>
        <p className="text-lg font-semibold mt-1">50</p>
      </div>

      {/* Program Selesai */}
      <div className="px-6 py-3">
        <p className="font-light">Program Selesai</p>
        <p className="text-lg font-semibold mt-1">50</p>
      </div>
    </div>
  );
}



function ProgramTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [programs, setPrograms] = useState([
    { id: 1, nama: "Tarikum Slam", judul: "Air Bersih Lereng Merapi", targetDana: 50000000, lokasi: "Klaten, Jawa Tengah", status: "Menunggu" },
    { id: 2, nama: "Anisa Rahma", judul: "Donasi Buku Pelosok", targetDana: 15000000, lokasi: "Lombok, NTB", status: "Diterima" },
    { id: 3, nama: "Rian Pratama", judul: "Jembatan Desa Terisolir", targetDana: 100000000, lokasi: "Banten, Jawa Barat", status: "Ditolak" },
    { id: 4, nama: "Siti Aisyah", judul: "Sumur Daerah Kering", targetDana: 75000000, lokasi: "Sumba Timur, NTT", status: "Menunggu" },
    { id: 5, nama: "Budi Hartono", judul: "Perahu untuk Nelayan", targetDana: 30000000, lokasi: "Karimun Jawa, Jateng", status: "Diterima" },
    { id: 6, nama: "Rika Ningsih", judul: "Panti Asuhan Harapan", targetDana: 25000000, lokasi: "Bandung, Jawa Barat", status: "Menunggu" },
    { id: 7, nama: "Deni Maulana", judul: "Pelatihan UMKM", targetDana: 20000000, lokasi: "Sukabumi, Jawa Barat", status: "Ditolak" },
    { id: 8, nama: "Lisa Fitriani", judul: "Beasiswa Anak Petani", targetDana: 45000000, lokasi: "Madura, Jawa Timur", status: "Diterima" },
    { id: 9, nama: "Agus Haryanto", judul: "Kebun Sekolah", targetDana: 12000000, lokasi: "Bogor, Jawa Barat", status: "Menunggu" },
    { id: 10, nama: "Nani Kartika", judul: "Posyandu Mandiri", targetDana: 18000000, lokasi: "Tegal, Jawa Tengah", status: "Diterima" },
    { id: 11, nama: "Hendra Wijaya", judul: "Pembangunan Mushola", targetDana: 70000000, lokasi: "Depok, Jawa Barat", status: "Menunggu" },
    { id: 12, nama: "Melati Ayu", judul: "Sanitasi Sekolah", targetDana: 55000000, lokasi: "Mataram, NTB", status: "Diterima" },
    { id: 13, nama: "Bayu Wicaksono", judul: "Solar Panel Desa", targetDana: 95000000, lokasi: "Wonosobo, Jawa Tengah", status: "Ditolak" },
    { id: 14, nama: "Winda Permata", judul: "Perpustakaan Mini", targetDana: 30000000, lokasi: "Cilacap, Jawa Tengah", status: "Diterima" },
    { id: 15, nama: "Indra Lesmana", judul: "Bengkel Gratis", targetDana: 40000000, lokasi: "Palembang, Sumsel", status: "Menunggu" },
    { id: 16, nama: "Rosa Kurnia", judul: "Klinik Gratis Lansia", targetDana: 80000000, lokasi: "Padang, Sumbar", status: "Diterima" },
    { id: 17, nama: "Slamet Riyadi", judul: "Koperasi Sekolah", targetDana: 23000000, lokasi: "Purwokerto, Jateng", status: "Ditolak" },
    { id: 18, nama: "Andini Safira", judul: "Laptop untuk Siswa", targetDana: 60000000, lokasi: "Cirebon, Jawa Barat", status: "Menunggu" },
    { id: 19, nama: "Tegar Prasetyo", judul: "Pengadaan Air Bersih", targetDana: 51000000, lokasi: "Grobogan, Jateng", status: "Diterima" },
    { id: 20, nama: "Lutfiana Dewi", judul: "Rumah Ramah Anak", targetDana: 67000000, lokasi: "Kudus, Jawa Tengah", status: "Menunggu" },
  ]);

  const itemsPerPage = 5;

  const filteredPrograms = programs.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedPrograms = filteredPrograms.slice(startIndex, startIndex + itemsPerPage);

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

  const handleStatusChange = (id, newStatus) => {
    setPrograms((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: newStatus } : p
      )
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      {/* Header & Search */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Daftar Program</h2>
        <div className="relative w-64">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Cari..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm outline-none focus:outline-none focus:ring-1 focus:ring-accent border-primary"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-primary text-white rounded-2xl">
            <tr>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Judul Program</th>
              <th className="p-3 text-left">Target Dana</th>
              <th className="p-3 text-left">Lokasi</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {displayedPrograms.length > 0 ? (
              displayedPrograms.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
                        {item.nama.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span>{item.nama}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <p className="font-medium">{item.judul}</p>
                    <p className="text-sm text-gray-500">Program sosial untuk masyarakat.</p>
                  </td>
                  <td className="p-3">{formatRupiah(item.targetDana)}</td>
                  <td className="p-3">{item.lokasi}</td>
                  <td className="p-3">
                    <select
                      value={item.status}
                      onChange={(e) => handleStatusChange(item.id, e.target.value)}
                      className={`text-sm font-semibold rounded px-2 py-1 bg-transparent ${statusColor[item.status]} focus:outline-none`}
                    >
                      <option value="Menunggu">Menunggu</option>
                      <option value="Diterima">Diterima</option>
                      <option value="Ditolak">Ditolak</option>
                    </select>
                  </td>
                  <td className="p-3 text-primary hover:underline cursor-pointer">
                    Lihat Detail →
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  Tidak ada data yang cocok.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <div className="text-sm text-gray-700">
            Halaman {currentPage} dari {totalPages || 1}
          </div>
          <button
            className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

const dataAwal = [
  { id: 1, transaksi: "INV-09878", nama: "Imam", status: "Terkonfirmasi" },
  { id: 2, transaksi: "INV-09878", nama: "Mukmin", status: "Terkonfirmasi" },
  { id: 3, transaksi: "INV-09878", nama: "Salim", status: "Terverifikasi" },
  { id: 4, transaksi: "INV-09878", nama: "Salim", status: "Gagal" },
  { id: 5, transaksi: "INV-09879", nama: "Budi", status: "Menunggu Konfirmasi" },
  { id: 6, transaksi: "INV-09880", nama: "Aisyah", status: "Menunggu Konfirmasi" },
  { id: 7, transaksi: "INV-09881", nama: "Rahma", status: "Menunggu Konfirmasi" },
  { id: 8, transaksi: "INV-09882", nama: "Hasan", status: "Menunggu Konfirmasi" },
  { id: 9, transaksi: "INV-09883", nama: "Nina", status: "Menunggu Konfirmasi" },
];

const statusColor = {
  "Terkonfirmasi": "text-green-600",
  "Terverifikasi": "text-blue-600",
  "Gagal": "text-red-600",
  "Menunggu Konfirmasi": "text-gray-500 italic",
};

const TransactionTable = () => {
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
      <div className="flex justify-between items-center mb-4">
        <div className="bg-primary text-white px-4 py-2 rounded-t-md font-semibold">
          Verifikasi Donasi Bank
        </div>
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
export default Dashboard;
