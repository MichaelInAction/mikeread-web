import React from 'react';
import styled from 'styled-components';

interface IProps {
  before: string;
  typedWords: string[];
  after: string;
}

interface IState {
  before: string;
  typedWords: string[];
  after: string;
  current: string;
  deleting: boolean;
  period: number;
  loopNum: number;
  timeout?: any;
}

class AutoType extends React.Component<IProps> {
  state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      before: props.before,
      typedWords: props.typedWords,
      after: props.after,
      current: '',
      deleting: false,
      period: 2000,
      loopNum: 0,
      timeout: undefined,
    };
  }

  componentDidMount() {
    this.updateText();
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  updateText() {
    var i = this.state.loopNum % this.state.typedWords.length;
    var fullText = this.state.typedWords[i];

    if(this.state.deleting) {
      this.setState({current: fullText.substring(0, this.state.current.length - 1)});
    } else {
      this.setState({current: fullText.substring(0, this.state.current.length + 1)});
    }
    var delta = 200 - Math.random() * 100;
    if (this.state.deleting) {
      delta /= 2;
    }
    if (!this.state.deleting && this.state.current === fullText) {
      delta = this.state.period;
      this.setState({deleting: true});
    } else if (this.state.deleting && this.state.current === '') {
      this.setState({deleting: false, loopNum: this.state.loopNum + 1});
      delta = 500;
    }
    let that = this;
    this.setState({timeout: setTimeout(function() {
      that.updateText()
    }, delta)});
  }

  render() {
    return (
      <Paragraph>
        {this.state.before}<Bold>{this.state.current}</Bold>{this.state.after}
      </Paragraph>
    );
  }
}

const Paragraph = styled.p(({ theme }) => `
  color: ${ theme.colors.main };
  font-size: ${ theme.fontSizes[3] };
`); 

const Bold = styled.b(({ theme }) => `
  color: ${ theme.colors.blue };
`);

export default AutoType;
