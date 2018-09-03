import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PostsReducer from './postsReducer';
import PostReducer from './postReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  post: PostReducer,
  form: formReducer
});

export default rootReducer;
