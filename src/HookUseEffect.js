import React from 'react'
import HookState  from './HookState'

class HookUseEffect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count : 0
      }

    }

    stateUpdate()
    {
      this.setState({
        count: this.state.count+1
      })
     
    }
  
    componentDidMount() {
        console.log("DidMount load")
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        console.log("Mount update")
      document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
        console.log("Render update")
      return (
          
           <div>
             {/* <p></p> */}
            <button onClick={this.stateUpdate.bind(this)} >click</button>

            </div>
        
      );
    }
  }
  export default HookUseEffect
