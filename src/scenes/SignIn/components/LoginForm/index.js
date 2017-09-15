import { reduxForm } from 'redux-form';

import LoginForm from './component';

const withForm = reduxForm({ form: 'login' });

export default withForm(LoginForm);
