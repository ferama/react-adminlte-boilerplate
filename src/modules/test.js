export const TEST_REQUESTED = 'test/TEST_REQUESTED'
export const TEST_DONE = 'test/TEST_DONE'

const initialState = {
  isTesting: false,
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_REQUESTED:
      return {
        ...state,
        isTesting: true
      }

    case TEST_DONE:
        return {
          ...state,
          isTesting: false,
          data: action.responseJson
        }

    default:
        return state
    }
}


export const startTest = (url) => {
  return dispatch => {
    dispatch({
      type: TEST_REQUESTED
    })
    fetch(url)
        .then((response) => {
          return response.json()
        })
        .then( (responseJson) => {
          // console.log(responseJson)
          dispatch({
            type: TEST_DONE,
            responseJson
          })
        })
    // setTimeout(() => {
    //   dispatch({
    //     type: TEST_DONE
    //   })
    // }, 3000)
  }
}
