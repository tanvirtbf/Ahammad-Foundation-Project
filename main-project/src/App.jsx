import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title />
        <Programs />
      </div>
    </>
  );
}

export default App;
