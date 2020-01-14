import React from 'react';
import styled from 'styled-components';

class AutoType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      before: props.before,
      typedWords: props.typedWords,
      after: props.after,
      current: '',
      deleting: false,
      period: 2000,
      loopNum: 0
    };
    this.updateText();
  }

  render() {
    return (<StyledP>
      {this.state.before}
      <StyledB>
        {this.state.current}
      </StyledB>
      {this.state.after}
    </StyledP>);
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
    setTimeout(function() {
      that.updateText();
    }, delta);
  }
}

const StyledP = styled.p`
  ${props => props.theme.fonts.heavy}
  ${props => props.theme.fonts.large}
  color: ${props => props.theme.text.light};
`;

const StyledB = styled.b`
  color: ${props => props.theme.text.highlight};
`;

export default AutoType;
