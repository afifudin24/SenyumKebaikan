import React from "react";
import { useState } from "react";
import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const DashboardVolunteer = () => {
     const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
      }) 
      return (
        <DashboardVolunteerLayout>
              <h2 className="text-4xl md:text-2xl font-primary font-bold text-primary mb-4">Hi, {user.namadepan}</h2>
                <p className="text-xs md:text-sm font-secondary">Selamat datang di halaman dashboard Volunteer</p>
                <RingkasanProgram />
                <DonasiLineChart />
        </DashboardVolunteerLayout>
      )
}

const RingkasanProgram = () => {
  const targetDana = 60000000;
  const danaTerkumpul = 30000000;
  const persenTerkumpul = (danaTerkumpul / targetDana) * 100;

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm">
      
      {/* Kartu Ringkasan Program */}
      <div className="flex-1 border border-green-200 rounded-lg p-4">
        <div className="bg-primary text-white font-semibold px-6 py-3 rounded-t-md w-fit mb-3">
          Ringkasan Program
        </div>
        <h2 className="text-xl font-semibold text-gray-800 leading-snug">
          Banjir bandang di pinggiran kota <br />
          <span className="uppercase font-bold">METROPOLITAN.</span>
        </h2>

        <div className="flex justify-between mt-4 text-gray-700 font-semibold">
          <div>
            <p className="text-sm text-gray-500">Target Dana</p>
            <p className="text-lg">Rp {targetDana.toLocaleString('id-ID')}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Dana Terkumpul</p>
            <p className="text-lg">Rp {danaTerkumpul.toLocaleString('id-ID')}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Durasi Program: 1 Juni 2025 - 31 Des 2025
        </p>

        {/* Progress Bar */}
        <div className="mt-2">
          <div className="w-full h-2 bg-primary rounded-full relative">
            <div
              className="h-2 bg-accent rounded-full"
              style={{ width: `${persenTerkumpul}%` }}
            />
            <div
              className="absolute top-[-28px] left-[50%] transform -translate-x-1/2 text-sm text-white bg-accent px-2 py-[1px] rounded"
            >
              {Math.round(persenTerkumpul)}%
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">16 hari lagi</p>
        </div>
      </div>

      {/* Kartu Notifikasi */}
      <div className="w-full md:w-1/3 border border-green-200 rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-gray-700 font-semibold">Notifikasi</h3>
          <button className="text-gray-400">•••</button>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <p className="font-medium flex items-center gap-1">
              👤 <span>Admin</span>
            </p>
            <p>Mohon lengkapi data program</p>
            <p className="text-xs text-gray-400">2 hari yang lalu</p>
          </div>

          <div>
            <p className="font-medium flex items-center gap-1">
              👤 <span>Hamba Allah</span>
            </p>
            <p>Donasi Terkirim<br />semoga bermanfaat</p>
            <p className="text-xs text-gray-400">7 hari yang lalu</p>
          </div>
        </div>
      </div>
    </div>
  );
};



const dummyData = {
  Januari: [10, 50, 30, 80, 20, 60, 70, 90, 150, 100, 130, 50, 120, 60, 90, 40, 20],
  Februari: [5, 20, 15, 25, 10, 40, 35, 45, 60, 55, 70, 80, 90, 50, 30, 20, 10],
  Maret: [15, 30, 25, 20, 50, 60, 90, 85, 100, 110, 95, 75, 60, 40, 35, 25, 15],
};

const DonasiLineChart = () => {
  const [selectedMonth, setSelectedMonth] = useState('Januari');

  const data = {
    labels: [
      '01', '03', '05', '06', '07', '09', '10', '12', '14', '16',
      '18', '20', '22', '24', '26', '28', '30'
    ],
    datasets: [
      {
        label: 'Donasi Masuk',
        data: dummyData[selectedMonth],
        borderColor: '#CFFDE1',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 0,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#CFFDE1',
          boxWidth: 12,
        },
        position: 'top'
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff'
        },
        grid: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
      y: {
        ticks: {
          color: '#fff'
        },
        grid: {
          color: 'rgba(255,255,255,0.1)'
        },
        beginAtZero: true
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm mt-5">


    <div className="bg-[#2d4a48] p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white font-semibold">Bulan</h2>
        <select
          className="text-sm p-1 rounded-md bg-white text-black"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          >
          {Object.keys(dummyData).map((bulan) => (
              <option key={bulan} value={bulan}>
              {bulan}
            </option>
          ))}
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
          </div>
  );
};
export default DashboardVolunteer;