import React, { FunctionComponent } from 'react';
import styles from './Instructions.module.scss';
import config from '../config.json';

const { description } = config.meta;
const {
  simple: instructions,
  steps,
  images,
} = config.instructions;

interface Props {
  onContinue?: () => void;
}

const Instructions: FunctionComponent<Props> = ({ onContinue }) => (
  <div className={styles.instructions}>
    <h2>Instructions</h2>
    <p className='bold'>{ description }</p>
    <p dangerouslySetInnerHTML={{__html: instructions }}></p>
    { (steps && steps.length > 0) && (<div>
      <h3>Guidelines</h3>
      <ol>
        {steps.map(step => (
          <li dangerouslySetInnerHTML={{__html: step }} key={step}></li>
        ))}
      </ol>
    </div>)}
    {images.length > 0 && (<div>
      <h3>Examples</h3>
      <div>
        {images.map(url => (
          <img src={url} key={url}></img>
        ))}
      </div>
    </div>)}
    {onContinue && (
      <button onClick={onContinue}>Continue</button>
    )}
  </div>
);

export default Instructions;
