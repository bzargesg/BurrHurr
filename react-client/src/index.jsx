import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/BodyComponent/Body.jsx';
import TopBar from './components/BodyComponent/TopBar.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './redux/reducers/';
import initialState from './redux/store/initialState.js'

const store = createStore(RootReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
function App() {

    return (
      <Provider store={store}>
        <div style={{ backgroundColor: '#efe2ba' }}>
          <div>
            <TopBar />
          </div>
            <Body />
          </div>
      </Provider>)
}

ReactDOM.render(<App />, document.getElementById('app'));
