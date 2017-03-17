// a reducer takes in two things:

//1. the action (information about what happened)
//2. a copy of current state

export function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('incrementing likes!!')
    //return the updated state
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updaing

      ]
    default:
      return state;
  }
}

export default posts;
