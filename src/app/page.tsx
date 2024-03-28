import Image from "next/image";
import { Navigation } from "../components/Navigation/index";
import { Home } from "../pages/HomePage";

export default function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Navigation />
      <Home />
    </div>
  );
}
