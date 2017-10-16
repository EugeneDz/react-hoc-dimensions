import React from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function windowDimensions(WrappedComponent) {
  class WindowDimensions extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        width: '0',
        height: '0',
      };

      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
      return (
        <WrappedComponent
          windowWidth={this.state.width}
          windowHeight={this.state.height}
        />
      );
    }
  }

  WindowDimensions.displayName = `WindowDimensions(${getDisplayName(WrappedComponent)})`;

  return WindowDimensions;
}

export default windowDimensions;

