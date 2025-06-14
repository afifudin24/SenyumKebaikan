import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
// import { FaEdit } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
const Profil = () => {
const [profil, setProfil] = useState(() => {
  const storedUser = localStorage.getItem("user");
  return storedUser
    ? JSON.parse(storedUser)
    : {
        namadepan: "",
        email: "",
        alamat: "",
        notelepon: "",
        password: "",
      };
});


    const [editable, setEditable] = useState(false);
    const [editableEtherium, setEditableEtherium] = useState(false);
    
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [passwordLama, setPasswordLama] = useState(profil.password);
    const [passwordBaru, setPasswordBaru] = useState("");
    const [etherium, setEtherium] = useState("8347892374973467dfadf76");
  
    const handleEditPassword = () => {
      setShowPasswordForm((prev) => !prev);
    };
  
    const handleSimpanPassword = () => {
      // Di sini kamu bisa kirim password ke backend atau validasi lokal
      console.log("Password lama:", passwordLama);
      console.log("Password baru:", passwordBaru);
        // alert("Kata sandi berhasil diubah!");
        toast.success("Password berhasil diperbarui!");
      
      // Reset form dan tutup tampilan
      setPasswordLama("");
      setPasswordBaru("");
      setShowPasswordForm(false);
    };

  // Ambil data profil dari localStorage saat komponen mount
  // useEffect(() => {
  //   const savedProfil = JSON.parse(localStorage.getItem("profil")) || {
  //     nama: "Nama Pengguna",
  //     email: "user@example.com",
  //     alamat: "Alamat pengguna"
  //   };
  //   setProfil(savedProfil);
  // }, []);

  // Handle input perubahan
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfil((prev) => ({
      ...prev,
      [name]: value,
    }));
    };
    const handleChangeEtherium = (e) => {
     setEtherium(e.target.value);
      };

  // Handle simpan data
  const handleSimpan = () => {
    localStorage.setItem("profil", JSON.stringify(profil));
    setEditable(false);
      // alert("Profil berhasil diperbarui!");
      toast.success("Profil berhasil diperbarui!");
    };
    
    const handleSimpanEther = () => {
      localStorage.setItem("etherium", JSON.stringify(etherium));
      setEditableEtherium(false);
      // alert("Etherium berhasil diperbarui!");
      toast.success("Etherium berhasil diperbarui!");
    }

  return (
    <DashboardLayout>
          <div className="md:w-1/2 w-10/12 mx-auto md:mx-0">              
          <h1 className="text-2xl font-bold mb-4 text-primary mt-2">Profil</h1>
              <div className="w-full p-4 text-white bg-primary rounded-2xl">
                  <div className="flex flex-row gap-4 items-center ">
                      <FontAwesomeIcon icon={faUser} size="2xl" className="" style={{ marginRight: '10px' }} />
                      <div>
                          <h3 className="text-lg font-normal">{profil.namadepan} {profil.namabelakang}</h3>
                          <p className="text-sm ">{profil.email}</p>
                      </div>
                  </div>
               
              </div>

              <div className="mt-6 bg-primary p-6 rounded-2xl text-white w-full font-primary relative">
                  <p className="font-semibold text-sm md:text-base mb-2">Informasi Pribadi</p>
        {/* Tombol Edit */}
        <button
          onClick={() => setEditable(!editable)}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
       <FontAwesomeIcon icon={faEdit} size="20" />
        </button>

        {/* Form Profil */}
                  <form className="space-y-4 ">
                      <div className="flex gap-2">
                      <div className="w-1/2">
                      
          <div className="my-3">
            <label className="block text-sm font-light mb-1">Nama</label>
            <input
              type="text"
              name="namadepan"
              value={profil.namadepan}
              onChange={handleChange}
              disabled={!editable}
              className="w-full px-4 py-2 text-sm rounded bg-white  text-primary"
            />
          </div>
          <div className="my-3">
            <label className="block text-sm font-light mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profil.email}
              onChange={handleChange}
              disabled={!editable}
              className="w-full px-4 py-2 rounded bg-white  text-primary"
            />
          </div>
          <div className="my-3">
            <label className="block text-sm mb-1 font-light">Alamat Lengkap</label>
            <textarea
              name="alamat"
              value={profil.alamat}
              onChange={handleChange}
              disabled={!editable}
              className="w-full px-4 py-2 rounded bg-white  text-primary"
            ></textarea>
          </div>

          {/* Tombol Simpan (tampil hanya jika editable true) */}
       
                      </div>
                      <div className="w-1/2">
                      <div className="my-3">
            <label className="block text-sm font-light mb-1">Nama Belakang</label>
            <input
              type="text"
              name="namabelakang"
              value={profil.namabelakang}
              onChange={handleChange}
              disabled={!editable}
              className="w-full px-4 py-2 text-sm rounded bg-white  text-primary"
            />
          </div>
                      <div className="my-3">
            <label className="block text-sm font-light mb-1">Nomor Telepon</label>
            <input
              type="text"
              name="notelepon"
              value={profil.notelepon}
              onChange={handleChange}
              disabled={!editable}
              className="w-full px-4 py-2 text-sm rounded bg-white  text-primary"
            />
          </div>
                      </div>
                      </div>
                      {editable && (
            <button
              type="button"
              onClick={handleSimpan}
              className="mt-4 bg-white text-primary font-semibold px-4 py-2 rounded hover:bg-gray-100"
            >
              Simpan
            </button>
                          )}
        </form>
              </div>
              <div className="w-full p-4 mt-3 text-white bg-primary rounded-2xl">
                  <div className="gap-4 items-center ">
                  <p className="font-semibold text-sm md:text-base mb-2">Informasi Pribadi</p>
                    
                  <div className="flex justify-between items-center cursor-pointer" onClick={handleEditPassword}>
          <h3 className="text-lg font-light">Ganti Kata Sandi</h3>
          <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                       {/* Form Password */}
        {showPasswordForm && (
          <div className="mt-4 space-y-3">
            <input
              type="password"
              placeholder="Kata Sandi Lama"
              value={passwordLama}
              onChange={(e) => setPasswordLama(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white text-primary"
            />
            <input
              type="password"
              placeholder="Kata Sandi Baru"
              value={passwordBaru}
              onChange={(e) => setPasswordBaru(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white text-primary"
            />
            <button
              onClick={handleSimpanPassword}
              className="bg-white text-primary font-semibold px-4 py-2 rounded hover:bg-gray-100"
            >
              Simpan
            </button>
          </div>
        )}
                  </div>
               
              </div>
              <div className="w-full p-4 mt-3 text-white relative bg-primary rounded-2xl">
              <button
          onClick={() => setEditableEtherium(!editableEtherium)}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
       <FontAwesomeIcon icon={faEdit} size="20" />
        </button>
                  <p className="font-semibold text-sm md:text-base mb-2">Alamat Wallet (blockchain)</p>
                  <p className="font-light text-sm md:text-base my2">Etherium Address</p>
                  <input
              type="text"
              placeholder="Etherium Address"
              value={etherium}
              onChange={(e) => setEtherium(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white my-2 text-primary"
              disabled={!editableEtherium}
                  />
                  {
                    editableEtherium && (
                      <button
                      onClick={handleSimpanEther}
                      className="bg-white text-primary font-semibold px-4 py-2 rounded hover:bg-gray-100"
                    >
                      Simpan
                    </button>
                    )
                  }
                  </div>
              
              </div>
    </DashboardLayout>
  );
};

export default Profil;
