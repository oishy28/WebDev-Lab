import React, { Component } from 'react';

class ReloadBtn extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.loading !== prevProps.loading && !this.props.loading) {
      console.log('Button');
    }
  }

  render() {
    const { onClick } = this.props;
    return <button onClick={onClick}>Reload</button>;
  }
}

export default ReloadBtn;
