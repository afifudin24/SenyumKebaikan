import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Home from './pages/guest/Home';
import About from './pages/About';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import CreateNewPassword from './pages/CreateNewPassword';
import Register from './pages/Register';
import Donasi from './pages/guest/Donasi';
import DetailDonasi from './pages/guest/DetailDonasi';
import DetailDonasiBarang from './pages/guest/DetailDonasiBarang';
import PantauDonasi from './pages/guest/PantauDonasi';
import RingkasanDonasi from './pages/guest/RingkasanDonasi';
import CariKebutuhan from './pages/guest/CariKebutuhan';
import PengajuanKebutuhan from './pages/guest/PengajuanKebutuhan';
import Dashboard from './pages/DashboardAdmin/Dashboard';
import RiwayatAktifitas from './pages/DashboardAdmin/RiwayatAktifitas';
import DataUsers from './pages/DashboardAdmin/DataUsers';
import InformasiUser from './pages/DashboardAdmin/InformasiUser';
import DonasiMasuk from './pages/DashboardAdmin/DonasiMasuk';
import Profil from './pages/DashboardAdmin/Profil';
import DataCampaign from './pages/DashboardAdmin/DataCampaign';
import PengajuanKebutuhanDashboard from './pages/DashboardAdmin/PengajuanKebutuhan';
import KontakMasuk from './pages/DashboardAdmin/KontakMasuk';
import DetailCampaign from './pages/DashboardAdmin/DetailCampaign';
import Audit from './pages/DashboardAdmin/Audit';
import DetailAudit from './pages/DashboardAdmin/DetailAudit';
import PengelolaanAPK from './pages/DashboardAdmin/PengelolaanAPK';
import DashboardUser from './pages/DashboardUser/DashboardUser';
import RiwayatAktifitasUser from './pages/DashboardUser/RiwayatAktifitasUser';
import RiwayatDonasi from './pages/DashboardUser/RiwayatDonasi';
import PesanSaya from './pages/DashboardUser/PesanSaya';
import PengajuanKebutuhanSaya from './pages/DashboardUser/PengajuanKebutuhanSaya';
import AjukanDonasi from './pages/DashboardUser/AjukanDonasi';
import DashboardVolunteer from './pages/DashboardVolunteer/DashboardVolunteer';
import AjukanProgramBaru from './pages/DashboardVolunteer/AjukanProgrambaru';
import ProgramAktif from './pages/DashboardVolunteer/ProgramAktif';
import LaporanKegiatan from './pages/DashboardVolunteer/LaporanKegiatan';
import UpdateDistribusi from './pages/DashboardVolunteer/UpdateDistribusi';
import DetailUpdateDistribusi from './pages/DashboardVolunteer/DetailUpdateDistribusi';
import PesanKeAdmin from './pages/DashboardVolunteer/PesanKeAdmin';
import RiwayatAktifitasVolunteer from './pages/DashboardVolunteer/RiwayatAktifitasVolunteer';
import ProgramDetailCard from './pages/DashboardAdmin/ProgramDetailCard';
import PengajuanDistribusi from './pages/DashboardAdmin/PengajuanDistribusi';
import VerifikasiBarangMasuk from './pages/DashboardVolunteer/VerifikasiBarangMasuk';
function App() {
  return (
    <div className="font-primary">
      <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      {/* <nav className="mb-4 flex gap-4 text-blue-500">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/donasi/detaildonasi" element={<DetailDonasi />} />
        <Route path="/donasi/detaildonasibarang" element={<DetailDonasiBarang />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />

        {/* pantau donasi */}
        <Route path="/pantaudonasi" element={<PantauDonasi />} />
        <Route path='/pantaudonasi/ringkasandonasi' element={<RingkasanDonasi />} />

        {/* carikebutuhan */}
        <Route path="/cari-kebutuhan" element={<CariKebutuhan />} />
        <Route path="/cari-kebutuhan/pengajuan" element={<PengajuanKebutuhan />} />

        {/* dashboard admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/riwayataktifitas' element={<RiwayatAktifitas />} />
        <Route path='/datausers' element={<DataUsers />} />
        <Route path='/informasiuser' element={<InformasiUser />} />
        <Route path='/donasimasuk' element={<DonasiMasuk />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/datacampaign' element={<DataCampaign />} />
        <Route path='/datacampaign/detailcampaign' element={<DetailCampaign />} />
        <Route path='/pengajuankebutuhan' element={<PengajuanKebutuhanDashboard />} />
        <Route path='/pengajuandistribusi' element={<PengajuanDistribusi />} />
        <Route path='/kontakmasuk' element={<KontakMasuk />} />
        <Route path="/audit" element={<Audit />} />
        <Route path='/audit/detailaudit' element={<DetailAudit />} />
        <Route path='/pengelolaanapk'  element={<PengelolaanAPK />} />

        {/* dashboard user */}
        <Route path="/dashboarduser" element={<DashboardUser />} />
        <Route path='/riwayataktifitasuser' element={<RiwayatAktifitasUser />} />
        <Route path='/riwayatdonasi' element={<RiwayatDonasi/>} />
        <Route path='/pesansaya' element={<PesanSaya/>} />
        <Route path='/pengajuankebutuhansaya' element={<PengajuanKebutuhanSaya/>} />
        <Route path='/ajukandonasiuser' element={<AjukanDonasi/>} />

        {/* dashboard volunteer */}
        <Route path='/dashboardvolunteer' element={<DashboardVolunteer />} />
        <Route path='/ajukanprogrambaru' element={<AjukanProgramBaru />} />
        <Route path='/programaktif' element={<ProgramAktif />} />
        <Route path='/laporankegiatan' element={<LaporanKegiatan />} />
        <Route path='/updatedistribusi' element={<UpdateDistribusi />} />
        <Route path='/updatedistribusi/detailupdate' element={<DetailUpdateDistribusi />} />
        <Route path='/pesankeadmin' element={<PesanKeAdmin />} />
        <Route path='/riwayataktifitasvolunteer' element={<RiwayatAktifitasVolunteer />} />
        <Route path='/programdetailcard' element={<ProgramDetailCard />} />
        <Route path='/verifikasibarangmasuk' element={<VerifikasiBarangMasuk />} />



        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}
export default App;