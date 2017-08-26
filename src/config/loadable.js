import Loadable from 'react-loadable';

import Spinner from '../components/Spinner';

export default function CustomLoadable(opts) {
  return Loadable({ loading: Spinner, timeout: 10, ...opts });
}
