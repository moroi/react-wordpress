import { connect } from 'react-redux';
import { fetchTaxPosts, getTaxId, receivePosts, errorPosts } from '../actions';

import Cat from '../components/cat';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
};

function mapDispatchToProps(dispatch) {
  let posts = [];
  let taxId = getTaxId('categories', this.props.match.params.slug);

  return {
    fetchTaxPosts: (postType, tax, taxId, pageNum, perPage) => {
      dispatch(fetchTaxPosts('posts', 'categories', taxId, pageNum, 10)).then(response => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Cat);
