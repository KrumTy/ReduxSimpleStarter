import _ from 'lodash';
import { GET_POSTS, DELETE_POST } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_POST: {
      return _.omit(state, action.payload);
    }
    case GET_POSTS: {
      const posts = _.mapKeys(action.payload.data, 'id');
      return posts;
    }
    default: return state;
  }
}
