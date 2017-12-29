import axios from 'axios';
import * as actionTypes from '../constants';

const WP_API = `https://reparade.com/wp-json`;
const WP_API_ENDPOINT = `${WP_API}/wp/v2`;

export function fetchPosts(postType = 'posts', pageNum = 1, perPage = 10) {
  return {
    type: actionTypes.FETCH_POSTS,
    payload: axios.get(`${WP_API_ENDPOINT}/${postType}?_embed&page=${pageNum}&per_page=${perPage}`)
  };
}

export function fetchTaxPosts(postType = 'posts', tax = 'categories', taxId = 0, pageNum = 1, perPage = 10) {
  return {
    type: actionTypes.FETCH_TAX_POSTS,
    payload: axios.get(`${WP_API_ENDPOINT}/${postType}?_embed&${tax}=${taxId}&page=${pageNum}&per_page=${perPage}`)
  };
}

export function getTaxId(tax, slug) {
  return {
    axios.get(`${WP_API_ENDPOINT}/${tax}?slug=${slug}`)
    .then(response => {
      switch (tax) {
        case "tags":
          type: actionTypes.FETCH_TAG,
          payload: response.data
          break;
        case "categories":
          type: actionTypes.FETCH_CAT,
          payload: response.data
          break;
      }
    });
  }
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
