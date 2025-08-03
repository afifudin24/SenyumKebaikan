import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS,   ArcElement, CategoryScale, LinearScale, PointElement, LineElement,  BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useState } from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
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

const Grafik = ({showMenu, toggleChart, showChart}) => {
    return (
              <div
          className={`bg-primary w-full overflow-y-auto md:w-6/12  px-2 2xl:py-10 py-3 text-white rounded-lg transition-transform duration-500 ease-in-out 
            md:static h-full md:translate-x-0
            fixed top-0 left-0 z-40
            ${showMenu ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
              {/* Kartu Donasi Uang */}
                  <div className="px-4 py-2 h-auto rounded-xl shadow-lg bg-secondary">
                    <div className='flex justify-between items-center mb-2 '>
                <h3 className="text-sm font-semibold  text-primary font-secondary">Donasi uang</h3>
                <FontAwesomeIcon className='text-primary' icon={faEllipsis} />
                    </div>
                <p className="text-xl text-center font-bold text-primary mb-4"><span className='align-super'>Rp</span> 196.000,00</p>
                <p className="text-xs text-center text-green-600">  <span className='text-accent'><FontAwesomeIcon icon={faChartLine} />  +25%</span> dari bulan lalu</p>
              </div>
              {/* Kartu Donasi Barang */}
              <div className="bg-green-50 px-4 py-2  h-auto rounded-xl shadow-lg">
              <div className='flex justify-between items-center mb-2 '>
                <h3 className="text-sm font-semibold  text-primary font-secondary">Donasi Barang</h3>
                <FontAwesomeIcon className='text-primary' icon={faEllipsis} />
                    </div>
                <p className="text-xl text-center font-bold text-primary mb-4">17 Item</p>
                <p className="text-xs text-center text-green-600"> <span className='text-accent'> <FontAwesomeIcon icon={faChartLine} /> +25% </span> dari bulan lalu</p>
              </div>
              {/* Kartu Donasi Terakhir */}
              <div className="bg-green-50 px-4 py-2  h-auto rounded-xl shadow-lg">
              <div className='flex justify-between items-center mb-2 '>
                <h3 className="text-sm font-semibold  text-primary font-secondary">Donasi Terakhir</h3>
                <FontAwesomeIcon className='text-primary' icon={faEllipsis} />
                    </div>
                <p className="text-lg text-center font-bold text-primary mb-4">15 Maret 2025</p>
                <a href="#" className="text-xs text-accent text-center mx-auto block hover:underline">Lihat Detail</a>
              </div>
                </div>
                <div className='2xl:mt-2 mt-1 py-1 px-5 relative'>
                  <DonasiChart />
                  <div className='text-end'>
                  <button onClick={toggleChart} className='bg-accent cursor-pointer text-white py-2 my-2 px-4 text-xs rounded-md hover:text-primary hover:bg-secondary'>Tampilkan Campaign</button>
                  </div>
                 <div
          className={`absolute bg-white text-primary rounded-xl shadow-2xl p-5 bottom-0 right-0 transition-all duration-500 transform ${
            showChart
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
            <div className='flex my-1 items-center justify-between '>
          <p className="text-center  text-xs 2xl:text-sm font-secondary">
            Campaign yang Didukung
          </p>
          <div onClick={toggleChart} className='rounded-xl hover:bg-secondary hover:text-primary transition-all duration-75 cursor-pointer w-8 h-8 flex items-center justify-center bg-accent text-white'>
              <FontAwesomeIcon icon={faTimes} />
          </div>
            </div>
          <hr className="mb-3 text-accent" />
          <CampaignChart />
        </div>
                </div>
                <div className='text-center 2xl:mt-12 mt-5'>
                  <h3 className='font-semibold text-lg 2xl:text-2xl'>Transaparansi Donasi dalam Genggaman Anda</h3>
                  <p className='mt-2 text-sm font-light 2xl:text-xl'>Sistem donasi berbasis blockchain untuk akuntabilitas dan keterbukaan penuh</p>
                </div>
                  </div>
    )
}
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
        label: 'Donasi Barang (pcs, Liter, KG)',
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
          text: 'Donasi Barang (pcs, Liter, KG)',
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

const CampaignChart = () => {
  const data = {
    // labels: ['Bantuan Pendidikan', 'Donasi Barang', 'Bantuan Pendidikan'],
    datasets: [
      {
        data: [40, 25, 35], // persentase
        backgroundColor: ['#c6f6d5', '#1a202c', '#68d391'], // warna sesuai gambar
        borderWidth: 0,
      },
    ],
  };
const options = {
  cutout: '70%', // lubang tengah donat
  plugins: {
    legend: {
      display: true,
      position: 'center',
      labels: {
        color: '#333',
       
        font: {
          size: 12
        }
      }
    },
   datalabels: {
  color: '#68B984', // warna teks
  backgroundColor: '#fff', // warna latar belakang label
  borderRadius: 999, // untuk membulatkan hingga tampak seperti lingkaran
  padding: 10, // jarak teks dengan tepi
  shadow : {
    color: '#68B984',
    offset: {
      x: 2,
      y: 2
    }
  },
  font: {
    weight: 'bold',
    size: 14
  },
  formatter: (value, context) => {
    const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
    const percentage = ((value / total) * 100).toFixed(0);
    return `${percentage}%`;
  },
  anchor: 'center',
  align: 'center',
  display: 'auto'
}
  }
};
  return (
    <div className="w-auto h-40 gap-3 flex items-center mx-auto">
      <div className='h-full relative'>
      <Doughnut className=' w-full text-center mx-auto' data={data} options={options} />
      <div className="absolute font-secondary text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center text-primary">
        <p className="text-xs">Total Campaign</p>
        <p className="text-2xl font-bold">5</p>
      </div>
      </div>
      {/* Legend Manual */}
      <div className="text-sm space-y-2  ">
        <div className="flex items-center gap-2 text-primary font-secondary">
          <span className="w-4 h-4 rounded-full  bg-[#c6f6d5] font-secondary"></span> Bantuan Pendidikan
        </div>
        <div className="flex items-center gap-2 text-primary font-secondary">
          <span className="w-4 h-4 rounded-full bg-[#1a202c]"></span> Donasi Barang
        </div>
        <div className="flex items-center gap-2 text-primary font-secondary">
          <span className="w-4 h-4 rounded-full bg-[#94c4a7]"></span> Bantuan Pendidikan
        </div>
      </div>
    </div>
  );
};

export default Grafik;