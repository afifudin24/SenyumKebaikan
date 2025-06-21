import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HorizontalScroll from "../../components/HorizontalScroll";
import HorizontalScrollDonasiBarang from "../../components/HorizontalScrollDonasiBarang";
import Container from "../../components/Container";
const Donasi = () => {
 
  const [pageActive, setPageActive] = useState(0);
  

    const [dataDonasiPanti, setDataDonasiPanti] = useState([
        {
          type: 'Panti Asuhan',
          title: 'Bantu Biaya Sekolah Anak Panti Asuhan Al-Hikmah',
          description: 'Anak-anak panti asuhan Al-Hikmah membutuhkan bantuan biaya pendidikan untuk semester baru.',
          percent: '45%',
          goal: '20',
          raised: 4500000,
        },
        {
         type: 'Panti Asuhan',
          title: 'Bantu Biaya Sekolah Anak Panti Asuhan Al-Hikmah',
          description: 'Anak-anak panti asuhan Al-Hikmah membutuhkan bantuan biaya pendidikan untuk semester baru.',
          percent: '70%',
          goal: '25',
          raised: 7000000,
        },
        {
          type: 'Panti Asuhan',
          title: 'Renovasi Asrama Panti Asuhan Bina Kasih',
          description: 'Asrama lama rusak akibat gempa. Bantuan Anda akan membuat anak-anak kembali tinggal nyaman.',
          percent: '30%',
          goal: '30',
          raised: 3000000,
        },
        {
          type: 'Panti Asuhan',
          title: 'Bantu Biaya Sekolah Anak Panti Asuhan Al-Hikmah',
          description: 'Anak-anak panti asuhan Al-Hikmah membutuhkan bantuan biaya pendidikan untuk semester baru.',
          percent: '50%',
          goal: '15',
          raised: 7500000,
        },
        {
          type: 'Panti Asuhan',
          title: 'Makanan Bergizi untuk Anak-Anak Panti Harapan',
          description: 'Anak-anak membutuhkan asupan makanan bergizi untuk tumbuh kembang yang sehat.',
          percent: '80%',
          goal: '10',
          raised: 8000000,
        },
    ]);
    
    const [dataDonasiBencana, setDataDonasiBencana] = useState([
      {
        type: 'Bencana Alam',
        title: 'Bantu Korban Gempa Cianjur Bangkit Kembali',
        description: 'Gempa bumi berkekuatan 5.6 SR mengguncang Cianjur dan menyebabkan ratusan rumah rusak berat.',
        percent: '65%',
        goal: '20',
        raised: 13000000,
      },
      {
        type: 'Bencana Alam',
        title: 'Banjir Bandang di Kalimantan Tengah',
        description: 'Ribuan warga terdampak banjir bandang yang melanda 3 kecamatan di Kalimantan Tengah.',
        percent: '40%',
        goal: '25',
        raised: 10000000,
      },
      {
        type: 'Bencana Alam',
        title: 'Kebakaran Hutan Sumatera Selatan',
        description: 'Kebakaran besar melanda kawasan hutan dan lahan di Sumatera Selatan, mengancam pemukiman warga.',
        percent: '55%',
        goal: '30',
        raised: 16500000,
      },
      {
        type: 'Bencana Alam',
        title: 'Letusan Gunung Semeru: Uluran Tangan Anda Dibutuhkan',
        description: 'Letusan Gunung Semeru menyebabkan ribuan warga mengungsi dan kehilangan tempat tinggal.',
        percent: '75%',
        goal: '40',
        raised: 30000000,
      },
      {
        type: 'Bencana Alam',
        title: 'Tsunami di Kepulauan Mentawai',
        description: 'Tsunami menerjang pesisir Mentawai akibat gempa laut dalam, menyebabkan kerusakan parah.',
        percent: '20%',
        goal: '50',
        raised: 10000000,
      },
    ]);

const [dataDonasiBarangPanti, setDataDonasiBarangPanti] = useState([
  {
    title: 'Untuk pendidikan panti asuhan A',
    type: 'Panti Asuhan',
    description:
      'Untuk menunjang agar nyaman saat melaksanakan kegiatan menuntut ilmu maka perlu beberapa perlengkapan pokok bersekolah. Bantuan dari anda semua adalah salah satu bentuk kepedulian dengan pendidikan di Indonesia untuk mencapai Indonesia emas.',
    items: [
      { title: 'Pakaian', progress: '50%', kebutuhan: 100, terkumpul: 50 },
      { title: 'Makanan', progress: '30%', kebutuhan: 150, terkumpul: 45 },
      { title: 'Perlengkapan', progress: '20%', kebutuhan: 200, terkumpul: 40 },
    ],
  },
  {
    title: 'Untuk pendidikan panti asuhan B',
    type: 'Panti Asuhan',
    description:
      'Untuk menunjang agar nyaman saat melaksanakan kegiatan menuntut ilmu maka perlu peningkatan ketersediaan barang maupun pangan.',
    items: [
      { title: 'Pakaian', progress: '50%', kebutuhan: 80, terkumpul: 40 },
      { title: 'Makanan', progress: '30%', kebutuhan: 120, terkumpul: 36 },
      { title: 'Perlengkapan', progress: '20%', kebutuhan: 100, terkumpul: 20 },
    ],
  },
  {
    title: 'Kebutuhan pokok panti asuhan C',
    type: 'Panti Asuhan',
    description:
      'Kebutuhan pokok seperti makanan, pakaian, dan perlengkapan lainnya sangat penting bagi keseharian anak-anak di panti ini.',
    items: [
      { title: 'Pakaian', progress: '40%', kebutuhan: 90, terkumpul: 36 },
      { title: 'Makanan', progress: '60%', kebutuhan: 150, terkumpul: 90 },
      { title: 'Perlengkapan', progress: '25%', kebutuhan: 80, terkumpul: 20 },
    ],
  },
  {
    title: 'Peningkatan sarana belajar panti D',
    type: 'Panti Asuhan',
    description:
      'Untuk meningkatkan sarana belajar, dibutuhkan buku, alat tulis, dan perlengkapan kelas lainnya.',
    items: [
      { title: 'Pakaian', progress: '20%', kebutuhan: 60, terkumpul: 12 },
      { title: 'Makanan', progress: '45%', kebutuhan: 130, terkumpul: 58 },
      { title: 'Perlengkapan', progress: '35%', kebutuhan: 110, terkumpul: 39 },
    ],
  },
  {
    title: 'Pemenuhan gizi anak-anak panti E',
    type: 'Panti Asuhan',
    description:
      'Pemenuhan gizi menjadi fokus utama di panti ini demi mendukung pertumbuhan anak-anak.',
    items: [
      { title: 'Pakaian', progress: '10%', kebutuhan: 50, terkumpul: 5 },
      { title: 'Makanan', progress: '70%', kebutuhan: 180, terkumpul: 126 },
      { title: 'Perlengkapan', progress: '30%', kebutuhan: 90, terkumpul: 27 },
    ],
  },
]);

const [dataDonasiBarangBencana, setDataDonasiBarangBencana] = useState([
  {
    title: 'Bantuan darurat untuk korban banjir di Jawa Tengah',
    type: 'Bencana Alam',
    description: 'Banjir besar menyebabkan banyak warga kehilangan rumah dan harta benda. Dibutuhkan bantuan darurat berupa makanan, pakaian, dan kebutuhan pokok lainnya.',
    items: [
      { title: 'Pakaian', progress: '60%', kebutuhan: 100, terkumpul: 60 },
      { title: 'Makanan', progress: '80%', kebutuhan: 200, terkumpul: 160 },
      { title: 'Perlengkapan', progress: '50%', kebutuhan: 150, terkumpul: 75 },
    ]
  },
  {
    title: 'Pemulihan pasca gempa di Sulawesi Barat',
    type: 'Bencana Alam',
    description: 'Gempa bumi menyebabkan banyak kerusakan. Bantuan dibutuhkan untuk membangun kembali serta menyediakan perlengkapan hidup sementara.',
    items: [
      { title: 'Pakaian', progress: '30%', kebutuhan: 100, terkumpul: 30 },
      { title: 'Makanan', progress: '55%', kebutuhan: 200, terkumpul: 110 },
      { title: 'Perlengkapan', progress: '40%', kebutuhan: 150, terkumpul: 60 },
    ]
  },
  {
    title: 'Bantuan untuk korban longsor di Sumatera Barat',
    type: 'Bencana Alam',
    description: 'Longsor menutup akses ke beberapa desa. Bantuan logistik sangat dibutuhkan untuk memenuhi kebutuhan dasar warga.',
    items: [
      { title: 'Pakaian', progress: '25%', kebutuhan: 80, terkumpul: 20 },
      { title: 'Makanan', progress: '65%', kebutuhan: 150, terkumpul: 98 },
      { title: 'Perlengkapan', progress: '35%', kebutuhan: 100, terkumpul: 35 },
    ]
  }
]);


     const page = [
      {
        title : "Donasi Uang",
        component :     <DonasiUang dataDonasiPanti={dataDonasiPanti} dataDonasiBencana={dataDonasiBencana}/>,
      },{
        title : "Donasi Barang",
        component :       <DonasiBarang dataDonasiBarangBencana={dataDonasiBarangBencana} dataDonasiBarangPanti={dataDonasiBarangPanti} />
      }
  
    

  ]
    
      
    return (
        <div>
        <Navbar />
        <Container className={'mt-20 md:mt-20'}>
          <div className="p-3 bg-secondary w-11/12 mx-auto h-auto rounded-2xl">
            <p className="font-secondary my-2 text-xl md:text-2xl text-primary text-center">SILAHKAN </p>
            <h4 className="my-2 text-center text-xl md:text-2xl text-primary">Pilih Donasi Anda</h4>
            <div className="mx-auto flex justify-center gap-2">
              {
                page.map((item, index) => (
                  <button onClick={() => setPageActive(index)} className={`md:p-3 p-2 md:rounded-xl rounded-lg hover:bg-accent hover:text-white font-secondary  ${index === pageActive ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                    <p>{item.title}</p>
                  </button>
                ))
                    
              }
              
            </div>
            <div>
              <p className="text-center text-primary text-sm md:text-base my-3">Tumbuhkan rasa empati anda dengan memberikan mereka sedikit bantuan yang anda milki </p>
            </div>
          </div>
          <div className="w-11/12 mx-auto">
          {page[pageActive].component}
          </div>

 
         
            <Footer />
            </Container>
            </div>
    )

}

const DonasiUang = ({dataDonasiPanti, dataDonasiBencana}) => {
  return(
    <div>
      <h3 className="my-2 font-semibold text-xl md:text-2xl text-primary">Panti Asuhan</h3>
     <HorizontalScroll data={dataDonasiPanti} />
      <h3 className="my-2 font-semibold text-xl md:text-2xl text-primary">Bencana Alam</h3>
     <HorizontalScroll data={dataDonasiBencana} />
    </div>
  )
}

const DonasiBarang = ({dataDonasiBarangBencana, dataDonasiBarangPanti}) => {
  
  return(
    <div>

     <h3 className="my-2 font-semibold text-xl md:text-2xl text-primary">Panti Asuhan</h3>
     <HorizontalScrollDonasiBarang data={dataDonasiBarangPanti} />
    
     <h3 className="my-2 font-semibold text-xl md:text-2xl text-primary">Bencana Alam</h3>
     <HorizontalScrollDonasiBarang data={dataDonasiBarangBencana} />
    
    </div>

  )
}
export default Donasi;
