import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action ) {
  // The promise received from the action is open for us by the middleware
  // console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // to make sure were not mutating the state we concat
      // return state.concat([action.payload.data])
      // better with es6
      console.log('action.payload.data', action.payload.data)
      return [ action.payload.data, ...state ]
  }
  
  return state
}