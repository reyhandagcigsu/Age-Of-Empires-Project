import React from "react";
import "../styles/styles.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 > Home Page</h1>
      <img
        src="https://cdn.akamai.steamstatic.com/steam/apps/1017900/capsule_616x353.jpg?t=1605737984"
        className="img-fluid shadow-4"
        alt=""
      />
    </div>
  );
};
export default Home;
