import React from 'react'

class Button extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div>
         <button onClick={this.props.clickPropsFunction}>My function is outside</button>
        </div>
      );
    }
  }
  
export default Button;
  