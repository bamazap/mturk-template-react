import React, { Component } from 'react';
import { isString, startCase } from 'lodash';


// Shared

// name is the name of the radio / checkbox group; should be unique for page
// options map to display names, just uppercases each word of value if not given
// onchange passes the value of the input interacted with
interface GroupProps {
  name: string;
  options: { [value: string]: string | undefined };
  onChange: (updatedValue: string) => void;
  addOther?: boolean;
}

// This component is stateless
// T is extra props, should be "extends but doesn't override"
abstract class Group<T extends GroupProps> extends Component<T> {
  abstract inputType: string;

  abstract isChecked(value: string): boolean;

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  }

  render = () => {
    const entries = Object.entries(this.props.options);
    if (this.props.addOther) {
      entries.push(['other', undefined]);
    }
    entries.push(['unspecified', 'Prefer Not To Say']);
    return (
      <div onChange={this.onChange}>
      {entries.map(([value, display]) => (
        <label key={value}>
          <input
            type={this.inputType}
            name={name}
            value={value}
            checked={this.isChecked(value)}
            readOnly={true}
          />
          <span>{isString(display) ? display : startCase(value)}</span>
        </label>
      ))}
      </div>
    )
  }
}


// Radio Group
interface RadioGroupProps extends GroupProps {
  value: string; // the currently checked radio button
}

export class RadioGroup extends Group<RadioGroupProps> {
  inputType = 'radio';

  isChecked = (value: string) => this.props.value === value;
}


// Checkbox Group
interface CheckboxGroupProps extends GroupProps {
  value: string[]; // all checked values
}

export class CheckboxGroup extends Group<CheckboxGroupProps> {
  inputType = 'checkbox';

  isChecked = (value: string) => this.props.value.indexOf(value) >= 0;
}
