import FermentablesHeader from '../../components/headerComponents/FermentablesHeader.jsx'
import { volumeChange } from '../actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return {
    volume: state.calculations.volume,
    totalGrain: state.fermentation.totalGrain,
    totalGravity: state.fermentation.totalGravity,
    finalGravity: state.fermentation.totalGravity * .25,
    colorStyle: state.fermentation.colorStyle,
    IBU: state.hops.IBU,
    ABV: state.fermentation.ABV
  }
}
const mapDispatchToProps = dispatch => ({
  volumeChange: (e) => dispatch(volumeChange(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FermentablesHeader)