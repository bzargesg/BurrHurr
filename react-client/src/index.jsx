import React from 'react';
import ReactDOM from 'react-dom';
import Fermentables from './components/Fermentables.jsx';
import Hops from './components/Hops.jsx';
import Yeast from './components/Yeast.jsx';
import Kettle from './components/Kettle.jsx';
import Style from './components/Style.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      volume: '0L',
      color: 0,
      IBU: 0,
      ABV: 0,
    }
  }

  componentDidMount() {

  }

  render () {
    return (<div>
      <h1>BurrHurr</h1>
      <div className='headerBar'>
      <span className="volume">Volume: {this.state.volume}</span>
      <span className="color">Color: {this.state.color}</span>
      <span className="ibu">IBU: {this.state.IBU}</span>
      <span className="abv">ABV: {this.state.ABV}</span>
      </div>
      <Fermentables/>
      <Hops/>
      <Yeast/>
      <Kettle/>
      <Style/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));