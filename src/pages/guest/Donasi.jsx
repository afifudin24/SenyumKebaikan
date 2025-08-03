import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HorizontalScroll from "../../components/HorizontalScroll";
import HorizontalScrollDonasiBarang from "../../components/HorizontalScrollDonasiBarang";
import Container from "../../components/Container";
import gambar1 from "../../assets/donasi/barang1.png"
import gambar2 from "../../assets/donasi/barang2.png"
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
          href : '/panti1.png'
        },
        {
         type: 'Panti Asuhan',
          title: 'Bantu Biaya Sekolah Anak Panti Asuhan Al-Hikmah',
          description: 'Anak-anak panti asuhan Al-Hikmah membutuhkan bantuan biaya pendidikan untuk semester baru.',
          percent: '70%',
          goal: '25',
          raised: 7000000,
          href : '/panti2.png'
        },
        {
          type: 'Panti Asuhan',
          title: 'Renovasi Asrama Panti Asuhan Bina Kasih',
          description: 'Asrama lama rusak akibat gempa. Bantuan Anda akan membuat anak-anak kembali tinggal nyaman.',
          percent: '30%',
          goal: '30',
          raised: 3000000,
          href : '/panti1.png'
        },
        {
          type: 'Panti Asuhan',
          title: 'Bantu Biaya Sekolah Anak Panti Asuhan Al-Hikmah',
          description: 'Anak-anak panti asuhan Al-Hikmah membutuhkan bantuan biaya pendidikan untuk semester baru.',
          percent: '50%',
          goal: '15',
          raised: 7500000,
          href : '/panti2.png'
        },
        {
          type: 'Panti Asuhan',
          title: 'Makanan Bergizi untuk Anak-Anak Panti Harapan',
          description: 'Anak-anak membutuhkan asupan makanan bergizi untuk tumbuh kembang yang sehat.',
          percent: '80%',
          goal: '10',
          raised: 8000000,
          href : '/panti1.png'
        },
    ]);
    
    const [dataDonasiBencana, setDataDonasiBencana] = useState([
      {
        type: 'Bencana Alam',
        title: 'Banjir bandang di pinggiran kota METROPOLITAN',
        description: 'Persediaan baju tidak tentu jika anda memang di anggap membutuhkan dan stok barang masih ada maka pengajuan anda di terima tinggal menunggungu konfirmasi',
        percent: '60%',
        goal: '16',
        raised: 600000,
        href : '/bencana8.png'
      },
      {
        type: 'Bencana Alam',
        title: 'Banjir Bandang di Kalimantan Tengah',
        description: 'Ribuan warga terdampak banjir bandang yang melanda 3 kecamatan di Kalimantan Tengah.',
        percent: '40%',
        goal: '25',
        raised: 10000000,
         href : '/bencana2.png'
      },
      {
        type: 'Bencana Alam',
        title: 'Kebakaran Hutan Sumatera Selatan',
        description: 'Kebakaran besar melanda kawasan hutan dan lahan di Sumatera Selatan, mengancam pemukiman warga.',
        percent: '55%',
        goal: '30',
        raised: 16500000,
         href : '/bencana1.png'
      },
      {
        type: 'Bencana Alam',
        title: 'Letusan Gunung Semeru: Uluran Tangan Anda Dibutuhkan',
        description: 'Letusan Gunung Semeru menyebabkan ribuan warga mengungsi dan kehilangan tempat tinggal.',
        percent: '75%',
        goal: '40',
        raised: 30000000,
         href : '/bencana2.png'
      },
      {
        type: 'Bencana Alam',
        title: 'Tsunami di Kepulauan Mentawai',
        description: 'Tsunami menerjang pesisir Mentawai akibat gempa laut dalam, menyebabkan kerusakan parah.',
        percent: '20%',
        goal: '50',
        raised: 10000000,
         href : '/bencana1.png'
      },
    ]);

