import React from 'react';

import App from './App';
import MobileApp from './MobileApp';

interface IState {
  width: number;
}

class MobileWrapper extends React.Component {
  state: IState;

  constructor(props: any) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 760;
    // the rest is the same...

    if (isMobile) {
      return (
        <MobileApp/>
      );
    } else {
      return (
        <App/>
      );
    }
  }
}

export default MobileWrapper;