import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import toast from "react-hot-toast";

const dummyCampaigns = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  judul: `Program Sosial ${index + 1}`,
  kategori: index % 2 === 0 ? "Pendidikan" : "Kesehatan",
  targetDana: 10000000 + index * 500000,
  tanggalMulai: "2025-06-01",
  tanggalSelesai: "2025-08-01",
  noTelepon: `08${Math.floor(1000000000 + Math.random() * 900000000)}`
}));

const DataCampaign = () => {
    const [campaigns, setCampaigns] = useState(dummyCampaigns);
  const [isAddForm, setIsAddForm] = useState(false);
  
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(campaigns.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = campaigns.slice(startIndex, startIndex + itemsPerPage);
    const [newData, setNewData] = useState({
        judul: "",
        kategori: "",
        targetDana: "",
        tanggalMulai: "",
        tanggalSelesai: "",
        noTelepon: "",
      });
    

  const toggleDetail = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedRow(null); // Tutup detail saat ganti halaman
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewData(prev => ({ ...prev, [name]: value }));
      };
    
    const handleSave = () => {
          console.log(newData);
        const newCampaign = {
          id: campaigns.length + 1,
          ...newData,
          targetDana: parseInt(newData.targetDana)
        };
        setCampaigns(prev => [...prev, newCampaign]);
          setIsAddForm(false);
          toast.success("Campaign berhasil ditambahkan!");
        setNewData({
          judul: "",
          kategori: "",
          targetDana: "",
          tanggalMulai: "",
          tanggalSelesai: "",
          noTelepon: "",
        });
      };

  return (
      <DashboardLayout>
          <div className="w-11/12 md:w-9/12 mx-auto">
              
          
      <h1 className="text-2xl font-bold mb-4 text-center text-primary mt-2">
        {isAddForm ? "Tambah Campaign Baru" : "Data Campaign"}
              </h1>
              <button
          onClick={() => setIsAddForm(!isAddForm)}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          {isAddForm ? "Kembali" : "Tambah Campaign"}
        </button>
              {isAddForm && (
                  <div className="bg-white p-6 rounded shadow-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
  { label: "Judul", name: "judul" },
  { label: "Kategori", name: "kategori" },
  { label: "Target Dana", name: "targetDana" },
  { label: "Tanggal Mulai", name: "tanggalMulai" },
  { label: "Tanggal Selesai", name: "tanggalSelesai" },
  { label: "No Telepon", name: "noTelepon" },
].map((field) => (
  <div key={field.name}>
    <label className="block mb-1">{field.label}</label>
    <input
      type={
        field.name.includes("tanggal")
          ? "date"
          : field.name === "targetDana"
          ? "number"
          : "text"
      }
      name={field.name}
      value={newData[field.name]}
      onChange={handleChange}
      className="w-full border px-3 py-2 rounded"
    />
  </div>
))}

                      </div>
                      <button
                          onClick={handleSave}
                          className="mt-4 bg-primary text-white px-4 py-2 rounded"
                      >
                          Simpan Data
                      </button>
                  </div>
              )
              }
      {!isAddForm && (
        <div className="overflow-x-auto mt-4 rounded-xl overflow-hidden">
          <table className="min-w-full bg-white rounded shadow">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-2 px-4 text-left">No</th>
                <th className="py-2 px-4 text-left">Judul</th>
                <th className="py-2 px-4 text-left">Kategori</th>
                <th className="py-2 px-4 text-left">Target Dana</th>
                <th className="py-2 px-4 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((campaign, index) => (
                <React.Fragment key={campaign.id}>
                  <tr className="border-b">
                    <td className="py-2 px-4">{startIndex + index + 1}</td>
                    <td className="py-2 px-4">{campaign.judul}</td>
                    <td className="py-2 px-4">{campaign.kategori}</td>
                    <td className="py-2 px-4">Rp {campaign.targetDana.toLocaleString()}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => toggleDetail(campaign.id)}
                        className="bg-primary text-white px-3 py-1 rounded"
                      >
                        {expandedRow === campaign.id ? "Tutup" : "Detail"}
                      </button>
                    </td>
                  </tr>
                  {expandedRow === campaign.id && (
                    <tr className="bg-gray-100">
                      <td colSpan="5" className="py-4 px-4">
                        <div>
                          <p><strong>Judul Program:</strong> {campaign.judul}</p>
                          <p><strong>Kategori:</strong> {campaign.kategori}</p>
                          <p><strong>Target Dana:</strong> Rp {campaign.targetDana.toLocaleString()}</p>
                          <p><strong>Tanggal Mulai:</strong> {campaign.tanggalMulai}</p>
                          <p><strong>Tanggal Selesai:</strong> {campaign.tanggalSelesai}</p>
                          <p><strong>No Telepon:</strong> {campaign.noTelepon}</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
              )}
              </div>
    </DashboardLayout>
  );
};

export default DataCampaign;
