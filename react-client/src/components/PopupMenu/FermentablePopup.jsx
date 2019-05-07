import React from 'react';
import popup from 'reactjs-popup';
import FermentableListItem from './FermentableListItem.jsx'
import {
  ListTable,
  ListWrapper,
  Ltd,
  SubmissionButtonModal,
  ListTableHeader
} from '../../Styled/styledComps.jsx';
class FermentablePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fermentablesList: [],
      newFermentableClick: false,
      name: '',
      gravity_potential: '',
      diastatic_power: '',
      total_protein: 0,
      moisture: '',
      color: '',
      extract_differential: '',
      extract_fine_grind: '',
      extract_coarse_grind: '',
      notes: ''
    };
    this.addFermentableToDB = this.addFermentableToDB.bind(this);
    this.changeField = this.changeField.bind(this);
    this.rowClick = this.rowClick.bind(this);
  }
  componentDidMount() {
    this.updateList();
  }
  updateList(){
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/burrhurr/fermentables', options)
      .then(fermentablesRes => {
        return fermentablesRes.json();
      })
      .then(fermentables => {
        this.setState({ fermentablesList: fermentables });
      });
  }
  addNewClickHandler() {
    this.setState({ newFermentableClick: !this.state.newFermentableClick });
  }
  addFermentableToDB(e) {
    let fermentableToInsert = {};
    e.preventDefault();
    let colNames = [
      'color',
      'diastatic_power',
      'extract_coarse_grind',
      'extract_differential',
      'extract_fine_grind',
      'gravity_potential',
      'moisture',
      'name',
      'notes',
      'total_protein'
    ];
    colNames.forEach(col => {
      fermentableToInsert[col] = this.state[col];
    });
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fermentableToInsert)
    };
    fetch('/burrhurr/fermentables',options).then(()=>{
      this.updateList();
      this.setState({ newFermentableClick: !this.state.newFermentableClick });
    })
  }

  changeField(e) {
    e.preventDefault();
    let fieldObj = {};
    let colNames = [
      'extract_coarse_grind',
      'extract_differential',
      'extract_fine_grind'
    ];
    if (e.target.id === 'name' || e.target.id === 'notes') {
      fieldObj[e.target.id] = e.target.value;
    } else {
      fieldObj[e.target.id] = Number(e.target.value);
    }
    this.setState(fieldObj);
  }
  rowClick(stuff){
    console.log(stuff);
  }
  render() {
    let body;
    if (!this.state.newFermentableClick) {
      body = (
        <ListTable>
          <tr>
            <ListTableHeader>Name</ListTableHeader>
            <ListTableHeader>Gravity Potential</ListTableHeader>
            <ListTableHeader>Diastatic Power</ListTableHeader>
            <ListTableHeader>Total Protein</ListTableHeader>
            <ListTableHeader>Moisture</ListTableHeader>
            <ListTableHeader>Color</ListTableHeader>
            <ListTableHeader>Extract Differential</ListTableHeader>
            <ListTableHeader>Extract Fine Grind</ListTableHeader>
            <ListTableHeader>Extract Coarse Grind</ListTableHeader>
            <ListTableHeader>Notes</ListTableHeader>
          </tr>
          {this.state.fermentablesList.map(fermentable => {
            return <FermentableListItem fermentableItem={fermentable} rowClick={this.rowClick}/>;
          })}
        </ListTable>
      );
    } else {
      body = (
        <form>
          Name:
          <input id="name" onChange={this.changeField} type="text" />
          Gravity Potential:
          <input
            id="gravity_potential"
            onChange={this.changeField}
            type="text"
          />
          Diastatic Power:
          <input id="diastatic_power" onChange={this.changeField} type="text" />
          Total Protein:
          <input id="total_protein" onChange={this.changeField} type="text" />
          Moisture:
          <input id="moisture" onChange={this.changeField} type="text" />
          Color:
          <input id="color" onChange={this.changeField} type="text" />
          Extract Differential:
          <input
            id="extract_differential"
            onChange={this.changeField}
            type="text"
          />
          Extract Fine Grind:
          <input
            id="extract_fine_grind"
            onChange={this.changeField}
            type="text"
          />
          Extract Coarse Grind:
          <input
            id="extract_coarse_grind"
            onChange={this.changeField}
            type="text"
          />
          Notes:
          <input id="notes" onChange={this.changeField} type="text" />
        </form>
      );
    }
    return (
      <div style={{ height: '50%', width: '66%' }}>
        {body}
        {(() => {
          if (!this.state.newFermentableClick) {
            return (
              <SubmissionButtonModal style={{ float: 'left' }}>
                Add Fermentable
              </SubmissionButtonModal>
            );
          } else {
            return (
              <SubmissionButtonModal
                onClick={this.addFermentableToDB}
                style={{ float: 'left' }}
              >
                Add
              </SubmissionButtonModal>
            );
          }
        })()}
        <SubmissionButtonModal
          onClick={this.addNewClickHandler.bind(this)}
          style={{ float: 'right' }}
        >
          Add New Fermentable
        </SubmissionButtonModal>
      </div>
    );
  }
}
export default FermentablePopup;
