import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  render() {
    // console.log(this.props);
    const { locale } = this.props;
    const { date } = this.state;
    return (
      <div>
        <h1>Murshidabad</h1>
        <h2>Local time is: {date.toLocaleTimeString(locale)}</h2>
      </div>
    );
  }
}
export default Clock;
