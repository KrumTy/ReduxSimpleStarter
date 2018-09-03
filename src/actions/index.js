import axios from 'axios';

export const GET_POSTS = 'get_posts';
export const GET_POST = 'get_post';
export const CREATE_POSTS = 'create_posts';
export const DELETE_POST = 'delete_post';

const API_ENDPOINT = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'zarichepower';

export function getPosts() {
  const posts = axios.get(`${API_ENDPOINT}/posts?key=${API_KEY}`);

  return {
    type: GET_POSTS,
    payload: posts
  };
}

export function getPost(id) {
  const post = axios.get(`${API_ENDPOINT}/posts/${id}?key=${API_KEY}`);

  return {
    type: GET_POST,
    payload: post
  };
}

export function deletePost(id, callback) {
  const post = axios.delete(`${API_ENDPOINT}/posts/${id}?key=${API_KEY}`)
    .then(callback);

  return {
    type: DELETE_POST,
    payload: post
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${API_ENDPOINT}/posts?key=${API_KEY}`, values)
    .then(callback);

  return {
    type: CREATE_POSTS,
    payload: request
  };
}
