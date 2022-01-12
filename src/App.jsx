import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AOS from "aos";
import { AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";
import {UserContext} from './UserContext';
import {useState} from 'react';
import Cadastro from "./Pages/Cadastro";

function App (){
    const [contextValue, setContextValue] = useState("");

    AOS.init();
    return (
      <>
        <AnimatePresence exitBeforeEnter>

        <UserContext.Provider value={{contextValue, setContextValue}}>
          <Routes>

              <Route path='*' element={<Home />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/cadastro" element={<Cadastro />} />

          </Routes>
        </UserContext.Provider>
        
        </AnimatePresence>
      </>
    );
}
export default App;
