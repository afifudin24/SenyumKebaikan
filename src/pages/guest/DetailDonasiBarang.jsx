import React from "react";
import { useState } from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Donasi from "../../assets/donasi/gambar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons/faFileCirclePlus";
const DetailDonasiBarang = () => {
    const location = useLocation();
    const data = location.state;
  console.log(data)
  const [isAdd, setIsAdd] = useState(true);
  const [activeTab, setActiveTab] = useState('kabar');
  const [dataDonasi, setDataDonasi] = useState([
    {
      nama: 'Budi Santoso',
      tanggal: '2025-05-01',
      nominal: 100000,
      txHash: '0xabc123def456',
    },
    {
      nama: 'Siti Aminah',
      tanggal: '2025-05-02',
      nominal: 150000,
      txHash: '0xdef456ghi789',
    },
    {
      nama: 'Agus Salim',
      tanggal: '2025-05-03',
      nominal: 200000,
      txHash: '0xghi789jkl012',
    },
    {
      nama: 'Rina Kurniawati',
      tanggal: '2025-05-04',
      nominal: 250000,
      txHash: '0xjkl012mno345',
    },
    {
      nama: 'Dedi Prasetyo',
      tanggal: '2025-05-05',
      nominal: 300000,
      txHash: '0xmno345pqr678',
    },
    {
      nama: 'Lina Marlina',
      tanggal: '2025-05-06',
      nominal: 350000,
      txHash: '0xpqr678stu901',
    },
    {
      nama: 'Andi Wijaya',
      tanggal: '2025-05-07',
      nominal: 400000,
      txHash: '0xstu901vwx234',
    },
    {
      nama: 'Sari Dewi',
      tanggal: '2025-05-08',
      nominal: 450000,
      txHash: '0xvwx234yza567',
    },
    {
      nama: 'Tono Saputra',
      tanggal: '2025-05-09',
      nominal: 500000,
      txHash: '0xyza567bcd890',
    },
    {
      nama: 'Maya Sari',
      tanggal: '2025-05-10',
      nominal: 550000,
      txHash: '0xbcd890efg123',
    },
  ]);
    return (
        <div>
            <Navbar />
            <Container className={'mt-15 md:mt-20'}>
                <div className="bg-primary p-10 rounded-xl">
                    <h1 className="text-white uppercase text-xl">{data.type}</h1>
                    <img src={Donasi} className="rounded-lg my-2 w-full" alt="" />
                    <p className="text-white font-primary my-2 text-2xl font-semibold">{data.title}</p>
                    <p className="text-white my-2 font-primary text-sm"> 12 hari tersisa untuk melakukan donasi</p>
                    <p className="font-secondary text-sm text-white my-2">{data.description} </p>
                    <div className="flex flex-col gap-2 md:flex-row my-5">
                    
                    <div className="flex flex-col gap-2 w-1/2">
                        {
                            data.items.map((item, index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <div className=" p-2 rounded-xl bg-white text-primary">
                                            {item.progress}
                                    </div>
                                    <p className="font-secondary text-sm text-white">{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="border-l-2 text-center font-secondary gap-4 px-4 justify-center border-white flex flex-col ">
                            <button className="bg-white hover:bg-primary hover:text-white hover:shadow-2xl text-primary p-2 rounded-full">
                                Donasi Sekarang <FontAwesomeIcon icon={faArrowUpRightDots} />
                            </button>
                            <button className="bg-white hover:bg-primary hover:text-white hover:shadow-2xl text-primary p-2 rounded-full">
                                Lihat transaksi blockchain <FontAwesomeIcon icon={faArrowUpRightDots} />
                            </button>
                        </div>
                        
                       
                        </div>
          </div>

          {
            isAdd ? (
              <AddDonasi />
            ) : (
              <div className="mt-10">
              <nav className="flex justify-center gap-5  mx-auto text-sm text-gray-600 mb-6 cursor-pointer">

  <button
    onClick={() => setActiveTab('kabar')}
    className={`pb-1 relative  ${
            activeTab == 'kabar'
              ? 'font-semibold text-primary after:content-[""] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-primary after:rounded-full'
              : 'hover:text-black text-primary'
          }`}
    aria-current={activeTab === 'kabar' ? 'page' : undefined}
  >
    Kabar terbaru
  </button>
  <button
    onClick={() => setActiveTab('donasi')}
    className={`pb-1 relative ${
            activeTab == 'donasi'
              ? 'font-semibold text-primary after:content-[""] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-primary after:rounded-full'
              : 'hover:text-black text-primary'
          }`}
    aria-current={activeTab === 'donasi' ? 'page' : undefined}
  >
    Donasi masuk
  </button>
  </nav>

  
            {activeTab === 'kabar' && (
              <section className="text-center text-primary mb-16 p-4  rounded-2xl border border-gray-400 text-sm py-20">
                  <div onClick={() => setIsAdd(true)}>
                      <FontAwesomeIcon icon={faFileCirclePlus} className="text-5xl scale-125 text-accent my-5" />
                      <p className="text-lg">Campaign Ini Belum Memilii Kabar Terbaru</p>
                  </div>
              </section>
            )}
  
            {activeTab === 'donasi' && (
              <section className="text-center  text-primary mb-16 p-4  rounded-2xl border border-gray-400 text-sm">
                <div className="mx-auto text-center w-full">
                  <table className="mx-auto w-full">
                    <thead className="border-b-2 border-gray-300">
                      <tr>
                        <th className="p-4">NAMA</th>
                        <th className="p-4">TANGGAL</th>
                        <th className="p-4">NOMINAL</th>
                        <th className="p-4">TX HASH</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        dataDonasi.map((item, index) => (
                          <tr key={index}>
                            <td className="p-4">{item.nama}</td>
                            <td className="p-4">{item.tanggal}</td>
                            <td className="p-4">{item.nominal}</td>
                            <td className="p-4">{item.txHash}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </section>
            )}
  
              </div>
            )
          }
       
            </Container>
            <Footer />
        </div>
    )
}

const FormCrypto = () => {
  return (
    <div className="w-4/12 text-start mx-auto">
      <div className="">

      <h4 className=" text-primary text-start my-4 font-semibold">Nominal Pembayaran</h4>
      <select className="border w-full border-gray-400 rounded-lg p-2">
        <option value="20000">0,001 ETH/Rp 20.000</option>
        <option value="30000">0,001 ETH/Rp 30.000</option>
        <option value="40000">0,001 ETH/Rp 40.000</option>
        <option value="50000">0,001 ETH/Rp 50.000</option>
        <option value="60000">0,001 ETH/Rp 60.000</option>
        <option value="70000">0,001 ETH/Rp 70.000</option>
        <option value="80000">0,001 ETH/Rp 80.000</option>
        <option value="90000">0,001 ETH/Rp 90.000</option>
        <option value="100000">0,001 ETH/Rp 100.000</option>
      </select>
      </div>

      <div>
        <h4 className=" text-primary text-start my-4 font-semibold">Nama (Opsional)</h4>
        <input className="border w-full border-gray-400 rounded-lg p-2" placeholder="" />
      </div>
      <div>
        <h4 className=" text-primary text-start my-4 font-semibold">Email</h4>
        <input className="border w-full border-gray-400 rounded-lg p-2" placeholder="" />
      </div>

      <button className="p-2 rounded-lg bg-accent text-white mt-4 mx-auto block">
        Connect Wallet
      </button>
      
      <div>
        <h4 className=" text-primary text-start my-4 font-semibold">Pesan Untuk Campaign</h4>
        <textarea name="" id="" cols="20" rows="5" className="rounded-lg border w-full border-gray-400"></textarea>
      </div>

      <div className="flex gap-1">
        <input type="checkbox" className="my-auto rounded-sm" />
        <p>Saya setuju donasi ini dicatat di blockchain</p>
      </div>

      <button className="bg-accent text-white p-2 rounded-lg mt-4 font-secondary w-full">
        Donasi Sekarang
      </button>
    </div>
    
    
  )
}
const FormBank = () => {
  return (
    <div className="w-4/12 text-start mx-auto">
      <div className="">

      <h4 className=" text-primary text-start my-4 font-semibold">Nominal Pembayaran</h4>
      <select className="border w-full border-gray-400 rounded-lg p-2">
        <option value="20000">Rp 20.000</option>
        <option value="30000">ETH/Rp 30.000</option>
        <option value="40000">Rp 40.000</option>
        <option value="50000">Rp 50.000</option>
        <option value="60000">Rp 60.000</option>
        <option value="70000">Rp 70.000</option>
        <option value="80000">Rp 80.000</option>
        <option value="90000">Rp 90.000</option>
        <option value="100000">Rp 100.000</option>
      </select>
      </div>

      <div>
        <h4 className=" text-primary text-start my-4 font-semibold">Nama (Opsional)</h4>
        <input className="border w-full border-gray-400 rounded-lg p-2" placeholder="" />
      </div>
      <div>
        <h4 className=" text-primary text-start my-4 font-semibold">Email</h4>
        <input className="border w-full border-gray-400 rounded-lg p-2" placeholder="" />
      </div>

      <div>
      <h4 className=" text-primary text-start my-4 font-semibold">Upload Bukti Transfer</h4>
      <input className="border w-full border-gray-400 rounded-lg p-2" placeholder="" />
      </div>
      
      <div>
        <h4 className=" text-primary text-start my-4 font-semibold">Pesan Untuk Campaign</h4>
        <textarea name="" id="" cols="20" rows="5" className="rounded-lg border w-full border-gray-400"></textarea>
      </div>

      <div className="flex gap-1">
        <input type="checkbox" className="my-auto rounded-sm" />
        <p>Saya setuju donasi ini dicatat di blockchain</p>
      </div>

      <button className="bg-accent text-white p-2 rounded-lg mt-4 font-secondary w-full">
        Donasi Sekarang
      </button>
    </div>
  )
}

const AddDonasi = () => {
  const [selectedMetodeBayar, setSelectedMetodeBayar] = useState(0);
  const metodeBayar = [
    {
      title : 'Crypto Wallet',
      component : <FormCrypto />
    },
    {
      title : 'Bank',
      component : <FormBank />
    }
   
  ]
  return (
    <div className="p-2 rounded-xl mt-4 mb-4 text-center w-9/12 mx-auto bg-white text-primary border border-gray-400">
      <h4 className="font-semibold my-2 text-primary">Metode Pembayaran</h4>
      <div className="flex flex-row justify-center gap-2 ">
        {
          metodeBayar.map((item, index) => (
            <div key={index} className="w-40">
              <button className={`p-2 rounded-lg border w-full border-gray-400 ${selectedMetodeBayar === index ? 'bg-accent text-white' : ''}`} onClick={() => setSelectedMetodeBayar(index)}>
                {item.title}
              </button>
            </div>
          ))
        }
      </div>
      {metodeBayar[selectedMetodeBayar].component}
      
    </div>
  )
}


export default DetailDonasiBarang;