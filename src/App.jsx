import KartuMenu from "./components/KartuMenu";
import Panel from "./components/Panel";

import { useState } from "react";

function App() {
  const nama = "Ferdiansyah Gunawan";
  const jam = 9;

  const [dataMenu, setDataMenu] = useState([
    { id: 1, nama: "Nasi Ayam Geprek", harga: 13700, kategori: "Makanan" },
    { id: 2, nama: "Es Teh Lemon", harga: 6000, kategori: "Minuman" },
    { id: 3, nama: "Mie Goreng Telur", harga: 12000, kategori: "Makanan" },
    { id: 4, nama: "Jus Alpukat", harga: 14000, kategori: "Minuman" },
    { id: 5, nama: "Bakso Urat", harga: 15000, kategori: "Makanan" },
  ]);

  function hapus(id) {
    setDataMenu((prev) => {
      return prev.filter((val) => val.id !== id);
    });
  }

  return (
    <>
      <h1 className="judul" style={{ color: "GrayText" }}>
        Kantin {nama}
      </h1>
      <p>{jam < 12 ? "Selamat pagi" : "Selamat siang"}</p>
      <p>Saldo awal kartu kantin: Rp {53 * 1000}</p>
      <button disabled>Bayar</button>
      <Panel
        judul={
          <>
            <p>Menu hari ini</p>
            <button
              onClick={() => {
                setDataMenu((prev) => {
                  const copy = [...prev];
                  return copy.reverse();
                });
              }}
            >
              Balik Urutan
            </button>
          </>
        }
      >
        {dataMenu.length > 0
          ? dataMenu.map((i) => (
              <KartuMenu
                key={i.id}
                nama={i.nama}
                harga={i.harga}
                kategori={i.kategori}
                hapus={() => hapus(i.id)}
              />
            ))
          : "Semua menu habis terjual"}
      </Panel>
    </>
  );
}

export default App;
