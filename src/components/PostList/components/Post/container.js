import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
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

const enhance = compose(withToggleLikeMutation);

export default enhance(Post);
export { postPropType };
