import "./App.css";
import RoutesConfiguration from "./components/RoutesConfiguration/RoutesConfiguration.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContactButton from "./components/ContactButton/ContactButton";

function App() {
  return (
    <div className="flex flex-col min-h-screen App w-full">
    
      <RoutesConfiguration />

      <div className="flex-grow ">
        <Footer />
      </div>
      <ContactButton />
    </div>
  );
}

export default App;
