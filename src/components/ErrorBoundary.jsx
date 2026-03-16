import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center w-full h-full min-h-[200px]">
                    <p className="text-neutral-400 text-sm">
                        Unable to load 3D content. Please refresh the page.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
