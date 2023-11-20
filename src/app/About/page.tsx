
import React from 'react';
import AboutComp from 'components/AboutComponent';


export const metadata: Metadata = {
  title: 'О нас',
  description: 'Лучшие провайдеры',
}

const about: React.FC = () => {
    return (
         <AboutComp/>
  );

};
export default about;

