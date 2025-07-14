import { useState, useRef } from 'react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import DataDetailDonasi from '../../components/DataDetailDonasi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import coinbase from '../../assets/coinbase.png'
import metamask from '../../assets/metamask.png'
import walletconnect from '../../assets/walletconnect.png'
import {
  faFileInvoice,
  faCheck,
  faTimes,
  faDroplet,
  faChevronDown,
  faWallet,
  faLink,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { Toaster, toast } from 'react-hot-toast';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { QRCodeCanvas } from 'qrcode.react';
import { QRCodeSVG } from 'qrcode.react';

import {
  FaCcVisa,
  FaUniversity,
  FaWallet,
  FaCcMastercard,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
  FaFirefox,
} from 'react-icons/fa';
import { SiWalletconnect } from 'react-icons/si';
import { MdAccountBalance, MdOutlineAttachEmail } from 'react-icons/md';
import ikongopay from '../../assets/gopay.png';
import ikongenius from '../../assets/genius.png';
import ikonovo from '../../assets/ovo.png';
import ikondana from '../../assets/dana.png';
const DetailDonasi = () => {
  const [valueForm, setValueForm] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [showDetailDonasi, setShowDetailDonasi] = useState('');
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
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti1"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti2"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti3"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti4"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti5"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti6"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti7"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti8"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti9"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti10"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti11"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti12"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti13"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti14"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti15"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti16"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti17"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti18"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti19"
  },
  {
    tanggal: "22/05/2025",
    tujuan: "Pembelian 50 paket seragam sekolah",
    jumlah: -2000000,
    txHash: "0x8b9c...d4f",
    bukti: "https://random.link/bukti20"
  }
]);


  const [isAdd, setIsAdd] = useState(false);
  const [modal, setModal] = useState(false);

  const [activeTab, setActiveTab] = useState('detail');
  return (
    <div>
      <div>
        <Container className={'mt-20 md:mt-20'}>
          <div>
            <DataDetailDonasi
              isAdd={isAdd}
              setIsAdd={setIsAdd}
              type={'BENCANA ALAM'}
              percent={'60%'}
              raised={6000000}
              goal={16}
              title={'Banjir bandang di pinggiran kota METROPOLITAN'}
              description={
                'Persediaan baju tidak tentu jika anda memang di anggap membutuhkan dan stok barang masih ada maka pengajuan anda di terima tinggal menunggungu konfirmasi'
              }
            />
          </div>
          <Navbar />

          {isAdd ? (
            <AddDonasi
              showPayment={showPayment}
              setShowPayment={setShowPayment}
              valueForm={valueForm}
              setValueForm={setValueForm}
              isAdd={isAdd}
              setIsAdd={setIsAdd}
              modal={modal}
              showDetailDonasi={showDetailDonasi}
              setModal={setModal}
              setShowDetailDonasi={setShowDetailDonasi}
            />
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
                <button
                onClick={() => setActiveTab('distribusidana')}
                className={`pb-1 relative ${
                    activeTab == 'distribusidana'
                      ? 'font-semibold text-primary after:content-[""] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-primary after:rounded-full'
                      : 'hover:text-black text-primary'
                  }`}>
                  Distribusi Dana
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

              {activeTab === 'kabar' && (
                <section className="text-center text-primary mb-16 p-4  rounded-2xl border border-gray-400 text-sm py-20">
                  <div>
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      className="text-4xl text-accent my-5"
                    />
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
                        {dataDonasi.map((item, index) => (
                          <tr key={index}>
                            <td className="p-4">{item.nama}</td>
                            <td className="p-4">{item.tanggal}</td>
                            <td className="p-4">{item.nominal}</td>
                            <td className="p-4">{item.txHash}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
                          <th className="p-4">JUMLAH (RP)</th>
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
            </div>
          )}

          <ModalSuccess
            modal={modal}
            formData={valueForm}
            setModal={setModal}
            setShowPayment={setShowPayment}
            showPayment={showPayment}
          />

        </Container>
          <Footer />
      </div>
    </div>
  );
};

const FormCrypto = ({ modal, setModal, setValueForm }) => {
  const [connectWallet, setConnectWallet] = useState(false);
  const [konfirmasiWallet, setKonfirmasiWallet] = useState(false);

  const [walletPilihan, setWalletPilihan] = useState(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [formData, setFormData] = useState({
    nominal: '20000',
    nama: '',
    email: '',
    pesan: '',
    setujuBlockchain: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const walletOptions = [
    { name: 'Metamask', img : metamask },
    { name: 'WalletConnect', img : walletconnect },
    { name: 'Coinbawe Wallet', img : coinbase },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nominal, email, pesan, setujuBlockchain } = formData;

    if (!nominal || !email || !pesan || !setujuBlockchain) {
      toast.error('Pastikan semua data terisi');
      return;
    }
    // setModal(true);
    setKonfirmasiWallet(true);
    setValueForm(formData);
    console.log('Data siap dikirim:', formData);
    // Lanjutkan proses pengiriman data
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-5/12 text-start mx-auto">
        <div>
          <h4 className="text-primary text-start my-4 font-semibold">
            Nominal Pembayaran
          </h4>
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
          <h4 className="text-primary text-start my-4 font-semibold">
            Nama (Opsional)
          </h4>
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

        {/* Wallet Connect */}
        <div className="text-center mt-4">
          {connectWallet && walletPilihan ? (
            <div className="flex justify-center items-center gap-2 p-2 bg-secondary rounded-2xl text-primary">
              <FontAwesomeIcon icon={walletPilihan.icon} />
              <span>{walletPilihan.name} Terhubung</span>
            </div>
          ) : (
            <button
              type="button"
              className="p-2 rounded-lg bg-accent text-white mt-4 mx-auto block"
              onClick={() => setShowWalletModal(true)}
            >
              <FontAwesomeIcon icon={faWallet} className="mr-2" />
              Connect Wallet
            </button>
          )}
        </div>

        <div>
          <h4 className="text-primary text-start my-4 font-semibold">
            Pesan Untuk Campaign
          </h4>
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

      {showWalletModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-xl text-start">
            <h3 className="text-lg font-semibold mb-4">Hubungkan Dompet Anda</h3>
            <div className="space-y-3">
              {walletOptions.map((wallet) => (
                <button
                  key={wallet.name}
                  onClick={() => {
                    setWalletPilihan(wallet);
                    setConnectWallet(true);
                    setShowWalletModal(false);
                  }}
                  className="w-full border rounded-lg py-2 flex items-center justify-start px-4 gap-4 hover:bg-gray-100"
                >
                  <img src={wallet.img} className='w-8 h-8' alt="" />
                  <span className='text-primary font-semibold'>{wallet.name}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowWalletModal(false)}
              className="mt-4 text-sm text-gray-500 hover:underline"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {konfirmasiWallet && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-xl text-start">
            <div className='flex justify-start p-2 gap-2'>
            <img src={walletPilihan.img} className="w-8 h-8" alt="" />
            <h3 className="text-lg font-semibold"> {walletPilihan.name}</h3>
            </div>
            <p className='text-center text-primary text-lg'>Kirim</p>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-2'>
                <p className='text-primary font-semibold'>Tujuan :</p>
                <p className='text-primary font-semibold'>Jumlah :</p>
                <p className='text-primary font-semibold'>Biaya Gas :</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-primary font-light'>0xabc1234...dcba5678</p>
                <p className='text-primary font-light'>{formData.nominal} ETH</p>
                <p className='text-primary font-light'>0.001 ETH</p>
              </div>
            </div>
            <div className='text-center'>
            
            <button
                onClick={() =>
                {
                  setModal(true)
                    setKonfirmasiWallet(false)
                }
                }
              className="mt-4 text-sm text-primary p-3 bg-secondary rounded-md w-9/12 mx-auto font-secondary hover:underline"
              >
              Konfirmasi
            </button>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

const FormBank = ({
  modal,
  setModal,
  valueForm,
  setValueForm,
  showPayment,
  setShowPayment,
  showDetailDonasi,
  setShowDetailDonasi
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
   const inputRef = useRef(null);

  const [formData, setFormData] = useState({
    nominal: '20000',
    metode: '',
    nama: '',
    email: '',
    pesan: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'metode') setShowDropdown(!showDropdown);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nominal, metode, email } = formData;

    if (!nominal || !metode || !email) {
      toast.error('Pastikan nominal, metode, dan email diisi');
      return;
    }

    console.log('Data siap dikirim:', formData);
    setValueForm(formData);
    const bankValues = [
      "bni", "bca", "mandiri", "bsi", "muamalat", "maybank", "bri"
    ];
    setShowPayment(true);
    // Jika metode adalah bank
    if (bankValues.includes(formData.metode)) {
      setShowDetailDonasi('bank');
    } else {
      setShowDetailDonasi('crypto');
    }
  };
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleDownload = () => {
    const canvas = document.getElementById('qrcode');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qris.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


  const metodeList = [
    {
      label: 'E-Wallet',
      items: [
        { name: 'Gopay', value: 'gopay', img: ikongopay },
        { name: 'OVO', value: 'ovo', img: ikonovo },

        { name: 'Dana', value: 'dana', img: ikondana },
        { name: 'GeniusPay', value: 'geniuspay', img: ikongenius },
      ],
    },
    {
      label: 'Bank Transfer',
      items: [
        {
          name: 'Bank Syariah Indonesia',
          value: 'bni',
          icon: <FaUniversity className="text-orange-600" />,
        },
        {
          name: 'Bank Central Asia',
          value: 'bca',
          icon: <MdAccountBalance className="text-blue-700" />,
        },
        {
          name: 'Bank Mandiri',
          value: 'mandiri',
          icon: <FaCcVisa className="text-yellow-500" />,
        },
        {
          name: 'Bank Syariah Indonesia',
          value: 'bsi',
          icon: <FaCcMastercard className="text-green-500" />,
        },
        {
          name: 'Bank Muamalat',
          value: 'muamalat',
          icon: <FaCcApplePay className="text-emerald-600" />,
        },
        {
          name: 'Maybank Syariah',
          value: 'maybank',
          icon: <FaCcPaypal className="text-yellow-600" />,
        },
        {
          name: 'Bank Rakyat Indonesia',
          value: 'bri',
          icon: <FaUniversity className="text-blue-500" />,
        },
      ],
    },
  ];

  const selectedItem = metodeList
    .flatMap((group) => group.items)
    .find((item) => item.value === formData.metode);

  return (
    <>
      {!showPayment ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto text-start"
        >
          {/* Nominal */}
          <div>
            <label className="text-primary font-semibold mb-2 block">
              Nominal pembayaran
            </label>
            <select
              name="nominal"
              value={formData.nominal}
              onChange={handleChange}
              className="border w-full border-gray-400 rounded-lg p-2"
            >
              <option value="">Pilih Nominal</option>
              {[...Array(9)].map((_, i) => {
                const nominal = (i + 2) * 10000;
                return (
                  <option key={nominal} value={nominal}>
                    Rp {nominal.toLocaleString('id-ID')}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Metode */}
          <div className="mt-4">
            <div className="relative">
              <label className="text-primary font-semibold mb-2 block">
                Pilih Metode Pembayaran
              </label>

              {/* Tombol pembuka dropdown */}
              <div
                className={`border p-2 rounded-lg cursor-pointer flex items-center justify-between ${
                  showDropdown
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300'
                }`}
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                {selectedItem ? (
                  <div className="flex items-center gap-2">
                    {selectedItem.img ? (
                      <img
                        src={selectedItem.img}
                        alt={selectedItem.name}
                        className="w-4 h-4"
                      />
                    ) : (
                      <span className="text-xl">{selectedItem.icon}</span>
                    )}
                    <span>{selectedItem.name}</span>
                  </div>
                ) : (
                  <span className="text-gray-400">Pilih metode pembayaran</span>
                )}
                <span>{showDropdown ? '▲' : '▼'}</span>
              </div>

              {/* Dropdown isi metode */}
              {showDropdown && (
                <div className="mt-2 space-y-4 border rounded-lg p-3 bg-white shadow-lg absolute z-50 w-full">
                  {metodeList.map((group) => (
                    <div key={group.label}>
                      <p className="text-sm text-gray-600 font-semibold mb-2">
                        {group.label}
                      </p>
                      <div className="space-y-2">
                        {group.items.map((item) => (
                          <label
                            key={item.value}
                            className={`flex items-center gap-2 cursor-pointer border p-2 rounded-lg ${
                              formData.metode === item.value
                                ? 'border-green-500 bg-green-50'
                                : 'border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="metode"
                              value={item.value}
                              checked={formData.metode === item.value}
                              onChange={handleChange}
                              className="hidden"
                            />
                            {item.img ? (
                              <img
                                src={item.img}
                                alt={item.name}
                                className="w-4 h-4"
                              />
                            ) : (
                              <span className="text-xl">{item.icon}</span>
                            )}
                            <span>{item.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Nama */}
          <div className="mt-4">
            <label className="text-primary font-semibold mb-2 block">
              Nama (Opsional)
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="border w-full border-gray-400 rounded-lg p-2"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="text-primary font-semibold mb-2 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border w-full border-gray-400 rounded-lg p-2"
            />
          </div>

          {/* Pesan */}
          <div className="mt-4">
            <label className="text-primary font-semibold mb-2 block">
              Pesan untuk campaign
            </label>
            <textarea
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              className="border w-full border-gray-400 rounded-lg p-2"
              rows="4"
            ></textarea>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="bg-green-200 text-green-800 font-semibold mt-6 rounded-lg p-3 w-full hover:bg-green-300 transition"
          >
            Lanjut Pembayaran
          </button>
        </form>
      ) : (
          
            showDetailDonasi !== 'bank' ? (
              <div className="max-w-sm mx-auto  overflow-hidden mt-5 bg-white border rounded-lg shadow-md">
              <div className="bg-primary overflow-hidden text-start text-white p-3 font-primary">
                <h2 className="font-semibold text-lg mb-1">Senyum Kebaikan</h2>
              </div>
              <div className="text-start p-3">
                <p className="text-2xl my-1 font-bold text-primary">
                  Rp{Number(valueForm.nominal).toLocaleString()}
                </p>
                <div className="flex justify-between">
                  <p className="text-sm my-1 font-light text-primary ">
                    Order ID: #DNS{Date.now()}
                  </p>
                  <p className="text-sm my-1  text-primary font-semibold">
                    Detail <FontAwesomeIcon icon={faChevronDown} />
                  </p>
                </div>
              </div>
              <p className="text-sm text-white bg-primary/40 text-center py-2  mb-4">
                Pay within 00:14:40
              </p>
              <div className="flex justify-start px-4">
                <p className="mb-1 capitalize font-bold text-primary">
                  {valueForm.metode}
                </p>
              </div>
    
              <div className="flex justify-center my-4">
                <QRCodeCanvas
                  id="qrcode"
                  value={`Pembayaran via ${valueForm.metode}, nominal: Rp${valueForm.nominal}, email: ${valueForm.email}`}
                  size={180}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <div className="flex flex-col gap-2 p-3 w-9/12 mx-auto">
                <button
                  onClick={handleDownload}
                  className="border font-secondary w-full py-2 mb-2 rounded text-primary"
                >
                  Download Qris
                </button>
                <button
                  onClick={() => setModal(true)}
                  className="bg-primary font-secondary text-white w-full py-2 rounded"
                >
                  Check Status
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 text-center border">
            <h2 className="text-primary font-semibold text-lg mb-1">Intruksi Pembayaran</h2>
            <p className="text-sm text-gray-500 mb-4">transfer sesuai nominal di bawah ini</p>
      
            <h3 className="text-2xl font-bold text-primary mb-4">Rp{valueForm.nominal}</h3>
      
            <div className="mb-4">
              <p className="text-sm text-gray-700">Ke rekening Bank <span className='capitalize'>{valueForm.metode}</span> </p>
              <p className="font-medium text-lg text-primary my-1">101.00.0662668.1</p>
              <p className="text-sm text-gray-700">An. Senyum Kebaikan</p>
            </div>
      
          <div className="text-sm text-gray-600 mb-4 space-y-1">
  <div className="flex justify-between">
    <span className="text-start font-semibold">ID Donasi:</span>
    <span className="text-end">DNS27201602753262</span>
  </div>
  <div className="flex justify-between">
    <span className="text-start font-semibold">Tanggal Transaksi:</span>
    <span className="text-end">27 Juni 2025, 20:16</span>
  </div>
  <div className="flex justify-between">
    <span className="text-start font-semibold">Atas Nama:</span>
    <span className="text-end">Naufal Nurcahyo</span>
  </div>
  <div className="flex justify-between">
    <span className="text-start font-semibold">Metode Pembayaran:</span>
    <span className="text-end">Bank Transfer</span>
  </div>
  <div className="flex justify-between">
    <span className="text-start font-semibold">Nama Bank:</span>
    <span className="text-end">Bank Mandiri</span>
  </div>
  <div className="flex justify-between">
    <span className="text-start font-semibold">Donasi:</span>
    <span className="text-end">20.000</span>
  </div>
  <div className="flex justify-between">
    <span className="text-start font-semibold">Admin:</span>
    <span className="text-end">0</span>
  </div>
  <div className="flex justify-between">
    <span className="text-start font-semibold">Kode Unik:</span>
    <span className="text-end">321</span>
  </div>
  <div className="flex justify-between">
    <span className="text-start font-semibold">Total:</span>
    <span className="text-end">30.000</span>
  </div>
</div>

      
           <div className="mb-6 text-center">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleUpload}
        className="hidden"
      />
      <button
        onClick={() => inputRef.current.click()}
        className="flex items-center justify-center mx-auto gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faUpload} />
        Unggah bukti
      </button>

      {/* Preview */}
      {preview && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Pratinjau Bukti:</p>
          <img
            src={preview}
            alt="Bukti Donasi"
            className="mx-auto max-h-64 rounded border"
          />
        </div>
      )}
    </div>
      
            <button  onClick={() => setModal(true)} className="w-full bg-green-100 text-primary font-secondary font-medium py-2 rounded-md hover:bg-green-200 transition">
              Lanjut Pembayaran
            </button>
          </div>
            )
          
      
      )}
    </>
  );
};

const AddDonasi = ({
  modal,
  setModal,
  isAdd,
  setIsAdd,
  valueForm,
  setValueForm,
  showPayment,
  showDetailDonasi,
  setShowPayment,
  setShowDetailDonasi
}) => {
  const [selectedMetodeBayar, setSelectedMetodeBayar] = useState(0);
  const metodeBayar = [
    {
      title: 'Crypto Wallet',
      component: <FormCrypto modal={modal} setModal={setModal} setValueForm={setValueForm} />,
    },
    {
      title: 'Bank/Ewallet',
      component: (
        <FormBank
          showDetailDonasi={showDetailDonasi}
          setShowDetailDonasi={setShowDetailDonasi}
          modal={modal}
          setValueForm={setValueForm}
          valueForm={valueForm}
          showPayment={showPayment}
          setShowPayment={setShowPayment}
          setModal={setModal}
        />
      ),
    },
  ];
  return (
    <div className="p-2 rounded-xl relative mt-4 mb-4 text-center w-9/12 mx-auto bg-white text-primary border border-gray-400">
      <FontAwesomeIcon
        className="absolute top-2 right-2 cursor-pointer"
        icon={faXmark}
        onClick={() => setIsAdd(false)}
      />
      <h4 className="font-semibold my-2 text-primary">Metode Pembayaran</h4>
      <div className="flex flex-row justify-center gap-2 ">
        {metodeBayar.map((item, index) => (
          <div key={index} className="w-40">
            <button
              className={`p-2 rounded-lg border w-full border-gray-400 ${
                selectedMetodeBayar === index ? 'bg-accent text-white' : ''
              }`}
              onClick={() => setSelectedMetodeBayar(index)}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
      {metodeBayar[selectedMetodeBayar].component}
    </div>
  );
};

const ModalSuccess = ({
  modal,
  setModal,
  formData,
  showPayment,
  setShowPayment,
}) => {
  return (
    <div
      className={`rounded-xl mt-4 mb-4 text-center  ${
        modal
          ? 'w-auto opacity-100 h-auto scale-100 '
          : 'w-0 h-0 opacity-0 scale-95 '
      } md:w-6/12  duration-300 transition-all top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-400`}
    >
      <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-5xl  text-accent"
        />
        <h4 className="font-semibold my-2 text-primary">Donasi Berhasil!</h4>
        <p className="text-sm">
          Donasi Anda berhasil diverifikasi & dicatat di blockchain
        </p>
        <FontAwesomeIcon
          onClick={() => setModal(false)}
          className="absolute top-2 right-2"
          icon={faTimes}
        />
      </div>
      <div className="flex flex-row justify-center gap-5 mt-5">
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold">
            {' '}
            Rp{formData ? formData.nominal : ''}/{' '}
            {formData ? formData.nominal / 50000 : ''}ETH
          </h4>
          <p>21-02-2024</p>
          <p>0x9a29c4c</p>
        </div>
        <div></div>

        <div className="flex flex-col gap-1">
          <h4> Bantuan Banjir Jakarta</h4>
          <a href='https://etherscan.io/' target="_blank" className="rounded-lg bg-accent hover:bg-secondary text-xs md:text-sm text-white">
            Lihat di Etherscan
          </a>
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
            style={{ width: '28px', left: `70%` }}
          >
            70%
          </div>
        </div>
      </div>
      <p className="my-2 text-xs md:text-sm">
        Tersisa 12 hari lagi galang donasi ini akan berakhir
      </p>
      <button className="p-2 rounded-lg hover:bg-secondary hover:text-primary bg-accent text-white mt-4 mx-auto block">
        Unduh PDF Bukti Donasi
      </button>
      <div className="flex gap-2 mt-3 mb-3 justify-center flex-row w-9/12 mx-auto">
        <button
          onClick={() => {
            setModal(false);
            setShowPayment(false);
          }}
          className="bg-primary hover:bg-secondary hover:text-primary text-white rounded-lg py-2 px-3 text-xs md:text-sm"
        >
          Tutup
        </button>
        {/* <button className="bg-primary hover:bg-secondary hover:text-primary text-white rounded-lg py-2 px-3 text-xs md:text-sm">
              Dashboard Donasi Saya
            </button> */}
      </div>

      <div>
        <p className="text-primary text-sm text-center mx-auto font-semibold my-1">
          Terima kash, Naufal! Dukungan anda sangat berarti bagi para penyitas
        </p>
      </div>
    </div>
  );
};

export default DetailDonasi;
