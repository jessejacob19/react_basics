import React from 'react';
// First way to import
import { PacmanLoader } from 'react-spinners';
 
class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      number: 10
    }
  }

  increment = () => {
      this.setState({
          number: this.state.number * 2
      })
  }

  render() {
    return (
      <div className='sweet-loading'>
      <button onMouseEnter={this.increment}>Go Nuts</button>
        <PacmanLoader
          sizeUnit={"px"}
          size={this.state.number}
          color={"purple"}
          loading={this.props.loading}
        />
      </div> 
    )
  }
}

export default Spinner;