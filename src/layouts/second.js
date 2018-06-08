import React from 'react';
import Content from '../components/content';

class AnotherLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      fileSource: '',
    };
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/beetbox/beets/master/beets/logging.py')
      .then(response => response.text())
      .then(data => this.setState({ fileSource: data }));
  }
  render() {
    console.log('render');
    return (
      <div>
        <div className="header" />
        <div className="sidebar" />
        <div className="content">
          <Content data={this.state.fileSource} />
        </div>
      </div>
    );
  }
}

export default AnotherLayout;