const [dataDonasiBarangPanti, setDataDonasiBarangPanti] = useState([
  {
    title: 'Untuk pendidikan panti asuhan A',
    type: 'Panti Asuhan',
    description:
      'Anak-anak di berbagai panti asuhan saat ini sangat membutuhkan bantuan perlengkapan sekolah untuk mendukung pendidikan mereka. Kebutuhan mendesak tersebut meliputi:',
    items: [
      { title: 'Pakaian Seragam', progress: '50%', kebutuhan: 100, terkumpul: '50 pcs' },
      { title: 'Beras', progress: '30%', kebutuhan: 150, terkumpul: '45 kg' },
      { title: 'Alat Tulis', progress: '20%', kebutuhan: 200, terkumpul: '40 pcs' },
    ],
    href: '/donasibarang1.png'
  },
  {
    title: 'Untuk pendidikan panti asuhan B',
    type: 'Panti Asuhan',
    description:
      'Untuk menunjang agar nyaman saat melaksanakan kegiatan menuntut ilmu maka perlu peningkatan ketersediaan barang maupun pangan.',
    items: [
      { title: 'Pakaian Sehari-hari', progress: '50%', kebutuhan: 80, terkumpul: '40 pcs' },
      { title: 'Minyak Goreng', progress: '30%', kebutuhan: 120, terkumpul: '36 liter' },
      { title: 'Tas Sekolah', progress: '20%', kebutuhan: 100, terkumpul: '20 pcs' },
    ],
    href: '/donasibarang2.png'
  },
  {
    title: 'Kebutuhan pokok panti asuhan C',
    type: 'Panti Asuhan',
    description:
      'Kebutuhan pokok seperti makanan, pakaian, dan perlengkapan lainnya sangat penting bagi keseharian anak-anak di panti ini.',
    items: [
      { title: 'Jaket Hangat', progress: '40%', kebutuhan: 90, terkumpul: '36 pcs' },
      { title: 'Tepung Terigu', progress: '60%', kebutuhan: 150, terkumpul: '90 kg' },
      { title: 'Buku Cerita', progress: '25%', kebutuhan: 80, terkumpul: '20 pcs' },
    ],
    href: '/donasibarang3.png'
  },
  {
    title: 'Peningkatan sarana belajar panti D',
    type: 'Panti Asuhan',
    description:
      'Untuk meningkatkan sarana belajar, dibutuhkan buku, alat tulis, dan perlengkapan kelas lainnya.',
    items: [
      { title: 'Seragam Olahraga', progress: '20%', kebutuhan: 60, terkumpul: '12 pcs' },
      { title: 'Susu Cair', progress: '45%', kebutuhan: 130, terkumpul: '58 liter' },
      { title: 'Meja Belajar', progress: '35%', kebutuhan: 110, terkumpul: '39 pcs' },
    ],
    href: '/donasibarang4.png'
  }
]);

const [dataDonasiBarangBencana, setDataDonasiBarangBencana] = useState([
  {
    title: 'Bantuan darurat untuk korban banjir di Jawa Tengah',
    type: 'Bencana Alam',
    description: 'Banjir besar menyebabkan banyak warga kehilangan rumah dan harta benda. Dibutuhkan bantuan darurat berupa makanan, pakaian, dan kebutuhan pokok lainnya.',
    items: [
      { title: 'Baju Ganti & Selimut', progress: '60%', kebutuhan: 100, terkumpul: '60 pcs' },
      { title: 'Beras & Makanan Instan', progress: '80%', kebutuhan: 200, terkumpul: '160 kg' },
      { title: 'Air Bersih & Minuman', progress: '50%', kebutuhan: 150, terkumpul: '75 liter' },
    ],
    href: '/barang2.png'
  },
  {
    title: 'Pemulihan pasca gempa di Sulawesi Barat',
    type: 'Bencana Alam',
    description: 'Gempa bumi menyebabkan banyak kerusakan. Bantuan dibutuhkan untuk membangun kembali serta menyediakan perlengkapan hidup sementara.',
    items: [
      { title: 'Pakaian Sehari-hari', progress: '30%', kebutuhan: 100, terkumpul: '30 pcs' },
      { title: 'Logistik Makanan', progress: '55%', kebutuhan: 200, terkumpul: '110 kg' },
      { title: 'Air Minum Kemasan', progress: '40%', kebutuhan: 150, terkumpul: '60 liter' },
    ],
    href: '/barang3.png'
  },
  {
    title: 'Bantuan untuk korban longsor di Sumatera Barat',
    type: 'Bencana Alam',
    description: 'Longsor menutup akses ke beberapa desa. Bantuan logistik sangat dibutuhkan untuk memenuhi kebutuhan dasar warga.',
    items: [
      { title: 'Jaket & Pakaian Hangat', progress: '25%', kebutuhan: 80, terkumpul: '20 pcs' },
      { title: 'Sembako (beras, mie)', progress: '65%', kebutuhan: 150, terkumpul: '98 kg' },
      { title: 'Air Galon & Cairan Pembersih', progress: '35%', kebutuhan: 100, terkumpul: '35 liter' },
    ],
    href: '/barang4.png'
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

 
         
            </Container>
            <Footer />
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
     <HorizontalScrollDonasiBarang data={dataDonasiBarangPanti} img={gambar1} />
    
     <h3 className="my-2 font-semibold text-xl md:text-2xl text-primary">Bencana Alam</h3>
     <HorizontalScrollDonasiBarang data={dataDonasiBarangBencana} img={gambar2} />
    
    </div>

  )
}
export default Donasi;
