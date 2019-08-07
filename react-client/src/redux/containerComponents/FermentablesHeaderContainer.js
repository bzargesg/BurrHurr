import FermentablesHeader from '../../components/headerComponents/FermentablesHeader.jsx'
import { volumeChange } from '../actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  console.log(state)
  return {
    volume: state.calcReducer.volume,
    totalGrain: state.fermReducer.totalGrain,
    totalGravity: state.fermReducer.totalGravity,
    finalGravity: state.fermReducer.totalGravity * .25,
    colorStyle: state.fermReducer.color,
    IBU: state.hopReducer.IBU,
    ABV: state.fermReducer.ABV
  }
}
const mapDispatchToProps = dispatch => ({
  volumeChange: (e) => dispatch(volumeChange(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FermentablesHeader)