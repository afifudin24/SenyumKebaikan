import React from 'react';
import { useState, useEffect } from 'react';
import logo2 from "../assets/logo2.png"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartLine, faCircle, faEnvelope, faEnvelopeOpenText, faEnvelopesBulk, faHome, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons/faHandHoldingHeart';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faUpload } from "@fortawesome/free-solid-svg-icons";
import toast from 'react-hot-toast';
import baju from "../assets/baju.png"
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons/faEnvelopeCircleCheck';
const Navbar = () => {
    const location = useLocation();
  const currentPath = location.pathname;
  const [showNotification, setShowNotification] = useState(false);
  const [showMenuProfile, setShowMenuProfile] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalPengajuan, setShowModalPengajuan] = useState(false);
  const [showModalPengajuanForm, setShowModalPengajuanForm] = useState(false);
  const [showModalPengajuanKonfirmasi, setShowModalPengajuanKonfirmasi] = useState(false);
  const [dataSelected, setDataSelected] = useState(null);
   const [user, setUser] = useState(() => {
              const savedUser = localStorage.getItem('user');
              return savedUser ? JSON.parse(savedUser) : null;
            }) 
  const signOut = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
  const toDashboard = () => {
    window.location.href = "/dashboard";
  }
  // fungsi ambil huruf depan dari string
  const getFirstLetter = (name) => {
    return name.charAt(0);
  }
  const clickNotification = (data) => {
    if (data.type == 'donasibarang') {
      setShowModalDetail(true)
    } else {
      setShowModalPengajuan(true)
    }
    setDataSelected(data);
  }
  const [notification, setNotification] = useState([]);
   const loadData = () => {
    const stored = localStorage.getItem('notifications');
    console.log('ini data',stored);
    if (stored) {
      setNotification(JSON.parse(stored));
    }
  };
  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem("isLogin") === "true";
  });
  useEffect(() => {
   loadData();
  const handleStorageChange = (e) => {
    if (e.key === 'notification') {
      loadData(); // ambil data baru dari localStorage
    }
  };
  window.addEventListener('storage', handleStorageChange);
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}, []);
  
  const isActive = (path) => {
     if (path === '/') {
    return currentPath === '/';
  }
  const map = {
    '/donasi': ['/donasi', '/detaildonasi'],
    '/pantaudonasi': ['/pantaudonasi', '/ringkasandonasi'],
    '/cari-kebutuhan': ['/cari-kebutuhan', 'pengajuan'],
    '/': ['/'],
  };
  return map[path]?.some(p => currentPath.startsWith(p));
};
    const navItems = [
        { label: 'Home', path: '/', icon: faHome },
        { label: 'Donasi', path: '/donasi', icon: faHandHoldingHeart },
        { label: 'Pantau Donasi', path: '/pantaudonasi', icon: faChartLine },
        { label: 'Cari Kebutuhan', path: '/cari-kebutuhan', icon: faSearch },
      ];
    return (
      <div className='fixed top-0 left-0 right-0 z-70 bg-white px-6 py-4 shadow-sm'>
    <nav className="flex items-center justify-between  w-12/12 mx-auto md:w-10/12 ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo2} alt="Logo" className="h-8" />
       
      </div>
      {/* Menu Tengah */}
      <ul className="hidden md:flex gap-3 text-primary text-sm font-secondary items-center">
      {navItems.map((item, index) => (
        <div className="flex items-center gap-3" key={item.path}>
          <li>
            <Link
              to={item.path}
              className={`relative px-2 cursor-pointer ${
                isActive(item.path)
                  ? 'font-semibold text-primary after:content-[""] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-primary after:rounded-full'
                  : 'hover:text-black text-primary'
              }`}
            >
              {item.label}
            </Link>
          </li>
          {index !== navItems.length - 1 && (
            <FontAwesomeIcon icon={faCircle} className="text-xxs scale-25" />
          )}
        </div>
      ))}
    </ul>
      {/* Aksi */}
          <div className="">
            {
              !isLogin ? (
                <div className='flex font-secondary  gap-4 items-center'>
                      <Link className='hidden md:block' to={"/register"}>
                    <button className="text-primary hover:text-black text-sm">Daftar</button>
                    </Link>
                    <Link to="/login">
        <button className="bg-primary cursor-pointer text-white px-4 py-1.5 rounded-full text-sm">Log in</button>
                    </Link>
                </div>
              ) : (
                  <div className="flex font-secondary text-primary text-2xl gap-5 items-center relative">
  {/* Notifikasi */}
<div className="relative group">
  <FontAwesomeIcon icon={faBell} onClick={() => setShowNotification(!showNotification)} className="cursor-pointer" />
  <div className={`absolute right-0 mt-0 w-64 bg-white shadow-md rounded-md p-4 ${showNotification ? 'block' : 'hidden'} z-50`}>
    <p className="text-base font-semibold text-primary mb-2">Notifikasi Terbaru</p>
    <div className="space-y-2 max-h-60 overflow-y-auto">
      {notification.length > 0 ? (
        notification.map((item) => (
          <div key={item.id} onClick={() => clickNotification(item)} className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition">
            <p className="text-sm text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-500">{item.data.tanggal}</p>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500">Tidak ada notifikasi</p>
      )}
    </div>
  </div>
</div>
{/* Modal */}
                    <ModalDetailDonasi setShowDetailDonasi={setShowModalDetail} showDetailDonasi={showModalDetail} />
                    <ModalPengajuanDiterima setShowModalPengajuan={setShowModalPengajuan} setShowModalPengajuanKonfirmasi={setShowModalPengajuanKonfirmasi} showModalPengajuan={showModalPengajuan} />
                    <ModalPengajuanDikonfirmasi setShowModalPengajuan={setShowModalPengajuan} setShowModalPengajuanForm={setShowModalPengajuanForm} setShowModalPengajuanKonfirmasi={setShowModalPengajuanKonfirmasi}  showModalPengajuanDikonfirmasi={showModalPengajuanKonfirmasi} />
                    <ModalFormKonfirmasiPenerimaanBarang setShowModalPengajuanKonfirmasi={setShowModalPengajuanKonfirmasi} showModalPengajuanForm={showModalPengajuanForm} setShowModalPengajuanForm={setShowModalPengajuanForm} showModalPengajuanDikonfirmasi={showModalPengajuanKonfirmasi} />
  {/* User Menu */}
  <div className="relative group">
    <FontAwesomeIcon icon={faUserCircle} onClick={() => setShowMenuProfile(!showMenuProfile)} className="cursor-pointer" />
    <div className={`absolute right-0 mt-0 font-primary w-80 bg-white shadow-md rounded-md p-6 ${showMenuProfile ? 'block' : 'hidden'} z-50`}>
        <div className='rounded-full mx-auto bg-secondary flex w-20 h-20 items-center justify-center '>
                          <p>{ getFirstLetter(user.namadepan)}</p>
        </div>
                        <p className='text-sm text-center my-2 text-gray-800'>{user.namadepan} {user.namabelakang}</p>
        <Link to={user.role === 'admin' ? '/dashboard' : '/dashboarduser'}>
  <p className="text-sm bg-gray-50 rounded hover:bg-gray-100 p-2 text-primary my-1">
    Dashboard
  </p>
</Link>
        <Link to={"/profil"}>
      <p className="text-sm text-primary my-1 bg-gray-50 rounded hover:bg-gray-100 p-2">Profil</p>
        </Link>
         
      <p onClick={() => signOut()} className="text-sm text-primary my-1 bg-gray-50 rounded hover:bg-gray-100 p-2">Sign Out</p>
      
    </div>
  </div>
</div>
              )
            }
                  
      </div>
            </nav>
        <nav className='fixed bottom-0 left-0 right-0 z-70 rounded-t-xl px-4 py-4 shadow-up md:hidden bg-white'>
          <div className='flex items-center justify-between'>
            <ul className="flex gap-3 w-11/12 text-primary  mx-auto justify-between text-sm font-secondary items-center">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative items-center justify-center  flex gap-2 flex-col  cursor-pointer ${
                      isActive(item.path)
                        ? 'font-semibold text-primary after:content-[""] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-primary after:rounded-full'
                        : 'hover:text-black text-primary'
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-md" />
                    <p className='text-xs text-center'>
                    
                    {item.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
            </div>
  );
};
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
        Telah Diterima
        </td>
      </tr>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">ID Donasi</th>
        <td class="py-2 px-4">3FA59D64</td>
      </tr>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">Nama Penerima</th>
        <td class="py-2 px-4">Amad</td>
      </tr>
     
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">Tgl & Waktu Penjemputan</th>
        <td class="py-2 px-4">19 Januari 2025, 14.00 WIB</td>
      </tr>
      <tr class="border-b">
        <th class="py-2 px-4 font-medium">Foto Bukti Barang</th>
        <td class="py-2 px-4">
          <img src={baju} alt="Foto Barang" class="w-20 h-auto rounded shadow" />
        </td>
      </tr>
      <tr>
        <td colspan="2" class="py-3 px-4 text-center">
          <a href="#" class="inline-block px-4 py-2 text-sm bg-green-100 text-green-600 rounded hover:bg-green-200 transition">
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

const ModalPengajuanDiterima = ({showModalPengajuan, setShowModalPengajuan, setShowModalPengajuanKonfirmasi}) => {
  return (
   <div
  className={`rounded-xl mt-4 mb-4 text-center  ${
    showModalPengajuan ? "w-auto opacity-100 h-auto scale-100 " : "w-0 h-0 opacity-0 scale-95 "
  } md:w-6/12  duration-300 transition-all z-999 top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-400`}
>
      <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
        <FontAwesomeIcon icon={faCheckCircle} className="text-5xl  text-accent"  />
      <h4 className="font-semibold my-2 text-primary">Selamat Permintaan Anda Diterima</h4>
        <FontAwesomeIcon onClick={() => setShowModalPengajuan(false)} className="absolute top-2 right-2" icon={faTimes} />
      </div>
      <div className='p-2 font-primary'>
      <p className="text-sm text-center font-semibold my-2" >Status : barang segera diproses</p>
      <p className='text-center text-sm my-2'> Barang akan sampai estimasi 2-3 hari dan tidak dipungut biaya apapun anda hanya perlu mengkonfirmasi jika barang sudah sampai. Terima kasih</p>
      </div>

      <button onClick={() => {
        setShowModalPengajuan(false);
        setShowModalPengajuanKonfirmasi(true);
      }} className='p-2 mb-3 rounded-md text-xl text-white bg-accent hover:bg-secondary transition-all duration-100 cursor-pointer'>
          Konfirmasi
      </button>

      </div>
  )
}

const ModalPengajuanDikonfirmasi = ({setShowModalPengajuan, showModalPengajuanDikonfirmasi, setShowModalPengajuanKonfirmasi, setShowModalPengajuanForm}) => {
  return (
   <div
  className={`rounded-xl mt-4 mb-4 text-center  ${
    showModalPengajuanDikonfirmasi ? "w-auto opacity-100 h-auto scale-100 " : "w-0 h-0 opacity-0 scale-95 "
  } md:w-6/12  duration-300 transition-all z-999 top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-400`}
>
      <div className="flex relative flex-col items-center justify-center rounded-xl font-primary gap-2 p-4 w-full bg-secondary ">
        <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-5xl  text-accent"  />
      <h4 className="font-semibold my-2 text-primary">Konfirmasi Penerimaan Barang</h4>
        <FontAwesomeIcon onClick={() => setShowModalPengajuanKonfirmasi(false)} className="absolute top-2 right-2" icon={faTimes} />
      </div>
      <div className='p-2 font-primary'>
      <p className="text-sm text-center font-semibold my-2" >Status : Barang sudah diterima</p>
      <p className='text-center text-sm my-2'>Klik di bawah untuk mengkonfirmasi</p>
      </div>
      <button
      onClick={() => {
        setShowModalPengajuanKonfirmasi(false)
        setShowModalPengajuanForm(true);
      }}
      className='p-2 mb-3 rounded-md text-xl text-white bg-accent hover:bg-secondary transition-all duration-100 cursor-pointer'>
          Konfirmasi Sekarang
      </button>

      </div>
  )
}

const ModalFormKonfirmasiPenerimaanBarang = ({showModalPengajuanDikonfirmasi, setShowModalPengajuanKonfirmasi, showModalPengajuanForm, setShowModalPengajuanForm}) => {
  const [formData, setFormData] = useState({
    namaBarang: "Pakaian",
    jumlahDiterima: "30",
    tglTerima: "2025-07-30",
    catatan: "Barang Diterima Dengan Baik",
    fileBukti: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data dikirim:", formData);
    toast.success('Konfirmasi telah terkirim');
  setShowModalPengajuanForm(false);
  };

  return (
    <div
    className={`rounded-xl mt-4 mb-4 text-center  ${
      showModalPengajuanForm ? "w-auto opacity-100 h-auto scale-100 " : "w-0 h-0 opacity-0 scale-95 "
    } md:w-6/12  duration-300 transition-all z-999 top-1/2 fixed left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden bg-white text-primary border border-gray-400`}
  >
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 font-sans">
      <h2 className="text-lg font-semibold text-center text-gray-700 mb-6">
        Form Konfirmasi Penerimaan Barang
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nama Barang */}
        <div>
          <label className="block text-sm mb-1 text-gray-700">Nama Barang</label>
          <input
            type="text"
            name="namaBarang"
            value={formData.namaBarang}
            disabled
            className="w-full border border-gray-300 px-3 py-2 rounded-md bg-gray-100 text-gray-600"
          />
        </div>

        {/* Jumlah Yang Diterima */}
        <div>
          <label className="block text-sm mb-1 text-gray-700">Jumlah Yang Diterima</label>
          <input
            type="text"
            name="jumlahDiterima"
            placeholder="@gmail.com"
            value={formData.jumlahDiterima}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>

        {/* Tgl Terima */}
        <div>
          <label className="block text-sm mb-1 text-gray-700">Tgl Terima</label>
          <div className="relative">
            <input
              type="date"
              name="tglTerima"
              value={formData.tglTerima}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="absolute right-3 top-3 text-gray-400"
            />
          </div>
        </div>

        {/* Catatan */}
        <div>
          <label className="block text-sm mb-1 text-gray-700">
            Catatan / Kondisi Barang
          </label>
          <textarea
            name="catatan"
            rows={3}
            value={formData.catatan}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>

        {/* Upload Bukti */}
        <div>
          <label className="block text-sm mb-2 text-gray-700">
            Upload Bukti Penerimaan:
          </label>
          <div className="flex items-center justify-center border border-dashed border-gray-400 px-4 py-8 rounded-md cursor-pointer">
            <label htmlFor="fileUpload" className="flex flex-col items-center text-gray-500 cursor-pointer">
              <FontAwesomeIcon icon={faUpload} className="text-2xl mb-2" />
              <span className="text-sm">Upload Video / foto disini</span>
            </label>
            <input
              type="file"
              id="fileUpload"
              name="fileBukti"
              accept="image/*,video/*"
              className="hidden"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Kirim Konfirmasi
        </button>
      </form>
    </div>
    </div>
  );
};
export default Navbar;