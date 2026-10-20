export default function Panel({ judul, children }) {
  return (
    <div className="panel">
      {judul && <h1 className="judul">{judul}</h1>}
      {children}
    </div>
  );
}
