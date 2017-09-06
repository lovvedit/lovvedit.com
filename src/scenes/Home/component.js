import React from 'react';
import { Grid } from 'material-ui';
import styled from 'styled-components';

import PostList from '../../components/PostList';

const StyledGrid = styled(Grid)`width: 100%;`;

const Home = () => (
  <Grid container spacing={0}>
    <StyledGrid item lg={7}>
      <PostList />
    </StyledGrid>
    <Grid item lg={5} hidden={{ mdDown: true }} />
  </Grid>
);

export default Home;
