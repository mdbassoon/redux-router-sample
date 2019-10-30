import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT',multiple:3 });
  }
  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    message:state.message,
    count: state.count
  };
}

export default withRouter(connect(mapStateToProps)(Counter));