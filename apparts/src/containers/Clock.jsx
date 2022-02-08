import { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.interval = () => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    };

    setInterval(this.interval, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { label } = this.props;
    const { date } = this.state;

    return (
      <h2>
        {label}
        {date}
      </h2>
    );
  }
}

export default Clock;
