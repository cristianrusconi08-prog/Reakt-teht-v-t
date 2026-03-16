import Infolista from "./infolista";
import Linkkilista from "./linkkilista";

function App() {

  const tiedot = ["React", "JavaScript", "CSS"];

  const linkit = [
    { id: 1, nimi: "Google", url: "https://google.com" },
    { id: 2, nimi: "React", url: "https://react.dev" }
  ];

  return (
    <div>
      <h1>Listatehtävät</h1>

      <h2>Infolista</h2>
      <Infolista taulukko={tiedot} />

      <h2>Linkkilista</h2>
      <Linkkilista lista={linkit} />
    </div>
  );
}

export default App;