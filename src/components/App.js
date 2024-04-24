import React from 'react';
import Home from './Home';
import About from './About';
import Links from './Links'; 

class App extends React.Component {
  render() {
    const user = {
      name: 'John Doe',
      bio: 'A passionate developer',
      github: 'https://github.com/Liz',
      linkedin: 'https://linkedin.com/in/Liz'
    };

    return (
      <div>
        <Home user={user} />
        <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
      </div>
    );
  }
}

export default App;