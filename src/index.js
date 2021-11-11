import React from "react";
import Reactdom from "react-dom";
// simple jsx
const element = <h1>Hello Jsx </h1>;
Reactdom.render(element, document.getElementById("root"));
// print dynamic name using jsx
const name = "Farhad";
const ele = <h1>Hi ! ! {name}</h1>;
Reactdom.render(ele, document.getElementById("root"));
// print dynamic name in jsx using function
function printName(user) {
  return `${user.fname} ${user.lname}`;
}
const user = {
  fname: "Rohit",
  lname: "Sharma",
};
const printNam = <h2>{printName(user)}</h2>;
Reactdom.render(printNam, document.getElementById("root"));
// example of rendaring
function Clock() {
  const element1 = (
    <div>
      <h1>India</h1>
      <h2>IST is : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  Reactdom.render(element1,document.getElementById("root"));
}
setInterval(Clock, 1000);
