import React from "react";

function Car(props) {
  const { brand } = props;
  return <h2>Car brand is : {brand} </h2>;
}
function Brand(props) {
  const { brands } = props;
  return <h2>Car brand is : {brands}</h2>;
}
function Garage() {
  return (
    <>
      <h1>In my garage</h1>
      <Brand brands="Marsities" />
    </>
  );
}
function Model(props) {
  console.log(props);
  const {model} =props;
  return <h3>Car brand is:{model}</h3>;
}
function Info() {
  const carInfo = { name: "FERARI", model: "Mustans" };
  return (
    <>
      <h1>This is my car</h1>
      <Model brand1={carInfo} />
    </>
  );
}

export default Car;
export { Garage, Info };
