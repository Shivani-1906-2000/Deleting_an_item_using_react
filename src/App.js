import React,{Component} from 'react';
import './App.css';
import Booklist from './component/Booklist';
import {name,age} from './component/data';

class App extends Component
{
  render()
  {
    return (
      <div> <Booklist/> 
    </div>
    );
  }
}




// function App() {
//   return (
//     <div> <Booklist name={name}
//     age={age}/> 
//     {name} 
//     {age}
//     </div>
//   );
// }

export default App;
