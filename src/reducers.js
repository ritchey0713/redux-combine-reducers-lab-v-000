export function books( state = [], action){
  switch(action.type){

    case 'ADD_BOOK':
      return [].concat(state, action.payload)

    case 'REMOVE_BOOK':
      let index = state.indexOf(action.payload)
      return [].concat(state.slice(0, index),
      state.slice(index + 1, state.length))

    default:
      return state
  }
}

export function recommendedBooks(state = [], action){
  switch(action.type){

    case 'ADD_RECOMMENDED_BOOK':
      return [].concat(state, action.payload)

    case 'REMOVE_RECOMMENDED_BOOK':
      let index = state.indexOf(action.payload)
      return [].concat(slice(0, index),
      state.slice(index + 1, state.length))

    default:
      return state

  }
}
