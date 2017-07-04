
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class user extends Component {
  static propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string
  }

  render() {
    const name = this.props.name;
    const desc = this.props.desc;

    return (
      <div>
        <p>{ name }</p>
        <p>{ desc }</p>
      </div>
    );
  }
}

export default user;
