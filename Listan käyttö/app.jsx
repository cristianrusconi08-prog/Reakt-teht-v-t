import Infolista from "./infolista";

function App() {
  const tiedot = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h1>Teknologiat</h1>
      <Infolista taulukko={tiedot} />
    </div>
  );
}

export default App;