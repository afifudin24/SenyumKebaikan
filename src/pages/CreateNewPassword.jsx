import React, { useState } from 'react';
import logo from '../assets/logo.png';
import google from '../assets/google.png'
import fb from '../assets/fb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA, faArrowLeft, faArrowLeftLong, faChartLine, faChartSimple, faCheckCircle, faEnvelope, faEnvelopeOpen, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS,   ArcElement, CategoryScale, LinearScale, PointElement, LineElement,  BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { color } from 'chart.js/helpers';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons/faEnvelopeCircleCheck';
import Grafik from '../components/Grafik';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const CreateNewPassword = () => {
 
  const [showChart, setShowChart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
   const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
      const [passwordError, setPasswordError] = useState('');
      const [confirmPasswordError, setConfirmPasswordError] = useState('');
const toggleMenu = () => {
  setShowMenu(!showMenu);
};
const toggleChart = () => {
  setShowChart(!showChart);
};
 const togglePassword = () => {
    setShowPassword(!showPassword);
  };
   const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    console.log(confirmPassword)
  };
 
  return (
    <div className="flex  py-5 2xl:w-10/12 mx-auto overflow-x-hidden items-center w-full gap-2  min-h-screen  justify-center px-5">
      <button
  onClick={toggleMenu}
  className="md:hidden fixed top-4 right-4 z-50 bg-white text-primary hover:bg-primary hover:text-white p-2 rounded-md shadow"
>
  {showMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faChartSimple} />}
</button>
      <div className="px-4  w-12/12 md:w-6/12 h-full">
        <div className='md:w-8/12 w-10/12  h-full mx-auto'>
    
            {
                updatePassword ? <UpdatePasswordSuccess /> : <FormCreateNewPassword password={password} updatePassword={updatePassword} setUpdatePassword={setUpdatePassword} setPasswordError={setPasswordError} confirmPasswordError={confirmPasswordError} setConfirmPasswordError={setConfirmPasswordError} confirmPassword={confirmPassword} setPassword={setPassword} setConfirmPassword={setConfirmPassword} togglePassword={togglePassword} toggleConfirmPassword={toggleConfirmPassword} showPassword={showPassword} showConfirmPassword={showConfirmPassword} setShowPassword={setShowPassword} setShowConfirmPassword={setShowConfirmPassword} passwordError={passwordError}  />
            }
          
       
        </div>
        </div>
        <Grafik showMenu={showMenu} toggleChart={toggleChart} showChart={showChart}/>
      
  
    </div>
  );
};
const FormCreateNewPassword = ( {passwordError, setPasswordError, updatePassword, setUpdatePassword, confirmPasswordError, setConfirmPasswordError, password, setPassword, confirmPassword, setConfirmPassword, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, toggleConfirmPassword, togglePassword}) => {
     
const handleSubmit = (e) => {
  e.preventDefault();
  let valid = true;
  setPasswordError('');
  setConfirmPasswordError('');
  // Validasi password
  if (!password) {
    setPasswordError('Password harus diisi');
    valid = false;
  }
  // Validasi konfirmasi password
  if (!confirmPassword) {
    setConfirmPasswordError('Konfirmasi password harus diisi');
    valid = false;
  } else if (password && confirmPassword && password !== confirmPassword) {
    setConfirmPasswordError('Konfirmasi password tidak sesuai');
    valid = false;
  }
  // Jika validasi gagal, keluar
  if (!valid) return;
  // Jika validasi lolos

  console.log('Password:', password);
  setUpdatePassword(true);
};
    return (
        <div>
                 <h1 className="2xl:text-4xl md:text-2xl text-xl mt-10 font-semibold text-center text-primary">Buat Kata Sandi Baru</h1>
                <p className="text-sm md:text-sm text-center text-primary font-light 2xl:text-[20px] mt-3"> Masukkan kata sandi baru Anda di bawah ini untuk menyelesaikan proses pengaturan ulang. Pastikan kata sandi kuat dan aman
</p>
               <form onSubmit={handleSubmit} className='mt-5'> 
          <div className="2xl:mb-4 mb-2">
                    <label className="block text-sm font-medium text-primary">Password</label>
                    <div className="relative mt-2">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="p-2 w-full font-secondary border text-sm border-gray-300 rounded-md"
                        placeholder="Masukkan password anda"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={togglePassword}
                      >
                        {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                      </button>
                    </div>
                     {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                  </div>
          <div className="2xl:mb-4 mb-2">
                    <label className="block text-sm font-medium text-primary">Ulangi Password</label>
                    <div className="relative mt-2">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        className="p-2 w-full font-secondary border text-sm border-gray-300 rounded-md"
                        placeholder="Masukkan password anda"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={toggleConfirmPassword}
                      >
                        {showConfirmPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                      </button>
                    </div>
                     {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
                  </div>
                <div className="flex justify-between items-center">
            <button type="submit" className="cursor-pointer text-xs md:text-sm bg-primary w-full text-white py-2 my-3 px-4 rounded-md hover:text-primary hover:bg-secondary">
              Kirim
            </button>
          </div>
              </form>
        </div>
    )
};
const UpdatePasswordSuccess = () => {
  return (
    <div className="text-center">
        <div >
        <FontAwesomeIcon className='text-5xl text-primary' icon={faCheckCircle} />
        </div>
          <h1 className="2xl:text-4xl md:text-2xl text-xl mt-5 font-semibold text-center text-primary"> Kata sandi Anda telah 
berhasil diatur ulang!
 </h1>
  <p className="text-sm md:text-sm text-center text-primary font-light 2xl:text-[20px] mt-3">  Anda sekarang dapat masuk dengan kata sandi baru Anda. Jika Anda mengalami masalah, silakan hubungi dukungan

</p>
         
        <Link to='/login'>
          <button  className='text-xs md:text-sm bg-primary w-full font-semibold text-white py-2 my-3 px-4 rounded-md hover:text-primary hover:bg-secondary'>
            Kembali Ke Login
          </button>
            </Link>
       
         
    </div>
  );
};
export default CreateNewPassword;