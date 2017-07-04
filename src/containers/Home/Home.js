import React, { Component } from 'react';
import User from './User';

import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <div>
          <User name="Easya" desc="輕鬆屌虐1" />
          <User name="Easyb" desc="輕鬆屌虐2" />
          <User name="Easyc" desc="輕鬆屌虐3" />
          <User name="Easyd" desc="輕鬆屌虐4" />
        </div>
      </div>
    );
  }
}
