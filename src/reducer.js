const initialState = ['uppercontent','lowercontent','Head','Body', 'Foot']

const reducer = (state=initialState, action) => {
  

  switch (action.type) {
    case 'ADDINGCONTENT':
      return [action.task,
    action.task,
    initialState[2],
    initialState[3],
    initialState[4],]

    default:
      return initialState
  }
}

export default reducer

