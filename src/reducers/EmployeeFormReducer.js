import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // actio.payload === { prop: 'name', value: 'jane'}
      //this is not an array, it is key interpolation:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
