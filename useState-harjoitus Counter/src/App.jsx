import { useState } from "react";
import Kasvatus from "./kasvatus";
import Vahennys from "./vahennys";
import Nollaus from "./nollaus";
import TuplaKasvatus from "./tuplakasvatus";
import Naytto from "./naytto";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>

      <Naytto count={count} />

      <Kasvatus setCount={setCount} count={count} />
      <Vahennys setCount={setCount} count={count} />
      <TuplaKasvatus setCount={setCount} count={count} />
      <Nollaus setCount={setCount} />
    </div>
  );
}

export default App;