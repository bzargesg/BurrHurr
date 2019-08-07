export default (state = {}, action) => {
  switch(action.type){
    case 'ADD_FERM_MODAL'://id
      return state;
    case 'CHANGE_FERM_AMT'://id, amount
      return state;
    default:
      return state;
  }
}