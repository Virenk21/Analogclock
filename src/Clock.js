import React, { Component} from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timeId);
  }

  render() {
    return <div>Clock</div>;
  }
}

export default Clock