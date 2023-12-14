
import React from 'react';
// @ts-ignore
import AboutComp from 'components/AboutComponent';
// @ts-ignore
import Header from "components/header";
// @ts-ignore
import Footer from "components/footer";

// @ts-ignore
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

