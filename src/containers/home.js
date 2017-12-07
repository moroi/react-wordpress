import { connect } from 'react-redux';
import { fetchPosts, receivePosts, errorPosts } from '../actions';

import Home from '../components/home';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
};

function mapDispatchToProps(dispatch) {
  let posts = [];

  return {
    fetchPosts: pageNum => {
      dispatch(fetchPosts(pageNum)).then(response => {
        if (!response.error) {
          let newPosts = posts.concat(response.payload.data);
          dispatch(
            receivePosts(
              newPosts,
              +response.payload.headers["x-wp-totalpages"]
            )
          );
        } else {
          dispatch(errorPosts(response.payload.data));
        }
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
