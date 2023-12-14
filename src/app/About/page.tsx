
import React from 'react';
import AboutComp from 'components/AboutComponent';
import Header from "components/header";
import Footer from "components/footer";


export const metadata: Metadata = {
  title: 'О нас',
  description: 'Лучшие провайдеры',
}

const about: React.FC = () => {
    return (
    <div>
      <Header/>
       <AboutComp/>
       <Footer/>
     </div>
  );

};
export default about;

