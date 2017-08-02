import {
  EMPLOYEES_GET_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_GET_SUCCESS:
      return action.payload;
      // example from lecture 146: org by ID, take all records out object
      // create new key value pair where key is the id, value is updated
      // record itself:
      //// return { ...state, [id]: action.payload };
      //console.log(action);
      //return state;
    default:
      return state;
  }
};
