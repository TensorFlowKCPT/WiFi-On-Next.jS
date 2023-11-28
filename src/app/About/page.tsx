
import React from 'react';
// @ts-ignore
import AboutComp from 'components/AboutComponent';

// @ts-ignore
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

