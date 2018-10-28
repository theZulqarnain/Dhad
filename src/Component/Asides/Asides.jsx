import React, { Component  , Fragment } from 'react';
import MainNav from './MainNav';
import SideBarLeft from './SideBarLeft/SideBarLeft';
class Asides extends Component {
    
render(){
    return(
     <Fragment>
      <MainNav />
      <SideBarLeft />
     </Fragment>
    );
 }
}   

export default Asides ; 




