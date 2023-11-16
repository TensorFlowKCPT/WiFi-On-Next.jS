// pages/index.tsx
import React from "react";
import Header from "components/header"; 
import Top from "components/Top";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Top />
    </div>
  );
};

export default Home;