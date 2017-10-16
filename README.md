# react-hoc-dimensions

A [higher-order component](https://reactjs.org/docs/higher-order-components.html) that can be used to passing the window dimensions into your component as props.


# Installation

```
npm i --save react-hoc-dimensions
```

# Basic Usage

```js
import React from 'react';
import windowDimensions from 'react-hoc-dimensions';

class Page extends Component {
  render() {
    return (
      <div className="page">
        {this.props.windowWidth < 575
          ? <div> Mobile content </div>
          : <div> Tablet or desktop content </div>
        }
      </div>
    );
  }
}

export default windowDimensions(Page);
```

# Contributing

Pull requests are welcome. You can check that your changes correspond to the code style by running the `lint` command:

```
npm run lint
```
