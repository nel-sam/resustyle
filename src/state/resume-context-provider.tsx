import React from 'react';
import PropTypes from 'prop-types';
import { Resume } from './../models/interfaces';

const { Provider, Consumer } = React.createContext({});

class ResumeContextProvider extends React.Component {
  state = {
    resume: {}
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static get propTypes() {
    return {
      children: PropTypes.any
    };
  }

  public setResume(resume: Resume): void {
    this.setState(() => {
      return { resume };
    });
  }

  render(): React.ReactNode {
    return (
      <Provider value={this.state.resume}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ResumeContextProvider, Consumer as ResumeContextConsumer };