import React from 'react';

export default () => Component => class Dimensions extends React.Component {
    static displayName = 'Dimensions';
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
      return <Component {...this.state} />;
    }
};

