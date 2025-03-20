import { useState, useEffect } from 'react';

export default function Main() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nama = e.target.nama.value;
    const umur = e.target.umur.value;

    const namaRegex = /^[a-zA-Z\s]+$/;
    const umurRegex = /^[0-9]+$/;

    if (!namaRegex.test(nama)) {
      setStatus('Nama cuma boleh huruf sama spasi, Senpai!');
      return;
    }
    if (!umurRegex.test(umur)) {
      setStatus('Umur cuma boleh angka, Senpai!');
      return;
    }
    if (!nama || !umur) {
      setStatus('Isi dulu nama sama umur, Senpai!');
      return;
    }

    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nama, umur }),
    });

    const data = await res.json();
    setStatus(data.message);
    if (res.ok) {
      e.target.reset();
    }
  };

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="no-select">Registered</h1>
      <p className="no-select">Masukkan nama sama umur kamu, Senpai!</p>
      <form id="daftarForm" onSubmit={handleSubmit}>
        <input type="text" id="nama" placeholder="Nama kamu" required />
        <input type="number" id="umur" placeholder="Umur kamu" required />
        <button type="submit">Kirim!</button>
      </form>
      <div id="status" className="no-select">{status}</div>
    </div>
  );
}
