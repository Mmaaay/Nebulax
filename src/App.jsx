import "./App.css";
import Emailpart from "./components/Emailpart";
import Mainpart from "./components/Mainpart";
import Navbar from "./components/Navbar";
import Resultpart from "./components/Resultpart";
import Storepart from "./components/Storepart";
import Subpart from "./components/Subpart";

function App() {
  return (
    <body className="w-full h-full p-0 m-0 bg-white -z-20">
      <Navbar />
      <Mainpart />
      <Subpart />
      <Storepart />
      <Resultpart />
      <Emailpart />
    </body>
  );
}

export default App;
