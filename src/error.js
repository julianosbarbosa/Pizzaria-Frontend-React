import { PureComponent } from "react";

class ErrorBoundary extends PureComponent {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.log("logar erros em serviço externo :", error.message);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("logar erros em serviço externo :", info.conponetStack);
  }

  render() {
    return this.props.children(this.state.hasError);
  }
}

export default ErrorBoundary;
