import React, { Component  , Fragment} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Asides from './Component/Asides/Asides';
import Main from './Component/Main/Main';
class App extends Component {
  render() {
    return (
      <Fragment>
         <Header />
         <Asides />
         <Main />
      </Fragment>
    );
  }
}

export default App;
