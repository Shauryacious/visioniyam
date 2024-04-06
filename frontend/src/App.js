import Home from "./component/Home.js";
import How from "./component/How.js";
import NevBar from "./component/NevarBar.js";
import { useState } from "react";
import Footer from "./component/footer.js";
import Readocs from "./component/ReadDocs.js";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const [color, setColor] = useState("white");
  const [bgcolor, setBgColor] = useState("black");
  return (
    <>
    <BrowserRouter>
     <div style={{ color: color, backgroundColor: bgcolor, width: "100%", height: "100%", border: "solid", borderColor: bgcolor ,width:"100%"}}>
     <NevBar setColor={setColor} setBgColor={setBgColor} color={color} bgcolor={bgcolor} />
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path="/how" element={<How></How>}></Route>
      <Route path="/docs" element={<Readocs color={color} bgcolor={bgcolor}></Readocs>}></Route>
     </Routes>
     <Footer></Footer>
     </div>
       </BrowserRouter>
    </>
  );
}

export default App;
