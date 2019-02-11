import React, { Component } from 'react';
import styles from './App.module.scss';
import Instructions from './Instructions/Instructions';
import Task, { TaskData } from './Task/Task';
import DemographicSurvey, { SurveyData } from './DemographicSurvey/DemographicSurvey';
import Done from './Done/Done';
import { formPOST } from './utils';

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

  /**
   * Submits data to AMT and then shows the done page
   * You will need to modify this if you are not in an AMT iframe
   */
  submit = () => {
    const urlParams = new URLSearchParams(window.location.search);
    // should get prod/sandbox domain
    let submitDomain = urlParams.get('turkSubmitTo') || 'https://www.mturk.com/';
    if (!submitDomain.endsWith('/')) {
      submitDomain += '/';
    }
    const submitURL = `${submitDomain}mturk/externalSubmit`;
    formPOST(submitURL, {
      assignmentId: urlParams.get('assignmentId') || '?', // AMT needs this
      taskData: this.state.taskData,
      surveyData: this.state.surveyData,
    });
    this.setState({ page: pages.done });
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
          this.setState({ surveyData }, this.submit);
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
