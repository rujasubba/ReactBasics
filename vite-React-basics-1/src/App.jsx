import { useState } from "react";
import Greetings from "./components/Greetings";
import Name from "./components/Name";
import  {Address}  from "./components/Name";
function App (){

  const [name, setName] = useState("Ruja Subba");

  const [greetings, setGreetings] = useState("Hi! good morning.");


  return(
    <div className="content">
      <Name 
         name={name}
      />
      <Greetings 
         greet = {greetings}
      />
      
      
      <button onClick={() => setGreetings("BYE")}>Greetings</button>
    </div>
  );
}
export default App;
