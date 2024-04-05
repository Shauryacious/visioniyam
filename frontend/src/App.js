import Home from "./component/Home.js";
import NevBar from "./component/NevarBar.js";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");
  const [bgcolor, setBgColor] = useState("white");
  return (
    <>
     <div style={{ color: color, backgroundColor: bgcolor, width: "100%", height: "100%", border: "solid", borderColor: bgcolor ,width:"100%"}}>
     <NevBar setColor={setColor} setBgColor={setBgColor} color={color} bgcolor={bgcolor} />
     <section>
     <Home color={color} bgcolor={bgcolor}  />
       </section>
       </div>
    </>
  );
}

export default App;
