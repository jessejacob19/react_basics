import React from 'react'

class Text extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      return (
        <div>
         <h1>{this.props.message}</h1>
        </div>
      );
    }
  }
  
export default Text;
  