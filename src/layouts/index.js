import React from 'react';
import Content from '../components/content';
import { connect } from 'react-redux';
import { simpleActionCreator } from '../actions';

class BasicLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      fileSource: 'Where is my data',
    };
  }
  componentDidMount() {
    this.props.dispatch(simpleActionCreator());
  }
  render() {
    return (
      <div>
        <div className="header" />
        <div className="sidebar" />
        <div className="content">
          <Content data={this.props.data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    data: store.SimpleReducer.data,
  };
};

export default connect(mapStateToProps, null)(BasicLayout);
