import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [pets, setPets] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{pets.length} birthdays today</h3>
        <List pets={pets} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPets([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
