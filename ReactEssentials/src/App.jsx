//*importing images
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]}></CoreConcepts>
          <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>
          <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>
          <CoreConcepts
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
          ></CoreConcepts>
        </ul>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect("components")}>
            components
          </TabButton>
          <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
        </menu>
      </section>
    </div>
  );
}

export default App;
