import React, { FunctionComponent } from 'react';
import styles from './Instructions.module.scss';

interface Props {
  onContinue?: () => void;
}

const Instructions: FunctionComponent<Props> = ({ onContinue }) => (
  <div className={styles.instructions}>
    <h2>Instructions</h2>
    <p className='bold'>A one-line description of the task.</p>
    <p>A paragraph explaining a bit more about the task.</p>
    <h3>Guidelines</h3>
    <ol>
      <li>Read the instructions.</li>
      <li>Do the task.</li>
      <li>Profit!</li>
    </ol>
    <button onClick={onContinue}>Continue</button>
    <h3>Examples</h3>
    <img src='https://i.gifer.com/UGQn.gif'></img>
  </div>
);

export default Instructions;
