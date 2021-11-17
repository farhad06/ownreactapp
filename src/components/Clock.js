import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick() {
    console.log("This button was clicked");
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    // console.log(this.props);
    const { locale } = this.props;
    const { date } = this.state;
    return (
      <div>
        <h1>Murshidabad</h1>
        <h2>Local time is: {date.toLocaleTimeString(locale)}</h2>
        <button type="button" onClick={this.handleClick} >Click Here</button>
      </div>
    );
  }
}
export default Clock;
