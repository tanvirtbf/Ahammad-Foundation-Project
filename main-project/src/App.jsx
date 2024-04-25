import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Programs from "./components/programs/Programs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
      </div>
    </>
  );
}

export default App;
