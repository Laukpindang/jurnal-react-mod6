import KartuMenu from "./components/KartuMenu"
import Panel from "./components/Panel"

function App() {
  const nama = "Ferdiansyah Gunawan"
  const jam = 9

  return (
    <>
      <h1 className="judul" style={{color: 'GrayText'}}>Kantin {nama}</h1>
      <p>{jam < 12 ? "Selamat pagi" : "Selamat siang"}</p>
      <p>Saldo awal kartu kantin: Rp {53 * 1000}</p>
      <button disabled>Bayar</button>
      <Panel judul="Menu hari ini">
        <KartuMenu nama="Nasi Ayam Geprek" harga={13700} />
        <KartuMenu nama="Es Teh Lemon" harga={6000} kategori="Minuman" />
        <KartuMenu nama="Mie Goreng Telur" harga={12000} />
      </Panel>
    </>
  )
}

export default App
