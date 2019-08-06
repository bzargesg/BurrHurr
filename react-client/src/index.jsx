import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/BodyComponent/Body.jsx'
import TopBar from './components/BodyComponent/TopBar.jsx'
function App() {

    return (
      <div style={{ backgroundColor: '#efe2ba' }}>
        <div>
          <TopBar />
        </div>
          <Body />
        </div>
         )
}

ReactDOM.render(<App />, document.getElementById('app'));
