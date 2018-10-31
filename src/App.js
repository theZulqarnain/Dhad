import React, { Component  , Fragment} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Asides from './Component/Asides/Asides';
import Main from './Component/Main/Main';
import { checkingShow , savedDone} from './shared/customFuntions';

class App extends Component {
  componentDidMount() {
    window.onload = function(){
      document.getElementById("dhad-editor").addEventListener("keydown", checkingShow);
      document.getElementById("dhad-editor").addEventListener("keydown", savedDone);	
      
      //Loading Page
      let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        // document ready
          document.getElementById("all-wrapper").style.visibility = "visible";
          document.getElementById("loader").style.display = "none";
        }
      }, 100); 
    }
  }

  render() {
    return (
      <Fragment>
        <div id="loader"></div>
        <section id="all-wrapper" class="animate-bottom">
         <Header />
         <Asides />
         <Main />
         </section>
      </Fragment>
    );
  }
}

export default App;
