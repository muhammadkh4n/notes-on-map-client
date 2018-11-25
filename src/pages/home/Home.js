import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        test
      </div>
    );
  }
}

Home.propTypes = {

};

export default Home;