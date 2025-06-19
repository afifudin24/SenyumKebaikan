import React from "react";
import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
const PengelolaanAPK = () => {
    return (
        <DashboardLayout>
                     <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 font-primary text-primary">Pengelolaan APK</h1>
                     {/* keamanan */}
                     <div className="w-10/12 mx-auto">
                        <h3 className="p-2 block font-primary w-4/12 rounded-t-2xl text-center text-lg md:text-xl font-normal  text-white bg-primary">
                            Keamanan
                        </h3>
                        <div className="border my-2 border-gray-200 rounded-lg p-4 ">
                            <div className="flex justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Kebijakan Keamanan</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Pengaturan Keamanan</button>
                            </div>
                            <div className="flex my-2 justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Kebijakan Keamanan</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Pengaturan Keamanan</button>
                            </div>
                            <div className="flex my-2 justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Kebijakan Keamanan</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Pengaturan Keamanan</button>
                            </div>
                        </div>
                     </div>
                     <div className="w-10/12 mt-5 mx-auto">
                        <h3 className="p-2 block  font-primary w-4/12 rounded-t-2xl text-center text-lg md:text-xl font-normal  text-white bg-primary">
                         Pembatasan Donasi
                        </h3>
                        <div className="border my-2 border-gray-200 rounded-lg p-4 ">
                            <div className="flex justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Pembatasan Donasi Per Hari</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Batasan</button>
                            </div>
                            <div className="flex my-2 justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Pembatasan Donasi Maksimum</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Batasan</button>
                            </div>
                            <div className="flex my-2 justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Pembatasan Donasi Per Pengguna</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Batasan</button>
                            </div>
                        </div>
                     </div>

                       <div className="w-10/12 mt-5 mx-auto">
                        <h3 className="p-2 block  font-primary w-4/12 rounded-t-2xl text-center text-lg md:text-xl font-normal  text-white bg-primary">
                         Kebijakan Privasi
                        </h3>
                        <div className="border my-2 border-gray-200 rounded-lg p-4 ">
                            <div className="flex justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Kebijakan Pengumpulan Data</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Kebijakan</button>
                            </div>
                            <div className="flex my-2 justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Pengaturan Data Pengguna</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Pengaturan</button>
                            </div>
                            <div className="flex my-2 justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Pembatasan Akses Data</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Pembatasan</button>
                            </div>
                        </div>
                     </div>
                       <div className="w-10/12 mt-5 mx-auto">
                        <h3 className="p-2 block  font-primary w-4/12 rounded-t-2xl text-center text-lg md:text-xl font-normal  text-white bg-primary">
                    Smart Contact
                        </h3>
                        <div className="border my-2 border-gray-200 rounded-lg p-4 ">
                            <div className="flex justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Kebijakan Pengumpulan Data</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Kebijakan</button>
                            </div>
                            <div className="flex my-2 justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Pengaturan Data Pengguna</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Pengaturan</button>
                            </div>
                            <div className="flex my-2 justify-between w-10/12 mx-auto">
                                <p className="font-semibold text-primary">Pembatasan Akses Data</p>
                                <button className="p-2 rounded-lg bg-white text-primary border border-primary ">Ubah Pembatasan</button>
                            </div>
                        </div>
                     </div>
        </DashboardLayout>
    )
    ;
};
export default PengelolaanAPK;