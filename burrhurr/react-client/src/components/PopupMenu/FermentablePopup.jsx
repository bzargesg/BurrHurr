import React from 'react';
import FermentableListItem from './FermentableListItem.jsx';
import { ListTable, ListTableHeader } from '../../Styled/styledComps.jsx';
import { Button, ButtonToolbar, Form } from 'react-bootstrap';
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
      notes: '',
      additionSet: {}
    };
    this.addFermentableToDB = this.addFermentableToDB.bind(this);
    this.changeField = this.changeField.bind(this);
    this.rowClick = this.rowClick.bind(this);
    this.deleteClickHandler = this.deleteClickHandler.bind(this);
    this.updateList = this.updateList.bind(this);
    this.bodyRender = this.bodyRender.bind(this);
    this.addFermToRec = this.addFermToRec.bind(this);
  }
  componentDidMount() {
    this.updateList();
  }
  updateList() {
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
      if (col === 'gravity_potential' && typeof this.state[col] != 'number') {
        fermentableToInsert[col] =
          (this.state['extract_fine_grind'] / 100) * 46;
      } else {
        fermentableToInsert[col] = this.state[col];
      }
    });
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fermentableToInsert)
    };
    fetch('/burrhurr/fermentables', options).then(() => {
      this.updateList();
      this.setState({ newFermentableClick: !this.state.newFermentableClick });
    });
  }

  changeField(e) {
    e.preventDefault();
    let fieldObj = {};
    if (e.target.id === 'name' || e.target.id === 'notes') {
      fieldObj[e.target.id] = e.target.value;
    } else {
      fieldObj[e.target.id] = Number(e.target.value);
    }
    this.setState(fieldObj);
  }
  rowClick(clickedRow) {
    var testObj = this.state.additionSet;
    if (testObj[clickedRow.id]) {
      delete testObj[clickedRow.id];
      this.setState({ additionSet: testObj });
    } else {
      testObj[clickedRow.id] = clickedRow;
      this.setState({ additionSet: testObj });
    }
  }
  deleteClickHandler() {
    var promisArr = [];
    Object.keys(this.state.additionSet).map(delID => {
      let tempObj = {};
      tempObj['id'] = delID;
      let options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tempObj)
      };
      promisArr.push(fetch('/burrhurr/fermentables', options));
    });
    Promise.all(promisArr).then(() => {
      this.updateList();
    });
  }
  bodyRender() {
    let body = (
      <ListTable>
        <thead>
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
        </thead>
        <tbody>
          {this.state.fermentablesList.map(fermentable => {
            return (
              <FermentableListItem
                key={fermentable.id + 'fermentable'}
                fermentableItem={fermentable}
                rowClick={this.rowClick}
              />
            );
          })}
        </tbody>
      </ListTable>
    );
    if (this.state.newFermentableClick) {
      body = (
        <Form>
          <Form.Group controlId="grainNameInput">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              size="sm"
              id="name"
              placeholder="enter grain name"
              onChange={this.changeField}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="gravPotInput">
            <Form.Label>Gravity Potential:</Form.Label>
            <Form.Control
              size="sm"
              placeholder="enter gravity potential(PPG)/can also be calculated off of extract"
              id="gravity_potential"
              onChange={this.changeField}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="diastaticPowerInput">
            <Form.Label>Diastatic Power:</Form.Label>
            <Form.Control
              size="sm"
              placeholder="enter diastatic power in Lintner"
              id="diastatic_power"
              onChange={this.changeField}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="totalProteinInput">
            <Form.Label>Total Protein:</Form.Label>
            <Form.Control
              size="sm"
              placeholder="enter total soluble protein in %"
              id="total_protein"
              onChange={this.changeField}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="moistureInput">
            <Form.Label>Moisture:</Form.Label>
            <Form.Control
              size="sm"
              placeholder="enter total moisture in %"
              id="moisture"
              onChange={this.changeField}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="colorInput">
            <Form.Label>Color:</Form.Label>
            <Form.Control
              size="sm"
              placeholder="enter color in Lovibond"
              id="color"
              onChange={this.changeField}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="extractDiffInput">
            <Form.Label>Extract Differential:</Form.Label>
            <Form.Control
              size="sm"
              placeholder="enter extract differential"
              id="extract_differential"
              onChange={this.changeField}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="fineGrindInput">
            <Form.Label>Extract Fine Grind:</Form.Label>
            <Form.Control
              size="sm"
              placeholder="enter fine grind"
              id="extract_fine_grind"
              onChange={this.changeField}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="coarseGrindInput">
            <Form.Label>Extract Coarse Grind:</Form.Label>
            <Form.Control
              size="sm"
              placeholder="enter coarse grind"
              id="extract_coarse_grind"
              onChange={this.changeField}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="grainNotesInput">
            <Form.Label>Notes:</Form.Label>
            <Form.Control
              size="sm"
              placeholder="enter any notes about the grain"
              id="notes"
              onChange={this.changeField}
              type="text"
            />
          </Form.Group>
        </Form>
      );
    }
    return body;
  }
  addFermToRec(e) {
    e.preventDefault();
    this.props.addFerm(this.state.additionSet);
  }
  render() {
    return (
      <div style={{ height: '50%', width: '66%' }}>
        {this.bodyRender()}
        {/* {(() => {
              if (!this.state.newFermentableClick) {
                return (
                  <div>
                    <Col md="auto">
                      <Button onClick={this.addFermToRec}>
                        Add Fermentable To Recipe
                      </Button>
                    </Col>
                    <Col md="auto">
                      <Button onClick={this.deleteClickHandler}>
                        Delete Highlighted
                      </Button>
                    </Col>
                  </div>
                );
              } else {
                return (
                  <div>
                    <Col md="auto" >
                      <Button onClick={this.addFermentableToDB}>Add</Button>
                    </Col>
                  </div>
                );
              }
            })()} */}
        <ButtonToolbar size="sm">
          <Button variant="info" onClick={this.addFermToRec}>
            Add To Recipe
          </Button>

          <Button variant="info" onClick={this.deleteClickHandler}>
            Delete
          </Button>

          <Button variant="info" onClick={this.addFermentableToDB}>
            Add
          </Button>

          <Button variant="info" onClick={this.addNewClickHandler.bind(this)}>
            Add New Fermentable
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}
export default FermentablePopup;