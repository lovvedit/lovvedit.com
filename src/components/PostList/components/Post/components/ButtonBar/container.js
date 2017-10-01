import { withTheme } from 'material-ui';
import { compose } from 'ramda';

import ButtonBar from './component';

const enhance = compose(withTheme());

export default enhance(ButtonBar);
