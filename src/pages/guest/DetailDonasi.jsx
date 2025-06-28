import { useState, useRef } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DataDetailDonasi from "../../components/DataDetailDonasi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from 'react-hot-toast';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const DetailDonasi = () => {
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

  const [isAdd, setIsAdd] = useState(false);
  const [modal, setModal] = useState(false);
    
    const [activeTab, setActiveTab] = useState('detail');
     return (
        <div>
        <div>
          <Container className={'mt-20 md:mt-20'}>
            <div>
                <DataDetailDonasi isAdd={isAdd} setIsAdd={setIsAdd} type={'BENCANA ALAM'} percent={'60%'} raised={6000000} goal={16} title={'Banjir bandang di pinggiran kota METROPOLITAN'} description={'Persediaan baju tidak tentu jika anda memang di anggap membutuhkan dan stok barang masih ada maka pengajuan anda di terima tinggal menunggungu konfirmasi'} />
            </div>
            <Navbar />

            {
              isAdd ? (
              <AddDonasi isAdd={isAdd} setIsAdd={setIsAdd} modal={modal} setModal={setModal} />
              ) : (
                <div>
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
                  Peristiwa banjir tidak terduga pada malam menimpa di sungai menyebabkan dan ribu kurang masih ada resiko petugas anda di lereng
                  tegal menanggung kerusakan.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 font-secondary leading-relaxed">
                  Kebakaran hutan yang melanda Kalimantan telah menyebabkan kegiatan besar bagi kegiatan, kehidupan satwa liar dan komunitas
                  lokal. Berbagai upaya untuk dilakukan, serta mengedukasi agar dapat menjauhkan masyarakat serta tanaman.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed font-secondary">
                  Kami, sebagai komponen peduli lingkungan, ingin memberikan dukungan solidaritas kami untuk membantu mereka yang terkena
                  dampak langsung dari bencana ini:
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 mb-4 space-y-1 font-secondary">
                  <li>
                    Penanaman Kembali Daun yang bertumpul atau digunakan oleh mendukung upaya pemulihan kekuatan oleh tim peneliti dibantu juga lewat
                    di lapangan.
                  </li>
                  <li>
                    Pemulihan Lingkungan Banjir dan dana akan disalurkan untuk mendukung program pemulihan lingkungan, termasuk penanaman kembali
                    pohon dan upaya rehabilitasi habitat satwa liar yang terkena dampak.
                  </li>
                  <li>
                    Bantuan Komunitas Kese juga akan bekerja sama dengan organisasi lokal untuk memberikan bantuan langsung kepada masyarakat yang
                    terkena dampak, seperti penyediaan makanan, air bersih, dan kebutuhan dasar lainnya.
                  </li>
                </ul>
                </div>
              </article>
              <section className="flex flex-col sm:flex-row font-secondary justify-center items-center gap-4 mb-6">
                <div className="bg-gray-100 rounded-md flex items-center justify-center gap-4 p-4 w-full sm:w-1/2 text-center">
                  <div className="text-lg p-3 rounded-xl font-semibold text-white  bg-primary">80%</div>
                  <div className="flex flex-col items-start ">
                  <div className="text-sm font-semibold text-primary">Rp. 60.000.000</div>
                  <div className="text-xs text-gray-600 mt-1">Donasi sekarang terkumpul</div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-md p-4 w-full sm:w-1/2 text-center">
                  <div className="text-xs font-semibold text-gray-700 mb-1">80%</div>
                  <div className="text-sm font-semibold text-gray-900">12 HARI</div>
                  <div className="text-xs text-gray-600 mt-1">12 hari tersisa mulai dari sekarang untuk melakukan donasi</div>
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

          {activeTab === 'kabar' && (
            <section className="text-center text-primary mb-16 p-4  rounded-2xl border border-gray-400 text-sm py-20">
                <div>
                    <FontAwesomeIcon icon={faFileInvoice} className="text-4xl text-accent my-5" />
                    <p>Campaign Ini Belum Memilii Kabar Terbaru</p>
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

<ModalSuccess modal={modal} setModal={setModal} />
     
      
          <Footer />
          </Container>
        </div>
        </div>
      );
}


const FormCrypto = ({ modal, setModal }) => {
  const [connectWallet, setConnectWallet] = useState(false);
  const [formData, setFormData] = useState({
    nominal: "20000",
    nama: "",
    email: "",
    pesan: "",
    setujuBlockchain: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nominal, email, pesan, setujuBlockchain } = formData;

    if (!nominal || !email || !pesan || !setujuBlockchain) {
      toast.error('Pastikan semua data terisi');
      return;
    }
     setModal(true);
    console.log("Data siap dikirim:", formData);
    // Lanjutkan proses pengiriman data
  };

  return (
    <form onSubmit={handleSubmit} className="w-5/12 text-start mx-auto">
      <div>
        <h4 className="text-primary text-start my-4 font-semibold">Nominal Pembayaran</h4>
        <select
          name="nominal"
          value={formData.nominal}
          onChange={handleChange}
          className="border w-full border-gray-400 rounded-lg p-2"
        >
          <option value="">-- Pilih Nominal --</option>
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
        <h4 className="text-primary text-start my-4 font-semibold">Nama (Opsional)</h4>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          className="border w-full border-gray-400 rounded-lg p-2"
        />
      </div>

      <div>
        <h4 className="text-primary text-start my-4 font-semibold">Email</h4>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border w-full border-gray-400 rounded-lg p-2"
        />
      </div>

      {
        connectWallet ? (
          <p className="text-primary text-center my-4 p-2 bg-secondary rounded-2xl">
            Wallet Terhubung 0xyza567bcd890
            </p>
        ): (
          <button
          type="button"
          className="p-2 rounded-lg bg-accent text-white mt-4 mx-auto block"
          onClick={() => setConnectWallet(!connectWallet)} // sementara, bisa diganti dengan logika Web3
        >
          Connect Wallet
        </button>
        )
      }

      

      <div>
        <h4 className="text-primary text-start my-4 font-semibold">Pesan Untuk Campaign</h4>
        <textarea
          name="pesan"
          value={formData.pesan}
          onChange={handleChange}
          cols="20"
          rows="5"
          className="rounded-lg border w-full border-gray-400"
        ></textarea>
      </div>

      <div className="flex gap-1">
        <input
          type="checkbox"
          name="setujuBlockchain"
          checked={formData.setujuBlockchain}
          onChange={handleChange}
          className="my-auto rounded-sm"
        />
        <p>Saya setuju donasi ini dicatat di blockchain</p>
      </div>

      <button
        type="submit"
        className="bg-accent cursor-pointer text-white p-2 rounded-lg mt-4 font-secondary w-full"
      >
        Donasi Sekarang
      </button>
    </form>
  );
};

const FormBank = ({modal, setModal}) => {
  const [formData, setFormData] = useState({
    nominal: "20000",
    nama: "",
    email: "",
    buktiTransfer: "",
    pesan: "",
    setujuBlockchain: false,
  });
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFormData({ ...formData, buktiTransfer: file });
    }
  };

  const handleClickBox = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
   const { nominal, email, buktiTransfer, pesan, setujuBlockchain } = formData;
    if (!nominal || !email || !buktiTransfer || !pesan || !setujuBlockchain) {
      toast.error('Pastikan semua data terisi');
      return;
    }

    console.log("Data siap dikirim:", formData);

    setModal(true);

  };

  return (
    <form onSubmit={handleSubmit} className="w-5/12 text-start mx-auto">
      <div>
        <h4 className="text-primary text-start my-4 font-semibold">Nominal Pembayaran</h4>
        <select
          name="nominal"
          value={formData.nominal}
          onChange={handleChange}
          className="border w-full border-gray-400 rounded-lg p-2"
        >
          <option value="20000">Rp 20.000</option>
          <option value="30000">Rp 30.000</option>
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
        <h4 className="text-primary text-start my-4 font-semibold">Nama (Opsional)</h4>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          className="border w-full border-gray-400 rounded-lg p-2"
          placeholder=""
        />
      </div>

      <div>
        <h4 className="text-primary text-start my-4 font-semibold">Email</h4>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border w-full border-gray-400 rounded-lg p-2"
          placeholder=""
        />
      </div>

      <div>
      <h4 className="text-primary text-start my-4 font-semibold">Upload Bukti Transfer</h4>

      <div
        onClick={handleClickBox}
        className="border-2 border-gray-300 border-dashed rounded-md h-40 flex flex-col justify-center items-center cursor-pointer hover:border-gray-500 transition"
        >
          <FontAwesomeIcon icon={faFolderOpen} className="text-4xl text-gray-400 mb-2" />

        <p className="text-gray-600">{fileName ? fileName : "Upload di sini"}</p>
        <p className="text-sm text-gray-500">Format: .jpg, .png</p>
      </div>

      <input
        type="file"
        accept=".jpg,.png"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>

      <div>
        <h4 className="text-primary text-start my-4 font-semibold">Pesan Untuk Campaign</h4>
        <textarea
          name="pesan"
          value={formData.pesan}
          onChange={handleChange}
          cols="20"
          rows="5"
          className="rounded-lg border w-full border-gray-400"
        ></textarea>
      </div>

      <div className="flex gap-1 mt-4">
        <input
          type="checkbox"
          name="setujuBlockchain"
          checked={formData.setujuBlockchain}
          onChange={handleChange}
          className="my-auto rounded-sm"
        />
        <p>Saya setuju donasi ini dicatat di blockchain</p>
      </div>

      <button
        type="submit"
        className="bg-accent cursor-pointer text-white p-2 rounded-lg mt-4 font-secondary w-full"
      >
        Donasi Sekarang
      </button>
    </form>
  )
}

const AddDonasi = ({modal, setModal, isAdd, setIsAdd}) => {
  const [selectedMetodeBayar, setSelectedMetodeBayar] = useState(0);
  const metodeBayar = [
    {
      title : 'Crypto Wallet',
      component : <FormCrypto modal={modal} setModal={setModal} />
    },
    {
      title : 'Bank',
      component : <FormBank modal={modal} setModal={setModal} />
    }
   
  ]
  return (
    <div className="p-2 rounded-xl relative mt-4 mb-4 text-center w-9/12 mx-auto bg-white text-primary border border-gray-400">
      <FontAwesomeIcon className="absolute top-2 right-2 cursor-pointer" icon={faXmark} onClick={() => setIsAdd(false)} />
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

export default DetailDonasi;