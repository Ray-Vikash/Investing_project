import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";
function App() {
const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

const inputValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (<>
  
  <Header />
  <Input onChange = {handleChange} userInput={userInput}/>
  {inputValid ? <Results input={userInput}/>: <center>Please inter the correct Value!</center>}
  </>
    
  )
}

export default App
