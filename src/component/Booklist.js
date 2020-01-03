import React,{Component} from 'react';
import Book from './Book';
import BookData from './data'
class Booklist extends Component 
{
    state={books:BookData}

     deleteItem=(id)=>
    {
       const sortedbooks=this.state.books.filter(item=>item.id!=id);
       this.setState({
           books:sortedbooks
       });
    }
    render()
    {
        return(
            <div>
            {this.state.books.map((item) => <Book info={item} deleteitem={this.deleteItem} />)};
            
                </div>);
    }

}

export default Booklist;