//import { Button } from "../components/button";

import { useState } from "react";
import { CicloDeVida } from "../components/CicloDeVida";
// import { Efectos } from "../components/Efectos";

//import { Counter } from "../components/Counter";
//import { Form } from "../components/Form";
// import { Form2 } from "../components/Form2";
export const HomePages = () => {
  const [view, setView] = useState(false)
  return (
    <div className="dark-bg">
      {/* <Counter /> */}
      {/* <Form2 /> */}
      {/* <Efectos/> */}
      <button onClick={()=>{
        setView(!view)
      }}>Toggle</button>
      {
        view ? <CicloDeVida/> : null
      }
      
    </div>
  );
};
