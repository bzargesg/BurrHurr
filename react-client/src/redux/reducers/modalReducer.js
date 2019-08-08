export default (state ={}, action) => {
  switch(action.type){
    case 'CHANGE_FERM_MODAL': 
      return {
        ...state,
        fermentableModalClick: !state.fermentableModalClick
      }
    case 'CHANGE_HOP_MODAL':
      return {
        ...state,
        hopModalClick: !state.hopModalClick
      }
    default:
      return state
  }
}