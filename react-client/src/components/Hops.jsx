import React from 'react';
import ListItem from './ListItem.jsx';
import {ListWrapper} from '../Styled/styledComps.jsx';

const Hops = (props) => (
  <div>
    <ListWrapper>
    <h4> Hops: </h4>
    <h3>#   HopName    amount     alpha      beta     ibu  %   time   util</h3>
    <div className='yeastList'>
      <span classname='number recipe'>1</span>
      <span classname='hopname recipe'>Name</span>
      <span classname='amount recipe'>hopamount</span>
      <span classname='alpha recipe'>alpha</span>
      <span classname='beta recipe'>beta</span>
      <span classname='ibu recipe'>ibu</span>
      <span classname='percentIBU recipe'>%</span>
      <span classname='timehops recipe'>time</span>
      <span classname='utilization recipe'>utilization</span>
    </div>
    </ListWrapper>
  </div>
  
)

export default Hops;