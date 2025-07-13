import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['01', '04', '05', '07', '10', '13', '14', '16', '18', '19', '21', '25', '27', '31', 'Tgl'],
  datasets: [
    {
      label: 'Donasi Harian',
      data: [1000000, 2000000, 1000000, 1300000, 1300000, 1700000, 2200000, 900000, 1500000, 1000000, 500000, 2500000, 2000000, 1800000, 100000],
      borderColor: '#fff',
      backgroundColor: 'white',
      borderWidth: 2,
      pointRadius: 0,
      lineTension: 0.2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: { display: false },
  scales: {
    yAxes: [
      {
        ticks: {
          callback: (value) => {
            if (value >= 1000000) return value / 1000000 + 'JT';
            return value;
          },
          fontColor: '#fff',
          beginAtZero: true,
        },
       gridLines: { display: false },
      },
    ],
    xAxes: [
      {
        ticks: { fontColor: '#fff' },
        gridLines: { display: false },
      },
    ],
  },
  layout: {
    padding: {
      top: 30,
      right: 20,
    },
  },
  title: {
    display: true,
    text: 'Total terkumpul saat ini : Rp 60.000.000',
    fontColor: '#fff',
    fontSize: 14,
    position: 'top',
  },
};
const RingkasanDonasi = () => {
    return (
        <div>
            <Navbar />
            <Container className={"mt-20"}>
                 <div className="max-w-2xl mx-auto mt-10 px-8 py-8  font-sans space-y-6">
      {/* Header: Donasi Ditemukan */}
      <div className="bg-white shadow-2xl rounded-2xl p-5">
      <div className="bg-green-100 text-center py-6 rounded-md">
       <FontAwesomeIcon icon={faCheckCircle} className="text-5xl text-accent" />
        <p className="text-lg font-semibold text-green-900">Donasi Ditemukan</p>
        <p className="text-sm text-green-700">(Tx Hash Valid)</p>
      </div>
      {/* Ringkasan Transaksi */}
      <div >
        <h2 className="text-center font-semibold text-gray-700 text-lg mb-4">
          RINGKASAN TRANSAKSI
        </h2>
     <div className="overflow-x-auto w-10/12 mx-auto">
  <table className="min-w-full text-sm text-gray-700">
    <tbody>
      <tr className="">
        <td className="font-medium py-2 pr-4">Status</td>
        <td>: ✅ Terkonfirmasi</td>
      </tr>
      <tr className="">
        <td className="font-medium py-2 pr-4">Tx Hash</td>
        <td>: 0x9a296a7b ...</td>
      </tr>
      <tr className="">
        <td className="font-medium py-2 pr-4">Waktu Blok</td>
        <td>: 24 Apr 2025 10:16 WIB</td>
      </tr>
      <tr className="">
        <td className="font-medium py-2 pr-4">Jumlah</td>
        <td>: Rp100.000 / 0,005 ETH</td>
      </tr>
      <tr className="">
        <td className="font-medium py-2 pr-4">Dari ⟶ Ke</td>
        <td>: Anonim ⟶ Bencana Banjir</td>
      </tr>
      <tr>
        <td className="font-medium py-2 pr-4">Gas Fee</td>
        <td>: 0,00021 ETH</td>
      </tr>
    </tbody>
  </table>
</div>
        <div className="text-center mt-4">
          <a href='https://etherscan.io/' target="_blank" className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-md hover:bg-green-200">
            Lihat di Etherscan
          </a>
        </div>
      </div>
      </div>
      {/* Perkembangan Campaign */}
      <div className="pt-4 bg-white rounded-2xl shadow-2xl mt-6">
        <h2 className="text-center text-lg font-semibold font-primary text-primary mb-2">
          PERKEMBANGAN CAMPAIGN
        </h2>
        <p className="text-center font-medium mb-4">“Bencana Banjir”</p>
        {/* Progress bar */}
        <div className="px-2 mb-2">
          <div className="flex items-center mx-10 justify-between text-xs text-gray-600 mb-1">
            <span>Progress 60% (Rp 60 jt / 100 jt)</span>
            <span>48 HARI</span>
          </div>
          <div className="bg-gray-300 h-2 rounded mx-10">
            <div className="bg-primary h-2 rounded" style={{ width: "60%" }}></div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-1">
            Tersisa 12 hari lagi galang donasi ini akan berakhir
          </p>
        </div>
        {/* Donasi Harian */}
        <div className="mt-6">
          <h3 className="text-center font-semibold mb-2">
            Donasi Harian (01 Jan – 01 Feb 2024)
          </h3>
          {/* Dummy chart placeholder */}
        
          <DonasiChart />
        
        </div>
        {/* Penyaluran Terakhir */}
        <div className="mt-6 w-10/12 mx-auto rounded-xl text-primary">
          <h3 className="text-center font-semibold mb-2">Penyaluran Terakhir</h3>
          <table className="w-full text-sm border border-gray-500  shadow-lg overflow-hidden rounded-xl ">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">NAMA</th>
                <th className="p-2 border">TANGGAL</th>
                <th className="p-2 border">NOMINAL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border px-2 py-1">Hamba Allah</td>
                <td className="border px-2 py-1">10 Januari 2025 </td>
                <td className="border px-2 py-1">50.000</td>
              </tr>
              <tr className="text-center">
                <td className="border px-2 py-1">Hamba Allah</td>
                <td className="border px-2 py-1">20 Februari 2025</td>
                <td className="border px-2 py-1">50.000</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center font-primary text-sm text-primary  mt-2">
            Dana tersisa Rp 60.000.000 untuk target
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-4 mb-4 pb-4 flex justify-center gap-4 flex-wrap">
          <button className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded hover:bg-green-200">
            Unduh CSV
          </button>
          <button className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded hover:bg-green-200">
            Unduh PDF
          </button>
        </div>
        {/* Navigation */}
      
      </div>
    </div>
            </Container>
            <Footer />
        </div>
    )
}

const DonasiChart = () => {
  return (
    <div className="w-11/12 mx-auto text-white bg-gray-800" style={{ height: '250px', borderRadius: '12px', padding: '1rem' }}>
      <Line data={data} options={options} />
    </div>
  );
};
export default RingkasanDonasi;