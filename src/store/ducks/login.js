import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators: LoginCreators } = createActions({
  updateLogin: ['data'],
})

const INITIAL_STATE = {
  codigo: 0,
  token: '',
}
const update = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  ...payload,
})

export default createReducer(INITIAL_STATE, {
  [Types.UPDATE_LOGIN]: update,
})
