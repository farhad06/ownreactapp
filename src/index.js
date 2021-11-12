import React from "react";
import Reactdom from "react-dom";
import Car from "./reactprops";
// start example of JSX and Rendaring
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
/* function Clock() {
  const element1 = (
    <div>
      <h1>India</h1>
      <h2>IST is : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  Reactdom.render(element1, document.getElementById("root"));
}
setInterval(Clock,1000); */
// end example of JSX and Rendaring
// start example of component and element
// function component
function Timeset({ local }) {
  return (
    <div>
      <h1>India (Kolkata)</h1>
      <h2>IST is : {new Date().toLocaleTimeString(local)}</h2>
    </div>
  );
}
Reactdom.render(<Timeset local="bn-BD" />, document.getElementById("root"));
/* In a function the total function is called react component and return parts is called element */
// class component
class Clock extends React.Component {
  render() {
    // console.log(this.props);
    const { locale, children } = this.props;
    return (
      <div>
        <h1>Murshidabad</h1>
        <h2>
          Local {children} is:
          {new Date().toLocaleTimeString(locale)}
        </h2>
      </div>
    );
  }
}
Reactdom.render(
  <Clock locale="bn-BD">time</Clock>,
  document.getElementById("root")
);
// run imported page element
const ownelement = <Car brand="Audi" />;
Reactdom.render(ownelement, document.getElementById("root"));
