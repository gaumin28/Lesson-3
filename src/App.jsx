import Search from "./components/Search";
import Status from "./components/Status";

function App() {
  return (
    <>
      <Search />
      <section className="section">
        <Status progress="To Do" number="3" />
      </section>
    </>
  );
}

export default App;
