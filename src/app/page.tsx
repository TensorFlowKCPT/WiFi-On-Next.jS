import React from "react";
import Header from "components/header"; 
import Footer from "components/footer"; 
import Top from "components/Top";
import Providers from "components/providers";
import Tariffs from "components/tariffs";
import ReviewsList from "components/reviewContainer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Top />
      <Providers />
      <Tariffs />
      <ReviewsList />
      <Footer/>
    </div>
  );
};

export default App;
