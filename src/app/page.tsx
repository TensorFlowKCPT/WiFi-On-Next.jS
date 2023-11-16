// pages/index.tsx
import React from "react";
import Header from "components/header"; 
import Top from "components/Top";
import Providers from "components/providers";
import Tariffs from "components/tariffs";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Top />
      <Providers />
      <Tariffs />
    </div>
  );
};

export default Home;