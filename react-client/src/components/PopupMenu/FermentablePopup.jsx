import React from 'react';
import popup from 'reactjs-popup';
import {
  ListTable,
  ListWrapper,
  Ltd,
  SubmissionButtonModal
} from '../../Styled/styledComps.jsx';
class FermentablePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fermentablesList: [{number: 1, name:'2-row', amount: '5lb', color: '40 L', gravity: '1.040-1.046',abv: '4-5%', percentage: '5%'}],
      newFermentableClick: false
    };
  }
  componentDidMount() {
    console.log('clickedthemodal');
  }
  addNewClickHandler(){
    this.setState({newFermentableClick:!this.state.newFermentableClick})
  }
  render() {
    let body;
    if(!this.state.newFermentableClick){
      body=(<ListTable>
        {this.state.fermentablesList.map(fermentable=>{
          return(
            <tr>
              {Object.keys(fermentable).map(fermentableProperty=>{
                return(<Ltd>{fermentable[fermentableProperty]}</Ltd>)
              })}
            </tr>
          )
        })}
      </ListTable>)
    }else{
      body=(<form>
        Insert Name:
        <input id='name' type='text' />
      </form>)
    }
    return (<div style={{ height: '450px', width: '600px'}}>
      {body}
      <SubmissionButtonModal style={{float: 'left'}}>Add Fermentable</SubmissionButtonModal>
      <SubmissionButtonModal onClick={this.addNewClickHandler.bind(this)}style={{float: 'right'}}>Add New Fermentable</SubmissionButtonModal>
    </div>);
  }
}
export default FermentablePopup;
