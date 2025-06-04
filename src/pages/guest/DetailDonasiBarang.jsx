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
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
const DetailDonasiBarang = () => {
    const location = useLocation();
    const data = location.state;
  console.log(data)
  const [isAdd, setIsAdd] = useState(true);
  const [showModal,setShowModal] = useState(false)
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

    // Kirim data
    toast.success("Data berhasil dikirim! (simulasi)");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 rounded-xl mt-4 mb-4 text-center w-9/12 mx-auto bg-white text-primary border border-gray-400"
    >
     
      <p className="text-xl font-semibold">Formulir Donasi Barang</p>

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
        <div className="border border-gray-400 rounded-md h-32 text-center flex flex-col justify-center items-center text-gray-500">
          <p className="text-sm text-gray-700">Tanda Tangan</p>
          <p className="text-2xl">✍️</p>
          <p className="text-sm">Di sini</p>
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

const ModalSuccess = ({modal, setModal}) => {
  return (
   <div
  className={`rounded-xl mt-4 mb-4 text-center  ${
    modal ? "w-auto opacity-100 h-auto scale-100 " : "w-0 h-0 opacity-0 scale-95 "
  } md:w-6/12  duration-300 transition-all top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-400`}
>

      <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
        <FontAwesomeIcon icon={faCheckCircle} className="text-5xl  text-accent" />
      <h4 className="font-semibold my-2 text-primary">Donasi Berhasil!</h4>
      <p className="text-sm">Donasi Anda berhasil diverifikasi & dicatat di blockchain</p>
        <FontAwesomeIcon onClick={() => setModal(false)} className="absolute top-2 right-2" icon={faTimes} />
      </div>
          <div className="flex flex-row justify-center gap-5 mt-5">
          <div className="flex flex-col gap-1">
              <h4 className="font-semibold">Rp100.000/0,005 ETH</h4>
              <p>21-02-2024</p>
              <p>0x9a29c4c</p>
          </div>
          <div>

          </div>

          <div className="flex flex-col gap-1">
            <h4> Bantuan Banjir Jakarta</h4>
            <button className="rounded-lg bg-accent hover:bg-secondary text-xs md:text-sm text-white">Lihat di Etherscan</button>
          </div>
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
            <button className="bg-primary hover:bg-secondary hover:text-primary text-white rounded-lg py-2 px-3 text-xs md:text-sm">
              Kembali ke Campaign
            </button>
            <button className="bg-primary hover:bg-secondary hover:text-primary text-white rounded-lg py-2 px-3 text-xs md:text-sm">
              Dashboard Donasi Saya
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



export default DetailDonasiBarang;