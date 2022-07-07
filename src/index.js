import  ReactDOM  from "react-dom";


const root = document.querySelector("#root");
const returnH1 = (name)=>{
    return <h1>Hello, {name}</h1>
}



ReactDOM.render(returnH1("Gabriele"),root)