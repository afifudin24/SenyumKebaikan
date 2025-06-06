import DashboardLayout from "../../components/DashboardLayout";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../../components/Container"
import { faEllipsis, faChartLine, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CampaignProp from "../../assets/campaignpop.png"
import Grafik from "../../components/Grafik";
import { Line, Bar } from 'react-chartjs-2';
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

          <div className="p-6">
            <DonasiChart />
          </div>
         
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
      {/* Konten lainnya */}
    </DashboardLayout>
  );
};


const DonasiChart = () => {
  const [periodType, setPeriodType] = useState('Bulanan');

  // Data berdasarkan periodType
  const getDataByPeriod = () => {
    if (periodType === 'Bulanan') {
      return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [
          {
            label: 'Donasi Uang (Ribuan)',
            data: [100000, 90000, 120000, 130000, 80000, 110000, 95000, 105000, 140000, 130000, 110000, 100000],
            borderColor: 'rgba(34, 197, 94, 1)',
            backgroundColor: 'rgba(207, 253, 225, 1)',
            yAxisID: 'y1',
          },
          {
            label: 'Donasi Barang (pcs)',
            data: [50, 60, 70, 110, 80, 90, 100, 130, 140, 120, 110, 90],
            borderColor: 'rgba(99, 234, 155, 1)',
            backgroundColor: 'rgba(104, 185, 132, 1)',
            yAxisID: 'y2',
          },
        ],
      };
    } else if (periodType === 'Mingguan') {
      return {
        labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
        datasets: [
          {
            label: 'Donasi Uang (Ribuan)',
            data: [30000, 40000, 35000, 45000],
            borderColor: 'rgba(34, 197, 94, 1)',
            backgroundColor: 'rgba(207, 253, 225, 1)',
            yAxisID: 'y1',
          },
          {
            label: 'Donasi Barang (pcs)',
            data: [20, 25, 30, 28],
            borderColor: 'rgba(99, 234, 155, 1)',
            backgroundColor: 'rgba(104, 185, 132, 1)',
            yAxisID: 'y2',
          },
        ],
      };
    } else {
      // Harian
      return {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            label: 'Donasi Uang (Ribuan)',
            data: [5000, 7000, 6500, 8000, 7500, 9000, 8500],
            borderColor: 'rgba(34, 197, 94, 1)',
            backgroundColor: 'rgba(207, 253, 225, 1)',
            yAxisID: 'y1',
          },
          {
            label: 'Donasi Barang (pcs)',
            data: [3, 5, 6, 7, 4, 8, 9],
            borderColor: 'rgba(99, 234, 155, 1)',
            backgroundColor: 'rgba(104, 185, 132, 1)',
            yAxisID: 'y2',
          },
        ],
      };
    }
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      x: { beginAtZero: true },
      y1: {
        beginAtZero: true,
        ticks: {
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
        ticks: { stepSize: 10 },
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
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-xl">Donasi ({periodType})</h3>
        <select
          value={periodType}
          onChange={(e) => setPeriodType(e.target.value)}
          className="p-2 rounded bg-white text-black"
        >
          <option value="Bulanan">Bulanan</option>
          <option value="Mingguan">Mingguan</option>
          <option value="Harian">Harian</option>
        </select>
      </div>
      <div className="2xl:hidden block">
        <Bar data={getDataByPeriod()} options={options} height={120} />
      </div>
      <div className="2xl:block hidden">
        <Bar data={getDataByPeriod()} options={options} height={150} />
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
          <div className="flex justify-between items-center my-2">
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
export default Dashboard;
