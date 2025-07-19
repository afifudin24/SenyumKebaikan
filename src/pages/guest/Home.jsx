import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import home1 from '../../assets/home1.png'
import home2 from '../../assets/home2.png'
import home3 from '../../assets/home3.png'
import home4 from '../../assets/home4.png'
import home6 from '../../assets/home/home6.jpg'
import home7 from '../../assets//home/home7.jpg'
import home42 from '../../assets/home4-2.png'; 
import pilihan1 from '../../assets/home/pilihan1.png'
import pilihan2 from '../../assets/home/pilihan2.png'
import pilihan3 from '../../assets/home/pilihan3.png'
import pilihan4 from '../../assets/home/pilihan4.png'
import pilihan5 from '../../assets/home/pilihan5.png'
import pilihan6 from '../../assets/home/pilihan6.png'
import { Link } from 'react-router-dom'
import kebutuhan1 from '../../assets/home/kebutuhan1.png'
import kebutuhan2 from '../../assets/home/kebutuhan2.png'
import kebutuhan3 from '../../assets/home/kebutuhan3.png'
import kebutuhan4 from '../../assets/home/kebutuhan4.png'
import kebutuhan5 from '../../assets/home/kebutuhan5.png'
import kebutuhan6 from '../../assets/home/kebutuhan6.png'
import image from '../../assets/home/image.png'
import { faArrowRight, faLeftLong, faTimes, faUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons/faUpRightAndDownLeftFromCenter'
import {
  faArrowUp,
  faArrowUp19,
  faArrowUpRightDots,
  faDesktop,
  faEyeDropper,
  faLocation,
  faLock,
  faMobileScreenButton,
  faTurnUp
} from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import Footer from '../../components/Footer'
const Home = () => {

  const [showImg, setShowImg] = useState(false);
  //dapatkan informasi sudah isLogin dari localstorage dan masukan ke useState
   const [user, setUser] = useState(() => {
                const savedUser = localStorage.getItem('user');
                return savedUser ? JSON.parse(savedUser) : null;
              }) 

  

  const toggleImage = () => {
    setShowImg(!showImg);
  };

  return (
    <div>
      <Navbar />
      <Container className={'mt-10 md:mt-20'}>
        <div className='grid grid-cols-1 mt-10 md:grid-cols-2 gap-4 p-4'>
          {/* Kiri: Gambar besar dan tombol */}
          <div className='relative rounded-xl overflow-hidden '>
            <img
              src={home1}
              alt='Donasi'
              className='w-full h-full object-cover hover:scale-110 transition-all duration-100'
            />
            <Link to='/donasi'>
            <button className='absolute bottom-4 left-1/2 font-secondary text-xs md:text-sm -translate-x-1/2 hover:bg-primary hover:text-white bg-white text-primary px-4 py-2 rounded-full shadow'>
              Donasi sekarang <FontAwesomeIcon icon={faArrowUpRightDots} />
            </button>
            </Link>
          </div>

          {/* Kanan: Teks dan dua kartu donasi */}
          <div className='flex flex-col gap-4'>
            {/* Teks Selamat Datang */}
            <div className='bg-primary font-secondary p-4 rounded-xl'>
              <h2 className='text-lg md:text-xl font-semibold text-white'>
                Selamat Datang
              </h2>
              <p className='md:text-5xl text-2xl font-bold my-2 text-secondary'>
                Di Website Donasi Senyum Kebaikan
              </p>
              <p className='text-xs md:text-sm text-white mt-1'>
                Sebuah website donasi yang mengedepankan transparansi dan
                akuntabilitas berteknologi blockchain
              </p>
            </div>

            {/* Dua kartu: Panti Asuhan dan Bencana Alam */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='rounded-xl overflow-hidden relative shadow'>
                <img
                  src={home2}
                  alt='Panti Asuhan'
                  className='w-full hover:scale-120 scale-110 transition-all duration-100 h-auto object-cover'
                />
                <div className='p-2  absolute bottom-0 left-0 right-0 text-white text-center'>
                  PANTI ASUHAN
                </div>
              </div>
              <div className='rounded-xl relative overflow-hidden shadow'>
                {
                  user ? (
                    <img
                    src={home7}
                    alt='Bencana Alam'
                    className='w-full h-full object-cover scale-100 hover:scale-110 transition-all duration-100'
                  />
                  ): (
                    <img
                    src={home7}
                    alt='Bencana Alam'
                    className='w-full h-full object-cover scale-100 hover:scale-110 transition-all duration-100'
                  /> 
                  )
                }
              
                <div className='p-2 text-center absolute bottom-0 left-0 right-0 text-white'>
                  <p>BENCANA ALAM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='p-4 mx-4 my-3 rounded-xl font-secondary text-primary bg-secondary grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='text-center'>
            <FontAwesomeIcon icon={faLock} className='text-5xl my-2' />
            <h3 className='font-semibold text-xl  md:text-2xl'>Blockchain</h3>
            <p className='text-sm md:text-lg'>
              Sistem menerapkan blockchain untuk memastikan keamanan dan
              akuntabilitas transaksi digital.
            </p>
          </div>
          <div className='text-center'>
            <FontAwesomeIcon icon={faEye} className='text-5xl my-2' />
            <h3 className='text-xl  md:text-2xl font-semibold'>Transparan</h3>
            <p className='text-sm md:text-lg'>
              Website yang transparan memungkinkan pengguna untuk melihat semua
              informasi dan transaksi.
            </p>
          </div>
          <div className='text-center'>
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              className='text-5xl my-2'
            />
            <FontAwesomeIcon icon={faDesktop} className='text-5xl my-2' />
            <h3 className='font-semibold text-2xl'>Responsif</h3>
            <p className='text-sm md:text-lg'>
              Tampilan website yang responsif memudahkan pengguna untuk
              mengakses dan berinteraksi dengan konten.
            </p>
          </div>
        </div>

        <h4 className='text-center font-roboto font-semibold text-xl md:text-4xl mt-10 text-primary'>
          Mari membantu mereka yang terdampak
        </h4>
        <div className='mx-4 my-5 hidden md:block relative gap-4 rounded-2xl overflow-hidden bg-white shadow-md'>
          {/* Kiri: Konten */}
                  <div className='bg-primary text-white p-6 w-full flex flex-col justify-between'>
                      <div className='mb-4 w-7/12'>
                          
                      
            <div className='mb-4'>
              <p className='text-xs tracking-wider uppercase text-white'>
                Bencana Alam
              </p>
              <h2 className='text-xl md:text-3xl font-bold mt-3 leading-tight'>
                Banjir bandang di pinggiran kota{' '}
                <span className='uppercase'>Metropolitan</span>.
              </h2>
            </div>

            <div>
          <div className="relative h-2 rounded-full bg-[#3A3A3A] mt-10">
            <div
              className="absolute top-0 left-0 h-2 rounded-full bg-[#C6F6D5]"
              style={{ width: `60%` }}
            ></div>
            <div
              className="absolute -top-8 left-[70%] -translate-x-1/2 bg-[#C6F6D5] text-[#1E1E1E] text-[10px] font-sans px-1 rounded pointer-down"
              style={{ width: "28px", left: `60%` }}
            >
              60% 
            </div>
          </div>
          <div className="flex justify-between text-primary text-xs font-sans mt-2 mb-3 px-1">
            <span>Rp 30000</span>
            <span>30 hari lagi</span>
          </div>
        </div>

            {/* Deskripsi */}
            <p className='text-sm text-white mb-6 font-secondary'>
              Penyaluran bisa tidak tetap jika anda menunda dianggap membatalkan
              dan akan disaring sesuai masa pengecekan anda di tahap tinggi
              menunggu konfirmasi.
            </p>

            {/* Tombol */}
            <div className='flex gap-4 justify-center'>
               <Link to='/donasi'>
              <button className='bg-white text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition'>
                Donasi sekarang <FontAwesomeIcon icon={ faArrowUpRightDots} />
              </button>
               </Link>
              <button className='border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-[#36554A] transition'>
                Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
              </button>
            </div>
                      </div>
            {
              user ? (
                <img src={home42} className='absolute right-0 top-0 h-full' alt="" />
              ): (
                <img src={home4} className='absolute right-0 top-0 h-full' alt="" />
              )
                      }
                   

          {/* Kanan: Gambar */}
                  </div>
        </div>
        <div className='flex flex-col md:hidden'>
        <div className='mb-4 mt-5 w-11/12 px-2 py-5 mx-4 relative bg-primary rounded-xl text-white'>
                          
                      
                          <div className='mb-4'>
                            <p className='text-xs tracking-wider uppercase text-white'>
                              Bencana Alam
                            </p>
                            <h2 className='text-lg md:text-3xl font-bold mt-3 leading-tight'>
                              Banjir bandang di pinggiran kota{' '}
                              <span className='uppercase'>Metropolitan</span>.
                            </h2>
                          </div>
              
                          {/* Progress */}
                          <div>
          <div className="relative h-2 rounded-full bg-[#3A3A3A] mt-7">
            <div
              className="absolute top-0 left-0 h-2 rounded-full bg-[#C6F6D5]"
              style={{ width: `60%` }}
            ></div>
            <div
              className="absolute -top-8 left-[70%] -translate-x-1/2 bg-[#C6F6D5] text-[#1E1E1E] text-[10px] font-sans px-1 rounded pointer-down"
              style={{ width: "28px", left: `60%` }}
            >
              60% 
            </div>
          </div>
          <div className="flex justify-between text-primary text-xs font-sans mt-2 mb-3 px-1">
            <span>Rp 30000</span>
            <span>30 hari lagi</span>
          </div>
        </div>
                          {/* <div    style={{ width: '60%' }} className='font-light relative justify-between text-sm text-gray-200 mb-6'>
                            <span>Rp 10.000.000</span>
              <span className='absolute -right-5 top-0'>60% </span>
              <p>(16 hari lagi)</p>
                          </div>
               */}
                          {/* Deskripsi */}
                          <p className='text-xs md:text-sm text-white mb-6 font-secondary'>
                            Penyaluran bisa tidak tetap jika anda menunda dianggap membatalkan
                            dan akan disaring sesuai masa pengecekan anda di tahap tinggi
                            menunggu konfirmasi.
                          </p>
              
                          {/* Tombol */}
                          <div className='flex gap-4 justify-center'>
                            <Link to='/donasi'>
                            <button className='bg-white text-primary px-4 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-100 transition'>
                              Donasi sekarang <FontAwesomeIcon icon={ faArrowUpRightDots} />
                            </button>
                            </Link>
                            <button className='border border-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-white hover:text-primary transition'>
                              Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
                            </button>
                            <FontAwesomeIcon className='absolute z-50 top-2 right-2 text-white' onClick={toggleImage} icon={faLeftLong} />
            </div>

            <div className={`${showImg ? 'w-full' : 'w-0'} transition-all duration-150 absolute right-0 top-0 h-full`}>

              <div className={`relative w-full h-full`}>
              
                <img src={home4} alt="" />

              </div>
            </div>
                                    </div>
        </div>
              <div className='mx-4'>
              <p className='my-1 font-primary text-xl md:text-2xl font-semibold text-primary'>Pilihan Serupa</p>
              <DisasterCards />
              <p className='my-2 font-primary text-md md:text-2xl font-semibold text-primary text-center'>“Satu aksi kecil bisa berdampak besar. Kami mengundangmu untuk menjadi relawan donasi—ajukan programmu dan mari bantu mereka yang membutuhkan.”</p>
              <h5 className='text-center text-primary text-5xl md:text-5xl mt-10'>50,765+</h5>
              <p className='my-2 text-lg md:text-xl  text-center font-secondary text-primary'>Relawan</p>
              <div className='mx-auto text-center'>
              <button className='text-lg md:text-lg bg-primary mx-auto text-center font-secondary  text-white py-1 my-2 px-6 rounded-full w-auto hover:text-primary hover:bg-secondary'>Ajukan</button>

              </div>
              <div>
                 <p className='mt-10 font-primary text-center text-2xl md:text-3xl font-semibold text-primary'>Temukan Kebutuhanmu</p>
                 <ProductCarousel />
              </div>
            </div>

            <div className='rounded-xl relative shadow-2xl my-3 overflow-hidden mx-4'>
                <img src={image} alt="" />
                <div className='absolute z-40 text-center w-full p-2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 '>
                  <p className='text-white md:text-2xl font-primary text-sm text-center'>MASIH RAGU DENGAN KAMI?
KLIK DI BAWAH INI UNTUK MENUNJUKAN CARA KERJA MENGENAI TEKNOLOGI BLOCKCHAIN</p>
 <a target='_blank' href="/edukasi.pdf" className='border mx-auto border-white px-4 font-primary py-2 my-4 block w-3/12 rounded-full text-sm hover:bg-primary bg-white text-primary hover:text-white transition'>
                Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
              </a>
                </div>

            </div>


            
              
      </Container>
            <Footer className={'md:mx-0 mx-0'} />
    </div>
  )
}

const DisasterCards = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  }) 
  const disasters = [
    {
      title: "Banjir Bandang",
      description: "Terjang Desa Wombo di Donggala\nImbas Air Sungai Meluap",
      location: "",
      image: user ? pilihan4 : pilihan1 
    },
    {
      title: "Atap Ruang Kelas MTS Di Sukabumi Ambruk",
      description: "",
      location: "Sukalarang, Sukabumi, Jabar",
      image: user ? pilihan6 : pilihan2
    },
    {
      title: "Banjir Lembang PAUD Ambruk",
      description: "",
      location: "Bandung, Jawa Barat",
      image: user ?  pilihan5 : pilihan3
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
      {disasters.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden transition"
        >
          <div className='rounded-xl font-primary shadow-md overflow-hidden'>

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover   overflow-hidden hover:scale-105"
            />
            </div>
          <div className="p-4 text-primary">
            <h3 className="text-lg font-semibold text-center ">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm  text-center whitespace-pre-line">
                {item.description}
              </p>
            )}
            {item.location && (
              <p className="text-sm  text-center mt-1">
                {item.location}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductCarousel = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  }) 
  const products = [
  
  {
    image: user ? kebutuhan4 : kebutuhan1,
  },
  {
    image: user ? kebutuhan5 : kebutuhan2,
  },
  {
    image: user ? kebutuhan6 : kebutuhan3,
  },
  {
    image: user ? kebutuhan4 : kebutuhan1,
  },
];
  return (
    <div className='flex items-center flex-col md:flex-row'>
      <div className='p-4 shadow-2xl w-full md:w-4/12 rounded-3xl'>
        <p className='font-primary my-4 font-light'>BARANG</p>
        <h4 className='text-primary md:text-xl text-md my-4 font-semibold' >Pakaian keren yang dapat kamu gunakan</h4>
        <button className='p-3 rounded-full text-sm md:text-lg border hover:shadow-2xl hover:bg-primary hover:text-white my-4 bg-white text-primary shadow-2xl font-secondary'>Selengkapnya <FontAwesomeIcon icon={faArrowUpRightDots} /></button>
      </div>
  
    <div className="flex md:w-8/12 w-full overflow-x-scroll gap-2 h-full p-4">
      {products.map((item, index) =>
        (
         <div
      key={index}
      className="h-full min-w-[200px] rounded-2xl overflow-hidden shadow-sm"
    >
            <img
              src={item.image}
              alt="product"
              className="object-cover w-full h-full"
            />
          </div>
        )
      )}
    </div>
    </div>
  );
};

export default Home
