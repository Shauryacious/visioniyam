import Home from "./component/Home.js";
import How from "./component/How.js";
import NevBar from "./component/NevarBar.js";
import { useState } from "react";
import Footer from "./component/footer.js";
import Readocs from "./component/ReadDocs.js";
import About from './component/About.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from "./component/Signin.js";
import Login from "./component/Login.js";
function App() {
  const [color, setColor] = useState("white");
  const [bgcolor, setBgColor] = useState("black");
  const[islogin,changeislogin]=useState(false);
  return (
    <>
    <BrowserRouter>
     <div style={{ color: color, backgroundColor: bgcolor, width: "100%", height: "100%", border: "solid", borderColor: bgcolor ,width:"100%"}}>
     <NevBar setColor={setColor} setBgColor={setBgColor} color={color} bgcolor={bgcolor} islogin={islogin} changeislogin={changeislogin} />
     <Routes>
      <Route path='/' element={<Home islogin={islogin}></Home>}></Route>
      <Route path="/how" element={<How></How>}></Route>
      <Route path='/about' element={<About color={color} bgcolor={bgcolor}></About>}></Route>
      <Route path="/docs" element={<Readocs color={color} bgcolor={bgcolor}></Readocs>}></Route>
      <Route path="/signeup" element={<Signin changeislogin={changeislogin}></Signin>}></Route>
      <Route path="/login" element={<Login changeislogin={changeislogin}></Login>}></Route>
     </Routes>
     <Footer></Footer>
     </div>
       </BrowserRouter>
    </>
  );
}

export default App;
