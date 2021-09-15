import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import FormContainer from './components/form/formContainer';
import Card from './components/card';
import Registration from './pages/Registration/registration';

import './styles/base.scss';

ReactDOM.render(
  <Provider store={store}>
    <FormContainer>
      <Card cardTitle="Signup">
        <Registration/>
      </Card>
    </FormContainer>
  </Provider>,
  document.getElementById('root')
);
