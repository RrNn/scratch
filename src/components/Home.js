import React from 'react';
import { trackSports } from '../App';
const Home = () => {
  return (
    <div className="App">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
        recusandae ea repudiandae voluptates cum omnis, quos accusantium
        laboriosam illo optio ipsam maxime tenetur repellat a rerum, reiciendis
        perspiciatis laudantium deserunt accusamus animi nisi. Natus ipsam
        nostrum voluptatem repellendus animi tempora.
      </p>
      <button onClick={trackSports}>SPORTS</button>
    </div>
  );
};

export default Home;
