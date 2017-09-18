import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'ramda';

import RightSection from './component';

const MeQuery = gql`
  query Me {
    me {
      username
    }
  }
`;

const withMe = graphql(MeQuery, { props: ({ data: { me, loading } }) => ({ me, loading }) });

const enhance = compose(withMe);

export default enhance(RightSection);
