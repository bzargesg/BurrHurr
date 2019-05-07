import React from 'react';
import ReactDOM from 'react-dom';
import {NavBarList,NavBarItem} from '../Styled/styledComps.jsx'
var TopBar = function (){
  return (
    <NavBarList>
      <NavBarItem>
        Home
      </NavBarItem>
      <NavBarItem>
        Calculators
      </NavBarItem>
      <NavBarItem>
        Recipe Maker
      </NavBarItem>
      <NavBarItem>
        Recipe Guide
      </NavBarItem>
    </NavBarList>
  )
}
export default TopBar;