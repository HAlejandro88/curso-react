import React from 'react';
import TarjetaFruta from './components/TarjetaFruta';

const App = () => (
  <div>
    <TarjetaFruta name={'sandia'} price={5.00}></TarjetaFruta>
    <TarjetaFruta name={'sandia'} price={1.50}></TarjetaFruta>
    <TarjetaFruta name={'kiw¡'} price={3.30}></TarjetaFruta>
  </div>
)

export default App