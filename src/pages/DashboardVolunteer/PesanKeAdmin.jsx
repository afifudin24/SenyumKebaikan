import React from "react";
import DashboardVolunteerLayout from "../../components/DashboardVolunteerLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
const PesanKeAdmin = () => {
    return (
        <div>
            <DashboardVolunteerLayout>
                <ChatComponent />
            </DashboardVolunteerLayout>
        </div>
    );
}

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { sender: "volunteer", text: "Alhamhamdulillah sebagian barang telah berhasil didistribusikan. Namun ada kendala ke lokasi penerima lainnya. Mohon dibantu", time: "12:30 pm" },
    { sender: "admin", text: "Baik kami akan mencoba menghubungi pihak terkait untuk membantu anda. Mohon ditunggu", time: "12:30 pm" },
    { sender: "volunteer", text: "Sudah dapat informasi baru dari lokasi?", time: "12:32 pm" },
    { sender: "admin", text: "Belum, kami masih menunggu konfirmasi.", time: "12:33 pm" },
    { sender: "volunteer", text: "Baik, mohon kabarin secepatnya ya", time: "12:34 pm" },
    { sender: "admin", text: "Siap, akan kami prioritaskan.", time: "12:35 pm" },
    { sender: "volunteer", text: "Terima kasih banyak 🙏", time: "12:36 pm" },
    { sender: "admin", text: "Sama-sama, tetap semangat!", time: "12:36 pm" },
    { sender: "volunteer", text: "Update terakhir dari posko sudah kami kirim via email.", time: "12:37 pm" },
    { sender: "admin", text: "Sudah kami terima, terima kasih.", time: "12:38 pm" }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      const newMsg = {
        sender: "volunteer",
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="w-9/12 p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-4 text-primary">Pesan Ke Admin</h2>
      <div className="overflow-y-auto space-y-2 mb-4" style={{ height: 'calc(100vh - 200px)' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs p-2 rounded-lg text-sm ${
              msg.sender === "volunteer"
                ? "bg-gray-100 text-gray-800 self-end ml-auto"
                : "bg-primary text-white self-start"
            }`}
          >
            <p>{msg.text}</p>
            <div className="text-[10px] text-right mt-1">{msg.time}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1 text-sm"
          placeholder="Kirim Pesan..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-emerald-800 text-white px-4 py-1 rounded text-sm"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default PesanKeAdmin;