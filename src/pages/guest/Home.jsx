import React from 'react'
import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import home1 from '../../assets/home1.png'
import home2 from '../../assets/home2.png'
import home3 from '../../assets/home3.png'
import home4 from '../../assets/home4.png'
import pilihan1 from '../../assets/home/pilihan1.png'
import pilihan2 from '../../assets/home/pilihan2.png'
import pilihan3 from '../../assets/home/pilihan3.png'
import kebutuhan1 from '../../assets/home/kebutuhan1.png'
import kebutuhan2 from '../../assets/home/kebutuhan2.png'
import kebutuhan3 from '../../assets/home/kebutuhan3.png'
import image from '../../assets/home/image.png'
import { faArrowRight, faUpLong } from '@fortawesome/free-solid-svg-icons'
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

  return (
    <div>
      <Navbar />
      <Container className={'mt-20'}>
        <div className='grid grid-cols-1 mt-10 md:grid-cols-2 gap-4 p-4'>
          {/* Kiri: Gambar besar dan tombol */}
          <div className='relative rounded-xl overflow-hidden border-2 border-blue-400'>
            <img
              src={home1}
              alt='Donasi'
              className='w-full h-full object-cover hover:scale-110 transition-all duration-100'
            />
            <button className='absolute bottom-4 left-1/2 font-secondary -translate-x-1/2 hover:bg-primary hover:text-white bg-white text-primary px-4 py-2 rounded-full shadow'>
              Donasi sekarang <FontAwesomeIcon icon={faArrowUpRightDots} />
            </button>
          </div>

          {/* Kanan: Teks dan dua kartu donasi */}
          <div className='flex flex-col gap-4'>
            {/* Teks Selamat Datang */}
            <div className='bg-primary font-secondary p-4 rounded-xl'>
              <h2 className='text-xl font-semibold text-white'>
                Selamat Datang
              </h2>
              <p className='text-5xl font-bold my-2 text-secondary'>
                Di Website Donasi Senyum Kebaikan
              </p>
              <p className='text-sm text-white mt-1'>
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
                  className='w-full hover:scale-110 transition-all duration-100 h-auto object-cover'
                />
                <div className='p-2  absolute bottom-0 left-0 right-0 text-white text-center'>
                  PANTI ASUHAN
                </div>
              </div>
              <div className='rounded-xl relative overflow-hidden shadow'>
                <img
                  src={home3}
                  alt='Bencana Alam'
                  className='w-full h-full object-cover hover:scale-110 transition-all duration-100'
                />
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
            <h3 className='font-semibold text-2xl'>Blockchain</h3>
            <p>
              Sistem menerapkan blockchain untuk memastikan keamanan dan
              akuntabilitas transaksi digital.
            </p>
          </div>
          <div className='text-center'>
            <FontAwesomeIcon icon={faEye} className='text-5xl my-2' />
            <h3 className='font-semibold text-2xl'>Transparan</h3>
            <p>
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
            <p>
              Tampilan website yang responsif memudahkan pengguna untuk
              mengakses dan berinteraksi dengan konten.
            </p>
          </div>
        </div>

        <h4 className='text-center font-roboto font-semibold text-2xl md:text-4xl mt-10 text-primary'>
          Mari membantu mereka yang terdampak
        </h4>
        <div className='mx-4 my-5 relative gap-4 rounded-2xl overflow-hidden bg-white shadow-md'>
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

            {/* Progress */}
            <div className='w-full bg-white rounded-full h-1 mb-4'>
              <div
                className='bg-secondary h-2 rounded-full'
                style={{ width: '60%' }}
              ></div>
            </div>
            <div    style={{ width: '60%' }} className='flex font-light justify-between text-sm text-gray-200 mb-6'>
              <span>Rp 10.000.000</span>
              <span>60% (16 hari lagi)</span>
            </div>

            {/* Deskripsi */}
            <p className='text-sm text-white mb-6 font-secondary'>
              Penyaluran bisa tidak tetap jika anda menunda dianggap membatalkan
              dan akan disaring sesuai masa pengecekan anda di tahap tinggi
              menunggu konfirmasi.
            </p>

            {/* Tombol */}
            <div className='flex gap-4 justify-center'>
              <button className='bg-white text-[#36554A] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition'>
                Donasi sekarang <FontAwesomeIcon icon={ faArrowUpRightDots} />
              </button>
              <button className='border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-[#36554A] transition'>
                Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
              </button>
            </div>
                      </div>
                      
                      <img src={home4} className='absolute right-0 top-0 h-full' alt="" />

          {/* Kanan: Gambar */}
                  </div>
              </div>
              <div className='mx-4'>
              <p className='my-1 font-primary text-xl md:text-2xl font-semibold text-primary'>Pilihan Serupa</p>
              <DisasterCards />
              <p className='my-2 font-primary text-xl md:text-2xl font-semibold text-primary text-center'>“Satu aksi kecil bisa berdampak besar. Kami mengundangmu untuk menjadi relawan donasi—ajukan programmu dan mari bantu mereka yang membutuhkan.”</p>
              <h5 className='text-center text-primary text-2xl md:text-5xl mt-5'>50,765+</h5>
              <p className='my-2 text-lg md:text-xl  text-center font-secondary text-primary'>Relawan</p>
              <div className='mx-auto text-center'>
              <button className='text-sm md:text-lg bg-primary mx-auto text-center font-secondary  text-white py-1 my-2 px-6 rounded-full w-auto hover:text-primary hover:bg-secondary'>Ajukan</button>

              </div>
              <div>
                 <p className='my-3 font-primary text-center text-2xl md:text-3xl font-semibold text-primary'>Temukan Kebutuhanmu</p>
                 <ProductCarousel />
              </div>
            </div>

            <div className='rounded-xl relative shadow-2xl my-3 overflow-hidden mx-4'>
                <img src={image} alt="" />
                <div className='absolute z-40 text-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 '>
                  <p className='text-white text-2xl font-primary text-center'>MASIH RAGU DENGAN KAMI?
KLIK DI BAWAH INI UNTUK MENUNJUKAN CARA KERJA MENGENAI TEKNOLOGI BLOCKCHAIN</p>
 <button className='border mx-auto border-white px-4 font-primary py-2 my-4 rounded-full text-sm hover:bg-primary bg-white text-primary hover:text-white transition'>
                Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
              </button>
                </div>

            </div>

            <Footer className={'mx-4'} />

            
              
      </Container>
    </div>
  )
}

