import "./App.css";
import Home from "./Pages/Home";
import AOS from "aos";
import { AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";
function App() {
  AOS.init();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Home />
      </AnimatePresence>
    </>
  );
}
export default App;
