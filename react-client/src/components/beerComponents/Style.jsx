import React from 'react';
import ListItem from '../listItems/ListItem.jsx';
import {ListWrapper} from '../Styled/styledComps.jsx';
const Style = (props) => (
  <div>
    <ListWrapper>
    <h4> Style: </h4>
    <h3>Name  color  abv-range gravity-range   bitterness-range  attenuation-range</h3>
    <div className='styleList'>
      <span classname='styleName recipe'>Name</span>
      <span classname='styleColor recipe'>stylecolor</span>
      <span classname='styleABV recipe'>styleABV</span>
      <span classname='styleGravity recipe'>styleGravity</span>
      <span classname='styleBitterness recipe'>styleBitterness</span>
      <span classname='styleAttenuation recipe'>styleAtten</span>
    </div>
    </ListWrapper>
  </div>
)

export default Style;