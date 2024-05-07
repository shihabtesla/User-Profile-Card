import React from 'react';
import UserProfileCard from './UserProfileCard';

function App() {
  const user = {
    name: 'Matt Damon',
    avatar: 'https://www.indiewire.com/wp-content/uploads/2023/07/Matt-Damon-1.jpg?w=3000&h=1687&crop=1&resize=1200%2C675',
    biography: 'Matt Damon is an American actor, producer, and screenwriter known for his versatile performances in a wide range of film genres. He gained widespread recognition for his roles in movies like "Good Will Hunting," "The Bourne Identity" series, and "The Martian.'
  };

  return (
    <div className="App">
      <UserProfileCard name={user.name} avatar={user.avatar} biography={user.biography} />
    </div>
  );
}

export default App;
