export default (state = {}, action) => {
  switch(action.type){
    case 'ADD_HOP_MODAL'://id
      return state;
    case 'CHANGE_HOP_AMT'://id amount
      return state;
    default:
      return state;
  }
}