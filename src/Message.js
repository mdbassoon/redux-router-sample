import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Message extends React.Component {
  changeMessage(e) {
    this.props.dispatch({type:'MESSAGE',message:e.target.value})
  }
  toCounter() {
    this.props.history.push('/counter');
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.changeMessage.bind(this)}/>
        <div onClick={this.toCounter.bind(this)}>See Counter</div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    message: state.message
  };
}

export default withRouter(connect(mapStateToProps)(Message));