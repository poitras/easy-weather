import { FETCH_WEATHER } from '../actions/index'

export default function(state = null, action ) {
  // The promise received from the action is open for us by the middleware
  // console.log('Action received', action);
  console.log(">>>>", action.payload)
  switch (action.type) {
    case FETCH_WEATHER:
      // to make sure were not mutating the state we concat
      // return state.concat([action.payload.data])
      // better with es6
      return [ state.payload.data, ...state ]
  }
  
  return state
}