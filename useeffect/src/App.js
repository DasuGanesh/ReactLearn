// useEffect()
import { useEffect, useState } from "react";
import TestEffect from "./TestEffect";
import './App.css' 
function App(){
 let [product,updateProduct]  =useState([]);

 useEffect(() => {
    //Runs only on the first render
    getProducts()
  }, []);

 async function getProducts(){
    let res = await fetch("https://fakestoreapi.com/products")
    let a = await res.json()
    // console.log(res)
    // console.log(a)
    updateProduct(a)
 }

    if(product.length == 0){
        return(<h2>Fetching data</h2>)
    }

    return(
        // product.map((p)=>
        //     // <TestEffect key={p.id} name={p.title} price={p.price}></TestEffect>
        //     <TestEffect {...p}></TestEffect>
        // )

        <>
        <div className="product-list">
            {
                product.map((p)=><TestEffect {...p} key={p.id}></TestEffect>)
            }
        </div>
        </>
      )
}

export default App;

// usEffect() vs useMemo()
    // import { useEffect, useMemo, useState } from "react"

    // function App(){

    // let [effect, setEffect] = useState(0);
    // let [memo, setMemo] = useState(0)

    // useEffect(
    //   ()=>{
    //     console.log("this is useEffect" +effect)
    //   },[effect])

    //   useMemo(
    //     ()=>{
    //       console.log("this is useMemo" +memo)
    //     },[memo])

    //   return(
    //     <>
    //     <center>
    //       <button onClick={()=>{setEffect(effect+1)}}>useEffect Increment</button>
    //       <button onClick={()=>{setMemo(memo+1)}}>useMemo Increment</button>
    //     </center>
    //     </>
    //   )
    // }

    // export default App;
