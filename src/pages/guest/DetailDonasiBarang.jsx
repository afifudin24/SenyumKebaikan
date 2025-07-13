import React from "react";
import { useState, useRef } from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import baju from "../../assets/baju.png"
import { useLocation } from "react-router-dom";
import Donasi from "../../assets/donasi/gambar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons/faFileCirclePlus";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import SignatureCanvas from "react-signature-canvas";
import toast from "react-hot-toast";
const DetailDonasiBarang = () => {
    const location = useLocation();
    const data = location.state;
  console.log(data)
  const [isAdd, setIsAdd] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalStatus, setShowModalStatus] = useState(false);
  const [showModalDetailDonasi, setShowDetailDonasi] = useState(false);
  const [activeTab, setActiveTab] = useState('detail');
  const handleShowModalStatus = () => {
    setShowModalStatus(true);
  }
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
  const [distribusiDana, setDistribusiDana] = useState([
    {
      tanggal: "01/01/2025",
      tujuan: "Pengadaan buku tulis untuk anak panti",
      jumlah: "50 buku tulis",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti1"
    },
    {
      tanggal: "10/01/2025",
      tujuan: "Pembelian tas sekolah untuk anak panti",
      jumlah: "10 tas sekolah",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti2"
    },
    {
      tanggal: "15/01/2025",
      tujuan: "Paket alat tulis (pensil, penghapus, dll)",
      jumlah: "30 paket alat tulis",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti3"
    },
    {
      tanggal: "25/01/2025",
      tujuan: "Seragam sekolah lengkap untuk anak yatim",
      jumlah: "15 setel seragam",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti4"
    },
    {
      tanggal: "01/02/2025",
      tujuan: "Sepatu sekolah untuk anak panti",
      jumlah: "10 pasang sepatu",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti5"
    },
    {
      tanggal: "10/02/2025",
      tujuan: "Sumbangan meja belajar dan kursi",
      jumlah: "5 set meja & kursi",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti6"
    },
    {
      tanggal: "15/02/2025",
      tujuan: "Biaya transport anak panti ke sekolah",
      jumlah: "Transportasi 1 bulan",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti7"
    },
    {
      tanggal: "20/02/2025",
      tujuan: "Pengadaan alat tulis khusus SD",
      jumlah: "40 paket alat tulis SD",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti8"
    },
    {
      tanggal: "01/03/2025",
      tujuan: "Donasi perlengkapan sekolah SMP",
      jumlah: "20 paket lengkap SMP",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti9"
    },
    {
      tanggal: "10/03/2025",
      tujuan: "Pembelian buku pelajaran untuk anak panti",
      jumlah: "20 buku pelajaran",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti10"
    },
    {
      tanggal: "15/03/2025",
      tujuan: "Sumbangan kalkulator untuk siswa SMA",
      jumlah: "10 kalkulator",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti11"
    },
    {
      tanggal: "25/03/2025",
      tujuan: "Paket seragam olahraga untuk anak panti",
      jumlah: "15 setel seragam olahraga",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti12"
    },
    {
      tanggal: "01/04/2025",
      tujuan: "Bantuan alat gambar dan mewarnai",
      jumlah: "25 paket alat gambar",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti13"
    },
    {
      tanggal: "10/04/2025",
      tujuan: "Sumbangan papan tulis untuk ruang belajar",
      jumlah: "2 papan tulis",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti14"
    },
    {
      tanggal: "15/04/2025",
      tujuan: "Donasi buku bacaan dan cerita",
      jumlah: "30 buku bacaan",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti15"
    },
    {
      tanggal: "25/04/2025",
      tujuan: "Perlengkapan ujian nasional",
      jumlah: "30 paket ujian",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti16"
    },
    {
      tanggal: "01/05/2025",
      tujuan: "Penyediaan rak buku untuk perpustakaan",
      jumlah: "4 rak buku",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti17"
    },
    {
      tanggal: "10/05/2025",
      tujuan: "Internet dan listrik ruang belajar",
      jumlah: "Biaya operasional 1 bulan",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti18"
    },
    {
      tanggal: "15/05/2025",
      tujuan: "Donasi laptop bekas layak pakai",
      jumlah: "3 unit laptop",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti19"
    },
    {
      tanggal: "20/05/2025",
      tujuan: "Biaya fotokopi dan print tugas",
      jumlah: "Fotokopi & print 1 semester",
      txHash: "0x8b9c...d4f",
      bukti: "https://random.link/bukti20"
    }
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
                    
                    <div>

                    </div>
                    <div className="flex flex-col gap-2 md:flex-row my-5">
                    
                    <div className="flex flex-col gap-2 w-1/2">
                        {
                            data.items.map((item, index) => (
                                <div key={index} className="">
                                  <div className="flex gap-2 items-center">
                                    <div className=" p-2 rounded-xl bg-white text-primary">
                                            {item.progress}
                                    </div>
                                    <div>
                                    <p className="font-secondary text-sm text-white">{item.title}</p>
                                    <p className="font-primary text-sm font-light  text-white">Terkumpul {item.terkumpul} dari {item.dibutuhkan} yang dibutuhkan</p>

                                    </div>
                                  </div>
                                    <div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="border-l-2 text-center font-secondary gap-4 px-4 justify-center border-white flex flex-col ">
                            <button onClick={() => setIsAdd(true)} className="bg-white hover:bg-primary hover:text-white hover:shadow-2xl text-primary p-2 rounded-full">
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
              <AddDonasi modal={showModal} setModal={setShowModal} setIsAdd={setIsAdd} />
            ) : (
              <div className="mt-10">
                  <nav className="flex justify-center gap-5  mx-auto text-sm text-gray-600 mb-6 cursor-pointer">
                  <button
                  onClick={() => setActiveTab('detail')}
                  className={`pb-1 relative  ${
                    activeTab == 'detail'
                      ? 'font-semibold text-primary after:content-[""] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-primary after:rounded-full'
                      : 'hover:text-black text-primary'
                  }`}
                  aria-current={activeTab === 'detail' ? 'page' : undefined}
                >
                  Detail
                </button>

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
  {/* <button
    onClick={() => setActiveTab('donasi')}
    className={`pb-1 relative ${
            activeTab == 'donasi'
              ? 'font-semibold text-primary after:content-[""] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-primary after:rounded-full'
              : 'hover:text-black text-primary'
          }`}
    aria-current={activeTab === 'donasi' ? 'page' : undefined}
  >
    Donasi masuk
  </button> */}
                    
  <button
    onClick={() => setActiveTab('distribusidana')}
    className={`pb-1 relative ${
            activeTab == 'donasi'
              ? 'font-semibold text-primary after:content-[""] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-primary after:rounded-full'
              : 'hover:text-black text-primary'
          }`}
    aria-current={activeTab === 'distribusidana' ? 'page' : undefined}
  >
    Distribusi Dana
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
                    {activeTab === 'detail' && (
                <section className="mb-16 p-4  rounded-2xl border border-gray-400">
                  <article>
                    <h1 className="text-lg sm:text-xl text-primary font-primary font-semibold  mb-2 leading-tight">
                      Banjir bandang di pinggiran kota
                      <br />
                      <span className="font-bold">METROPOLITAN.</span>
                    </h1>
                    <div className="md:text-sm text-xs">
                      <p className="text-xs sm:text-sm font-secondary text-gray-600 mb-4 leading-relaxed">
                        Peristiwa banjir tidak terduga pada malam menimpa di
                        sungai menyebabkan dan ribu kurang masih ada resiko
                        petugas anda di lereng tegal menanggung kerusakan.
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4 font-secondary leading-relaxed">
                        Kebakaran hutan yang melanda Kalimantan telah
                        menyebabkan kegiatan besar bagi kegiatan, kehidupan
                        satwa liar dan komunitas lokal. Berbagai upaya untuk
                        dilakukan, serta mengedukasi agar dapat menjauhkan
                        masyarakat serta tanaman.
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed font-secondary">
                        Kami, sebagai komponen peduli lingkungan, ingin
                        memberikan dukungan solidaritas kami untuk membantu
                        mereka yang terkena dampak langsung dari bencana ini:
                      </p>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 mb-4 space-y-1 font-secondary">
                        <li>
                          Penanaman Kembali Daun yang bertumpul atau digunakan
                          oleh mendukung upaya pemulihan kekuatan oleh tim
                          peneliti dibantu juga lewat di lapangan.
                        </li>
                        <li>
                          Pemulihan Lingkungan Banjir dan dana akan disalurkan
                          untuk mendukung program pemulihan lingkungan, termasuk
                          penanaman kembali pohon dan upaya rehabilitasi habitat
                          satwa liar yang terkena dampak.
                        </li>
                        <li>
                          Bantuan Komunitas Kese juga akan bekerja sama dengan
                          organisasi lokal untuk memberikan bantuan langsung
                          kepada masyarakat yang terkena dampak, seperti
                          penyediaan makanan, air bersih, dan kebutuhan dasar
                          lainnya.
                        </li>
                      </ul>
                    </div>
                  </article>
                  <section className="flex flex-col sm:flex-row font-secondary justify-center items-center gap-4 mb-6">
                    <div className="bg-gray-100 rounded-md flex items-center justify-center gap-4 p-4 w-full sm:w-1/2 text-center">
                      <div className="text-lg p-3 rounded-xl font-semibold text-white  bg-primary">
                        80%
                      </div>
                      <div className="flex flex-col items-start ">
                        <div className="text-sm font-semibold text-primary">
                          Rp. 60.000.000
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          Donasi sekarang terkumpul
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-md p-4 w-full sm:w-1/2 text-center">
                      <div className="text-xs font-semibold text-gray-700 mb-1">
                        80%
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        12 HARI
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        12 hari tersisa mulai dari sekarang untuk melakukan
                        donasi
                      </div>
                    </div>
                  </section>
                  <section>
                    <img
                      src="https://storage.googleapis.com/a1aa/image/59253e5d-24ac-4787-21b7-811591f7f6e3.jpg"
                      alt="Aerial view of city affected by flooding with houses and trees"
                      className="w-full rounded-md"
                      height="400"
                      width="1200"
                    />
                  </section>
                </section>
              )}


{activeTab === 'distribusidana' && (
               <section className="text-center  text-primary mb-16 p-4  rounded-2xl border border-gray-400 text-sm">
                  <div className="mx-auto text-center w-full">
                    <table className="mx-auto w-full">
                      <thead className="border-b-2 border-gray-300">
                        <tr>
                          <th className="p-4">TANGGAL</th>
                          <th className="p-4">KEGUNAAN/TUJUAN</th>
                          <th className="p-4">JUMLAH</th>
                          <th className="p-4">TX HASH</th>
                          <th className="p-4">BUKTI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {distribusiDana.map((item, index) => (
                          <tr key={index}>
                            <td className="p-4">{item.tanggal}</td>
                            <td className="p-4">{item.tujuan}</td>
                            <td className="p-4">{item.jumlah}</td>
                            <td className="p-4">{item.txHash}</td>
                            <td className="p-4">
                              <a className='underline text-blue-500 hover:text-blue-600' href="/updatedistribusi.png" target="_blank">
                              Bukti
                              </a>
                              </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
  
            {/* {activeTab === 'donasi' && (
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
            )} */}
  
              </div>
            )
          }
          <ModalSuccess modal={showModal} setModal={setShowModal}  setShowModalStatus={setShowModalStatus}/>
            <ModalStatus setShowModalStatus={setShowModalStatus} showModalStatus={showModalStatus} setShowDetailDonasi={setShowDetailDonasi} />
            <ModalDetailDonasi setShowDetailDonasi={setShowDetailDonasi} showDetailDonasi={showModalDetailDonasi} />
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

const AddDonasi = ({modal, setModal, setIsAdd}) => {
  const [selectedMetodeBayar, setSelectedMetodeBayar] = useState(0);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [metode, setMetode] = useState("penjemputan");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kategori, setKategori] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [kondisi, setKondisi] = useState([]);
  const [setujuBlockchain, setSetujuBlockchain] = useState(false);
 
  const sigCanvas = useRef(null);
  const [signatureURL, setSignatureURL] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (sigCanvas.current.isEmpty()) {
  //     alert("Silakan isi tanda tangan terlebih dahulu.");
  //     return;
  //   }

  //   const dataUrl = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
  //   setSignatureURL(dataUrl);

  //   // Kirim data `dataUrl` ke backend atau proses selanjutnya
  //   console.log("Signature image base64:", dataUrl);

  //   // Lanjutkan dengan pengiriman form...
  // };

  const clearSignature = () => {
    sigCanvas.current.clear();
    setSignatureURL("");
  };


  const handleCheckboxChange = (value) => {
    setKondisi((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleChangeFile = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.size <= 5 * 1024 * 1024) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    } else {
      toast.error("Ukuran file maksimal 5MB");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validasi input
    if (
      !nama ||
      !email ||
      !telp ||
      !alamat ||
      !kategori ||
      !jumlah ||
      kondisi.length === 0 ||
      !file ||
      (metode === "penjemputan" && (!tanggal || !waktu))
    ) {
      toast.error("Pastikan semua data terisi");
      return;
    }
  
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("email", email);
    formData.append("telp", telp);
    formData.append("alamat", alamat);
    formData.append("kategori", kategori);
    formData.append("jumlah", jumlah);
    formData.append("kondisi", kondisi.join(", "));
    formData.append("foto", file);
    formData.append("metode", metode);
    formData.append("tanggal", tanggal);
    formData.append("waktu", waktu);
    formData.append("blockchain", setujuBlockchain);
  
    // Buat data notifikasi
    const newNotification = {
      title: "Donasi Barang Berhasil",
      type: "donasibarang",
      data: {
        nama,
        email,
        telp,
        alamat,
        kategori,
        jumlah,
        kondisi,
        metode,
        tanggal,
        waktu,
        setujuBlockchain,
      },
    };
      //  const dataUrl = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      // setSignatureURL(dataUrl);
    // Ambil notifikasi yang sudah ada
    const existingNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
  
    // Tambahkan notifikasi baru
    existingNotifications.push(newNotification);
  
    // Simpan kembali ke localStorage
    localStorage.setItem("notifications", JSON.stringify(existingNotifications));
  
    // Tampilkan toast dan buka modal
    toast.success("Donasi Berhasil");
    setModal(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 rounded-xl mt-4 mb-4 text-center w-9/12 mx-auto bg-white text-primary border relative border-gray-400"
    >
      <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setIsAdd(false)}>
        <FontAwesomeIcon icon={faTimes}  />
      </div>
      <p className="text-xl font-semibold mt-4">Formulir Donasi Barang</p>

      <div className="w-8/12 mx-auto">
        <h4 className="text-start my-2 font-semibold">Nama Lengkap</h4>
        <input type="text" className="border w-full p-2 rounded-lg" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
      </div>

      <div className="w-8/12 mx-auto">
        <h4 className="text-start my-2 font-semibold">Email</h4>
        <input type="email" className="border w-full p-2 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      </div>

      <div className="w-8/12 mx-auto">
        <h4 className="text-start my-2 font-semibold">No Telp</h4>
        <input type="tel" className="border w-full p-2 rounded-lg" value={telp} onChange={(e) => setTelp(e.target.value)} placeholder="+62" />
      </div>

      <div className="w-8/12 mx-auto">
        <h4 className="text-start my-2 font-semibold">Alamat Lengkap</h4>
        <input type="text" className="border w-full p-2 rounded-lg" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" />
      </div>

      <div className="w-8/12 mx-auto">
        <h4 className="text-start my-2 font-semibold">Kategori Barang</h4>
        <select className="border w-full p-2 rounded-lg" value={kategori} onChange={(e) => setKategori(e.target.value)}>
          <option value="">-- Pilih Kategori --</option>
          <option value="Barang Pakai">Barang Pakai</option>
          <option value="Barang Tidak Pakai">Barang Tidak Pakai</option>
          <option value="Barang Elektronik">Barang Elektronik</option>
          <option value="Barang Bahan Bangunan">Barang Bahan Bangunan</option>
        </select>
      </div>

      <div className="w-8/12 mx-auto">
        <h4 className="text-start my-2 font-semibold">Jumlah / Kuantitas Barang</h4>
        <input type="number" className="border w-full p-2 rounded-lg" value={jumlah} onChange={(e) => setJumlah(e.target.value)} placeholder="Jumlah" />
      </div>

      <div className="w-8/12 mx-auto text-start">
        <h4 className="my-2 font-semibold">Kondisi Barang</h4>
        {["Baru", "Bekas Layak Pakai", "Lainnya"].map((label) => (
          <label key={label} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={kondisi.includes(label)}
              onChange={() => handleCheckboxChange(label)}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>

      <div className="w-8/12 mx-auto">
        <h4 className="text-start my-2 font-semibold">Upload Foto Barang</h4>
        <label
          htmlFor="file-upload"
          className="w-full border border-gray-400 border-dashed h-40 flex items-center justify-center flex-col text-center rounded-md cursor-pointer text-gray-500 hover:border-primary hover:text-primary transition duration-200"
        >
          {preview ? (
            <img src={preview} alt="Preview" className="h-full object-contain" />
          ) : (
            <>
              <FontAwesomeIcon icon={faCamera} />
              <p className="text-sm">Upload disini</p>
              <p className="text-xs text-gray-400">max: 5MB</p>
              <p className="text-xs text-gray-400">format: .jpg, .jpeg, .png</p>
            </>
          )}
          <input
            id="file-upload"
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleChangeFile}
            className="hidden"
          />
        </label>
      </div>

      <div className="w-8/12 mx-auto">
        <h4 className="text-start my-2 font-semibold">Metode Pengiriman</h4>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={metode === "sendiri"}
            onChange={() => setMetode("sendiri")}
          />
          Donatur Mengirim Sendiri
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={metode === "penjemputan"}
            onChange={() => setMetode("penjemputan")}
          />
          Memerlukan Penjemputan
        </label>
      </div>

      {metode === "penjemputan" && (
        <>
          <div className="w-8/12 mx-auto">
            <h4 className="text-start my-2 font-semibold">Tanggal Penjemputan</h4>
            <div className="relative">
              <input
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-full border px-3 py-2 pr-10 rounded-md"
              />
              <FontAwesomeIcon icon={faCalendar} className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>

          <div className="w-8/12 mx-auto">
            <h4 className="text-start my-2 font-semibold">Waktu Penjemputan</h4>
            <input
              type="text"
              value={waktu}
              onChange={(e) => setWaktu(e.target.value)}
              placeholder="Contoh: 10:00 - 12:00 WIB"
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
        </>
      )}

      <div className="w-8/12 mx-auto">
        <h4 className="text-start my-2 font-semibold">Persetujuan dan Konfirmasi</h4>
        <div className="border border-gray-400 rounded-md text-center text-gray-500 p-2">
          <p className="text-sm text-gray-700 mb-1">Tanda Tangan</p>
          <SignatureCanvas
            penColor="black"
            canvasProps={{ className: "w-full h-32 border rounded" }}
            ref={sigCanvas}
          />
          <button
            type="button"
            onClick={clearSignature}
            className="text-xs mt-2 text-red-500 underline"
          >
            Hapus Tanda Tangan
          </button>
        </div>

        <label className="flex gap-2 mt-2">
          <input
            type="checkbox"
            checked={setujuBlockchain}
            onChange={() => setSetujuBlockchain(!setujuBlockchain)}
          />
          Saya setuju donasi ini dicatat di blockchain
        </label>
        <button
          type="submit"
          className="bg-accent text-white p-2 rounded-lg mt-4 w-full"
        >
          Donasi Sekarang
        </button>
      </div>
    </form>
  );
};

const ModalSuccess = ({modal, setModal, setShowModalStatus}) => {
  return (
   <div
  className={`rounded-xl mt-4 mb-4 text-center  ${
    modal ? "w-auto opacity-100 h-auto scale-100 " : "w-0 h-0 opacity-0 scale-95 "
  } md:w-6/12  duration-300 transition-all top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-400`}
>

      <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
        <FontAwesomeIcon icon={faCheckCircle} className="text-5xl  text-accent" />
      <h4 className="font-semibold my-2 text-primary">Donasi Berhasil Diproses!</h4>
      <p className="text-sm">Donasi anda telah diterima</p>
        <FontAwesomeIcon onClick={() => setModal(false)} className="absolute top-2 right-2" icon={faTimes} />
      </div>
          <div className="justify-center text-center gap-5 mt-5">
        <p>ID Donasi Barang</p>
        <p>3FA59D64</p>
        {/* <button className="p-1 text-center my-3 bg-secondary text-primary">
          Lihat di Etherscan
        </button> */}

        <p className="mt-1 mb-4 text-primary text-sm md:text-base">Status : Menunggu Penjemputan</p>

      </div>

               <div className="p-5 w-8/12 mx-auto">
          <div className="relative h-2 rounded-full bg-secondary">
            <div
              className="absolute top-0 left-0 h-2 rounded-full bg-primary"
              style={{ width: `70%` }}
            ></div>
            <div
              className="absolute -top-8 left-[70%] -translate-x-1/2 bg-[#C6F6D5] text-[#1E1E1E] text-[10px] font-sans px-1 rounded pointer-down"
              style={{ width: "28px", left: `70%` }}
            >
              70% 
            </div>
          </div>
         
        </div>
        <p className="my-2 text-xs md:text-sm">Tersisa 12 hari lagi galang donasi ini akan berakhir</p>
        <button className="p-2 rounded-lg hover:bg-secondary hover:text-primary bg-accent text-white mt-4 mx-auto block">
          Unduh PDF Bukti Donasi

        </button>
        <div className="flex gap-2 mt-3 mb-3 justify-center flex-row w-9/12 mx-auto">
        <button onClick={() => {
          setModal(false)
          setShowModalStatus(true)
            }} className="bg-primary hover:bg-secondary hover:text-primary text-white rounded-lg py-2 px-3 text-xs md:text-sm">
           Lihat Status Donasi
            </button>
           
        </div>

        <div>
          <p className="text-primary text-sm text-center mx-auto font-semibold my-1" >
            Terima kash, Naufal! Dukungan anda sangat berarti bagi para penyitas 
          </p>
        </div>
  
    </div>
  )
}

const ModalStatus = ({showModalStatus, setShowModalStatus, setShowDetailDonasi}) => {
  return (
   <div
  className={`rounded-xl mt-4 mb-4 text-center  ${
    showModalStatus ? "w-auto opacity-100 h-auto scale-100 " : "w-0 h-0 opacity-0 scale-95 "
  } md:w-4/12  duration-300 transition-all top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-400`}
>

      <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
       
      <h4 className="font-semibold my-2 text-primary">Status Donasi Barang</h4>
      <p className="text-sm">Situasi terupdate untuk barang anda</p>
        <FontAwesomeIcon onClick={() => setShowModalStatus(false)} className="absolute top-2 right-2" icon={faTimes} />
      </div>
      <div className="mx-auto w-11/12 md:w-8/12 flex-row flex  justify-center text-start gap-6 mt-5">
        {/* left */}
        <div className="w-1/2 flex flex-col gap-2">
          <p>ID Donasi</p>
          <p>Nama Barang</p>
          <p>Tgl & Waktu Penjemputan</p>
          <p>Status Saat Ini</p>
        </div>
        {/* right */}
        <div className="w-1/2 flex flex-col gap-2">
          <p>3FA59D64</p>
          <p>Pakaian anak - anak</p>
          <p>21-02-2024</p>
          <p>Menunggu Penjemputan</p>
        </div>
      

      </div>

      <button onClick={() => {
        setShowDetailDonasi(true)
        setShowModalStatus(false)
      } 
        
      }
      className="p-2 my-4 rounded-md hover:bg-primary hover:text-white duration-100 transition-all font-secondary bg-secondary mx-auto text-center text-primary">
        Detail Donasi
          </button>
       
        
  
    </div>
  )
}

const ModalDetailDonasi = ({showDetailDonasi, setShowDetailDonasi}) => {
  return (
   <div
  className={`rounded-xl mt-4 mb-4 text-center  ${
    showDetailDonasi ? "w-auto opacity-100 h-auto scale-100 " : "w-0 h-0 opacity-0 scale-95 "
  } md:w-6/12  duration-300 transition-all z-999 top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-400`}
>

      <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
        <FontAwesomeIcon icon={faCheckCircle} className="text-5xl  text-accent"  />
      <h4 className="font-semibold my-2 text-primary">Detail Donasi Barang</h4>
      <p className="text-sm">Situasi terupdate untuk barang anda</p>
        <FontAwesomeIcon onClick={() => setShowDetailDonasi(false)} className="absolute top-2 right-2" icon={faTimes} />
      </div>
      <div className="mx-auto w-11/12 md:w-8/12 flex-row flex  justify-center text-start gap-6 mt-5">
        {/* left */}
   <div class="overflow-y-auto max-h-[400px] border border-gray-200 rounded-lg w-full max-w-md">
  <table class="text-sm text-left text-gray-700 w-full">
    <tbody>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium w-1/3">Status</th>
        <td class="py-2 px-4 flex items-center gap-2">
          <span class="h-3 w-3 bg-green-400 rounded-full inline-block"></span>
          Menunggu Penjemputan
        </td>
      </tr>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">ID Donasi</th>
        <td class="py-2 px-4">3FA59D64</td>
      </tr>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">Jumlah</th>
        <td class="py-2 px-4">20pcs</td>
      </tr>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">Deskripsi</th>
        <td class="py-2 px-4">Pakaian anak umur 7-8 layak pakai</td>
      </tr>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">Riwayat Transaksi</th>
        <td class="py-2 px-4">
          19 Jan 2025, 14.00 WIB<br />
          Akan dijemput
        </td>
      </tr>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">Lokasi Penjemputan</th>
        <td class="py-2 px-4">Jln. Nopel Gallagers</td>
      </tr>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">Tgl & Waktu Penjemputan</th>
        <td class="py-2 px-4">19 Januari 2025, 14.00 WIB</td>
      </tr>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">Foto Barang</th>
        <td class="py-2 px-4">
          <img src={baju} alt="Foto Barang" class="w-20 h-auto rounded shadow" />
        </td>
      </tr>
      <tr>
        <td colspan="2" class="py-3 px-4 text-center">
          <a href='https://etherscan.io/' target="_blank" class="inline-block px-4 py-2 text-sm bg-green-100 text-green-600 rounded hover:bg-green-200 transition">
            Lihat di Etherscan
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

      

      </div>

       
        
  
    </div>
  )
}



export default DetailDonasiBarang;