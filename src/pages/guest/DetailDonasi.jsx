import { useState } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DataDetailDonasi from "../../components/DataDetailDonasi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
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
    
    const [activeTab, setActiveTab] = useState('detail');
     return (
        <div>
        <div>
          <Container className={'mt-20 md:mt-20'}>
            <div>
                <DataDetailDonasi type={'BENCANA ALAM'} percent={'60%'} raised={6000000} goal={16} title={'Banjir bandang di pinggiran kota METROPOLITAN'} description={'Persediaan baju tidak tentu jika anda memang di anggap membutuhkan dan stok barang masih ada maka pengajuan anda di terima tinggal menunggungu konfirmasi'} />
            </div>
            <Navbar />
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

          <Footer />
          </Container>
        </div>
        </div>
      );
}

export default DetailDonasi;