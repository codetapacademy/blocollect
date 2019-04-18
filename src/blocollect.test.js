import React from 'react';
import ReactDOM from 'react-dom';
import Blocollect from './blocollect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blocollect />, div);
  ReactDOM.unmountComponentAtNode(div);
});
