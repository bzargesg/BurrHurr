import React from 'react';
import popup from 'reactjs-popup';
class FermentablePopup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fermentablesList: []
    }
  }
  componentDidMount(){
    console.log('clickedthemodal');
  }
  render() {
    return <div>WOO Fermentablepopup</div>;
  }
}
export default FermentablePopup;
