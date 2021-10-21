import "./App.css";
import HeadersComponent from "./Components/HeadersComponents/HeadersComponents";
import AboutUs from "./Components/BodyComponents/AbouotUs";
import Portfolio from "./Components/BodyComponents/Portfolio";
import Contact from "./Components/BodyComponents/Contact";
import Footer from "./Components/BodyComponents/Footer";
// import Timeline from "./Components/BodyComponents/Timeline";

function App() {
  return (
    <div>
      <HeadersComponent />
      <AboutUs />
      <Portfolio />
      {/* <Timeline/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;