import { useState } from "react";
import Greetings from "./components/Greetings";
import Name from "./components/Name";
import  {Address}  from "./components/Name";
function App (){

  const [name, setName] = useState("Dipak Jabegu");

  const [address, setAddress] = useState('');

  const [greetings, setGreetings] = useState("Hey! How are You?.");


  return(
    <div className="content">
      <Name 
         name={name}
      />
      <Greetings 
         greet = {greetings}
      />
      
      
      <button onClick={() => setGreetings("GUDBYE")}>Greetings</button>
    <p>{address}</p>
    </div>
  );
}
export default App;
