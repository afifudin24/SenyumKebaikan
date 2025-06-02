import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HorizontalScroll from "../../components/HorizontalScroll";
import Container from "../../components/Container";
const Donasi = () => {
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
          type: 'Panti Jompo',
          title: 'Kebutuhan Harian Lansia di Panti Mandiri',
          description: 'Panti Mandiri membutuhkan bantuan logistik untuk kebutuhan harian lansia yang tinggal di sana.',
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
          type: 'Panti Difabel',
          title: 'Perlengkapan Khusus untuk Anak Difabel',
          description: 'Kami menggalang dana untuk membeli kursi roda dan perlengkapan belajar khusus anak-anak difabel.',
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
    
      
    return (
        <div>
        <Navbar />
        <Container className={'mt-10 md:mt-20'}>
          <h1>Donasi</h1>
          <HorizontalScroll data={dataDonasiPanti} />
            <Footer />
            </Container>
            </div>
    )

}

export default Donasi;
