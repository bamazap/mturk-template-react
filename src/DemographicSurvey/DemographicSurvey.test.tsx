import React from 'react';
import ReactDOM from 'react-dom';
import DemographicSurvey from './DemographicSurvey';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemographicSurvey />, div);
  ReactDOM.unmountComponentAtNode(div);
});
