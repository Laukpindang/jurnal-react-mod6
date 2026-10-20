function App() {
  const nama = "Ferdiansyah Gunawan"
  const jam = 9

  return (
    <>
      <h1 className="judul" style={{color: 'GrayText'}}>Kantin {nama}</h1>
      <p>{jam < 12 ? "Selamat pagi" : "Selamat siang"}</p>
      <p>Saldo awal kartu kantin: Rp {53 * 1000}</p>
      <button disabled>Bayar</button>
    </>
  )
}

export default App
