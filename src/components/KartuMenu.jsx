import LabelHarga from "./LabelHarga";
import { useState } from "react";

export default function KartuMenu({ nama, harga, kategori = "Makanan" }) {
  const [catatan, setCatatan] = useState("");
  const [jumlah, setJumlah] = useState(0);

  function tambah() {
    setJumlah((prev) => prev+=1);
  }

  return (
    <div className="kartu">
      <h3>{nama}</h3>
      <p>{kategori}</p>
      <LabelHarga nilai={harga} />
      <button
        disabled={jumlah === 0}
        onClick={() => setJumlah((prev) => prev-=1)}
      >
        -
      </button>
      <span> {jumlah} </span>
      <button onClick={tambah}>+</button>
      <p>
        {jumlah === 0 ? "Belum Dipesan" : `Subtotal: Rp. ${jumlah * harga}`}
      </p>
      {jumlah >= 5 && <span className="badge">Pesanan banyak</span>}
      <label>
        Catatan Pesanan
        <input
          type="text"
          value={catatan}
          onChange={(e) => setCatatan(e.target.value)}
        />
      </label>
      <p>Catatan: {catatan}</p>
    </div>
  );
}
