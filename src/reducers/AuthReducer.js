import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      //console.log('action!');
      // this next line makes a new object.
      // then it takes all the properties off the existing
      // state object and throw them into this object
      // then define the property email and give it the action.payload value
      // then toss it on top of the properties on the state object
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return {...state, loading: true, error: ''}
    case LOGIN_USER_SUCCESS:
      //banana;
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};
