import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
// import { FaEdit } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const Profil = () => {
  const [profil, setProfil] = useState({
    nama: "asik",
    email: "asik",
    alamat: "asik"
  });

  const [editable, setEditable] = useState(false);

  // Ambil data profil dari localStorage saat komponen mount
  useEffect(() => {
    const savedProfil = JSON.parse(localStorage.getItem("profil")) || {
      nama: "Nama Pengguna",
      email: "user@example.com",
      alamat: "Alamat pengguna"
    };
    setProfil(savedProfil);
  }, []);

  // Handle input perubahan
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfil((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle simpan data
  const handleSimpan = () => {
    localStorage.setItem("profil", JSON.stringify(profil));
    setEditable(false);
    alert("Profil berhasil diperbarui!");
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Profil Saya</h1>

      <div className="mt-6 bg-primary p-6 rounded-2xl text-white font-primary relative">
        {/* Tombol Edit */}
        <button
          onClick={() => setEditable(!editable)}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
       <FontAwesomeIcon icon={faEdit} size="20" />
        </button>

        {/* Form Profil */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nama</label>
            <input
              type="text"
              name="nama"
              value={profil.nama}
              onChange={handleChange}
              disabled={!editable}
              className="w-full px-4 py-2 rounded text-black"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profil.email}
              onChange={handleChange}
              disabled={!editable}
              className="w-full px-4 py-2 rounded text-black"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Alamat</label>
            <textarea
              name="alamat"
              value={profil.alamat}
              onChange={handleChange}
              disabled={!editable}
              className="w-full px-4 py-2 rounded text-black"
            ></textarea>
          </div>

          {/* Tombol Simpan (tampil hanya jika editable true) */}
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
    </DashboardLayout>
  );
};

export default Profil;
