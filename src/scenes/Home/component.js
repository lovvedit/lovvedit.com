import React from 'react';
import { Grid } from 'material-ui';
import styled from 'styled-components';

import PostList from '../../components/PostList';

const StyledGrid = styled(Grid)`width: 100%;`;

const Home = () => (
  <Grid container spacing={0}>
    <StyledGrid item lg={9}>
      <PostList />
    </StyledGrid>
    <Grid item lg={3} hidden={{ mdDown: true }}>
      chau
    </Grid>
  </Grid>
);

export default Home;
