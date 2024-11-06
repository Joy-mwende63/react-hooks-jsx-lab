// import React from "react";
// import { name, city } from "../data/data.js";

// function Home() {
//   // update the JSX being returned!
//   return <div>Home</div>;
// }

// export default Home;

import React from 'react';

// Assuming you have variables `name` and `city` defined in your Home.js
const name = 'Liza';  // Replace with your actual name
const city = 'New York';  // Replace with your actual city

const Home = () => {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
};

export default Home;

