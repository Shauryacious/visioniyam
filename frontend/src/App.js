import Home from "./component/Home.js";
import How from "./component/How.js";
import NevBar from "./component/NevarBar.js";
import { useState } from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const [color, setColor] = useState("black");
  const [bgcolor, setBgColor] = useState("white");
  return (
    <>
    <BrowserRouter>
     <div style={{ color: color, backgroundColor: bgcolor, width: "100%", height: "100%", border: "solid", borderColor: bgcolor ,width:"100%"}}>
     <NevBar setColor={setColor} setBgColor={setBgColor} color={color} bgcolor={bgcolor} />
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path="/how" element={<How></How>}></Route>
     </Routes>
     </div>
       </BrowserRouter>
    </>
  );
}

export default App;
