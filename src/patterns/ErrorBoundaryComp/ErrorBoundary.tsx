import { Component, ReactNode } from "react";

type PropsType = {
  fallback: ReactNode | JSX.Element;
  children: ReactNode;
};

type StateType = {
  hasError: boolean;
};

export default class ErroBoundry extends Component<PropsType, StateType> {
  state: StateType = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}
