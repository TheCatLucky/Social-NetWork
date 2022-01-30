import  { FC } from 'react';
import preloader from '../../../img/three-dots.svg';

const Preloader:FC = () => {
  return (
    <img src={preloader} alt="preloader"/>
  )
}

export default Preloader;