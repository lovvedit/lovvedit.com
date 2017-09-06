import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { lifecycle } from 'recompose';
import { compose, inc, dec, not } from 'ramda';

import Post, { postPropType } from './component';

const ToggleLikeMutation = gql`
  mutation ToggleLikePost($id: ID!) {
    toggleLikePost(id: $id) {
      id
      likeCount
      liked
    }
  }
`;

const withToggleLikeMutation = graphql(ToggleLikeMutation, {
  props: ({ ownProps: { post: { id, likeCount, liked } }, mutate }) => ({
    onLikeClick: () =>
      mutate({
        variables: { id },
        optimisticResponse: {
          __typename: 'Mutation',
          toggleLikePost: {
            __typename: 'Post',
            id,
            likeCount: liked ? dec(likeCount) : inc(likeCount),
            liked: not(liked),
          },
        },
      }),
  }),
});

const enhance = compose(
  lifecycle({
    componentWillMount() {
      this.props.subscribeToLikeToggle();
    },
  }),
  withToggleLikeMutation,
);

export default enhance(Post);
export { postPropType };
