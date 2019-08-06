import React from 'react';
import ListItem from '../listItems/ListItem.jsx';
import {ListWrapper} from '../Styled/styledComps.jsx';
const Yeast = (props) => (
  <div>
    <ListWrapper>
    <h4> Yeast: </h4>
    <h3>#   YeastName    Vol     Cells      Attenuation range     Cells/ml/P</h3>
    <div className='yeastList'>
      <span classname='number recipe'>1</span>
      <span classname='yeastname recipe'>Name</span>
      <span classname='vol recipe'>Vol</span>
      <span classname='cells recipe'>cells</span>
      <span classname='attenuation recipe'>attenuation</span>
      <span classname='celldensity recipe'>cell density</span>
    </div>
    </ListWrapper>
  </div>
)

export default Yeast;