import React from 'react';

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
    return <p>{this.state.before}<b>{this.state.current}</b>{this.state.after}</p>;
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
      that.updateText()
    }, delta);
  }

}

export default AutoType;
