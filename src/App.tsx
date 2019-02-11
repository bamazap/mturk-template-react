import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.module.scss';
import Instructions from './Instructions/Instructions';
import Task, { TaskData } from './Task/Task';
import DemographicSurvey, { SurveyData } from './DemographicSurvey/DemographicSurvey';
import Done from './Done/Done';

const title = 'Experiment Title';
document.title = title;

enum pages {
  instructions,
  task,
  survey,
  done,
};

interface State {
  page: pages;
  taskData?: TaskData;
  surveyData?: SurveyData;
}

export default class App extends Component<{}, State> {
  readonly state: Readonly<State> = {
    page: pages.instructions
  };

  submit = () => {
    const form = new FormData(); // AMT expects Form Data
    const urlParams = new URLSearchParams(window.location.search);

    // AMT expects this field
    form.set('assignmentId', urlParams.get('assignmentId') || '?');
    // AMT ignores these fields so you can remove them if you are sending to AMT
    form.set('workerId', urlParams.get('workerId') || '?');
    form.set('hitId', urlParams.get('workerId') || '?');

    form.set('taskData', JSON.stringify(this.state.taskData));
    form.set('surveyData', JSON.stringify(this.state.surveyData));

    // should get prod/sandbox domain, falling back to prod
    const submitDomain = urlParams.get('turkSubmitTo') || 'https://www.mturk.com/';
    const submitURL = `${submitDomain}mturk/externalSubmit`;
    const options = { headers: {'Content-Type': 'multipart/form-data' }};
    axios.post(submitURL, form, options);
  }

  render() {
    let mainContent: JSX.Element;
    if (this.state.page === pages.instructions) {
      mainContent = <Instructions
        onContinue={() => this.setState({ page: pages.task })}
      />;
    } else if (this.state.page === pages.task) {
      mainContent = <Task
        onDone={(taskData) => this.setState({
          page: pages.survey,
          taskData,
        })}
      />;
    } else if (this.state.page === pages.survey) {
      mainContent = <DemographicSurvey
        onSubmit={(surveyData) => {
          this.setState({
            page: pages.done,
            surveyData
          }, this.submit);
        }}
      />
    } else {
      mainContent = <Done />;
    }

    return (
      <div className={styles.app}>
        <header>
          <h1>{ title }</h1>
        </header>

        <main>
          { mainContent }
        </main>
        <footer>
          <p>This is a disclaimer. You are participating voluntarily.</p>
        </footer>
      </div>
    );
  }
}
