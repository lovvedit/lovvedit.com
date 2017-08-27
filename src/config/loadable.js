import React from 'react';
import Loadable from 'react-loadable';
import { LinearProgress } from 'material-ui/Progress';

export default function CustomLoadable(opts) {
  return Loadable({ loading: () => <LinearProgress />, timeout: 10, ...opts });
}
