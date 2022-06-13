import "./App.css";

function App() {
  let list = [];

  function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;

    return "#" + r + g + b;
  }

  for (let index = 0; index < 63; index++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const hex = RGBToHex(r, g, b);
    console.log(hex);
    console.log(r + " " + g + " " + b);
    list.push(
      <div
        className="divs"
        style={{ backgroundColor: `${hex}` }}
      >
        <span className="hex-text">{hex}</span>
      </div>
    );
  }
  return (
    <>
      <header className="header">
		<h2>Colorify</h2>
		<h2 className="refresh" onClick={(e) => {
			window.location.reload(false);
		}}>Refresh</h2>
	  </header>
      <div className="main">{list}</div>
	  <footer>
		<p>	&#169; 2022 Colorify - Made with ❤️</p>
	  </footer>
    </>
  );
}

export default App;
