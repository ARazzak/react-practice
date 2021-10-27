import React from 'react'
import HookState  from './HookState'

class HookUseEffect extends React.Component {
    constructor(props) {
        
      super(props);
      console.log("constructor load")

    }
  
    componentDidMount() {
        console.log("DidMount load")
    //   document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        console.log("Mount update")
    //   document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
        console.log("Render update")
      return (
          
           <div>
               <HookState />
               
            </div>
        
      );
    }
  }
  export default HookUseEffect
