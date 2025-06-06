import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

const RiwayatAktifitas = () => {
    const [dataRiwayat, setDataRiwayat] = useState([
        {
          title: 'Program Ditolak',
          type: 'Aktifitas',
          tanggal: '2022-02-02',
          description: "Program Andi 'Perlengkapan Sekolah untuk anak anak' telah ditolak oleh admin"
        },
        {
          title: 'Login Berhasil',
          type: 'Log',
          tanggal: '2023-08-01',
          description: 'Pengguna berhasil login dari perangkat baru.'
        },
        {
          title: 'Pengajuan Donasi',
          type: 'Aktifitas',
          tanggal: '2023-08-02',
          description: 'Kamu mengajukan donasi untuk kampanye "Pendidikan Untuk Semua".'
        },
        {
          title: 'Notifikasi Baru',
          type: 'Notifikasi',
          tanggal: '2023-08-03',
          description: 'Ada pembaruan status pada donasi kamu.'
        },
        {
          title: 'Donasi Berhasil',
          type: 'Aktifitas',
          tanggal: '2023-08-04',
          description: 'Kamu berhasil berdonasi Rp. 500.000 ke kampanye "Bantu Korban Banjir".'
        },
        {
          title: 'Sesi Logout',
          type: 'Log',
          tanggal: '2023-08-05',
          description: 'Pengguna keluar dari sistem pada pukul 20.30 WIB.'
        },
        {
          title: 'Pengaturan Akun Diperbarui',
          type: 'Aktifitas',
          tanggal: '2023-08-06',
          description: 'Kamu memperbarui data profil dan kata sandi.'
        },
        {
          title: 'Notifikasi Verifikasi',
          type: 'Notifikasi',
          tanggal: '2023-08-07',
          description: 'Akun kamu telah berhasil diverifikasi.'
        },
        {
          title: 'Program Diterima',
          type: 'Aktifitas',
          tanggal: '2023-08-08',
          description: "Program 'Makanan Sehat untuk Balita' telah disetujui oleh admin."
        },
        {
          title: 'Gagal Login',
          type: 'Log',
          tanggal: '2023-08-09',
          description: 'Percobaan login gagal karena kata sandi salah.'
        },
        {
          title: 'Update Kampanye',
          type: 'Notifikasi',
          tanggal: '2023-08-10',
          description: 'Kampanye yang kamu ikuti telah diperbarui oleh pemilik.'
        },
        {
          title: 'Donasi Dibatalkan',
          type: 'Aktifitas',
          tanggal: '2023-08-11',
          description: 'Donasi kamu ke program "Rumah Layak Huni" telah dibatalkan.'
        },
        {
          title: 'Login dari IP Baru',
          type: 'Log',
          tanggal: '2023-08-12',
          description: 'Login terdeteksi dari lokasi baru (IP: 192.168.1.1).'
        },
        {
          title: 'Pesan Masuk',
          type: 'Notifikasi',
          tanggal: '2023-08-13',
          description: 'Kamu menerima pesan dari Admin mengenai program sosial.'
        },
        {
          title: 'Pendaftaran Relawan',
          type: 'Aktifitas',
          tanggal: '2023-08-14',
          description: 'Kamu mendaftar sebagai relawan untuk kampanye "Bersih Sungai".'
        },
        {
          title: 'Sesi Kadaluarsa',
          type: 'Log',
          tanggal: '2023-08-15',
          description: 'Sesi login kamu telah berakhir secara otomatis.'
        },
        {
          title: 'Program Diperbarui',
          type: 'Aktifitas',
          tanggal: '2023-08-16',
          description: "Detail program 'Donasi Pendidikan' telah diperbarui."
        },
        {
          title: 'Peringatan Aktivitas Mencurigakan',
          type: 'Notifikasi',
          tanggal: '2023-08-17',
          description: 'Terdeteksi aktivitas login yang tidak biasa dari perangkat lain.'
        },
        {
          title: 'Donasi Diterima',
          type: 'Aktifitas',
          tanggal: '2023-08-18',
          description: 'Program kamu menerima donasi sebesar Rp. 250.000.'
        },
        {
          title: 'Log Akses',
          type: 'Log',
          tanggal: '2023-08-19',
          description: 'Riwayat akses dicatat pada pukul 09.00 WIB.'
        },
        {
          title: 'Notifikasi Pengingat',
          type: 'Notifikasi',
          tanggal: '2023-08-20',
          description: 'Jangan lupa perbarui laporan bulanan program kamu.'
        },
      ]);
      
    const [tabActive, setTabActive] = useState(0);
    const tab = [
        {
            title: 'Semua',
            component : <TabSemua data={dataRiwayat} />
            
        }, {
            title: 'Log Aktifitas',
            component : <TabSemua data={dataRiwayat} />
        }, {
            title: 'Notifikasi',
            component : <TabSemua data={dataRiwayat} />
        }, {
            title: 'Log',
            component : <TabSemua data={dataRiwayat} />
        }
      
    ];

    return (
        <DashboardLayout>

            <div className="font-primary"> 
                <div className="flex w-6/12  rounded-t-2xl justify-between gap-2 mx-auto bg-primary text-white">
                {tab.map((item, index) => (
  <div
    key={index}
    className={`
      tab 
      ${tabActive === index ? 'active' : ''} 
      w-1/4 text-center p-2
       
      
      ${index !== tab.length - 1 ? 'border-r' : ''} 
    `}
    onClick={() => setTabActive(index)}
  >
    {item.title}
  </div>
))}

            </div>
            {
                tab[tabActive].component
            }
        </div>
            </DashboardLayout>
    )
}

const TabSemua = ({data}) => {
    //    ambil data dengan filter where type == aktifitas
    // const filteredData = data.filter(item => item.type === 'Aktifitas');
    return (
        <div>
            {
                data.map((item, index) => (
                    <div key={index} className="tab-item text-center  flex justify-between items-center">
                        <div>
                        <div className="tab-item-title">{item.title}</div>
                        <div className="tab-item-description">{item.description}</div>
                        </div>
                        <div className="tab-item-tanggal">{item.tanggal}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default RiwayatAktifitas;