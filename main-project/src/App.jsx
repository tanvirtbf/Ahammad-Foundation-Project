import About from "./components/about/About";
import Campus from "./components/campus/Campus";
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
        <Title subTitle='Our Program' title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='Ahammad Foundation' title='Our Gallery' />
        <Campus />
      </div>
    </>
  );
}

export default App;
