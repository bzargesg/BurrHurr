export const addFermFromModal = id =>({
  type: 'ADD_FERM_MODAL',
  id
})
export const fermAmountChange = (id, amount) =>({
  type: 'CHANGE_FERM_AMT',
  id,
  amount
})
export const addHopFromModal = id =>({
  type: 'ADD_HOP_MODAL',
  id
})
export const hopAmountChange = (id, amount) =>({
  type: 'CHANGE_HOP_AMT',
  id,
  amount
})
export const volumeChange = vol =>({
  type: 'CHANGE_VOL',
  vol
})
export const fermModalChange = () => ({
  type: 'CHANGE_FERM_MODAL'
})
export const hopModalChange = () => ({
  type: 'CHANGE_HOP_MODAL'
})