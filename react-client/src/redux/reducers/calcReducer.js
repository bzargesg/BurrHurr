export default (state = {volume:5}, action) => {
  switch(action.type){
    case 'CHANGE_VOL'://vol
    console.log(state,action)
      return Object.assign({}, state, {volume:action.vol})
    default:
      return state;
  }
}