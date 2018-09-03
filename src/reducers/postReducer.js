import _ from 'lodash';
import { GET_POST } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_POST: {
      const post = action.payload.data;
      return post;
    }
    default: return state;
  }
}
