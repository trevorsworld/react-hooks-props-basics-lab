import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "../components/Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";


function App() {
  return (
    <div>
      <NavBar />
      <Home color = {user.color} name = {user.name} city = {user.city}/>
      <About />
      <Links />
    </div>
  );
}

export default App;