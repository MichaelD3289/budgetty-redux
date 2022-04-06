import axios from 'axios';

const initialState = {
  email: null,
  firstName: null,
  lastName: null
}

 function  requestUserData() {
  let data = axios.get('/auth/user-data').then(res => res.data)

    return {
      type: 'REQUEST_USER_DATA',
      payload: data
    }
}

export { requestUserData }

export default function reducer(state = initialState, {type, payload}) {
  switch(type) {
    case 'REQUEST_USER_DATA_FULFILLED':
      const {email, firstName, lastName} = payload.user
      return {
        email: email,
        firstName: firstName,
        lastName: lastName
      }
      default:
        return state
  }

  
}