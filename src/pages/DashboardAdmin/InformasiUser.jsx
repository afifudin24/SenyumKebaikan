import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useLocation } from "react-router-dom";
import Image from "../../assets/campaignpop.png"
const InformasiUser = () => {
    const location = useLocation();
    const data  = location.state;
      const formatRupiah = (angka) => {
    return 'Rp. ' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
    return (
        <div>
            <DashboardLayout>
                <div className="p-2 rounded-2xl w-11/12 md:w-9/12 mx-auto">
                    <div className="flex flex-row justify-between bg-primary text-white items-center p-3 font-primary rounded-2xl">
                        <div className="flex flex-row gap-2 items-center">
                            <img className="w-14 h-14" src={Image} alt="" />
                            <div>
                            <p className="font-semibold text-sm md:text-base">{data.name}</p>
                            <p className="text-xs md:text-sm font-light">{data.email}</p>
                            </div>
                        </div>
                        <div className="bg-accent p-1 px-5 text-white rounded-2xl">
                            <p>{data.isVolunteer == 'true' ? 'Volunteer' : 'User'}</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mt-5 gap-4">
                                <div className="w-1/2 px-4 py-2 h-auto rounded-xl  shadow-lg bg-primary text-white">
                                <p className="font-semibold text-sm md:text-base">Informasi Pribadi</p>
                            <div className="flex gap-10 justify-start">
                                <div>
                                <p className="my-2 text-sm md:text-base font-light">Nama</p>
                                <p className="my-2 text-sm md:text-base font-light">Email</p>
                                <p className="my-2 text-sm md:text-base font-light">Nomor Telepon</p>
                                <p className="my-2 text-sm md:text-base font-light">Alamat</p>
                                </div>
                                <div>
                                    <p className="my-2 text-sm md:text-base font-normal">: {data.name}</p>
                                    <p className="my-2 text-sm md:text-base font-normal">: {data.email}</p>
                                    <p className="my-2 text-sm md:text-base font-normal">: {data.telepon}</p>
                                    <p className="my-2 text-sm md:text-base font-normal">: {data.alamat}</p>
                                </div>
                            </div>
                                </div>
                                 <div className="w-1/2 px-4 py-2 h-auto rounded-xl  shadow-lg bg-primary text-white">
                                     <p className="font-semibold text-sm md:text-base">Statistik Pengguna</p>
                                      <div className="flex gap-10 justify-start">
                                           <div>
                                <p className="my-2 text-sm md:text-base font-light">Total Donasi Uang</p>
                                <p className="my-2 text-sm md:text-base font-light">Total Donasi Barang</p>
                                <p className="my-2 text-sm md:text-base font-light">Campaign yang didukung</p>

                                </div>
                                <div>
                                <p className="my-2 text-sm md:text-base font-normal">: {data.totalDonasiUang}</p>
                                <p className="my-2 text-sm md:text-base font-normal">: {data.totalDonasiBarang}</p>
                                <p className="my-2 text-sm md:text-base font-normal">: {data.campaignDidukung.length}</p>
                                </div>
                                      </div>
                                 </div>
                    </div>
                    <div>
                        <h2 className="text-center font-semibold text-2xl mt-5 text-primary">Riwayat Aktifitas</h2>
                        <div className="p-2 rounded-2xl bg-white border mt-5 border-gray-500">
                            <table className="min-w-full table-auto border-collapse rounded-2xl overflow-hidden">
                                <thead className="text-primary  rounded-2xl bg-secondary overflow-hidden">
                                    <tr className="rounded-2xl overflow-hidden font-normal">
                                        <th className="p-2">No</th>
                                        <th className="p-2">Tanggal</th>
                                        <th className="p-2">Nominal</th>
                                        <th className="p-2">Campaign</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.riwayatAktifitas.map((item, index) => {
                                            return (
                                                <tr className="text-center">
                                                    <td>
                                                        <p className="p-2">{index + 1}</p>
                                                    </td>
                                                    <td>
                                                        <p className="p-2">{item.tanggal}</p>
                                                    </td>
                                                    <td>
                                                        <p className="p-2">{item.nominal}</p>
                                                    </td>
                                                    <td>
                                                        <p className="p-2">{item.campaign}</p>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
             </DashboardLayout>
           
        </div>
    )
}
export default InformasiUser;