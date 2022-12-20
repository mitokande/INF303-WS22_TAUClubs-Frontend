
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Club from "./page/Club";
import Clubs from "./page/Clubs";
import Login from "./page/Login";
import Events from './page/Events';
import JoinUs from './page/JoinUs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/Clubs" element={<Clubs />} />
        <Route path="/Clubs/:id" element={<Club />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Clubs" element={<Club />} />
        <Route path="/Event" element={<Events />} />
        <Route path="/JoinUs" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  
  );
}
//export default App;
//export default App;