const DisasterCards = () => {
  const disasters = [
    {
      title: "Banjir Bandang",
      description: "Terjang Desa Wombo di Donggala\nImbas Air Sungai Meluap",
      location: "",
      image: pilihan1
    },
    {
      title: "Atap Ruang Kelas MTS Di Sukabumi Ambruk",
      description: "",
      location: "Sukalarang, Sukabumi, Jabar",
      image: pilihan2
    },
    {
      title: "Banjir Lembang PAUD Ambruk",
      description: "",
      location: "Banbung, Jawa Barat",
      image: pilihan3
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
  const products = [
  
  {
    image: kebutuhan1,
  },
  {
    image: kebutuhan2,
  },
  {
    image: kebutuhan3,
  },
  {
    image: kebutuhan1,
  },
];
  return (
    <div className='flex items-center'>
      <div className='p-2 shadow-2xl w-4/12 rounded-3xl'>
        <p className='font-primary my-4 font-light'>BARANG</p>
        <h4 className='text-primary text-xl my-4 font-semibold' >Pakaian keren yang dapat kamu gunakan</h4>
        <button className='p-3 rounded-full border hover:shadow-2xl hover:bg-primary hover:text-white my-4 bg-white text-primary shadow-2xl font-secondary'>Selengkapnya <FontAwesomeIcon icon={faArrowUpRightDots} /></button>
      </div>
  
    <div className="flex w-8/12 overflow-x-scroll gap-2 h-full p-4">
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
