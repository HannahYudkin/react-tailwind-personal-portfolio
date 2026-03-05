import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
          maxWidth: "600px",
          margin: "2rem auto",
        }}>
          <h1 style={{ color: "#c00", marginBottom: "1rem" }}>Something went wrong</h1>
          <pre style={{
            background: "#f5f5f5",
            padding: "1rem",
            overflow: "auto",
            fontSize: "0.875rem",
          }}>
            {this.state.error?.message ?? String(this.state.error)}
          </pre>
          <p style={{ marginTop: "1rem", color: "#666" }}>
            Check the browser console (F12 → Console) for more details.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
