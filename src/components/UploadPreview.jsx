import React from "react";
import { useRef } from "react";
const UploadPreview = ({ label, file, setFile }) => {
    const fileInputRef = useRef(null);
  
    const handleFileChange = (e) => {
      const selected = e.target.files[0];
      if (selected && selected.type.startsWith("image/")) {
        setFile(selected); // ⬅️ Kembaliin ke parent
      }
    };
  
    const previewUrl = file ? URL.createObjectURL(file) : null;
  
    return (
      <div className="mb-4">
        <p className="mb-2 font-semibold text-gray-700">{label}</p>
        <div
          onClick={() => fileInputRef.current.click()}
          className="w-full h-40 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer overflow-hidden relative bg-white"
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <span className="text-sm text-center">Klik atau tarik file ke sini</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    );
  };
  

  export default UploadPreview