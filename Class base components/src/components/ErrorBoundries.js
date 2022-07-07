import { Component } from "react";

export class ErrorBoundries extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>Something was wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundries;
