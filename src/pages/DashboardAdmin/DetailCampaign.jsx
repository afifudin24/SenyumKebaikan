import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useLocation } from "react-router-dom";
const DetailCampaign = () => {
    const location = useLocation()
    const data = location.state;
    console.log(data);
    const formatAmount = (jenis, amount) => {
        if (typeof amount !== 'number') {
          return amount; // Mengembalikan apa adanya jika bukan angka (misal: "Loading...")
        }
      
        if (jenis === 'dana') {
          // Format sebagai mata uang Rupiah
          return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0, // Tidak menampilkan desimal
            maximumFractionDigits: 0,
          }).format(amount);
        } else if (jenis === 'barang') {
          // Tambahkan 'pcs' di belakang angka
          return `${amount} pcs`;
        }
        return amount; // Default jika jenis tidak dikenali
      };
    return (
        <DashboardLayout>
            <div className="w-11/12 mx-auto md:w-9/12 mt-3">
                <div className="p-3 rounded-2xl bg-primary text-center text-white font-primary">
                    <h3 className="text-2xl my-2 font-bold">Pembaruan Status Distribusi</h3>
                    <p className="text-base my-2 font-light">Program : { data.namaprogram}</p>
                </div>
                <div className="flex gap-2 mt-5">
                    <div className="py-3 px-8 bg-primary rounded-2xl w-6/12 text-white font-primary">
                        <h4  className="font-semibold">Detail Campaign</h4>
                        <div>

                        <p className="my-2 font-light">Barang / Dana</p>
                        <p className="my-2">{formatAmount(data.Jenis, data.target)}</p>
                        </div>
                        <div>
                            <p className="my-2 font-light">Terkumpul</p>
                            <p className="my-2">{formatAmount(data.Jenis, data.tercapai)}</p>
                        </div>
                        <div>
                            <p className="my-2 font-light">Status Program</p>
                            <p className="my-2">{data.status}</p>
                        </div>
                        <div>
                            <p className="my-2 font-light">Tanggal Awal Campaign</p>
                            <p className="my-2">{data.tangal_mulai}</p>
                        </div>
                        
                    </div>
                    <div className="py-3 px-8 bg-primary rounded-2xl w-6/12 text-white font-primary">
                        <h4 className="font-semibold">Detail Distribusi</h4>
                        {!data.distribusi ? (
  <p className="mt-2 text-gray-500 italic">Belum ada pengajuan distribusi</p>
) : (
  <>
    {/* Status Distribusi */}
    <div>
      <p className="my-2 font-light">Status Distribusi</p>
      <p className="my-2">{data.distribusi.status || "-"}</p>
    </div>

    {/* Tanggal Distribusi */}
    <div>
      <p className="my-2 font-light">Tanggal Distribusi</p>
      <p className="my-2">{data.distribusi.tanggal_distribusi || "-"}</p>
    </div>

    {/* Bukti Distribusi */}
    <div>
      <p className="my-2 font-light">Bukti Distribusi</p>
      <p className="my-2">{data.distribusi.bukti || "-"}</p>

      {!data.distribusi.bukti && (
        <input
          type="file"
          className="mt-1 w-full px-4 py-2 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
      )}
    </div>

    {/* Konfirmasi Distribusi */}
    <div className="mt-4">
      <label className="block mb-1 text-sm font-light">Konfirmasi Distribusi</label>
      <select
        value={data.distribusi.konfirmasi_distribusi || ""}
        onChange={(e) => {
          // setData((prev) => ({
          //   ...prev,
          //   distribusi: {
          //     ...prev.distribusi,
          //     konfirmasi_distribusi: e.target.value,
          //   }
          // }))
        }}
        className="w-full px-4 py-2 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
      >
        <option value="">-- Pilih Status --</option>
        <option value="Menunggu Konfirmasi">Menunggu Konfirmasi</option>
        <option value="Dikonfirmasi">Dikonfirmasi</option>
        <option value="Ditolak">Ditolak</option>
      </select>
    </div>
  </>
)}
 

    <button className="my-4 rounded-lg bg-accent hover:bg-secondary text-xs md:text-sm px-6 py-2 text-white">
      Distribusi
    </button>
  </div>
{/* </div> */}
                </div>
                <h4 className="text-center font-semibold text-2xl font-primary text-primary my-5">Riwayat Donatur</h4>
                <div>
                    <div className="card w-11/12 md:9/12 font-secondary text-primary mx-auto">
                        <div className="card-body border-gray-400 border p-2 rounded-2xl">
                            <table className="min-w-full text-left font-base p-3 bg-white">
                                <thead className="border-b">
                                    <tr>
                                        
                                        <th scope="col">Nama Donatur</th>
                                        <th scope="col">Tanggal</th>
                                        <th scope="col">Nominal</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>
                         
                                <tbody>
                                    {
                                        data.donatur.map((donatur, index) => (
                                            <tr key={index}>
                                                <td>{donatur.nama}</td>
                                                <td>{donatur.tanggal}</td>
                                                <td>{donatur.nominal}</td>
                                                <td>{donatur.email}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                                 

                    </div>
                </div>
            </div>
        </DashboardLayout>
    )

}

export default DetailCampaign;