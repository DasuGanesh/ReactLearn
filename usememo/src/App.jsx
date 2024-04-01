// useMemo
import { useMemo, useState } from "react";


function App(){

  const[counter, setCounter] = useState(1);

  let num1 = 2;
  let num2 = 30;

  let sum = useMemo(
    ()=>{
      return num1+num2
    },[num1,num2]
  )

  return(
    <>
    <button onClick={
      ()=>{
        setCounter(counter+1)
      }
    }>update counter</button>

    <h1>Counter:{counter}</h1>

    <h1>Sum:{sum}</h1>
    </>
  )
}
export default App;