
import React, { Component } from 'react';
import { RadioGroup, CheckboxGroup } from './FormComponents';

import styles from './DemographicSurvey.module.scss';

const ages = {
  ageGroup18: '18 to 24',
  ageGroup25: '25 to 34',
  ageGroup35: '35 to 44',
  ageGroup45: '45 to 54',
  ageGroup55: '55 to 64',
  ageGroup65: '65 and over',
}

const educations = {
  lessThanHighSchool: undefined,
  highSchool: 'High School / GED',
  someCollege: undefined,
  twoYearDegree: undefined,
  fourYearDegree: undefined,
  mastersDegree: "Master's Degree",
  doctoralDegree: undefined,
  professionalDegree: undefined
}

const ethnicities = {
  Asian: undefined,
  Latino_Hispanic: 'Latino / Hispanic',
  Pacific_Islander: undefined,
  Black_African: 'Black / African Descent',
  Middle_Eastern: undefined,
  White_Caucasian: 'White / Caucasian',
  East_Indian: undefined,
  Native_American: undefined
};

const initialState = {
  gender: '',
  age: '',
  education: '',
  ethnicity: [] as string[],
  feedback: '',
};
type State = Readonly<typeof initialState>;

export type SurveyData = State;

interface Props {
  onSubmit?: (formData: State) => void;
}

export default class DemographicSurvey extends Component<Props, State> {
  readonly state: State = initialState;

  handleInput = <K extends keyof State>(name: K) => (value: string) => {
    this.setState({
      [name]: value,
    } as any);
  }

  handleCheck = <K extends keyof State>(name: K) => (value: string) => {
    this.setState((prevState) => {
      const prevCheckedValues = prevState[name] as string[];
      const valueIdx = prevCheckedValues.indexOf(value);
      if (valueIdx >= 0) {
        prevCheckedValues.splice(valueIdx, 1);
      } else {
        prevCheckedValues.push(value);
      }
      return { [name]: prevCheckedValues } as any;
    });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !this.state.gender
      || !this.state.age
      || !this.state.education
      || this.state.ethnicity.length == 0
    ) {
      alert('Please complete the survey.');
    } else if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  }

  render = () => (
    <form className={styles.survey} onSubmit={this.handleSubmit}>
      <h2>Demographic Survey</h2>
      <p>Before you submit the task, please take a moment to fill out this survey.</p>

      <h4>Gender</h4>
      <RadioGroup
        name="gender"
        options={{ male: undefined, female: undefined }}
        addOther={true}
        value={this.state.gender}
        onChange={this.handleInput('gender')}
      />

      <h4>Age</h4>
      <RadioGroup
        name="age"
        options={ages}
        value={this.state.age}
        onChange={this.handleInput('age')}
      />

      <h4>Education</h4>
      <RadioGroup
        name="education"
        options={educations}
        value={this.state.education}
        onChange={this.handleInput('education')}
      />

      <h4>Ethnicity</h4>
      <CheckboxGroup
        name="ethnicity"
        options={ethnicities}
        addOther={true}
        value={this.state.ethnicity}
        onChange={this.handleCheck('ethnicity')}
      />

      <h4>Feedback</h4>
      <textarea
        name="feedback"
        rows={2}
        placeholder="If you have any feedback, comments, or suggestions, please describe them here."
        onChange={(e) => this.handleInput('feedback')(e.target.value)}
        value={this.state.feedback}
      />

      <button type="submit">
        Submit
      </button>

    </form>
  )

}