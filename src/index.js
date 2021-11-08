import React from "react";
import ReactDom from "react-dom";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
const name = "Farhad Ahamed";
const element = <h1>Hello,{name}</h1>;
ReactDom.render(element, document.getElementById("root"));
reportWebVitals();
function userName(user) {
  return `${user.firstname} ${user.lastname}`;
}
const user = {
  firstname: "Dipu",
  lastname: "Mondal",
};
const ele = <h2>Hi!!!,{userName(user)}</h2>;
ReactDom.render(ele, document.getElementById("root"));
function tick() {
  const elemen = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDom.render(elemen, document.getElementById("root"));
}

setInterval(tick, 1000);
