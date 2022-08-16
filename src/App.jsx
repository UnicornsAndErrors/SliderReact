
import Hero from "./components/Hero"
import Slider from "./components/Slider"
import beach1 from "./images/slika1.png"
import beach2 from "./images/slika2.png"
import beach3 from "./images/slika3.png"
import "./App.css"

const App = () => {
  return (
    <> {/* react fragment, kad nam ne treba div i nema nikakav prikaz,onda mozemo ovo staviti */}
      <Hero image={beach1} />
      <Slider image={beach2} title={"Lorem Ipsum"} subtitle={"Lorem ispum dolor"}/>
      <Slider image={beach3} title={"Lorem"} subtitle={"Lorem ispum"} flip={true}/>
    </>
  );
};

export default App;