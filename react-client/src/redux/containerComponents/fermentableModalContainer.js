import fermentableModal from '../../components/Modals/fermentableModal.jsx';
import { connect } from 'react-redux';
import { fermModalChange } from '../actionCreators/index';

const mapStateToProps = (state) =>{
  //buttonclick=show hide true false
  return {
    showFermModal: state.modalClick.fermentableModalClick
  }
}
const mapDispatchToProps = dispatch => ({
  //handleClos
  fermModalChange: (e)=>dispatch(fermModalChange())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(fermentableModal)