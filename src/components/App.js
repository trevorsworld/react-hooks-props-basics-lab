import React from 'react';
import Home from './Home';
import About from './About';


//pass this data down ad props to the chid component(s) that need it!
import user from "..data/user";
console.log(user);

function App() {
  return (
  <div>
    <NavBar />
    <Home name = {user.name} city = {user.city} color = {user.color} />
    <About bio = {user.bio}  link = {user.links} />
  </div>
  );
}

export default App;