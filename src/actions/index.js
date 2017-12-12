import axios from 'axios';
import * as actionTypes from '../constants';

const WP_API = `https://reparade.com/wp-json`;
const WP_API_ENDPOINT = `${WP_API}/wp/v2`;

export function fetchPosts(pageNum = 1) {
  return {
    type: actionTypes.FETCH_POSTS,
    payload: axios.get(`${WP_API_ENDPOINT}/posts?_embed&page=${pageNum}&per_page=10`)
  };
}

export function receivePosts(posts, totalPages, previous) {
  return {
    type: actionTypes.RECEIVE_POSTS,
    payload: posts,
    totalPages,
    posts: previous
  };
}

export function errorPosts(error) {
  return {
    type: actionTypes.ERROR_POSTS,
    payload: error
  };
}

export function fetchPost(id) {
  return {
    type: actionTypes.FETCH_POST,
    payload: axios.get(`${WP_API_ENDPOINT}/posts/${id}?_embed`)
  };
}

export function receivePost(currentPost) {
  return {
    type: actionTypes.RECEIVE_POST,
    payload: currentPost
  };
}

export function errorPost(error) {
  return {
    type: actionTypes.ERROR_POST,
    payload: error
  };
}

export function resetPost() {
  return {
    type: actionTypes.RESET_POST
  };
}
