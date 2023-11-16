// pages/index.tsx
import React from "react";
import Header from "components/header"; 
import Top from "components/Top";
import Providers from "components/providers";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Top />
      <Providers />
    </div>
  );
};

export default Home;