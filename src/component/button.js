import React,{Component} from 'react';

class Button extends Component
{
    Add =()=>
    {
        console.log("hello")
    }
    
    render()
    { 
       return( 
       <div>
           <button onClick={this.Add}> Click Me </button>
       </div>); 
    }
}


 export default Button;