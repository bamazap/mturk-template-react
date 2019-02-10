import React, { Component } from 'react';
import styles from './Task.module.scss';

interface Props {
  onDone?: (data: TaskData) => void;
}

export interface TaskData {
  timestamp: Date;
}

export default class Task extends Component<Props> {

  handleDone = () => {
    if (this.props.onDone) {
      this.props.onDone({ timestamp: new Date() });
    }
  }

  render = () => (
    <div className={styles.task}>
      <button onClick={this.handleDone}>Click the button to win!</button>
    </div>
  )

}