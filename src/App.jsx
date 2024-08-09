import { Navbar } from "./Components/Navbar";
import "./App.css";
import { Hero } from "./Components/Hero/Hero";
import { Company } from "./Components/Company/Company";
import { Services } from "./Components/Services/Services";
import { Destination } from "./Components/Destination/Destination";
import { TravelPoint } from "./Components/TravelPoint/TravelPoint";
import { KeyFeature } from "./Components/Keyfeature/KeyFeature";
import { Review } from "./Components/Review/Review";
import { Subscribe } from "./Components/Subscribe/Subscribe";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      {/* <h1>This is Simple react project</h1> */}
      <div className="container">
        <Navbar />
        <Hero />
        <Company />
        <Services />
        <Destination />
        <TravelPoint />
        <KeyFeature />
        <Review />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
