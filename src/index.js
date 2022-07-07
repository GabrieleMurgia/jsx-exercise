import  ReactDOM  from "react-dom";


const root = document.querySelector("#root");
const sum = (a,b)=>{
    return <h2>The sum is : {a+b}</h2>
}



ReactDOM.render(sum(18,22),root)