import React from 'react';
import { CovidSupplies } from './Components/CovidSupplies';
import { GetBestPrice } from './Components/GetBestPrice';
import { Help } from './Components/Help';
import { Home } from './Components/Home';
import { IMShopping } from './Components/IMShopping';
import { Messages } from './Components/Messages';
import { NavbarLink } from './Components/NavbarLink';
import { Sell } from './Components/Sell';
import { Routes, Route } from 'react-router-dom';
import { NoMatchFound } from './Components/NoMatchFound';
import { InputSearched } from './Components/InputSearched';

const Navbar = () => {
  return (
    <>
      <NavbarLink />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inputsearched' element={<InputSearched />} />
        <Route path='/getbestprice' element={<GetBestPrice />} />
        <Route path='/imshpping' element={<IMShopping />} />
        <Route path='/covidsupplies' element={<CovidSupplies />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/help' element={<Help />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='*' element={<NoMatchFound />} />
      </Routes>
    </>
  );
};
export { Navbar };
