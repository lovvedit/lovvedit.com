import React from 'react';
import Grid from 'material-ui/Grid';

import PostList from '../../components/PostList';

const Home = () =>
  (<Grid container spacing={0}>
    <Grid item lg={9}>
      <PostList />
    </Grid>
    <Grid item lg={3} hidden={{ mdDown: true }}>
      chau
    </Grid>
  </Grid>);

export default Home;
