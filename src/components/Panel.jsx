export default function Panel({ judul, children }) {
  return (
    <div className="panel">
      {judul && <h1>{judul}</h1>}
      <div className="daftar">{children}</div>
    </div>
  );
}
