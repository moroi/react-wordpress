import { connect } from 'react-redux';
import { fetchPost, receivePost, errorPost, resetPost } from '../actions';

import Single from '../components/single';

function mapStateToProps(globalState, ownProps) {
  return {
    post: globalState.post,
    postId: ownProps.id
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: id => {
      dispatch(fetchPost(id)).then(result => {
        if (result.payload.response && result.payload.response.status !== 200) {
          dispatch(errorPost(result.payload.response.data));
        } else {
          dispatch(receivePost(result.payload.data));
        }
      })
    },
    resetPost: () => {
      dispatch(resetPost());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);
